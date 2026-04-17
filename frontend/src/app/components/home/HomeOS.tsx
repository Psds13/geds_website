"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function HomeOS() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ id: string; text: string; color?: string }[]>([
    { id: "1", text: "Nortech OS [Version 2.0.0.1]", color: "text-emerald-500" },
    { id: "2", text: "Copyright (c) Nortech Inovação. All rights reserved.", color: "text-emerald-500" },
    { id: "3", text: "Type 'help' to see available commands.", color: "text-emerald-300" }
  ]);
  const isFirstMount = useRef(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
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
    <div className="py-24 bg-black relative overflow-hidden flex flex-col items-center justify-center px-4 border-b border-white/5" id="os">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent to-[#020202] pointer-events-none" />
      
      <div className="mb-8 text-center relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3 text-white mb-2">
            <Terminal className="text-emerald-500 w-8 h-8" /> Nortech OS Terminal
          </h2>
          <p className="text-emerald-500/80 uppercase tracking-widest text-xs md:text-sm font-bold">
            ACESSO CONSOLE DE SISTEMA
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl h-[450px] border border-emerald-500/30 bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.1)] rounded-xl relative z-10 flex flex-col font-mono text-sm md:text-base overflow-hidden backdrop-blur-md">
        {/* Header */}
        <div className="p-3 flex items-center gap-2 border-b bg-emerald-950/40 border-emerald-900/50">
          <Terminal size={14} className="text-emerald-500" />
          <span className="text-xs font-bold tracking-widest text-emerald-500">Nortech_TERMINAL_ROOT</span>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 text-emerald-500" />
          </div>
        </div>

        {/* Console Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-emerald-900/50 scrollbar-track-transparent">
          {output.map((out) => (
            <div key={out.id} className={`whitespace-pre-wrap ${out.color || 'text-emerald-500'}`}>
              {out.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input Area */}
        <div className="flex items-center px-4 pb-4 pt-3 border-t border-emerald-900/50 bg-black/40 relative group">
          <span className="mr-2 text-emerald-500 font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)] mt-0.5">root@nortech:~#</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
            className="flex-1 bg-emerald-950/20 px-2 py-1.5 rounded border border-transparent focus:border-emerald-500/50 outline-none text-emerald-400 font-mono font-bold caret-emerald-500 w-full focus:ring-0 shadow-[inset_0_0_10px_rgba(16,185,129,0.05)] focus:shadow-[inset_0_0_15px_rgba(16,185,129,0.1),0_0_10px_rgba(16,185,129,0.2)] transition-all"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="mt-8 text-center relative z-10 flex flex-col items-center gap-3">
        <p className="text-emerald-500/60 text-sm font-mono">Deseja explorar o sistema completo e acessar todas as ferramentas de diagnóstico?</p>
        <Link 
          href="/os" 
          className="bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
        >
          <Terminal size={16} /> Acessar Nortech OS Completo
        </Link>
      </div>
    </div>
  );
}
