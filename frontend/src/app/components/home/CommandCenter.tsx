"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Leaf, Code2, Globe } from "lucide-react";

const metrics = [
  { id: 1, label: "Ameaças Bloqueadas (24h)", value: 12405, suffix: "+", icon: Shield, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { id: 2, label: "CO2 Economizado", value: 840, suffix: "kg", icon: Leaf, color: "text-green-400", bg: "bg-green-500/10" },
  { id: 3, label: "Linhas de Código", value: 1.4, suffix: " Mi", icon: Code2, color: "text-purple-400", bg: "bg-purple-500/10" },
  { id: 4, label: "Nodes de Rede Ativos", value: 135, suffix: "", icon: Globe, color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;
    const totalDuration = 2000;
    const incrementTime = 30;
    const steps = totalDuration / incrementTime;
    const increment = (end - start) / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [to]);

  const display = to % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString('pt-BR');

  return <span>{display}{suffix}</span>;
}

export default function CommandCenter() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-red-500 font-black bg-red-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.4em] border border-red-500/20">LIVE DATA \\</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            GEDS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Command Center</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-4">Monitoramento Global de Impacto e Eficiência</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div 
              key={m.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full opacity-20 transition-opacity group-hover:opacity-50 ${m.bg.replace('/10', '')}`} />
              
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg ${m.bg}`}>
                <m.icon className={`w-6 h-6 ${m.color}`} />
              </div>
              
              <h3 className="text-4xl font-black text-white tracking-tighter mb-2">
                <Counter to={m.value} suffix={m.suffix} />
              </h3>
              
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
