"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Shield, Leaf, Code2, Globe, Activity, Radio } from "lucide-react";
import Image from "next/image";

const metrics = [
  { 
    id: 1, 
    label: "Ameaças Bloqueadas (24h)", 
    value: 12405, 
    suffix: "+", 
    icon: Shield, 
    color: "text-emerald-400", 
    bg: "bg-emerald-500/10",
    detail: "SEC-X84 PROTECTED",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop"
  },
  { 
    id: 2, 
    label: "CO2 Economizado", 
    value: 840, 
    suffix: "kg", 
    icon: Leaf, 
    color: "text-green-400", 
    bg: "bg-green-500/10",
    detail: "ENV-NODE ACTIVE",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=200&fit=crop"
  },
  { 
    id: 3, 
    label: "Linhas de Código", 
    value: 1.4, 
    suffix: " Mi", 
    icon: Code2, 
    color: "text-purple-400", 
    bg: "bg-purple-500/10",
    detail: "DEV-INFRA STABLE",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop"
  },
  { 
    id: 4, 
    label: "Nodes de Rede Ativos", 
    value: 135, 
    suffix: "", 
    icon: Globe, 
    color: "text-cyan-400", 
    bg: "bg-cyan-500/10",
    detail: "NET-GRID SYNCED",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop"
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const end = to;
          const totalDuration = 2000;
          const incrementTime = 30;
          const steps = totalDuration / incrementTime;
          const increment = (end - start) / steps;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, incrementTime);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  const display = to % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toLocaleString('pt-BR');

  return <span ref={ref} className="tabular-nums">{display}{suffix}</span>;
}

const RadarBackground = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden sm:top-[-100px] sm:bottom-[-100px]">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-20"
      >
        {/* Radar Circles */}
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="absolute inset-0 border border-cyan-500/20 rounded-full"
            style={{ 
              margin: `${(i + 1) * 12.5}%`,
            }}
          />
        ))}
        
        {/* Radar Crosshair */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-cyan-500/10 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-500/10 -translate-y-1/2" />
        
        {/* Sweeper */}
        <div 
          className="absolute top-0 left-1/2 w-1/2 h-px bg-gradient-to-r from-cyan-500 to-transparent origin-left"
          style={{ transform: "rotate(-90deg)" }}
        />
        
        {/* Scanning Glow */}
        <div 
          className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-[conic-gradient(from_0deg_at_0%_0%,_rgba(6,182,212,0.2),_transparent)] origin-top-left -translate-x-0 -translate-y-0"
          style={{ transform: "rotate(0deg)" }}
        />
      </motion.div>
    </div>
  );
};

export default function CommandCenter() {
  const containerRef = useRef<HTMLElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* HUD Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,219,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,219,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />
      
      {/* Subliminal Data Stream */}
      <div className="absolute top-6 sm:top-10 left-3 sm:left-6 lg:left-10 text-[7px] sm:text-[8px] font-mono text-cyan-500/20 select-none hidden md:block">
        0x4A 0xBC 0x22 0x9D 0x01<br/>
        SYSTEM_INIT: SUCCESS<br/>
        UPTIME: 99.999%
      </div>

      <RadarBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-500 font-black bg-red-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.5em] border border-red-500/20">
              LIVE DATA STREAM \\
            </span>
          </div>
          
          {/* Title - Nortech COMMAND on first line, CENTER on second line with different font */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground uppercase tracking-tighter mb-2 font-['Poppins',_sans-serif]">
              Nortech COMMAND
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-['Orbitron',_monospace]">
                CENTER
              </span>
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-cyan-500/50 mt-4">
            <div className="h-px w-8 sm:w-12 bg-cyan-500/20" />
            <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-foreground/60">
              Monitoramento de Eficiência Global
            </p>
            <div className="h-px w-8 sm:w-12 bg-cyan-500/20" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {metrics.map((m, i) => (
            <motion.div 
              key={m.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotateY: 30, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0, 
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100
                }
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-2xl sm:rounded-bl-3xl border border-foreground/5 bg-background/50 backdrop-blur-xl overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl sm:rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-2xl sm:rounded-bl-3xl" />
              
              {/* Scanning Ray */}
              <motion.div 
                animate={{ top: ["100%", "-100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"
              />

              <div className="relative z-10">
                {/* Image and Icon Container */}
                <div className="flex justify-between items-start mb-4 sm:mb-5 lg:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Image */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-foreground/10 group-hover:border-cyan-500/30 transition-all duration-500 shadow-lg">
                      <Image
                        src={m.image}
                        alt={m.label}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Icon with animation */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center relative transition-transform group-hover:scale-110 duration-500 ${m.bg}`}>
                      <m.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${m.color}`} />
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-3px] sm:inset-[-4px] border border-dashed border-cyan-500/30 rounded-full"
                      />
                    </div>
                  </div>
                  
                  <div className="text-[7px] sm:text-[8px] lg:text-[9px] font-mono text-foreground/40 font-bold tracking-widest uppercase">
                    ID-{m.id}
                  </div>
                </div>
                
                {/* Value */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tighter mb-1 font-mono flex items-baseline gap-1">
                  <Counter to={m.value} suffix="" />
                  <span className="text-base sm:text-lg font-bold text-foreground/40">{m.suffix}</span>
                </h3>
                
                {/* Label */}
                <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-foreground/50 mb-3 sm:mb-4">
                  {m.label}
                </p>
                
                {/* Footer */}
                <div className="pt-3 sm:pt-4 border-t border-foreground/10 flex items-center justify-between">
                  <span className="text-[7px] sm:text-[8px] font-mono text-cyan-500 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">
                    {m.detail}
                  </span>
                  <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-500/30 group-hover:text-cyan-500 group-hover:animate-pulse transition-all" />
                </div>
              </div>

              {/* Holographic Glow */}
              <div className={`absolute -bottom-10 -right-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 blur-[60px] rounded-full opacity-10 transition-opacity group-hover:opacity-30 ${m.bg.replace('/10', '')}`} />
            </motion.div>
          ))}
        </div>

        {/* Scrolling Footer Ticker */}
        <div className="mt-12 sm:mt-16 overflow-hidden border-y border-foreground/10 py-3 sm:py-4 flex items-center bg-foreground/5">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 sm:gap-12 whitespace-nowrap text-[7px] sm:text-[8px] lg:text-[9px] font-mono text-cyan-500/40 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]"
          >
            {[...Array(5)].map((_, i) => (
              <span key={i} className="flex items-center gap-3 sm:gap-4">
                <Radio className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                Nortech NETWORK STATUS: OPTIMAL \\ NODE UPTIME: 99.9% \\ SECURITY PATCH V.2.4.0 DEPLOYED \\ REAL-TIME MONITORING ENABLED \\
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}