"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiActivity, FiZap, FiTrendingUp, FiShield, FiX } from "react-icons/fi";



const METRICS = [
  { label: "Projetos", value: 50, suffix: "+", icon: FiActivity, color: "cyan" },
  { label: "Clientes", value: 30, suffix: "+", icon: FiZap, color: "emerald" },
  { label: "Economia", value: 40, suffix: "%", icon: FiTrendingUp, color: "cyan" },
  { label: "Uptime", value: 99, suffix: "%", icon: FiShield, color: "emerald" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let frame = 0;
          const totalFrames = 60;
          const timer = setInterval(() => {
            frame++;
            setCount(Math.round(target * (frame / totalFrames)));
            if (frame === totalFrames) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

const TYPING_PHRASES = ["Transformação Digital", "Automação Inteligente", "Engenharia de Elite"];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < phrase.length) setText(phrase.slice(0, text.length + 1));
        else setTimeout(() => setIsDeleting(true), 2000);
      } else {
        if (text.length > 0) setText(text.slice(0, -1));
        else { setIsDeleting(false); setIndex((prev) => (prev + 1) % TYPING_PHRASES.length); }
      }
    }, isDeleting ? 30 : 60);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return <span className="text-cyan-400 font-bold">{text}<span className="animate-pulse">|</span></span>;
}

export default function Hero() {
  const [showDiagnostic, setShowDiagnostic] = useState(false);

  return (
    <section id="hero" className="relative bg-background text-foreground min-h-[90vh] flex flex-col items-center justify-center p-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(var(--color-cyan)_1px,transparent_1px),linear-gradient(90deg,var(--color-cyan)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] dark:[mask-image:radial-gradient(circle_at_center,white,transparent_80%)]" />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-10 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm text-cyan-400 text-[10px] uppercase font-bold tracking-widest">
           Engenharia & IA
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight text-cyan-400">
          Sua empresa precisa de<br />
          <TypingText />
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transformamos gargalos operacionais em vantagens tecnológicas de alto desempenho. 
          Resultados reais para empresas que buscam o próximo nível.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <button onClick={() => setShowDiagnostic(true)} className="w-full sm:w-auto px-10 py-5 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 dark:bg-cyan dark:text-black transition-all shadow-xl uppercase text-xs tracking-widest">
            Fazer Diagnóstico
          </button>
          <Link href="/contatos" className="w-full sm:w-auto px-10 py-5 border border-foreground/20 text-foreground rounded-full hover:bg-foreground/5 transition-all font-bold uppercase text-xs tracking-widest">
            Falar com Especialista
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {METRICS.map((m, i) => (
            <div key={i} className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-[2rem]">
              <div className={`text-3xl font-bold mb-1 ${m.color === "cyan" ? "text-cyan-500 dark:text-cyan-400" : "text-emerald-500 dark:text-emerald-400"}`}>
                <AnimatedCounter target={m.value} suffix={m.suffix} />
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showDiagnostic && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[200] flex items-center justify-center p-4 sm:p-6 cursor-default"
            onClick={() => setShowDiagnostic(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 sm:p-12 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              <button onClick={() => setShowDiagnostic(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                <FiX className="text-2xl" />
              </button>

              <h3 className="text-3xl font-bold mb-8 text-cyan-400 uppercase italic">Raio-X Digital</h3>
              
              <div className="space-y-6 mb-10 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
                {[
                  "Seus processos dependem de planilhas?",
                  "Há tarefas manuais repetitivas?",
                  "Sua tecnologia atual é um gargalo?",
                  "Sua equipe perde tempo resolvendo bugs?",
                ].map((q, i) => (
                   <div key={i} className="p-5 bg-white/[0.03] border border-white/5 rounded-2xl">
                      <p className="text-sm font-medium mb-4 text-gray-300">{q}</p>
                      <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-white/5 rounded-xl text-[9px] uppercase font-black hover:bg-cyan-500/20 transition-all border border-white/5">Sim</button>
                        <button className="flex-1 py-3 bg-white/5 rounded-xl text-[9px] uppercase font-black hover:bg-white/10 transition-all border border-white/5">Não</button>
                      </div>
                   </div>
                ))}
              </div>

              <Link href="/contatos" onClick={() => setShowDiagnostic(false)} className="block w-full text-center py-5 bg-cyan-500 text-black font-black rounded-full uppercase text-xs tracking-widest hover:bg-cyan-400 transition-all">
                Receber Diagnóstico Completo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
