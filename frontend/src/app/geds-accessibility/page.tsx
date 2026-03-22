"use client";

import { motion } from "framer-motion";
import { 
  Accessibility, 
  Type, 
  Contrast, 
  Brain, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Eye,
  MousePointer2,
  Volume2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const features = [
  {
    icon: <Type className="w-8 h-8" />,
    title: "Tipografia Adaptativa",
    desc: "Ajuste instantâneo do tamanho da fonte para garantir uma leitura confortável e personalizada em qualquer dispositivo.",
    color: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Modo Disléxico",
    desc: "Utilizamos fontes e espaçamentos validados cientificamente para facilitar a leitura por pessoas com dislexia.",
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/20"
  },
  {
    icon: <Contrast className="w-8 h-8" />,
    title: "Alto Contraste",
    desc: "Paletas de cores otimizadas em tempo real para garantir máxima legibilidade e reduzir drasticamente a fadiga ocular.",
    color: "from-blue-600 to-blue-400",
    shadow: "shadow-blue-600/20"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Filtros Cromáticos",
    desc: "Modos específicos para Deuteranopia e Protanopia, garantindo que a cor nunca seja uma barreira para a informação.",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-orange-500/20"
  }
];

const benefits = [
  {
    title: "Navegação por Voz",
    desc: "Controle total da interface através de comandos de voz inteligentes.",
    icon: <Volume2 className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Foco Visual",
    desc: "Indicadores de foco aprimorados para usuários de teclado.",
    icon: <MousePointer2 className="w-6 h-6 text-purple-400" />
  },
  {
    title: "IA Semântica",
    desc: "Leitores de tela aprimorados com inteligência artificial.",
    icon: <Brain className="w-6 h-6 text-indigo-400" />
  }
];

export default function AccessibilityPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-cyan-500 selection:text-black">
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full opacity-40 dark:opacity-100" />
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full opacity-40 dark:opacity-100" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="w-24 h-24 bg-linear-to-br from-purple-500/20 to-cyan-500/20 border border-foreground/10 rounded-[2rem] flex items-center justify-center mx-auto mb-12 backdrop-blur-xl shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <Accessibility className="w-12 h-12 text-purple-400 relative z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] uppercase italic text-foreground">
              GEDS <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Accessibility</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium">
              Acreditamos que a tecnologia deve unir, não excluir. Nossa engenharia de acessibilidade garante uma experiência premium para <span className="text-foreground italic">cada ser humano</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="#recursos" 
              className="px-8 py-4 bg-foreground text-background font-black rounded-full hover:scale-105 transition-all uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(var(--foreground),0.1)]"
            >
              Explorar Recursos
            </Link>
            <button 
              onClick={() => (window as any).Libras?.toggle()} 
              className="px-8 py-4 border border-foreground/10 text-foreground font-black rounded-full hover:bg-foreground/5 transition-all uppercase text-xs tracking-widest backdrop-blur-sm"
            >
              Ativar VLibras
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── INTERFACE PREVIEW SECTION ────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-[3.5rem] overflow-hidden border border-foreground/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] group bg-muted"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background/80 pointer-events-none z-10" />
            
            <Image 
              src="/GEDS Accessibility.png" 
              alt="Plataforma GEDS Accessibility Interface" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                   <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan-400">Tecnologia Adaptativa</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-foreground leading-none">
                   Interface <span className="text-purple-400">Invisível</span> & <br />
                   Design Atencioso
                 </h2>
               </div>
               <div className="flex gap-4">
                 <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-md">
                   <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50">Conformidade</p>
                   <p className="text-xl font-black italic">WCAG 2.1 AA</p>
                 </div>
                 <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-md">
                   <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50">Impacto</p>
                   <p className="text-xl font-black italic">100% Inclusivo</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES GRID (RECURSOS) ─────────────────────────────── */}
      <section id="recursos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.6em]">Core Engine</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-foreground">Nossas Ferramentas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3rem] bg-linear-to-b from-foreground/5 to-transparent border border-foreground/5 hover:border-foreground/20 transition-all duration-500 shadow-2xl relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity`} />
                
                <div className={`w-20 h-20 rounded-3xl bg-linear-to-br ${item.color} flex items-center justify-center text-black mb-10 group-hover:scale-110 transition-transform shadow-2xl ${item.shadow}`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-foreground mb-6 tracking-tight uppercase italic">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed font-medium group-hover:text-foreground/80 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INNOVATION STATS ─────────────────────────────────────── */}
      <section className="py-24 border-y border-foreground/5 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase italic mb-2 text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* ── DEEP EXPLANATION ───────────────────────────────────────── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-10">
               <div className="space-y-6">
                 <span className="inline-block text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] bg-cyan-400/10 px-6 py-2 rounded-full border border-cyan-400/20">
                   Manifesto de Inclusão
                 </span>
                 <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9] text-foreground">
                   Além de um Menu. <br />
                   Uma <span className="text-purple-400 italic font-black">Filosofia</span>.
                 </h2>
               </div>
               
               <div className="space-y-6 text-lg text-foreground/70 leading-relaxed font-medium">
                 <p>
                   O <span className="text-foreground">GEDS Accessibility</span> não é um aditivo estético. É um compromisso ético de que cada bit de informação deve estar disponível para todos em pé de igualdade.
                 </p>
                 <p>
                   Nossa tecnologia assistiva opera de forma silenciosa e eficiente, detectando necessidades do usuário e adaptando o ambiente digital em frações de segundo, sem comprometer a performance ou o design.
                 </p>
               </div>

               <div className="flex items-center gap-4">
                 <div className="w-12 h-px bg-foreground/20" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Engenharia GEDS</span>
               </div>
             </div>

             <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Universal Design", sub: "Padrões WCAG 2.1 nível AA" },
                  { title: "Assistividade Ativa", sub: "Algoritmos de ajuste dinâmico" },
                  { title: "Navegação Semântica", sub: "Teclado e voz otimizados" },
                  { title: "Menu Fogo (Digital SOS)", sub: "Sinalização de alta visibilidade" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-[2rem] bg-foreground/[0.02] border border-foreground/5 flex items-center justify-between group cursor-default"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-black uppercase tracking-widest text-foreground group-hover:text-cyan-400 transition-colors">{item.title}</p>
                      <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-tight">{item.sub}</p>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-purple-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-purple-900/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-foreground">
             O Futuro é <br />
             <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Para Todos.</span>
           </h2>
           
           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
             <Link 
              href="/contatos" 
              className="group inline-flex items-center justify-center gap-4 px-12 py-6 bg-purple-500 text-white font-black rounded-full hover:bg-purple-400 transition-all shadow-[0_20px_60px_rgba(168,85,247,0.3)] hover:shadow-[0_25px_80px_rgba(168,85,247,0.5)] transform hover:-translate-y-2 uppercase text-xs tracking-[0.2em]"
             >
               Solicitar Auditoria
               <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
             </Link>
             <Link 
              href="/servicos" 
              className="inline-flex items-center justify-center gap-4 px-12 py-6 border border-foreground/10 text-foreground font-black rounded-full hover:bg-foreground/5 transition-all uppercase text-xs tracking-[0.2em] backdrop-blur-sm"
             >
               Ver Outros Serviços
             </Link>
           </div>

           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/30">
             Engenharia • Design • Empatia
           </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
