"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Accessibility, 
  X, 
  Type, 
  Contrast, 
  Eye, 
  Megaphone, 
  Brain, 
  Sparkles,
  Search,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

interface AccessibilityItem {
  icon: React.ReactNode;
  label: string;
  action: () => void;
  active?: boolean;
  danger?: boolean;
}

interface AccessibilityCategory {
  title: string;
  items: AccessibilityItem[];
}

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [colorBlindMode, setColorBlindMode] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(100);
  const [isSirenActive, setIsSirenActive] = useState(false);
  const [isMenuFogo, setIsMenuFogo] = useState(false);

  // Apply filters and styles to root
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Font Size
    root.style.fontSize = `${fontSize}%`;

    // Dyslexia Font - Using a clean sans-serif with high weight as fallback
    if (dyslexiaFont) {
       body.classList.add('dyslexia-mode');
       body.style.fontWeight = '700';
       body.style.letterSpacing = '0.05em';
    } else {
       body.classList.remove('dyslexia-mode');
       body.style.fontWeight = '';
       body.style.letterSpacing = '';
    }

    // Color Filters
    let filter = "none";
    if (grayscale) filter = "grayscale(100%)";
    else if (highContrast) filter = "contrast(180%) brightness(110%) saturate(50%)";
    else if (colorBlindMode === 'deuteranopia') filter = "url('#deuteranopia')";
    else if (colorBlindMode === 'protanopia') filter = "url('#protanopia')";
    
    body.style.filter = filter;

    // Menu Fogo Effect (Vibrant borders and pulse)
    if (isMenuFogo) {
      body.classList.add('menu-fogo-active');
    } else {
      body.classList.remove('menu-fogo-active');
    }

  }, [grayscale, highContrast, fontSize, dyslexiaFont, colorBlindMode, isMenuFogo]);

  // Siren Sound Logic (Keep original synthesis)
  useEffect(() => {
    if (isSirenActive) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      gain.gain.value = 0.1;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const interval = setInterval(() => {
        const time = ctx.currentTime;
        osc.frequency.exponentialRampToValueAtTime(800, time + 0.4);
        osc.frequency.exponentialRampToValueAtTime(600, time + 0.8);
      }, 800);
      osc.start();
      return () => {
        clearInterval(interval);
        osc.stop();
        ctx.close();
      };
    }
  }, [isSirenActive]);

  const toggleSiren = () => {
    if (isSirenActive) {
      setIsSirenActive(false);
      setIsMenuFogo(false);
    } else {
      setIsSirenActive(true);
      setIsMenuFogo(true); // Fire Mode automatically activates on SOS
      alert("🚨 ALARME DE PÂNICO GEDS: Sinais sonoros e visuais (MENU FOGO) ativados.");
    }
  };

  const categories: AccessibilityCategory[] = [
    {
      title: "Visão & Tipografia",
      items: [
        { icon: <Type />, label: "Texto +", action: () => setFontSize(prev => Math.min(prev + 10, 150)) },
        { icon: <Type size={14} />, label: "Texto -", action: () => setFontSize(prev => Math.max(prev - 10, 80)) },
        { icon: <Brain />, label: "Modo Disléxico", active: dyslexiaFont, action: () => setDyslexiaFont(!dyslexiaFont) },
        { icon: <Contrast />, label: "Alto Contraste", active: highContrast, action: () => { setHighContrast(!highContrast); setGrayscale(false); setByColorMode(null); } },
      ]
    },
    {
      title: "Modos de Cor (Daltonismo)",
      items: [
        { icon: <Eye />, label: "Escala de Cinza", active: grayscale, action: () => { setGrayscale(!grayscale); setHighContrast(false); } },
        { icon: <Zap />, label: "Deuteranopia", active: colorBlindMode === 'deuteranopia', action: () => setByColorMode('deuteranopia') },
        { icon: <Zap />, label: "Protanopia", active: colorBlindMode === 'protanopia', action: () => setByColorMode('protanopia') },
        { icon: <X size={14} />, label: "Resetar Cores", action: () => setByColorMode(null) },
      ]
    },
    {
      title: "Inovação GEDS (Especial)",
      items: [
        { icon: <Sparkles className="text-cyan-400" />, label: "IA Narrativa", action: () => alert("🤖 IA GEDS: Iniciando varredura semântica para comando de voz...") },
        { icon: <Search />, label: "Lupa de Conteúdo", action: () => alert("🔍 Lupa inteligente ativada na área de foco.") },
        { 
          icon: <Megaphone className={isMenuFogo ? "animate-pulse text-orange-500" : ""} />, 
          label: "MENU FOGO (SOS)", 
          action: toggleSiren,
          danger: true,
          active: isMenuFogo
        },
      ]
    }
  ];

  function setByColorMode(mode: string | null) {
      setColorBlindMode(mode);
      if (mode) setGrayscale(false);
  }

  return (
    <>
      {/* SVG Colorblind Filters */}
      <svg style={{ position: 'absolute', height: 0, width: 0 }}>
        <filter id="deuteranopia">
          <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0, 0.7, 0.3, 0, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0, 0, 1, 0" />
        </filter>
        <filter id="protanopia">
          <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0, 0.558, 0.442, 0, 0, 0, 0, 0.242, 0.758, 0, 0, 0, 0, 0, 1, 0" />
        </filter>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        .dyslexia-mode * {
          font-family: 'Comic Sans MS', cursive, sans-serif !important;
          line-height: 1.6 !important;
        }
        .menu-fogo-active {
          animation: menu-fogo-pulse 1s infinite alternate;
        }
        @keyframes menu-fogo-pulse {
          from { box-shadow: inset 0 0 50px rgba(255, 69, 0, 0.2); border: 2px solid #ff4500; }
          to { box-shadow: inset 0 0 100px rgba(255, 69, 0, 0.5); border: 4px solid #ff0000; }
        }
      `}} />

      {/* Floating Button - Left Side */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed left-6 bottom-24 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${
          isMenuFogo ? "bg-orange-500 text-white animate-bounce" : "bg-cyan-500 text-black"
        }`}
        title="Menu de Acessibilidade"
      >
        <Accessibility size={28} />
      </button>

      {/* Modern Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-start p-6 pointer-events-none">
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className={`w-full max-w-sm border rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden pointer-events-auto flex flex-col max-h-[90vh] transition-colors duration-500 ${
                isMenuFogo ? "bg-orange-950/90 border-orange-500" : "bg-[#0a0a0a] border-white/10"
              }`}
            >
              {/* Header */}
              <div className={`p-8 flex justify-between items-center text-black transition-colors ${
                  isMenuFogo ? "bg-linear-to-r from-orange-500 to-red-600" : "bg-linear-to-r from-cyan-500 to-blue-600"
              }`}>
                <div>
                   <h2 className="text-xl font-black uppercase italic leading-none mb-1 text-[16px]">
                     {isMenuFogo ? "GEDS MENU FOGO" : "GEDS Accessibility"}
                   </h2>
                   <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                     {isMenuFogo ? "SISTEMA DE EMERGÊNCIA ATIVO" : "Tecnologia Inclusiva"}
                   </p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/40 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8 overflow-y-auto">
                {categories.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className={`text-[10px] uppercase font-black tracking-widest pb-2 border-b transition-colors ${
                      isMenuFogo ? "text-orange-400 border-orange-500/20" : "text-cyan-400/60 border-white/5"
                    }`}>
                      {cat.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {cat.items.map((item, itemIdx) => (
                        <button
                          key={itemIdx}
                          onClick={item.action}
                          className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all gap-2 text-center group ${
                            item.active
                              ? isMenuFogo ? "bg-orange-500 border-orange-400 text-white" : "bg-cyan-500 border-cyan-500 text-black"
                              : isMenuFogo ? "bg-orange-900/20 border-orange-500/10 hover:bg-orange-800/40 text-orange-200" : "bg-white/[0.03] border-white/5 hover:bg-white/[0.08]"
                          }`}
                        >
                          <div className={`transition-transform group-hover:scale-110 ${item.danger ? "text-red-400 group-hover:text-white" : ""}`}>
                            {item.icon}
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-tighter">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 bg-black/40 border-t border-white/5 text-center">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest">
                  GEDS Universal Accessibility • 2026
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityMenu;
