'use client';

import { useEffect, useCallback } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => { init: () => void; };
    };
  }
}

const Libras = () => {
  const initVLibras = useCallback(() => {
    if (window.VLibras && typeof window.VLibras.Widget === 'function') {
      const wrapper = document.querySelector('[vw-plugin-wrapper]');
      const hasIframe = wrapper?.querySelector('iframe');

      if (wrapper && !hasIframe) {
        try {
          console.log("Tentando inicializar VLibras...");
          new window.VLibras.Widget('https://vlibras.gov.br/app');
        } catch (e) {
          console.error("Erro ao inicializar VLibras:", e);
        }
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(initVLibras, 500);
    const interval = setInterval(initVLibras, 3000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [initVLibras]);

  return (
    <>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="lazyOnload"
        onReady={initVLibras}
      />
      <div data-vw="true" className="enabled">
        <div data-vw-access-button="true" className="active" />
        <div data-vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </>
  );
};

export default Libras;


