"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, Wifi, Battery, Home, Lock } from "lucide-react";
import Link from "next/link";

// --- Sub-Components (Apps) ---

function TerminalApp() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ id: string; text: string; color?: string }[]>([
    { id: "1", text: "Nortech OS [Version 2.0.0.1]", color: "text-emerald-500" },
    { id: "2", text: "Copyright (c) Nortech Inovação. All rights reserved.", color: "text-emerald-500" },
    { id: "3", text: "Type 'help' to see available commands.", color: "text-emerald-300" }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const handleCommand = (cmd: string) => {
    const c = cmd.trim().toLowerCase();
    const newOut = [...output, { id: Math.random().toString(), text: `root@nortech:~# ${cmd}` }];

    if (c === "help") {
      newOut.push({ id: Math.random().toString(), text: "AVAILABLE COMMANDS:\n  help      - Show this message\n  about     - Info about Nortech\n  status    - Check system diagnostics\n  clear     - Clean terminal\n  matrix    - Initialize visual protocol" });
    } else if (c === "about") {
      newOut.push({ id: Math.random().toString(), text: "Nortech Inovação: Transformando problemas complexos em soluções digitais avançadas usando IA, Cloud e Green Tech.", color: "text-cyan-400" });
    } else if (c === "status") {
      newOut.push({ id: Math.random().toString(), text: "[OK] All core systems operational.\n[OK] Nortech Security firewall active.\n[OK] Green Tech optimization running at 98% efficiency.", color: "text-emerald-400" });
    } else if (c === "matrix") {
      newOut.push({ id: Math.random().toString(), text: "Waking up in the Matrix...", color: "text-emerald-500 font-bold" });
    } else if (c === "clear") {
      setOutput([]);
      setInput("");
      return;
    } else if (c !== "") {
      newOut.push({ id: Math.random().toString(), text: `bash: ${c}: command not found`, color: "text-red-400" });
    }
    
    setOutput(newOut);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-black/90 p-4 font-mono text-sm md:text-base overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-emerald-900 scrollbar-track-transparent pr-2">
        {output.map((out) => (
          <div key={out.id} className={`whitespace-pre-wrap ${out.color || 'text-emerald-500'}`}>
            {out.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex items-center mt-3 pt-3 border-t border-emerald-900/50 relative group">
        <span className="mr-2 text-emerald-500 font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]">root@nortech:~#</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
          className="flex-1 bg-emerald-950/20 px-2 py-1 rounded border border-transparent focus:border-emerald-500/50 outline-none text-emerald-400 font-mono font-bold caret-emerald-500 w-full focus:ring-0 shadow-[inset_0_0_10px_rgba(16,185,129,0.05)] focus:shadow-[inset_0_0_15px_rgba(16,185,129,0.1),0_0_10px_rgba(16,185,129,0.2)] transition-all"
          autoFocus
          spellCheck={false}
        />
        {/* Blinking block cursor simulation when not typing, just for aesthetic */}
        {!input && (
          <div className="absolute left-[110px] w-2 h-4 bg-emerald-500/50 animate-pulse pointer-events-none" />
        )}
      </div>
    </div>
  );
}

function SecurityApp() {
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    const threats = [
      "Analyzing incoming packets from 192.168.1.104...",
      "[CLEAN] Traffic validated via Nortech Shield.",
      "Scanning internal modules for vulnerabilities...",
      "[OK] 0 vulnerabilities found.",
      "Updating malware signatures...",
      "Connecting to Nortech Security Global Grid...",
      "[SECURE] All systems encrypted at rest.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < threats.length) {
        setLogs(prev => [...prev, threats[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate-950 p-6 text-cyan-500 font-mono text-sm overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Shield size={200} />
      </div>
      <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b border-cyan-800/50 pb-2">
        <Shield className="text-cyan-400" /> Nortech Security Grid
      </h2>
      <div className="flex-1 overflow-y-auto space-y-2">
        {logs.map((log, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            key={idx} 
            className="flex items-start gap-2"
          >
            <span className="text-cyan-700">[{new Date().toLocaleTimeString()}]</span>
            <span className={log?.includes("[OK]") || log?.includes("[CLEAN]") || log?.includes("[SECURE]") ? "text-emerald-400" : "text-cyan-300"}>
              {log}
            </span>
          </motion.div>
        ))}
        {logs.length < 7 && (
          <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
            _
          </motion.div>
        )}
      </div>
    </div>
  );
}

// --- Main OS Page ---

type WindowData = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  isActive: boolean;
  position: { x: number; y: number };
  size: { w: number; h: number };
};

export default function OSPage() {
  const [time, setTime] = useState("");
  const [booting, setBooting] = useState(true);

  const [windows, setWindows] = useState<WindowData[]>([
    {
      id: "terminal",
      title: "Nortech_TERMINAL",
      icon: <Terminal size={18} />,
      content: <TerminalApp />,
      isOpen: true,
      isActive: true,
      position: { x: 50, y: 50 },
      size: { w: 600, h: 400 }
    },
    {
      id: "security",
      title: "Nortech_SECURITY_CORE",
      icon: <Shield size={18} />,
      content: <SecurityApp />,
      isOpen: false,
      isActive: false,
      position: { x: 200, y: 150 },
      size: { w: 500, h: 450 }
    }
  ]);

  useEffect(() => {
    // Fake boot sequence
    const timer = setTimeout(() => setBooting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    return () => clearInterval(interval);
  }, []);

  const openWindow = (id: string) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) return { ...w, isOpen: true, isActive: true };
      return { ...w, isActive: false };
    }));
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false, isActive: false } : w));
  };

  const bringToFront = (id: string) => {
    setWindows(prev => prev.map(w => ({ ...w, isActive: w.id === id })));
  };

  if (booting) {
    return (
      <div className="fixed inset-0 z-[99999] bg-black text-emerald-500 font-mono flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-center"
        >
          <Cpu className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-2xl font-bold mb-2">Nortech OS</h1>
          <p className="text-emerald-700">Inicializando módulos de segurança...</p>
          <div className="w-48 h-1 bg-emerald-950 mt-4 rounded overflow-hidden mx-auto">
            <motion.div 
              className="h-full bg-emerald-500" 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-[#050505] text-white font-sans overflow-hidden select-none">
      {/* Background with Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,219,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,219,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent to-[#020202] pointer-events-none" />

      {/* Desktop Icons */}
      <div className="absolute top-10 left-6 flex flex-col gap-6">
        <button onDoubleClick={() => openWindow('terminal')} onClick={() => bringToFront('terminal')} className="flex flex-col items-center gap-2 group w-24">
          <div className="w-14 h-14 bg-black/60 border border-emerald-500/30 rounded-2xl flex items-center justify-center group-hover:bg-emerald-900/30 group-hover:border-emerald-500/60 transition-all backdrop-blur-md">
            <Terminal className="text-emerald-400 w-7 h-7" />
          </div>
          <span className="text-xs font-mono text-emerald-100/70 group-hover:text-emerald-300 drop-shadow-md bg-black/40 px-2 py-0.5 rounded">Terminal</span>
        </button>

        <button onDoubleClick={() => openWindow('security')} onClick={() => bringToFront('security')} className="flex flex-col items-center gap-2 group w-24">
          <div className="w-14 h-14 bg-black/60 border border-cyan-500/30 rounded-2xl flex items-center justify-center group-hover:bg-cyan-900/30 group-hover:border-cyan-500/60 transition-all backdrop-blur-md">
            <Shield className="text-cyan-400 w-7 h-7" />
          </div>
          <span className="text-xs font-mono text-cyan-100/70 group-hover:text-cyan-300 drop-shadow-md bg-black/40 px-2 py-0.5 rounded">Security</span>
        </button>
      </div>

      {/* Windows Manager */}
      <AnimatePresence>
        {windows.filter(w => w.isOpen).map((win) => (
          <motion.div
            key={win.id}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            drag
            dragMomentum={false}
            onPointerDown={() => bringToFront(win.id)}
            style={{ 
              zIndex: win.isActive ? 50 : 10, 
              position: 'absolute',
              width: win.size.w, 
              height: win.size.h,
              maxWidth: '100vw',
              maxHeight: 'calc(100vh - 48px)',
              left: win.position.x,
              top: win.position.y
            }}
            className={`flex flex-col overflow-hidden rounded-xl border backdrop-blur-2xl shadow-2xl
              ${win.id === 'terminal' ? 'border-emerald-500/30 bg-black/80 shadow-emerald-500/10' : ''}
              ${win.id === 'security' ? 'border-cyan-500/30 bg-slate-950/80 shadow-cyan-500/10' : ''}
            `}
          >
            {/* Window Header */}
            <div className={`p-3 flex items-center justify-between cursor-grab active:cursor-grabbing border-b
              ${win.id === 'terminal' ? 'bg-emerald-950/40 border-emerald-900/50' : ''}
              ${win.id === 'security' ? 'bg-cyan-950/40 border-cyan-900/50' : ''}
            `}>
              <div className="flex items-center gap-2 pointer-events-none">
                <div className={win.id === 'terminal' ? 'text-emerald-500' : 'text-cyan-500'}>
                  {win.icon}
                </div>
                <span className={`text-xs font-bold tracking-widest ${win.id === 'terminal' ? 'text-emerald-500' : 'text-cyan-500'}`}>
                  {win.title}
                </span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => closeWindow(win.id)} className="w-3 h-3 rounded-full bg-red-500/20 hover:bg-red-500 flex items-center justify-center group" />
                <button className="w-3 h-3 rounded-full bg-yellow-500/20 hover:bg-yellow-500 flex items-center justify-center group" />
                <button className="w-3 h-3 rounded-full bg-green-500/20 hover:bg-green-500 flex items-center justify-center group" />
              </div>
            </div>
            {/* Window Content */}
            <div className="flex-1 overflow-hidden relative pointer-events-auto">
              {win.content}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black/60 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between px-4 z-[100]">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg">
            <Home size={16} />
            <span className="text-xs font-bold leading-none origin-bottom mb-0.5">Sair do OS</span>
          </Link>
          <div className="h-5 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-2">
            {windows.filter(w => w.isOpen).map(win => (
              <button 
                key={win.id} 
                onClick={() => bringToFront(win.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 transition-all
                  ${win.isActive ? 'bg-white/10 text-white shadow-inner' : 'text-white/50 hover:bg-white/5 hover:text-white/80'}
                `}
              >
                {win.icon}
                {win.title.split('_')[1] || win.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-white/50">
          <div className="flex items-center gap-3 mr-2">
            <Lock size={14} className="text-cyan-500/70" />
            <Wifi size={14} />
            <Battery size={14} />
          </div>
          <span className="font-mono bg-white/5 px-3 py-1.5 rounded-md leading-none origin-bottom mb-0.5">{time}</span>
        </div>
      </div>
    </div>
  );
}
