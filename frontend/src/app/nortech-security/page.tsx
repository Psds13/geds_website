"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Network,
  Cpu,
  Cloud,
  Search,
  AlertTriangle,
  CheckCircle2,
  Activity,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Lock,
    title: "Segurança de sistemas",
    desc: "Proteção contra invasões, vulnerabilidades e ataques em nível de aplicação.",
  },
  {
    icon: Network,
    title: "Segurança de redes",
    desc: "Monitoramento e proteção da infraestrutura de comunicação interna.",
  },
  {
    icon: Cpu,
    title: "Pentest",
    desc: "Testes de invasão controlados para identificar e corrigir falhas críticas.",
  },
  {
    icon: Cloud,
    title: "Segurança em nuvem",
    desc: "Proteção de dados e fluxos em AWS, Azure e ambientes híbridos.",
  },
];

const diferenciais = [
  { title: "Monitoramento em tempo real", icon: Activity },
  { title: "Soluções personalizadas", icon: Cpu },
  { title: "Tecnologia atualizada", icon: ShieldCheck },
  { title: "Equipe especializada", icon: Lock },
];

const processo = [
  { step: "01", icon: Search, title: "Análise do ambiente", desc: "Mapeamento completo da infraestrutura atual." },
  { step: "02", icon: AlertTriangle, title: "Identificação de riscos", desc: "Triagem de vulnerabilidades e pontos de falha." },
  { step: "03", icon: Cpu, title: "Implementação", desc: "Correção e reforço dos pontos críticos identificados." },
  { step: "04", icon: Activity, title: "Monitoramento contínuo", desc: "Vigilância 24/7 para prevenir novos vetores de ataque." },
];

export default function SecurityPage() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-6 border-b border-foreground/5">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-8"
          >
            <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Segurança digital para empresas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Protegemos seus sistemas, dados e infraestrutura com auditorias,
            pentest e monitoramento contínuo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contatos"
              className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Solicitar análise
            </Link>
            <Link
              href="#servicos"
              className="px-8 py-3.5 border border-foreground/20 rounded-lg font-medium text-sm hover:bg-foreground/5 transition-colors"
            >
              Ver soluções
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-3">
              Serviços
            </p>
            <h2 className="text-3xl font-bold tracking-tight">O que oferecemos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-background border border-foreground/10 hover:border-foreground/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                  <item.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-24 px-6 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Por que a Nortech Security</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {diferenciais.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-foreground/10 bg-background"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <item.icon size={18} />
                </div>
                <span className="text-foreground font-medium text-sm">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Como funciona</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Processo estruturado em 4 etapas, do diagnóstico ao monitoramento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processo.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6 rounded-xl border border-foreground/10"
              >
                <div className="w-12 h-12 rounded-full border border-blue-500/20 flex items-center justify-center mx-auto mb-4 relative">
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    {step.step}
                  </span>
                  <step.icon size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-20 px-6 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8">
            <Image
              src="/Nortech Security.png"
              alt="Nortech Security"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Segurança como prioridade
          </h3>
          <p className="text-foreground/60 max-w-lg">
            Protocolos de proteção adaptados ao porte e ao setor da sua empresa.
          </p>
        </div>
      </section>

      {/* Status */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto border border-foreground/10 rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-1">
                  Monitoramento ativo
                </h4>
                <p className="text-foreground/50 text-sm">
                  Acompanhamento contínuo da infraestrutura protegida.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Sistemas digitais", status: "Protegido" },
                  { label: "Monitoramento", status: "Ativo" },
                  { label: "Ameaças", status: "Nenhuma detectada" },
                  { label: "Infraestrutura", status: "Reforçada" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-foreground/[0.02] border border-foreground/10 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-sm text-foreground/60">{stat.label}</span>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {stat.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 bg-foreground/[0.02] border-t border-foreground/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Proteja sua empresa
          </h2>
          <p className="text-foreground/60 mb-8 max-w-lg mx-auto">
            Entre em contato para uma análise inicial da sua infraestrutura.
          </p>
          <Link
            href="/contatos"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Falar com especialista
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
