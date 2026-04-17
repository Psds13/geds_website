"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, LineChart, Search, Zap, LayoutGrid } from "lucide-react";
import { FiX, FiCheck, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    id: "desenvolvimento-sob-medida",
    title: "Desenvolvimento Sob Medida",
    problem: "Processos manuais que travam o crescimento",
    solution: "Sistemas corporativos de alta performance",
    result: "Até 80% de ganho em produtividade",
    icon: <Code2 className="w-10 h-10" />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "cloud-infraestrutura",
    title: "Cloud & Infraestrutura",
    problem: "Infraestrutura cara e difícil de escalar",
    solution: "Migração para nuvem moderna eficiente",
    result: "50% de redução de custos mensais",
    icon: <Cloud className="w-10 h-10" />,
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: "consultoria-estrategica",
    title: "Consultoria Estratégica",
    problem: "Decisões baseadas em achismos",
    solution: "Roadmap técnico viável com análise real",
    result: "Clareza total para investimentos",
    icon: <LineChart className="w-10 h-10" />,
    color: "from-cyan-400 to-emerald-500",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    problem: "Dados dispersos, sem valor real",
    solution: "Dashboards inteligentes e integração",
    result: "Decisões rápidas baseadas em fatos",
    icon: <Search className="w-10 h-10" />,
    color: "from-indigo-400 to-purple-500",
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    problem: "Interfaces confusas que afastam clientes",
    solution: "Design centrado no usuário e conversão",
    result: "Experiência digital intuitiva e fluida",
    icon: <LayoutGrid className="w-10 h-10" />,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "automacao-inteligente",
    title: "Automação Inteligente",
    problem: "Tarefas repetitivas e erros operacionais",
    solution: "Otimização com IA e robótica de software",
    result: "Eficiência máxima e erro zero",
    icon: <Zap className="w-10 h-10" />,
    color: "from-amber-400 to-orange-500",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="max-w-7xl mx-auto py-24 px-6 bg-background transition-colors">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block mb-4 text-cyan-500 dark:text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20">
          Nossas Soluções
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-500 dark:text-cyan-400 mb-6 tracking-tight leading-tight">
          Cada problema tem uma<br />
          solução Nortech de precisão
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Engenharia disruptiva para desafios complexos. Transformamos gargalos em vantagens competitivas de mercado.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((item, i) => (
          <Link href={`/sobre-servicos#${item.id}`} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group h-full relative bg-background border border-foreground/5 hover:border-cyan-500/20 rounded-3xl p-8 transition-all duration-300 flex flex-col shadow-xl cursor-pointer"
            >
              <div className={`w-14 h-14 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                <div className="text-white dark:text-black scale-110">{item.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors tracking-tight">{item.title}</h3>

              <div className="space-y-4 flex-1">
                <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all">
                  <p className="text-foreground/50 text-[9px] uppercase font-bold tracking-widest mb-1 flex items-center gap-2">
                     <FiX className="text-red-500 dark:text-red-400" /> Gargalo
                  </p>
                  <p className="text-foreground/70 text-xs leading-relaxed">{item.problem}</p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 hover:bg-cyan-500/10 transition-all">
                  <p className="text-cyan-600 dark:text-cyan-400 text-[9px] uppercase font-bold tracking-widest mb-1 flex items-center gap-2">
                     <Zap className="w-3 h-3" /> Solução Nortech
                  </p>
                  <p className="text-foreground/90 text-xs leading-relaxed font-semibold">{item.solution}</p>
                </div>

                <div className="pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <FiCheck className="text-emerald-400 w-4 h-4" />
                    <p className="text-emerald-400 text-base font-bold tracking-tight">{item.result}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center text-cyan-600 dark:text-cyan-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                <span>Saiba Mais Detalhes</span>
                <FiArrowRight className="ml-2" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div className="flex justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Link href="/servicos" className="inline-flex items-center gap-3 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-all duration-300">
          Conheça nosso catálogo de Serviços
          <FiArrowRight className="text-lg" />
        </Link>
      </motion.div>
    </section>
  );
}
