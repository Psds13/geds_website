"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { ShieldCheck, MessageSquare } from "lucide-react";

const testimonials = [
  { name: "Carlos Mendes", role: "CEO – TechBrasil", text: "A GEDS transformou nossos processos internos. Ganhamos produtividade em poucas semanas de projeto.", stars: 5, avatar: "C" },
  { name: "Ana Rodrigues", role: "Diretora – MedPlus", text: "O sistema desenvolvido pela GEDS reduziu drasticamente o tempo de resposta hospitalar. Resultado técnico impressionante!", stars: 5, avatar: "A" },
  { name: "Pedro Alves", role: "Founder – StartupX", text: "Lançamos nosso MVP em tempo recorde mundial. A abordagem ágil e a qualidade de dados da GEDS são incomparáveis.", stars: 5, avatar: "P" },
];

export default function SocialProof() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 bg-black space-y-32">
      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <div className="space-y-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20 shadow-xl">
            Confiança de Elite
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6 tracking-tight leading-tight">
            Para quem busca resultados reais
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed italic">O que dizem os líderes que escalam através da engenharia GEDS.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#050505] border border-white/5 hover:border-cyan-500/20 rounded-[2rem] p-10 transition-all duration-300 flex flex-col justify-between shadow-xl min-h-[350px]"
            >
              <div className="absolute top-8 right-8 text-white opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
                <MessageSquare className="w-16 h-16" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <FiStar key={j} className="text-cyan-400 fill-cyan-400 w-4 h-4 shadow-[0_0_10px_rgba(0,219,255,0.4)]" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-medium italic group-hover:text-white transition-colors duration-500">&ldquo;{t.text}&rdquo;</p>
              </div>

              <div className="flex items-center gap-5 mt-10 pt-8 border-t border-white/5 z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-black text-xl shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0">
                  {t.avatar}
                </div>
                <div className="shrink-0 max-w-[150px]">
                  <p className="text-white font-bold text-lg tracking-tight leading-tight truncate">{t.name}</p>
                  <p className="text-cyan-400/80 text-[9px] uppercase font-black tracking-widest leading-none mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── SECURITY ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#050505] border border-blue-500/10 rounded-[2.5rem] p-12 md:p-16 shadow-xl group"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="shrink-0 relative">
            <div className="w-24 h-24 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-xl relative z-10 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-12 h-12 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-6">
            <span className="inline-block text-blue-400 text-[9px] uppercase tracking-widest font-black bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20">
               Cibersegurança Enterprise
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-400 tracking-tight">
              Blindagem pela elite de dados GEDS
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl italic">
              Seguimos protocolos globais: criptografia militar de ponta a ponta e conformidade LGPD avançada.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
