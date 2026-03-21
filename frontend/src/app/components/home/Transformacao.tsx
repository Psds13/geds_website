"use client";

import { motion } from "framer-motion";
import { FiX, FiCheck } from "react-icons/fi";
import { ArrowRightLeft } from "lucide-react";

export default function Transformacao() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 bg-black relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block mb-4 text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20">
          Transformação Digital
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6 tracking-tight leading-tight">
          O Ponto de Inflexão do seu negócio
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed italic font-medium">
          Compare a eficiência operacional antes e depois da implementação GEDS.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center text-cyan-400 z-10 hidden md:flex shadow-xl group-hover:rotate-180 transition-transform duration-1000 scale-105">
           <ArrowRightLeft className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Antes */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0000] border border-red-500/10 rounded-[2rem] p-10 hover:bg-red-950/20 transition-all duration-500 shadow-xl group flex flex-col"
        >
          <div className="flex items-center gap-4 mb-8 border-b border-red-500/10 pb-6 shrink-0">
             <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center shadow-lg">
                <FiX className="w-6 h-6 text-red-500" />
             </div>
            <h3 className="text-xl font-bold text-white tracking-tight uppercase italic opacity-60">Passado Ineficiente</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Processos manuais lentos e erros frequentes",
              "Gargalos que travam a escalabilidade real",
              "Experiência do usuário fragmentada e obsoleta",
              "Equipe técnica sobrecarregada com tarefas mecânicas",
              "Decisões baseadas em intuição, com zero visibilidade",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-500 text-sm leading-relaxed">
                <FiX className="text-red-500 shrink-0 mt-1 w-4 h-4 opacity-40" />
                <span className="group-hover:text-gray-300 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Depois */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#000a05] border border-emerald-500/10 rounded-[2rem] p-10 hover:bg-emerald-950/20 transition-all duration-500 shadow-xl flex flex-col group"
        >
          <div className="flex items-center gap-4 mb-8 border-b border-emerald-500/10 pb-6 shrink-0">
             <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <FiCheck className="w-6 h-6 text-emerald-400" />
             </div>
            <h3 className="text-xl font-bold text-white tracking-tight uppercase italic">Futuro GEDS</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Automação inteligente e precisão absoluta de dados",
              "Infraestrutura elástica pronta para o crescimento",
              "Interfaces ultra-performantes com foco em conversão",
              "Time focado em inovação estratégica de alto valor",
              "Dashboards avançados para decisões analíticas",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-200 text-sm leading-relaxed font-bold tracking-tight">
                <FiCheck className="text-emerald-400 shrink-0 mt-0.5 w-5 h-5 shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
                <span className="group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
