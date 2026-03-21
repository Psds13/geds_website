"use client";

import { motion } from "framer-motion";
import { 
  ArrowDown, 
  Zap, 
  LayoutGrid, 
  BarChart2, 
  Repeat, 
  Award, 
  Star, 
  FlaskConical, 
  Leaf 
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

const navItems = [
  { id: "servicos", label: "Serviços", desc: "Soluções sob medida", icon: Zap, color: "text-cyan-400" },
  { id: "processo", label: "Processo", desc: "Como criamos seu app", icon: Repeat, color: "text-blue-400" },
  { id: "dashboard", label: "Simulador", desc: "Sinta o impacto real", icon: BarChart2, color: "text-purple-400" },
  { id: "transformacao", label: "Inovação", desc: "Resultados reais", icon: LayoutGrid, color: "text-emerald-400" },
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
            className="group block p-6 bg-[#050505] border border-white/5 rounded-3xl hover:border-white/20 transition-all shadow-lg hover:shadow-white/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
              <item.icon size={20} />
            </div>
            
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-1">{item.label}</h3>
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-tight opacity-70 group-hover:text-gray-400">
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
          <span className="text-gray-700 text-[10px] uppercase font-black tracking-[0.3em]">Explore Nosso Ecossistema</span>
          <ArrowDown className="text-cyan-400 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

const HomeContent = () => {
  return (
    <main className="bg-black overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* ── NAVEGAÇÃO RÁPIDA (QUADRADO) ───────────────────────────────── */}
      <section className="relative z-10 border-b border-white/5 bg-linear-to-b from-black to-[#030303]">
        <HomeNavigator />
      </section>

      {/* ── SEÇÃO SERVIÇOS ─────────────────────────────────────────── */}
      <section id="servicos" className="relative z-10 border-b border-white/5">
         <Servicos />
      </section>

      {/* ── SEÇÃO PROCESSO ─────────────────────────────────────────── */}
      <section id="processo" className="relative z-10 border-b border-white/5 bg-[#030303]">
        <Processo />
      </section>

      {/* ── SEÇÃO DASHBOARD & SIMULADOR ─────────────────────────────── */}
      <section id="dashboard" className="relative z-10 border-b border-white/5">
        <DashboardSimulator />
      </section>

      {/* ── SEÇÃO TRANSFORMAÇÃO ────────────────────────────────────── */}
      <section id="transformacao" className="relative z-10 border-b border-white/5 bg-[#030303]">
        <Transformacao />
      </section>

      {/* ── SEÇÃO PORTFÓLIO ────────────────────────────────────────── */}
      <section id="portfolio" className="relative z-10 border-b border-white/5">
        <Portfolio />
      </section>

      {/* ── SEÇÃO TEASERS (LAB & GREEN) ────────────────────────────── */}
      <section className="relative z-10 border-b border-white/5">
        <Teasers />
      </section>

      {/* ── SEÇÃO DIFERENCIAIS ─────────────────────────────────────── */}
      <section id="diferenciais" className="relative z-10 border-b border-white/5 bg-[#030303]">
        <Diferenciais />
      </section>

      {/* ── SEÇÃO PROVA SOCIAL & SEGURANÇA ─────────────────────────── */}
      <section id="social-proof" className="relative z-10 border-b border-white/5">
        <SocialProof />
      </section>

      {/* ── SEÇÃO CTA FINAL ────────────────────────────────────────── */}
      <section className="relative z-10 pb-20">
        <CTA />
      </section>
    </main>
  );
};

export default HomeContent;