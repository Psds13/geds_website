/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const Libras = () => {
  useEffect(() => {
    // Tenta inicializar caso o script já tenha carregado antes do componente montar
    const w = window as any;
    if (w.VLibras && typeof w.VLibras.Widget === 'function') {
      new w.VLibras.Widget('https://vlibras.gov.br/app');
    }
  }, []);

  const initWidget = () => {
    const w = window as any;
    if (w.VLibras && typeof w.VLibras.Widget === 'function') {
      new w.VLibras.Widget('https://vlibras.gov.br/app');
    }
  };

  return (
    <>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="lazyOnload"
        onLoad={initWidget}
      />
      <div className="vlibras-container">
        <div {...({ 'vw': 'true' } as any)} className="enabled">
          <div {...({ 'vw-access-button': 'true' } as any)} className="active" />
          <div {...({ 'vw-plugin-wrapper': 'true' } as any)}>
            <div className="vw-plugin-top-wrapper" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Libras;