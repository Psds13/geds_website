"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiAlertCircle,
} from "react-icons/fi";
import SquareReveal from "../components/SquareReveal";

export default function Cadastro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!form.email.trim()) newErrors.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "E-mail inválido";

    if (!form.password) newErrors.password = "Senha é obrigatória";
    else if (form.password.length < 6)
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirmação é obrigatória";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "As senhas não coincidem";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar");
      }

      setSuccess(true);
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      setErrors({
        form:
          error instanceof Error
            ? error.message
            : "Erro ao cadastrar. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-gray-800">
            Cadastro concluído!
          </h2>
          <p className="mt-2 text-gray-600">
            Sua conta foi criada com sucesso. Agora você pode fazer login.
          </p>
          <div className="mt-6">
            <Link
              href="/login"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium inline-block"
            >
              Ir para Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Crie sua conta</h2>
          <p className="text-gray-600 mt-2">Preencha os campos abaixo</p>
        </div>

        {errors.form && (
          <div className="flex items-center gap-2 bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            <FiAlertCircle className="text-lg" />
            <span>{errors.form}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full pl-10 pr-3 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full pl-10 pr-3 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Sua senha"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={`w-full pl-10 pr-10 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Confirmar Senha */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirme sua senha
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                className={`w-full pl-10 pr-10 py-3 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <FiEyeOff className="text-gray-500" /> : <FiEye className="text-gray-500" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Termos */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              Eu concordo com os{" "}
              <Link href="/termos" className="text-blue-600 hover:underline">
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="text-blue-600 hover:underline">
                Política de Privacidade
              </Link>
            </label>
          </div>

          {/* Botão de cadastro */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex justify-center items-center ${loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-blue-600 hover:underline font-medium">
            Faça login
          </Link>
        </p>
      </div>
    </main>
  );
}
