"use client";

import { motion } from "framer-motion";
import { 
  ArrowDown, 
  Zap, 
  BarChart2, 
  Repeat, 
  Award, 
  Star, 
  FlaskConical, 
  Leaf,
  Terminal
} from "lucide-react";

import Servicos from "./home/Servicos";
import Processo from "./home/Processo";
import DashboardSimulator from "./home/DashboardSimulator";
import Transformacao from "./home/Transformacao";
import Teasers from "./home/Teasers";
import Diferenciais from "./home/Diferenciais";
import SocialProof from "./home/SocialProof";
import Portfolio from "./home/Portfolio";
import CTA from "./home/CTA";
import Ecosystem3D from "./home/Ecosystem3D";
import CommandCenter from "./home/CommandCenter";
import HomeOS from "./home/HomeOS";

const navItems = [
  { id: "servicos", label: "Serviços", desc: "Soluções sob medida", icon: Zap, color: "text-cyan-400" },
  { id: "processo", label: "Processo", desc: "Como criamos seu app", icon: Repeat, color: "text-blue-400" },
  { id: "dashboard", label: "Simulador", desc: "Sinta o impacto real", icon: BarChart2, color: "text-purple-400" },
  { id: "os", label: "GEDS OS", desc: "Sistema Interativo", icon: Terminal, color: "text-emerald-500" },
  { id: "geds-lab", label: "GEDS Lab", desc: "Nossos experimentos", icon: FlaskConical, color: "text-cyan-400" },
  { id: "green-tech", label: "Green Tech", desc: "Tecnologia verde", icon: Leaf, color: "text-emerald-400" },
  { id: "diferenciais", label: "Diferenciais", desc: "Por que nos escolher?", icon: Award, color: "text-yellow-400" },
  { id: "portfolio", label: "Cases", desc: "Sucesso garantido", icon: Star, color: "text-purple-400" },
];

const HomeNavigator = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {navItems.map((item, idx) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className="group block p-6 bg-background border border-foreground/5 rounded-3xl hover:border-foreground/20 transition-all shadow-lg hover:shadow-foreground/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-foreground/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-foreground/5 group-hover:scale-110 transition-transform ${item.color}`}>
              <item.icon size={20} />
            </div>
            
            <h3 className="text-foreground font-black text-sm uppercase tracking-widest mb-1">{item.label}</h3>
            <p className="text-foreground/50 text-[10px] font-bold uppercase tracking-tight opacity-70 group-hover:text-foreground/70">
               {item.desc}
            </p>
          </motion.a>
        ))}
      </div>
      
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-foreground/40 text-[10px] uppercase font-black tracking-[0.3em]">Explore Nosso Ecossistema</span>
          <ArrowDown className="text-cyan-500 dark:text-cyan-400 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

const HomeContent = () => {
  return (
    <main className="bg-background overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* ── NAVEGAÇÃO RÁPIDA (QUADRADO) ───────────────────────────────── */}
      <section className="relative z-10 border-b border-foreground/5 bg-linear-to-b from-background to-foreground/1">
        <HomeNavigator />
      </section>

      {/* ── SEÇÃO SERVIÇOS ─────────────────────────────────────────── */}
      <section id="servicos" className="relative z-10 border-b border-foreground/5">
         <Servicos />
      </section>

      {/* ── SEÇÃO PROCESSO ─────────────────────────────────────────── */}
      <section id="processo" className="relative z-10 border-b border-foreground/5 bg-foreground/2">
        <Processo />
      </section>

      {/* ── SEÇÃO DASHBOARD & SIMULADOR ─────────────────────────────── */}
      <section id="dashboard" className="relative z-10 border-b border-foreground/5">
        <DashboardSimulator />
      </section>

      {/* ── SEÇÃO TRANSFORMAÇÃO ────────────────────────────────────── */}
      <section id="transformacao" className="relative z-10 border-b border-foreground/5 bg-foreground/2">
        <Transformacao />
      </section>

      {/* ── SEÇÃO PORTFÓLIO ────────────────────────────────────────── */}
      <section id="portfolio" className="relative z-10 border-b border-foreground/5">
        <Portfolio />
      </section>

      {/* ── SEÇÃO TEASERS (LAB & GREEN) ────────────────────────────── */}
      <section className="relative z-10 border-b border-foreground/5 bg-foreground/2">
        <Teasers />
      </section>

      {/* ── SEÇÃO COMMAND CENTER ───────────────────────────────────── */}
      <section className="relative z-10 border-b border-foreground/5">
        <CommandCenter />
      </section>

      {/* ── SEÇÃO GEDS OS ──────────────────────────────────────────── */}
      <section id="os" className="relative z-10 border-b border-foreground/5">
        <HomeOS />
      </section>

      {/* ── SEÇÃO DIFERENCIAIS ─────────────────────────────────────── */}
      <section id="diferenciais" className="relative z-10 border-b border-foreground/5">
        <Diferenciais />
      </section>

      {/* ── SEÇÃO PROVA SOCIAL & SEGURANÇA ─────────────────────────── */}
      <section id="social-proof" className="relative z-10 border-b border-foreground/5 bg-foreground/2">
        <SocialProof />
      </section>

      {/* ── SEÇÃO ECOSYSTEM 3D ─────────────────────────────────────── */}
      <section className="relative z-10 border-b border-foreground/5 bg-black">
        <Ecosystem3D />
      </section>

      {/* ── SEÇÃO CTA FINAL ────────────────────────────────────────── */}
      <section className="relative z-10 pb-20">
        <CTA />
      </section>
    </main>
  );
};

export default HomeContent;