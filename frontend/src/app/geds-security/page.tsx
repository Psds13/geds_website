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
import Footer from "../components/Footer";

const services = [
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Segurança de Sistemas",
    desc: "Proteção contra invasões, vulnerabilidades e ataques em nível de aplicação.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Segurança de Redes",
    desc: "Monitoramento constante e proteção da infraestrutura de comunicação interna.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Pentest (Teste de Invasão)",
    desc: "Simulação de ataques reais controlados para identificar e corrigir falhas críticas.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Segurança em Nuvem",
    desc: "Proteção avançada de dados e fluxos em AWS, Azure e ambientes híbridos.",
    color: "from-cyan-400 to-blue-400"
  }
];

const diferenciais = [
  { title: "Monitoramento em Tempo Real", icon: <Activity className="w-5 h-5" /> },
  { title: "Soluções Personalizadas", icon: <Cpu className="w-5 h-5" /> },
  { title: "Tecnologia de Ponta", icon: <ShieldCheck className="w-5 h-5" /> },
  { title: "Equipe Especializada", icon: <Lock className="w-5 h-5" /> },
];

const processo = [
  { step: "01", icon: <Search />, title: "Análise do Ambiente", desc: "Mapeamento completo da sua infraestrutura atual." },
  { step: "02", icon: <AlertTriangle />, title: "Identificação de Riscos", desc: "Triagem de vulnerabilidades e pontos de falha." },
  { step: "03", icon: <Cpu />, title: "Implementação de Soluções", desc: "Correção e blindagem de todos os pontos críticos." },
  { step: "04", icon: <Activity />, title: "Monitoramento Contínuo", desc: "Vigilância 24/7 para prevenir novos vetores de ataque." },
];

export default function SecurityPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
        </div>

        {/* Particles / Circuit Background Simulation (SVG Pattern) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 bg-[url('/grid-pattern.png')] bg-repeat" />

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-cyan-500/10 border border-cyan-500/20 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(0,219,255,0.2)]"
          >
            <ShieldCheck className="w-10 h-10 text-cyan-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none"
          >
            Segurança Digital <br />
            <span className="text-cyan-400 italic">Inteligente</span> para Negócios.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Protegemos seus sistemas, dados e infraestrutura com soluções modernas, confiáveis e uma engenharia de elite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contatos" className="px-10 py-5 bg-cyan-500 text-black font-black rounded-full text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-xl hover:shadow-cyan-500/20">
              Solicitar Análise de Segurança
            </Link>
            <Link href="#servicos" className="px-10 py-5 border border-white/10 text-white font-black rounded-full text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Conhecer Soluções
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. NOSSOS SERVIÇOS ─────────────────────────────────────── */}
      <section id="servicos" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-[#050505] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase italic">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-400 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DIFERENCIAIS ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#030303] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest bg-cyan-500/10 px-6 py-2 rounded-full border border-cyan-500/20">
            Diferenciais GEDS Security
          </span>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,219,255,0.1)]">
                {item.icon}
              </div>
              <span className="text-white font-bold text-sm tracking-tight">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. COMO FUNCIONA (PROCESSO) ────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-20 tracking-tighter uppercase italic">Nosso Processo de Blindagem</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block -translate-y-12" />
            
            {processo.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 bg-black border-2 border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative group-hover:border-cyan-500 transition-colors">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center font-black text-xs shadow-lg">
                    {step.step}
                  </div>
                  <div className="text-cyan-400">{step.icon}</div>
                </div>
                <h4 className="text-white font-black text-lg mb-4 tracking-tight uppercase leading-none">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SEÇÃO VISUAL (IMPACTO) ──────────────────────────────── */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-20 pointer-events-none -z-10">
           {/* Placeholder for visual impact background */}
        </div>
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            {/* Glow and Pulse Effects */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse" />
            
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mx-auto">
              <Image 
                src="/GEDS Security.png" 
                alt="Blindagem GEDS" 
                fill 
                className="object-contain drop-shadow-[0_0_50px_rgba(0,219,255,0.4)]"
              />
            </div>
            
            {/* Circuit Lines Decoration (Abstract) */}
            <div className="absolute -inset-20 border border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-40 border border-cyan-500/5 rounded-full animate-[spin_90s_linear_infinite_reverse] pointer-events-none" />
          </motion.div>

          <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-6 drop-shadow-sm">
            Sua segurança é nossa <span className="text-cyan-400">prioridade absoluta</span>
          </h3>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.5em]">Protocolos Globais • Engenharia de Elite</p>
        </div>
      </section>

      {/* ✨ IDEIA EXTRA: STATUS DE SEGURANÇA ──────────────────────── */}
      <section className="py-24 px-6 bg-linear-to-b from-black to-[#050505]">
        <div className="max-w-4xl mx-auto bg-[#080808] border border-cyan-500/20 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="shrink-0">
               <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 relative z-10" />
               </div>
            </div>
            
            <div className="flex-1 space-y-8 text-center md:text-left">
               <div className="space-y-2">
                 <h4 className="text-2xl font-black text-white tracking-tight uppercase italic flex items-center justify-center md:justify-start gap-4">
                   Status do Ecossistema <span className="bg-emerald-500 w-2 h-2 rounded-full animate-ping" />
                 </h4>
                 <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Monitoramento em tempo real ativo</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Sistemas Digitais", status: "🔒 Seguro", color: "text-emerald-400" },
                    { label: "Monitoramento", status: "⚡ Ativo", color: "text-cyan-400" },
                    { label: "Ameaças", status: "🟢 Nenhuma Detectada", color: "text-emerald-400" },
                    { label: "Infraestrutura", status: "🛡️ Blindada", color: "text-blue-400" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl flex justify-between items-center group-hover:bg-white/[0.05] transition-colors">
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</span>
                      <span className={`text-xs font-black uppercase ${stat.color}`}>{stat.status}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DEPOIMENTOS / CONFIANÇA ────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#030303]">
        <div className="max-w-4xl mx-auto text-center italic relative z-10">
          <div className="text-4xl text-cyan-500/30 mb-8 tracking-none">“</div>
           <p className="text-xl md:text-3xl text-gray-400 leading-relaxed font-medium mb-12">
            A GEDS Security melhorou totalmente nossa segurança digital. Implementamos protocolos que nem sabíamos que precisávamos e hoje dormimos tranquilos com monitoramento constante.
           </p>
           <p className="text-white font-black uppercase tracking-[0.2em] italic text-sm">Diretora de Operações • Enterprise Global</p>
        </div>
      </section>

      {/* ── 7. CTA FINAL ───────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#00050a]">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-900/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase italic text-white drop-shadow-lg">
             Proteja sua empresa <span className="text-cyan-400">agora</span>
           </h2>
           <Link 
            href="/contatos" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-cyan-500 text-black font-black rounded-full hover:bg-cyan-400 transition-all shadow-[0_20px_50px_rgba(0,211,255,0.2)] hover:shadow-[0_20px_60px_rgba(0,211,255,0.4)] transform hover:-translate-y-1 uppercase text-sm tracking-widest"
           >
             Falar com um de nossos especialista
             <ArrowRight />
           </Link>
        </div>
      </section>

      {/* ── 8. RODAPÉ ──────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
