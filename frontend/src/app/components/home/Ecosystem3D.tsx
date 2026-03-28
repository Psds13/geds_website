"use client";

import { motion } from "framer-motion";
import { Shield, Gamepad2, FlaskConical, Globe, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const nodes = [
  { id: "security", label: "GEDS Security", desc: "Proteção impenetrável de escopo total", icon: Shield, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/50", glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]", href: "/geds-security" },
  { id: "network", label: "GEDS Network", desc: "Conectividade de hiper baixa latência", icon: Globe, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/50", glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]", href: "/geds-network" },
  { id: "games", label: "GEDS Games", desc: "Performance de jogo e interatividade", icon: Gamepad2, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/50", glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]", href: "/geds-games" },
  { id: "lab", label: "GEDS Lab", desc: "Inovação, pesquisa e experimentação", icon: FlaskConical, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/50", glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]", href: "/geds-lab" },
];

export default function Ecosystem3D() {
  return (
    <section className="py-24 lg:py-40 px-4 sm:px-6 relative overflow-hidden bg-background border-y border-foreground/5">
      {/* Background Matrix/Rays effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,219,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* Text / Info Area (Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-5/12 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">O Universo GEDS</span>
          </div>
          
          {/* Title - Fixed and organized */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground uppercase leading-[1.25]">
  <span className="block">Ecossistema</span>
  
  <span className="block w-fit italic pr-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
    Conectado
  </span>
</h2>
          
          <p className="text-foreground/60 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 mt-6">
            Nossas soluções formam uma <strong className="text-foreground font-bold">malha neural poderosa</strong>. 
            Segurança, Rede, Gamificação e Pesquisa trabalhando lado a lado, transferindo dados em tempo real 
            para criar o ecossistema digital mais robusto do mercado.
          </p>
          
          {/* Button - Light Blue Color */}
          <Link 
            href="/servicos" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:shadow-xl"
          >
            Ver Soluções 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Responsive Grid Map (Right) */}
        <div className="lg:w-7/12 w-full relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10 w-full">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full"
              >
                <Link href={node.href} className="block group w-full h-full">
                  <div className={`relative h-full p-6 sm:p-8 rounded-3xl bg-background/40 border border-foreground/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                    {/* Glowing highlight ring on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 border-2 rounded-3xl ${node.border} transition-all duration-500`} />
                    
                    {/* Ambient subtle background */}
                    <div className={`absolute -right-10 -top-10 w-32 h-32 ${node.bg} rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500`} />

                    <div className="relative z-10">
                      <div className={`w-14 items-center justify-center flex h-14 rounded-2xl ${node.bg} border ${node.border} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <node.icon className={`w-6 h-6 ${node.color}`} />
                      </div>
                      
                      <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                        {node.label}
                      </h3>
                      
                      <p className="text-foreground/50 text-xs md:text-sm leading-relaxed mb-6">
                        {node.desc}
                      </p>
                      
                      <div className={`inline-flex items-center text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${node.color} opacity-80 sm:opacity-0 sm:-translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300`}>
                        Acessar Domínio <ArrowRight className="w-3 h-3 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Central decorative element connecting them behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('/grid-pattern.png')] bg-center opacity-10 pointer-events-none rounded-full mix-blend-screen" />
        </div>
        
      </div>
    </section>
  );
}