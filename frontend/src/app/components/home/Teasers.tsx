"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Shield, FlaskConical, Leaf } from "lucide-react";
import Link from "next/link";

const teasers = [
  {
    id: "nortech-security",
    icon: Shield,
    label: "Segurança",
    title: "Nortech Security",
    desc: "Proteção de dados, auditoria de vulnerabilidades e conformidade com LGPD.",
    href: "/nortech-security",
    cta: "Conhecer solução",
    accent: "blue",
  },
  {
    id: "nortech-lab",
    icon: FlaskConical,
    label: "Laboratório",
    title: "Nortech Lab",
    desc: "Protótipos, experimentos com IA e MVPs em desenvolvimento.",
    href: "/nortech-lab",
    cta: "Ver projetos",
    accent: "cyan",
  },
  {
    id: "green-tech",
    icon: Leaf,
    label: "Sustentabilidade",
    title: "Nortech Green",
    desc: "Tecnologia com foco em eficiência energética e redução de impacto ambiental.",
    href: "/green-tech",
    cta: "Calcular impacto",
    accent: "emerald",
  },
];

const accentStyles: Record<string, { border: string; icon: string; badge: string; btn: string }> = {
  blue: {
    border: "border-blue-500/20 hover:border-blue-500/30",
    icon: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
    badge: "text-blue-600 dark:text-blue-400",
    btn: "border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-500/30",
    icon: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
    badge: "text-cyan-600 dark:text-cyan-400",
    btn: "border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white dark:hover:text-white",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-500/30",
    icon: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    badge: "text-emerald-600 dark:text-emerald-400",
    btn: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white",
  },
};

export default function Teasers() {
  return (
    <section className="max-w-6xl mx-auto py-20 md:py-24 px-6 flex flex-col gap-6">
      {teasers.map((item, i) => {
        const styles = accentStyles[item.accent];
        const Icon = item.icon;
        return (
          <motion.div
            key={item.id}
            id={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`bg-background border ${styles.border} rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${styles.icon}`}>
                  <Icon size={20} />
                </div>
                <span className={`text-xs font-medium uppercase tracking-wide ${styles.badge}`}>
                  {item.label}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/60 max-w-xl leading-relaxed">{item.desc}</p>
            </div>

            <Link href={item.href} className="shrink-0">
              <span
                className={`inline-flex items-center gap-2 border px-6 py-3 rounded-lg font-medium text-sm transition-colors ${styles.btn}`}
              >
                {item.cta}
                <FiArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}
