"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Globe, Users, Cpu, Award } from "lucide-react";

const diferenciais = [
  { icon: <Sparkles className="w-8 h-8" />, title: "IA Integrada", desc: "Soluções com IA de última geração integradas desde a primeira linha de código.", size: "lg" },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Segurança Total", desc: "Dados protegidos com padrões enterprise e criptografia de nível militar.", size: "sm" },
  { icon: <Globe className="w-8 h-8" />, title: "Sustentabilidade", desc: "Tecnologia verde que otimiza recursos e respeita o meio ambiente.", size: "sm" },
  { icon: <Award className="w-8 h-8" />, title: "Elite Tech", desc: "50+ projetos entregues com métricas reais de sucesso e escalabilidade.", size: "sm" },
  { icon: <Users className="w-8 h-8" />, title: "Time Sênior Dedicado", desc: "Suporte especializado por engenheiros sêniores em tempo real.", size: "lg" },
  { icon: <Cpu className="w-8 h-8" />, title: "Next-Gen Stack", desc: "As tecnologias mais performáticas do ecossistema global.", size: "sm" },
];

export default function Diferenciais() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 bg-black relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block mb-4 text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20">
          Vantagem Competitiva
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6 tracking-tight leading-tight">
          Por que líderes escolhem a GEDS Inovação?
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
          Onde a fronteira tecnológica encontra a estratégia de elite.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
        {diferenciais.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`group relative bg-[#050505] border border-white/5 hover:border-cyan-500/30 rounded-[2.5rem] p-10 transition-all duration-500 flex flex-col justify-end overflow-hidden shadow-2xl ${
              item.size === "lg" ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            {/* Background Gradient Detail */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700" />
            
            <div className="absolute top-10 left-10 w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:scale-110 transition-all duration-500 z-20 shadow-lg">
              {item.icon}
            </div>

            <div className="relative z-30">
              <h3 className="text-white font-black text-xl mb-3 tracking-tighter group-hover:text-cyan-400 transition-colors uppercase italic leading-none">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[11px] leading-relaxed font-bold tracking-tight group-hover:text-gray-400 transition-colors uppercase opacity-80">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
