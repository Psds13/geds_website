"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO — TechBrasil",
    text: "A Nortech ajudou a otimizar nossos processos. Em poucas semanas já vimos melhoria na produtividade.",
    stars: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Diretora — MedPlus",
    text: "O sistema que desenvolveram reduziu o tempo de resposta do hospital. Trabalho bem feito.",
    stars: 5,
  },
  {
    name: "Pedro Alves",
    role: "Founder — StartupX",
    text: "Conseguimos lançar nosso MVP rápido. A equipe é ágil e entregou o que foi combinado.",
    stars: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6 bg-background">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          O que dizem nossos clientes
        </h2>
        <p className="text-foreground/50 max-w-xl leading-relaxed">
          Feedback de quem já trabalhou conosco.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-background border border-foreground/10 rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <FiStar
                    key={j}
                    className="text-cyan-600 dark:text-cyan-400 fill-cyan-600 dark:fill-cyan-400 w-4 h-4"
                  />
                ))}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>

            <div className="border-t border-foreground/10 pt-6">
              <p className="text-foreground font-medium text-sm">{t.name}</p>
              <p className="text-foreground/40 text-xs mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
