'use client';
import { useEffect, useState } from 'react';

const Libras = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Verificar se o script já existe para evitar carregamentos duplicados
    const existingScript = document.getElementById('vlibras-script');

    const initWidget = () => {
      if (window.VLibras && window.VLibras.Widget) {
        try {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        } catch (e) {
          console.error('Erro ao inicializar VLibras:', e);
        }
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'vlibras-script';
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      initWidget();
    }
  }, []);

  if (!mounted) return null;

  return (
    <div {...{ 'vw': 'true' }} className="enabled fixed top-1/2 -translate-y-1/2 right-0 z-[9999]">
      <div
        {...{ 'vw-access-button': 'true' }}
        className="active"
      />
      <div {...{ 'vw-plugin-wrapper': 'true' }}>
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
};

export default Libras;
