/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';

const Libras = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    const scriptSrc = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    const initWidget = () => {
      const w = window as any;
      if (w.VLibras && typeof w.VLibras.Widget === 'function') {
        new w.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        initWidget();
      };
      document.body.appendChild(script);
    } else {
      // Script já existe, tenta iniciar se ainda não foi
      initWidget();
    }
  }, []);

  return (
    // Wrapper apenas para garantir z-index, sem forçar posição (o VLibras cuida disso)
    <div className="vlibras-container">
      <div {...({ 'vw': 'true' } as any)} className="enabled">
        <div {...({ 'vw-access-button': 'true' } as any)} className="active" />
        <div {...({ 'vw-plugin-wrapper': 'true' } as any)}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </div>
  );
};

export default Libras;