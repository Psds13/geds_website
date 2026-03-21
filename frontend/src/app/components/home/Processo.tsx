"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Zap, ShieldCheck } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const processo = [
  { step: "01", title: "Diagnóstico", desc: "Análise profunda para identificar oportunidades reais de valor técnico.", icon: <Search className="w-8 h-8" /> },
  { step: "02", title: "Estratégia", desc: "Prototipagem de alta fidelidade e validação de fluxos críticos.", icon: <PenTool className="w-8 h-8" /> },
  { step: "03", title: "Engenharia", desc: "Cycles focados em entrega contínua e evolução em tempo real.", icon: <Zap className="w-8 h-8" /> },
  { step: "04", title: "Go-Live", desc: "Testes rigorosos e entrega segura para escalar globalmente.", icon: <ShieldCheck className="w-8 h-8" /> },
];

export default function Processo() {
  return (
    <section id="processo" className="max-w-7xl mx-auto py-24 px-6 bg-black">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <span className="inline-block mb-4 text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20">
          Metodologia de Elite
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6 tracking-tight leading-tight">
          Do desafio à entrega disruptiva em 4 passos
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Transparência, agilidade e excelência técnica integradas em cada milissegundo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {processo.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative bg-[#050505] border border-white/5 hover:border-cyan-500/20 rounded-3xl p-10 text-center transition-all duration-300 shadow-xl overflow-hidden flex flex-col items-center"
          >
            <div className="relative mb-10 w-24 h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:scale-105 transition-all duration-500 z-10 shrink-0">
              <div className="scale-110">{item.icon}</div>
            </div>

            <div className="z-20 relative">
              <h3 className="font-bold text-white text-xl mb-4 tracking-tight group-hover:text-cyan-400 transition-colors uppercase leading-none">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-400 transition-colors px-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="flex justify-center mt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Link href="/processo" className="inline-flex items-center gap-4 border border-cyan-500/20 text-cyan-400 px-10 py-5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all group shadow-xl">
          Visualizar Roadmap Estratégico
          <FiArrowRight className="text-lg transition-transform group-hover:translate-x-2" />
        </Link>
      </motion.div>
    </section>
  );
}
