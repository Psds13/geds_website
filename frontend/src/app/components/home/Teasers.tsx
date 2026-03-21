"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Teasers() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 bg-background transition-colors flex flex-col gap-16">
      {/* ── GEDS SECURITY TEASER ── */}
      <motion.div
        id="geds-security"
        className="relative bg-background border border-blue-500/10 p-8 md:p-16 rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-12 group"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-3/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-2xl">
              🛡️
            </div>
            <span className="text-blue-600 dark:text-blue-400 font-bold bg-blue-500/10 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest border border-blue-500/20">
              Cybersecurity de Elite
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 tracking-tight leading-tight">
             GEDS Security
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl leading-relaxed mb-10">
            Proteção digital avançada para ativos críticos. Da análise de vulnerabilidades à blindagem total da infraestrutura.
          </p>
        </div>

        <Link href="/geds-security" className="w-full md:w-auto">
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }}
            className="inline-flex items-center gap-3 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold px-10 py-5 rounded-full shadow-lg text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white dark:hover:text-black transition-all"
          >
            Blindar meu Negócio
            <FiArrowRight className="text-xl" />
          </motion.div>
        </Link>
      </motion.div>

      {/* ── GEDS LAB TEASER ── */}
      <motion.div
        id="geds-lab"
        className="relative bg-background border border-cyan-500/10 p-8 md:p-16 rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-12 group"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-3/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-2xl">
              🧪
            </div>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/10 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest border border-cyan-500/20">
              Laboratório de Inovação
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-6 tracking-tight leading-tight">
            Explore o GEDS Lab
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl leading-relaxed mb-10">
            O ambiente onde ideias se transformam em tecnologia real. Explore nossos <strong>protótipos interativos</strong> e 
            <strong> experimentos com IA</strong>.
          </p>
        </div>

        <Link href="/geds-lab" className="w-full md:w-auto">
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }}
            className="inline-flex items-center gap-3 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-bold px-10 py-5 rounded-full shadow-lg text-sm uppercase tracking-widest hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-all"
          >
            Iniciar Exploração
            <FiArrowRight className="text-xl" />
          </motion.div>
        </Link>
      </motion.div>

      {/* ── GREEN TECH TEASER ── */}
      <motion.div
        id="green-tech"
        className="relative bg-background border border-emerald-500/10 p-8 md:p-16 rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-12 group"
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-3/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-2xl">
              🌱
            </div>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest border border-emerald-500/20">
              Inovação Sustentável
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-6 tracking-tight leading-tight">
            GEDS Green Tech
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl leading-relaxed mb-10">
            Tecnologia que cuida do planeta. Meça o impacto ambiental real das soluções digitais e monitore a redução de CO₂.
          </p>
        </div>

        <Link href="/green-tech" className="w-full md:w-auto">
          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }}
            className="inline-flex items-center gap-3 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold px-10 py-5 rounded-full shadow-lg text-sm uppercase tracking-widest hover:bg-emerald-500 hover:text-white dark:hover:text-black transition-all"
          >
            Ver Impacto Real
            <FiArrowRight className="text-xl" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
