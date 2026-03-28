"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const diferenciais = [
  { 
    icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop", 
    title: "IA Integrada", 
    desc: "Soluções com IA de última geração integradas desde a primeira linha de código. Machine learning e processamento de linguagem natural para resultados excepcionais.", 
    size: "lg" 
  },
  { 
    icon: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop", 
    title: "Segurança Total", 
    desc: "Dados protegidos com padrões enterprise e criptografia de nível militar. Proteção avançada contra ameaças cibernéticas.", 
    size: "sm" 
  },
  { 
    icon: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&h=200&fit=crop", 
    title: "Sustentabilidade", 
    desc: "Tecnologia verde que otimiza recursos e respeita o meio ambiente. Redução de carbono e eficiência energética certificada.", 
    size: "sm" 
  },
  { 
    icon: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop", 
    title: "Elite Tech", 
    desc: "50+ projetos entregues com métricas reais de sucesso e escalabilidade. Cases de sucesso em Fortune 500.", 
    size: "sm" 
  },
  { 
    icon: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop", 
    title: "Time Sênior Dedicado", 
    desc: "Suporte especializado por engenheiros sêniores em tempo real. Disponibilidade 24/7 com tempo de resposta ultrarrápido.", 
    size: "lg" 
  },
  { 
    icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop", 
    title: "Next-Gen Stack", 
    desc: "As tecnologias mais performáticas do ecossistema global. Sempre atualizados com as últimas inovações do mercado.", 
    size: "sm" 
  },
];

export default function Diferenciais() {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background relative transition-colors">
      <motion.div
        className="text-center mb-12 sm:mb-16 lg:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block mb-4 sm:mb-5 text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/10 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs uppercase tracking-widest border border-cyan-500/20">
          Vantagem Competitiva
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4">
          Por que líderes escolhem a GEDS Inovação?
        </h2>
        <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium px-4">
          Onde a fronteira tecnológica encontra a estratégia de elite.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 auto-rows-[auto] lg:auto-rows-[340px]">
        {diferenciais.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`group relative bg-background border border-foreground/5 hover:border-cyan-500/30 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-7 lg:p-8 transition-all duration-500 flex flex-col overflow-hidden shadow-2xl ${
              item.size === "lg" ? "lg:col-span-2" : "lg:col-span-1"
            }`}
          >
            {/* Background Gradient Detail */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700" />
            
            {/* Image Container - Larger and Responsive */}
            <div className="relative z-20 mb-5 sm:mb-6 lg:mb-7">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-foreground/10 group-hover:border-cyan-500/30 transition-all duration-500 shadow-lg group-hover:shadow-cyan-500/20 group-hover:shadow-xl">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text Content with better spacing */}
            <div className="relative z-30 space-y-2 sm:space-y-3 lg:space-y-4 flex-1">
              <h3 className="text-foreground font-black text-xl sm:text-2xl lg:text-2xl mb-1 sm:mb-2 tracking-tighter group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed font-medium group-hover:text-foreground/90 transition-colors">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}