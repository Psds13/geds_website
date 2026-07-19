"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Entendemos o seu problema e mapeamos o que precisa ser resolvido.",
    icon: Search,
  },
  {
    step: "02",
    title: "Planejamento",
    desc: "Definimos a solução e criamos um protótipo para validação.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Desenvolvimento",
    desc: "Entregas em ciclos curtos para ajustes rápidos.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Entrega",
    desc: "Testes, deploy e suporte pós-lançamento.",
    icon: ShieldCheck,
  },
];

export default function Processo() {
  return (
    <section id="processo" className="max-w-6xl mx-auto py-24 px-6 bg-background">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Como trabalhamos
        </h2>
        <p className="text-foreground/50 max-w-xl leading-relaxed">
          Processo simples em 4 etapas. Sem burocracia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-background border border-foreground/10 rounded-xl p-8"
          >
            <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/40 mb-6">
              <item.icon size={20} />
            </div>

            <span className="text-xs text-foreground/30 font-mono">{item.step}</span>
            <h3 className="text-foreground font-semibold text-lg mt-1 mb-3">{item.title}</h3>
            <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/processo"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
        >
          Conheça nossa metodologia
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
