"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiTrendingUp } from "react-icons/fi";

export default function About() {
  return (
    <section className="py-20 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-3">
            Sobre nós
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Software com foco em resultado
          </h2>
          <p className="text-foreground/60 max-w-2xl leading-relaxed">
            Somos uma software house de São Luís. Desenvolvemos sistemas junto com
            nossos clientes, com atenção aos detalhes e entregas em ciclos curtos.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-xl border border-foreground/10">
              <Image
                src="/Nortech Inovação.jpg"
                alt="Equipe Nortech Inovação"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/70 leading-relaxed">
              Cada projeto é pensado para funcionar bem e resolver o problema do
              cliente. Trabalhamos com metodologias ágeis, código documentado e
              comunicação clara em todas as etapas.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: FiCode,
                  title: "Código limpo",
                  desc: "Boas práticas e padrões da indústria em cada entrega.",
                },
                {
                  icon: FiTrendingUp,
                  title: "Escalabilidade",
                  desc: "Sistemas projetados para crescer junto com o negócio.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-foreground/10">
              <p className="text-xs font-medium text-foreground/50 uppercase tracking-wide mb-3">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-foreground/5 text-foreground/70 border border-foreground/10 rounded-md text-xs font-medium"
                  >
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
