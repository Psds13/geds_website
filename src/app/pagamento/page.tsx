"use client";
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { FiCopy, FiCheck, FiLock, FiCreditCard, FiDollarSign } from 'react-icons/fi';
import { FaBarcode } from 'react-icons/fa';

const PaymentPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState<'boleto' | 'pix' | 'cartao'>('pix');
  const [discountCode, setDiscountCode] = useState('');
  const [installments, setInstallments] = useState(1);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [copiedPixCode, setCopiedPixCode] = useState(false);
  const [pixCode] = useState('00020126360014BR.GOV.BCB.PIX0114+5548999999999520400005303986540515.005802BR5925EMPRESA X LTDA ME6007BRASILIA62070503***6304');

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Formatação do número do cartão
    if (name === 'number') {
      formattedValue = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }

    // Formatação da data de expiração
    if (name === 'expiry') {
      formattedValue = value
        .replace(/^(\d{2})(\d)/g, '$1/$2')
        .replace(/^(\d{2})\/(\d{2})(\d)/g, '$1/$2')
        .substr(0, 5);
    }

    setCardData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const applyDiscount = () => {
    if (!discountCode.trim()) {
      alert('Por favor, insira um código de desconto');
      return;
    }
    alert(`Código de desconto "${discountCode}" aplicado!`);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopiedPixCode(true);
    setTimeout(() => setCopiedPixCode(false), 2000);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <>
      <Head>
        <title>YNNOTHIVIX - Finalizar Pagamento</title>
        <meta name="description" content="Finalize seu pagamento de forma segura" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Finalizar Pagamento</h1>
            <p className="text-lg text-gray-600">Escolha a forma de pagamento e complete sua assinatura</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Resumo do Plano */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Resumo da Assinatura</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-700">Plano Premium</p>
                  <p className="text-gray-500">Assinatura mensal</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600">R$ 49,99/mês</p>
                  <p className="text-sm text-green-600">Economize 20% com o plano anual</p>
                </div>
              </div>
            </div>

            {/* Opções de Pagamento */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Método de Pagamento</h2>

              <div className="grid grid-cols-3 gap-2 mb-8">
                <button
                  onClick={() => setActiveTab('pix')}
                  className={`flex flex-col items-center p-4 rounded-lg border transition-all ${activeTab === 'pix' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-indigo-300'}`}
                >
                  <FiDollarSign className="w-6 h-6 mb-2" />
                  <span>Pix</span>
                </button>
                <button
                  onClick={() => setActiveTab('boleto')}
                  className={`flex flex-col items-center p-4 rounded-lg border transition-all ${activeTab === 'boleto' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-indigo-300'}`}
                >
                  <FaBarcode className="w-6 h-6 mb-2" />
                  <span>Boleto</span>
                </button>
                <button
                  onClick={() => setActiveTab('cartao')}
                  className={`flex flex-col items-center p-4 rounded-lg border transition-all ${activeTab === 'cartao' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-indigo-300'}`}
                >
                  <FiCreditCard className="w-6 h-6 mb-2" />
                  <span>Cartão</span>
                </button>
              </div>

              {/* Formulário de Pix */}
              {activeTab === 'pix' && (
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-800 text-lg flex items-center">
                        <FiDollarSign className="mr-2" /> Pagamento via Pix
                      </h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Instantâneo</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* QR Code */}
                      <div className="flex flex-col items-center">
                        <div className="bg-white p-4 rounded-lg border-2 border-dashed border-indigo-200 mb-4">
                          <div className="w-48 h-48 bg-gray-100 flex items-center justify-center rounded">
                            <div className="text-center">
                              <div className="w-40 h-40 bg-white mx-auto mb-2 grid grid-cols-10 grid-rows-10 gap-0.5 p-1">
                                {Array.from({ length: 100 }).map((_, i) => {
                                  // Use a simple pseudo-random check based on index for SSR, 
                                  // or just dots that only appear on client.
                                  // For a "fake" QR code that doesn't mismatch, we can use a deterministic pattern or state.
                                  const isColored = ((i * 13) % 7) > 2;
                                  return (
                                    <div
                                      key={i}
                                      className={`w-full h-full ${isColored ? 'bg-indigo-600' : 'bg-white'}`}
                                    />
                                  );
                                })}
                              </div>
                              <span className="text-xs text-gray-500">QR Code</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Escaneie este código no seu app bancário</p>
                        </div>
                      </div>

                      {/* Código Copia e Cola */}
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3">Ou copie o código Pix:</h4>
                        <div className="relative">
                          <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-sm break-all">
                            {pixCode}
                          </div>
                          <button
                            onClick={copyPixCode}
                            className="absolute top-2 right-2 p-2 bg-indigo-100 rounded-md hover:bg-indigo-200 transition-colors"
                            title="Copiar código Pix"
                          >
                            {copiedPixCode ? (
                              <FiCheck className="text-green-600" />
                            ) : (
                              <FiCopy className="text-indigo-600" />
                            )}
                          </button>
                        </div>
                        <button
                          onClick={copyPixCode}
                          className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
                        >
                          {copiedPixCode ? 'Código copiado!' : 'Copiar código Pix'}
                        </button>

                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-blue-700">
                                O pagamento via Pix é processado instantaneamente. Após a confirmação, sua assinatura será ativada automaticamente.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Formulário de Boleto */}
              {activeTab === 'boleto' && (
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-800 text-lg flex items-center">
                        <FaBarcode className="mr-2" /> Boleto Bancário
                      </h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Até 3 dias úteis</span>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                      <div className="max-w-xs mx-auto">
                        <div className="bg-gray-100 p-4 rounded">
                          <div className="h-8 bg-gray-300 mb-2"></div>
                          <div className="h-8 bg-gray-300 mb-2"></div>
                          <div className="h-8 bg-gray-300 mb-2"></div>
                          <div className="h-8 bg-gray-300"></div>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">O boleto será gerado após a confirmação da compra</p>
                      </div>
                    </div>

                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            Sua assinatura só será ativada após a confirmação do pagamento do boleto, o que pode levar até 3 dias úteis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Formulário de Cartão de Crédito */}
              {activeTab === 'cartao' && (
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-gray-800 text-lg flex items-center">
                        <FiCreditCard className="mr-2" /> Cartão de Crédito
                      </h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Pagamento recorrente</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Número do Cartão</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            name="number"
                            value={cardData.number}
                            onChange={handleCardInputChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiCreditCard className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Nome no Cartão</label>
                        <input
                          type="text"
                          id="cardName"
                          name="name"
                          value={cardData.name}
                          onChange={handleCardInputChange}
                          placeholder="Como escrito no cartão"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Validade</label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="expiry"
                            value={cardData.expiry}
                            onChange={handleCardInputChange}
                            placeholder="MM/AA"
                            maxLength={5}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="cardCvv"
                              name="cvv"
                              value={cardData.cvv}
                              onChange={handleCardInputChange}
                              placeholder="123"
                              maxLength={4}
                              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <FiLock className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="installments" className="block text-sm font-medium text-gray-700 mb-1">Parcelamento</label>
                        <select
                          id="installments"
                          value={installments}
                          onChange={(e) => setInstallments(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                            <option key={num} value={num}>
                              {num}x de {formatCurrency(15 / num)} {num > 1 ? '(sem juros)' : ''}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center space-x-2 bg-white p-3 rounded-lg border border-gray-200">
                      <FiLock className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">Pagamento seguro criptografado</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Cupom de Desconto */}
              <div className="mt-8">
                <label htmlFor="discountCode" className="block text-sm font-medium text-gray-700 mb-1">Cupom de Desconto</label>
                <div className="flex">
                  <input
                    type="text"
                    id="discountCode"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Digite seu cupom"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    onClick={applyDiscount}
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-r-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Aplicar
                  </button>
                </div>
              </div>

              {/* Resumo do Pagamento */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800 text-lg mb-4">Resumo do Pagamento</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assinatura mensal</span>
                    <span className="font-medium">R$ 49,99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Desconto</span>
                    <span className="font-medium text-green-600">- R$ 0,00</span>
                  </div>
                  <div className="border-t border-gray-200 my-3"></div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Total a pagar</span>
                    <span className="font-bold text-xl text-indigo-600">R$ 49,99</span>
                  </div>
                  {installments > 1 && activeTab === 'cartao' && (
                    <div className="text-sm text-gray-500 text-right">
                      {installments} parcelas de {formatCurrency(15 / installments)}
                    </div>
                  )}
                </div>
              </div>

              {/* Termos e Condições */}
              <div className="mt-6 flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Eu concordo com os <a href="#" className="text-indigo-600 hover:text-indigo-500 underline">Termos de Serviço</a> e <a href="#" className="text-indigo-600 hover:text-indigo-500 underline">Política de Privacidade</a> da YNNOTHIVIX
                </label>
              </div>

              {/* Botão de Finalizar */}
              <div className="mt-8">
                <button
                  disabled={!termsAccepted}
                  className={`w-full py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${termsAccepted ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  {activeTab === 'pix' && 'Gerar Código Pix'}
                  {activeTab === 'boleto' && 'Gerar Boleto Bancário'}
                  {activeTab === 'cartao' && 'Confirmar Pagamento'}
                </button>
              </div>

              {/* Segurança */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-6">
                    <img
                      src="/visa.png"
                      alt="Visa"
                      className="h-8 opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <img
                      src="/mastercard.png"
                      alt="Mastercard"
                      className="h-8 opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <img
                      src="https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1.png"
                      alt="Elo"
                      className="h-8 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiLock className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Pagamento 100% seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;