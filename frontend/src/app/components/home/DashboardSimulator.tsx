"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DollarSign, TrendingUp, Sparkles, Activity } from "lucide-react";
import Link from "next/link";

// ─── Dashboard Preview Component ─────────────────────────────────
function DashboardPreview() {
  const [data] = useState([65, 78, 45, 90, 72, 85, 95, 88, 76, 92]);

  return (
    <div className="bg-background border border-cyan-500/20 rounded-4xl p-8 shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full -z-10 group-hover:bg-cyan-500/10 transition-colors duration-700" />
      
      <div className="flex items-center justify-between mb-8 border-b border-foreground/5 pb-6">
        <div>
          <p className="text-cyan-600 dark:text-cyan-400 text-[9px] uppercase font-black tracking-widest mb-1 items-center flex gap-2">
            Nortech Insight Dashboard
          </p>
          <h3 className="text-foreground font-bold text-xl tracking-tight">Performance Técnica</h3>
        </div>
        <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          ESTATUS: LIVE
        </div>
      </div>

      {/* Mini Chart */}
      <div className="flex items-end gap-1.5 h-32 mb-8 group/chart">
        {data.map((v, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-lg bg-cyan-500/40 group-hover/chart:bg-cyan-500/80 transition-all duration-500"
            initial={{ height: 0 }}
            whileInView={{ height: `${v}%` }}
            transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: <TrendingUp className="w-4 h-4"/>, label: "Crescimento", value: "+47%", color: "text-cyan-600 dark:text-cyan-400", bg:"bg-cyan-500/10" },
          { icon: <Sparkles className="w-4 h-4"/>, label: "Economia", value: "R$128k", color: "text-emerald-600 dark:text-emerald-400", bg:"bg-emerald-500/10" },
          { icon: <Activity className="w-4 h-4"/>, label: "Produtividad.", value: "+83%", color: "text-blue-600 dark:text-blue-400", bg:"bg-blue-500/10" },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            className="text-center bg-foreground/5 rounded-2xl p-5 border border-foreground/5 transition-all duration-300"
          >
            <div className={`w-8 h-8 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg`}>
              {stat.icon}
            </div>
            <p className={`text-xl font-bold ${stat.color} mb-1 tracking-tight`}>{stat.value}</p>
            <p className="text-foreground/50 text-[8px] uppercase font-black tracking-widest leading-none">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Simulador de Prejuízo ────────────────────────────────────────
function LossSimulator() {
  const [employees, setEmployees] = useState(10);
  const [hoursWasted, setHoursWasted] = useState(2);
  const hourlyRate = 30;
  const workingDays = 22;
  const monthlyLoss = employees * hoursWasted * hourlyRate * workingDays;

  return (
    <div className="bg-background border border-red-500/10 rounded-4xl p-8 shadow-xl relative overflow-hidden group h-full flex flex-col">
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full -z-10 group-hover:bg-red-500/10 transition-colors duration-700" />

      <div className="flex items-center gap-4 mb-8 border-b border-foreground/5 pb-6">
        <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-500 shadow-lg">
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <p className="text-red-500 text-[9px] uppercase font-black tracking-widest mb-1">Calculadora de Impacto</p>
          <h3 className="text-foreground font-bold text-xl tracking-tight leading-tight">Custo do Desperdício</h3>
        </div>
      </div>

      <div className="space-y-8 mb-8">
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-foreground/60 font-bold text-[9px] uppercase tracking-widest">Colaboradores</label>
            <span className="text-foreground font-bold text-lg tracking-tight">{employees}</span>
          </div>
          <input
            type="range" min={1} max={100} value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full h-1 rounded-full appearance-none cursor-pointer accent-red-500 bg-foreground/10"
          />
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <label className="text-foreground/60 font-bold text-[9px] uppercase tracking-widest">Horas perdidas (dia)</label>
            <span className="text-foreground font-bold text-lg tracking-tight">{hoursWasted}h</span>
          </div>
          <input
            type="range" min={0.5} max={8} step={0.5} value={hoursWasted}
            onChange={(e) => setHoursWasted(Number(e.target.value))}
            className="w-full h-1 rounded-full appearance-none cursor-pointer accent-red-500 bg-foreground/10"
          />
        </div>
      </div>

      <motion.div
        key={monthlyLoss}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 text-center flex-1 flex flex-col justify-center shadow-lg transition-all duration-500"
      >
        <p className="text-red-500 text-[8px] uppercase font-black tracking-widest mb-4">Prejuízo mensal estimado</p>
        <p className="text-4xl font-extrabold text-foreground mb-1 tracking-tight">
          R$ {monthlyLoss.toLocaleString('pt-BR')}
        </p>
        <p className="text-foreground/60 text-[10px] font-bold uppercase tracking-widest">Anual: R$ {(monthlyLoss * 12).toLocaleString('pt-BR')}</p>
      </motion.div>

      <Link href="/contatos" className="mt-8 block w-full text-center py-4 bg-red-500 text-white dark:text-black font-black rounded-full text-[10px] uppercase tracking-widest hover:bg-red-600 dark:hover:bg-red-400 transition-all shadow-xl">
        Eliminar desperdício AGORA
      </Link>
    </div>
  );
}

export default function DashboardSimulator() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 bg-background relative transition-colors">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block mb-4 text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20">
          Inteligência de Dados
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-500 dark:text-cyan-400 mb-6 tracking-tight leading-tight">
          Poder de visibilidade absoluta
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          O que não se mede, não se gerencia. Entregamos clareza métrica para cada centavo investido.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <DashboardPreview />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <LossSimulator />
        </motion.div>
      </div>
    </section>
  );
}
