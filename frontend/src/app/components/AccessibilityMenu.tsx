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
  RotateCcw,
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

    // Dyslexia Font
    if (dyslexiaFont) {
       body.classList.add('dyslexia-mode');
    } else {
       body.classList.remove('dyslexia-mode');
    }

    // Color Filters
    let filter = "none";
    if (grayscale) filter = "grayscale(100%)";
    else if (highContrast) filter = "contrast(180%) brightness(110%) saturate(50%)";
    else if (colorBlindMode === 'deuteranopia') filter = "url('#deuteranopia')";
    else if (colorBlindMode === 'protanopia') filter = "url('#protanopia')";
    
    body.style.filter = filter;

    // Menu Fogo Effect
    if (isMenuFogo) {
      body.classList.add('menu-fogo-active');
    } else {
      body.classList.remove('menu-fogo-active');
    }

  }, [grayscale, highContrast, fontSize, dyslexiaFont, colorBlindMode, isMenuFogo]);

  // Alarme Sonoro
  useEffect(() => {
    if (isSirenActive) {
      const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      gain.gain.value = 0.05;
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
      setIsMenuFogo(true);
      alert("🚨 ALARME GEDS ATIVADO: O sistema visual e sonoro de emergência está em execução.");
    }
  };

  const resetAll = () => {
    setGrayscale(false);
    setHighContrast(false);
    setDyslexiaFont(false);
    setColorBlindMode(null);
    setFontSize(100);
    setIsSirenActive(false);
    setIsMenuFogo(false);
  };

  const categories: AccessibilityCategory[] = [
    {
      title: "Visão & Tipografia",
      items: [
        { icon: <Type className="w-5 h-5" />, label: "Aumentar Texto", action: () => setFontSize(prev => Math.min(prev + 10, 150)) },
        { icon: <Type className="w-4 h-4" />, label: "Reduzir Texto", action: () => setFontSize(prev => Math.max(prev - 10, 80)) },
        { icon: <Brain className="w-5 h-5" />, label: "Modo Disléxico", active: dyslexiaFont, action: () => setDyslexiaFont(!dyslexiaFont) },
        { icon: <Contrast className="w-5 h-5" />, label: "Alto Contraste", active: highContrast, action: () => { setHighContrast(!highContrast); setGrayscale(false); setColorBlindMode(null); } },
      ]
    },
    {
      title: "Filtros Cromáticos",
      items: [
        { icon: <Eye className="w-5 h-5" />, label: "Escala Cinza", active: grayscale, action: () => { setGrayscale(!grayscale); setHighContrast(false); } },
        { icon: <Zap className="w-5 h-5" />, label: "Deuteranopia", active: colorBlindMode === 'deuteranopia', action: () => setColorBlindMode(colorBlindMode === 'deuteranopia' ? null : 'deuteranopia') },
        { icon: <Zap className="w-5 h-5" />, label: "Protanopia", active: colorBlindMode === 'protanopia', action: () => setColorBlindMode(colorBlindMode === 'protanopia' ? null : 'protanopia') },
        { icon: <RotateCcw className="w-4 h-4" />, label: "Resetar Tudo", action: resetAll },
      ]
    },
    {
      title: "Recursos Especiais GEDS",
      items: [
        { icon: <Sparkles className="w-5 h-5 text-cyan-400" />, label: "IA Narrativa", action: () => alert("🤖 IA GEDS: Funcionalidade em desenvolvimento. Em breve, narração semântica avançada.") },
        { icon: <Search className="w-5 h-5" />, label: "Zoom Focus", action: () => alert("🔍 Lupa inteligente ativada na área de interação.") },
        { 
          icon: <Megaphone className={`w-5 h-5 ${isMenuFogo ? "animate-bounce text-white" : "text-orange-500"}`} />, 
          label: "MENU FOGO", 
          action: toggleSiren,
          danger: true,
          active: isMenuFogo
        },
      ]
    }
  ];

  return (
    <>
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
          font-family: 'OpenDyslexic', 'Comic Sans MS', cursive, sans-serif !important;
          line-height: 1.8 !important;
          letter-spacing: 0.1em !important;
          word-spacing: 0.2em !important;
        }
        .menu-fogo-active {
          animation: geds-sos-pulse 1.5s infinite alternate;
        }
        @keyframes geds-sos-pulse {
          from { border: 4px solid #ff4500; box-shadow: inset 0 0 40px rgba(255, 69, 0, 0.3); }
          to { border: 4px solid #ff0000; box-shadow: inset 0 0 80px rgba(255, 0, 0, 0.6); }
        }
      `}} />

      {/* Floating Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed left-8 bottom-8 z-50 w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all duration-500 backdrop-blur-xl border ${
          isMenuFogo 
            ? "bg-red-600 border-red-400 text-white animate-pulse" 
            : "bg-white/10 border-white/20 text-white hover:border-cyan-400/50"
        }`}
      >
        <Accessibility size={32} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-start p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -100, opacity: 0, scale: 0.95 }}
              className={`w-full max-w-sm rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden flex flex-col max-h-[90vh] border transition-colors duration-700 ${
                isMenuFogo ? "bg-red-950/90 border-red-500" : "bg-[#0a0a0a] border-white/10"
              }`}
            >
              {/* Premium Header */}
              <div className={`p-10 relative overflow-hidden flex justify-between items-center transition-colors ${
                  isMenuFogo ? "bg-linear-to-br from-red-600 to-orange-700" : "bg-linear-to-br from-cyan-600 to-blue-700"
              }`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -mr-10 -mt-10 rounded-full" />
                <div className="relative z-10">
                   <h2 className="text-xl font-black uppercase italic tracking-tighter text-white leading-none mb-2">
                     {isMenuFogo ? "SISTEMA SOS GEDS" : "GEDS Access"}
                   </h2>
                   <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                       Tecnologia Humana
                     </p>
                   </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 bg-black/20 hover:bg-black/40 text-white rounded-2xl flex items-center justify-center transition-all relative z-10"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Grid Content */}
              <div className="p-10 space-y-12 overflow-y-auto custom-scrollbar">
                {categories.map((cat, idx) => (
                  <div key={idx} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`h-px flex-1 ${isMenuFogo ? "bg-red-500/20" : "bg-white/5"}`} />
                      <h3 className={`text-[10px] uppercase font-black tracking-[0.4em] transition-colors ${
                        isMenuFogo ? "text-red-400" : "text-cyan-400"
                      }`}>
                        {cat.title}
                      </h3>
                      <div className={`h-px flex-1 ${isMenuFogo ? "bg-red-500/20" : "bg-white/5"}`} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {cat.items.map((item, itemIdx) => (
                        <motion.button
                          key={itemIdx}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={item.action}
                          className={`flex flex-col items-center justify-center p-6 rounded-[2rem] border transition-all gap-4 text-center group relative overflow-hidden ${
                            item.active
                              ? isMenuFogo 
                                ? "bg-red-500 border-red-400 text-white shadow-[0_10px_30px_rgba(239,68,68,0.3)]" 
                                : "bg-cyan-500 border-cyan-400 text-black shadow-[0_10px_30px_rgba(6,182,212,0.3)]"
                              : isMenuFogo 
                                ? "bg-red-900/20 border-red-500/20 hover:border-red-500/50 text-red-200" 
                                : "bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.06] text-gray-400 hover:text-white"
                          }`}
                        >
                          <div className={`transition-all duration-500 group-hover:scale-110 ${item.danger ? "text-red-500 animate-pulse" : ""}`}>
                            {item.icon}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                            {item.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Footer */}
              <div className={`p-8 bg-black/40 border-t border-white/5 flex flex-col items-center gap-4`}>
                 <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-1 h-1 rounded-full ${isMenuFogo ? "bg-red-500/30" : "bg-white/10"}`} />
                    ))}
                 </div>
                 <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.5em]">
                   GEDS Universal Interface
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
