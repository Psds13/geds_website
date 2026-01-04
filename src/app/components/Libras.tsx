'use client';
import { useEffect } from 'react';

const Libras = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div {...{ 'vw': 'true' }} className="enabled fixed bottom-6 right-28 z-[9999]" suppressHydrationWarning>
      <div
        {...{ 'vw-access-button': 'true' }}
        className="active rounded-full shadow-[0_0_15px_rgba(0,219,255,0.4)] border border-cyan/30 bg-black/50 backdrop-blur-sm transition-transform hover:scale-110"
      />
      <div {...{ 'vw-plugin-wrapper': 'true' }}>
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
};

export default Libras;
