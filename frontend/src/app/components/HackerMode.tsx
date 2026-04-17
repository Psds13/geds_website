"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal } from "lucide-react";

export default function HackerMode() {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ id: string; text: string; color?: string }[]>([
    { id: "1", text: "Nortech OS [Version 1.0.4.15]", color: "text-emerald-500" },
    { id: "2", text: "(c) Nortech Inovação. Todos os direitos reservados.", color: "text-emerald-500" },
    { id: "3", text: "Type 'help' for available commands or 'exit' to close.", color: "text-emerald-300" }
  ]);
  
  // Konami Code / "nortech" listener
  useEffect(() => {
    let keyBuffer = "";
    const secretWord = "nortech";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input field (except when our terminal is open)
      if (active) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);

      if (keyBuffer.includes(secretWord)) {
        setActive(true);
        keyBuffer = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  const handleCommand = (cmd: string) => {
    const c = cmd.trim().toLowerCase();
    const newOut = [...output, { id: Math.random().toString(), text: `C:\\Nortech> ${cmd}` }];

    if (c === "help") {
      newOut.push({ id: Math.random().toString(), text: "help   - Show this message\nabout  - Info about Nortech\nhack   - Initiate system override\nclear  - Clear terminal\nexit   - Close terminal" });
    } else if (c === "about") {
      newOut.push({ id: Math.random().toString(), text: "[Nortech INOVAÇÃO] - Transformando problemas complexos em soluções digitais avançadas usando IA, Cloud e Green Tech.", color: "text-cyan-400" });
    } else if (c === "hack") {
      newOut.push({ id: Math.random().toString(), text: "ACCESS DENIED. Intrusion attempt logged. Sending IP to Nortech Security...", color: "text-red-500" });
    } else if (c === "clear") {
      setOutput([]);
      setInput("");
      return;
    } else if (c === "exit") {
      setActive(false);
      setInput("");
      return;
    } else if (c !== "") {
      newOut.push({ id: Math.random().toString(), text: `'${c}' is not recognized as an internal or external command.`, color: "text-red-400" });
    }
    
    setOutput(newOut);
    setInput("");
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#020202]/95 backdrop-blur-2xl flex flex-col font-mono"
        >
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDApIi8+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4yKSIvPgo8L3N2Zz4=')] opacity-30 mix-blend-overlay" />
          
          <div className="flex items-center justify-between p-4 bg-emerald-950/40 border-b border-emerald-900/50">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-500" />
              <span className="text-emerald-500 font-bold tracking-widest text-sm">Nortech_TERMINAL_ROOT</span>
            </div>
            <button onClick={() => setActive(false)} className="text-emerald-500 hover:text-emerald-300">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto text-emerald-500 text-sm md:text-base space-y-2">
            {output.map((out) => (
              <div key={out.id} className={`whitespace-pre-wrap ${out.color || ''}`}>
                {out.text}
              </div>
            ))}
            <div className="flex items-center mt-2">
              <span className="mr-2">C:\Nortech&gt;</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
                className="flex-1 bg-transparent border-none outline-none text-emerald-400 font-mono caret-emerald-500"
                autoFocus
                spellCheck={false}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
