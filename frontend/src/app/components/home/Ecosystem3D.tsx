"use client";

import { motion } from "framer-motion";
import { Shield, Gamepad2, FlaskConical, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const nodes = [
  {
    id: "security",
    label: "Nortech Security",
    desc: "Proteção de dados e infraestrutura",
    icon: Shield,
    href: "/nortech-security",
  },
  {
    id: "network",
    label: "Nortech Network",
    desc: "Redes, servidores e conectividade",
    icon: Globe,
    href: "/nortech-network",
  },
  {
    id: "games",
    label: "Nortech Games",
    desc: "Gamificação e experiências interativas",
    icon: Gamepad2,
    href: "/nortech-games",
  },
  {
    id: "lab",
    label: "Nortech Lab",
    desc: "Protótipos e experimentação",
    icon: FlaskConical,
    href: "/nortech-lab",
  },
];

export default function Ecosystem3D() {
  return (
    <section className="py-20 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-3">
            Ecossistema
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Soluções integradas
          </h2>
          <p className="text-foreground/60 max-w-xl leading-relaxed">
            Além do desenvolvimento de software, oferecemos serviços complementares
            de segurança, infraestrutura, games e inovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={node.href}
                className="group block h-full p-6 rounded-xl border border-foreground/10 hover:border-foreground/20 bg-background transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/60 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-4">
                  <node.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{node.label}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed mb-4">{node.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/40 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Acessar
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
