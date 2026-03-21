"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiCode, FiTrendingUp } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background overflow-hidden relative transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 text-cyan-500 dark:text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20 shadow-xl">
            Nossa Essência
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-500 dark:text-cyan-400 mb-6 tracking-tight">
            Parceiros Tecnológicos de Longo Prazo
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Somos uma casa de software boutique. Acompanhamos sua jornada de transformação digital com times dedicados e obsessão por qualidade técnica.
          </p>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Imagem */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-4xl shadow-2xl border border-foreground/5 group-hover:border-cyan-500/20 transition-all duration-500">
              <Image
                src="/GEDS Inovação.jpg"
                alt="Equipe GEDS Inovação"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-6 right-6 bg-background border border-cyan-500/30 p-6 rounded-2xl shadow-2xl z-20">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20">
                  <FiAward className="text-cyan-500 dark:text-cyan-400 text-2xl" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-foreground">50+</p>
                  <p className="text-[9px] text-cyan-500 dark:text-cyan-400 uppercase tracking-widest font-black leading-none mt-1">Projetos Ativos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            className="lg:w-1/2 space-y-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-cyan-500 dark:text-cyan-400 text-[10px] uppercase font-black tracking-widest mb-4">GEDS Inovação Tech</p>
              <h2 className="text-3xl font-extrabold text-foreground mb-6 tracking-tight uppercase italic opacity-90">
                Engenharia de precisão para resultados exponenciais
              </h2>
              <p className="text-base text-foreground/70 leading-relaxed text-justify">
                Desenvolvemos soluções digitais de alta fidelidade técnica, com foco absoluto em performance e experiência do usuário. 
                Cada linha de código é pensada para transmitir confiança e domínio técnico, fortalecendo sua presença digital 
                em um ambiente tecnológico competitivo. 🚀
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: FiCode, title: "Qualidade Global", desc: "Desenvolvimento técnico seguindo padrões internacionais de codificação." },
                { icon: FiTrendingUp, title: "Escalabilidade Real", desc: "Sistemas projetados para suportar o crescimento rápido do seu negócio." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group items-start">
                  <div className="bg-foreground/5 p-4 rounded-xl text-cyan-500 dark:text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-black transition-all border border-foreground/5">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-foreground/5">
              <p className="text-[9px] text-foreground/60 uppercase font-black tracking-widest mb-6">Master Stack</p>
              <div className="flex flex-wrap gap-2.5">
                {['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span key={tech} className="px-5 py-2 bg-foreground/5 text-foreground/80 border border-foreground/10 rounded-full font-bold text-[9px] uppercase tracking-widest hover:border-cyan-500/40 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}