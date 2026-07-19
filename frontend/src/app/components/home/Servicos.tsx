"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, LineChart, Search, Zap, LayoutGrid } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    id: "desenvolvimento-sob-medida",
    title: "Desenvolvimento Web",
    desc: "Sistemas web e apps sob medida para seu negócio. Do conceito à entrega.",
    icon: Code2,
  },
  {
    id: "cloud-infraestrutura",
    title: "Cloud & Infraestrutura",
    desc: "Migração e gestão de servidores em nuvem. Redução de custos com eficiência.",
    icon: Cloud,
  },
  {
    id: "consultoria-estrategica",
    title: "Consultoria",
    desc: "Análise técnica do seu negócio. Roadmap claro para suas decisões de tecnologia.",
    icon: LineChart,
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    desc: "Dashboards e relatórios que transformam dados em decisões.",
    icon: Search,
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    desc: "Interfaces pensadas no usuário. Design que converte e facilita o uso.",
    icon: LayoutGrid,
  },
  {
    id: "automacao-inteligente",
    title: "Automação",
    desc: "Eliminação de tarefas repetitivas com scripts e integrações inteligentes.",
    icon: Zap,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="max-w-6xl mx-auto py-24 px-6 bg-background">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          O que fazemos
        </h2>
        <p className="text-foreground/50 max-w-xl leading-relaxed">
          Desenvolvimento de software, infraestrutura e consultoria para empresas que precisam de resultados.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((item, i) => (
          <Link href={`/sobre-servicos#${item.id}`} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group h-full bg-background border border-foreground/10 hover:border-foreground/20 rounded-xl p-8 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/60 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-6">
                <item.icon size={20} />
              </div>

              <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed flex-1">{item.desc}</p>

              <div className="mt-6 flex items-center text-foreground/40 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Saiba mais</span>
                <FiArrowRight className="ml-1.5 w-3 h-3" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/servicos"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
        >
          Ver catálogo completo
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
