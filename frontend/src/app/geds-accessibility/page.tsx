"use client";

import { motion } from "framer-motion";
import { 
  Accessibility, 
  Type, 
  Contrast, 
  Brain, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const features = [
  {
    icon: <Type className="w-8 h-8" />,
    title: "Tipografia Adaptativa",
    desc: "Ajuste instantâneo do tamanho da fonte para garantir leitura confortável em qualquer dispositivo.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Modo Disléxico",
    desc: "Fontes e espaçamentos otimizados para facilitar a leitura por pessoas com dislexia.",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: <Contrast className="w-8 h-8" />,
    title: "Alto Contraste",
    desc: "Paletas de cores otimizadas para garantir máxima legibilidade e reduzir a fadiga ocular.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Filtros de Daltonismo",
    desc: "Modos específicos para Deuteranopia e Protanopia, garantindo que a cor não seja uma barreira.",
    color: "from-amber-400 to-orange-500"
  }
];

export default function AccessibilityPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-cyan-500 selection:text-black">
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-purple-500/10 border border-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          >
            <Accessibility className="w-10 h-10 text-purple-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none"
          >
            GEDS <span className="text-purple-400 italic">Accessibility</span>. <br />
            Inclusão Sem Fronteiras.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Acreditamos que a tecnologia deve ser um ponto de união, não de exclusão. Nossas ferramentas de acessibilidade garantem que todos tenham a mesma experiência premium, independentemente de suas necessidades.
          </motion.p>
        </div>
      </section>

      {/* ── IMAGE SECTION ────────────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-5xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-purple-500/10 pointer-events-none z-10" />
            
            <div className="relative aspect-video w-full transform group-hover:scale-105 transition-transform duration-700">
              <Image 
                src="/GEDS Accessibility.png" 
                alt="Plataforma GEDS Accessibility" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Overlay Gradient for Text Readability if needed */}
            <div className="absolute bottom-0 left-0 w-full p-12 bg-linear-to-t from-background via-background/60 to-transparent z-20">
               <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-foreground">
                 Interface Universal & <span className="text-purple-400">Inteligente</span>
               </h2>
               <p className="text-foreground/70 text-sm mt-2 max-w-xl font-medium uppercase tracking-widest">Design focado no humano • Engenharia de Inclusão</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-foreground/5 border border-foreground/5 hover:border-purple-500/30 transition-all duration-500 shadow-xl"
              >
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.2)]`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-foreground mb-4 tracking-tight uppercase italic">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-medium group-hover:text-foreground/70 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS SECTION (EXPLANATION) ─────────────────────────── */}
      <section className="py-24 px-6 bg-foreground/2 border-y border-foreground/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 text-center md:text-left">
             <div className="space-y-4">
               <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.5em] bg-purple-500/10 px-6 py-2 rounded-full border border-purple-500/20">
                 O que é o GEDS Accessibility?
               </span>
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">
                 A ponte entre a <span className="text-purple-400">inovação</span> e a <span className="text-cyan-400">diversidade</span>.
               </h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <p className="text-foreground/70 leading-relaxed font-medium">
                   O **GEDS Accessibility** não é apenas um plugin ou um menu flutuante. É uma filosofia de desenvolvimento integrada em todo o ecossistema GEDS. Nossa missão é remover as barreiras digitais que impedem milhões de pessoas de acessar informações e serviços com dignidade.
                 </p>
                 <p className="text-foreground/70 leading-relaxed font-medium">
                   Através de algoritmos inteligentes e design adaptativo, transformamos interfaces complexas em experiências fluidas para todos os tipos de interação humana.
                 </p>
               </div>
               
               <div className="space-y-4">
                  {[
                    "Conformidade com padrões WCAG 2.1",
                    "Tecnologia Assistiva de Ponta",
                    "Interface Amigável e Intuitiva",
                    "Sistemas de Emergência (Menu Fogo)",
                    "Navegação por Voz e Teclado",
                    "Otimização em Tempo Real"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                      <span className="text-xs font-bold text-foreground/80 uppercase tracking-widest leading-none">{text}</span>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-foreground/5">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-purple-900/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase italic text-foreground drop-shadow-lg">
             Torne sua web <span className="text-purple-400">acessível</span> hoje
           </h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link 
              href="/contatos" 
              className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-purple-500 text-white font-black rounded-full hover:bg-purple-400 transition-all shadow-[0_20px_50px_rgba(168,85,247,0.2)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transform hover:-translate-y-1 uppercase text-sm tracking-widest"
             >
               Solicitar Auditoria
               <ArrowRight />
             </Link>
             <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-4 px-12 py-6 border border-foreground/10 text-foreground font-black rounded-full hover:bg-foreground/5 transition-all uppercase text-sm tracking-widest"
             >
               Testar Agora
             </Link>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
