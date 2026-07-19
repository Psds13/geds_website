"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Legacidos",
    description: "Museu digital interativo que preserva a memória de objetos cotidianos.",
    link: "https://legacidos.vercel.app/",
    image: "/legacidos.png",
    techs: ["Next.js", "Three.js", "Tailwind"],
  },
  {
    title: "Borasiô",
    description: "App de mobilidade humana focado em São Luís.",
    link: "https://pi-borasio.vercel.app/",
    image: "/ora.png",
    techs: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    title: "SmartUPA",
    description: "Sistema para gestão de leitos e agendamentos em UPA.",
    link: "https://sistema-upa-mauve.vercel.app/",
    image: "/smartUPA.png",
    techs: ["React", "Firebase", "Real-time Metrics"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto py-24 px-6 bg-background">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Projetos recentes
        </h2>
        <p className="text-foreground/50 max-w-xl leading-relaxed">
          Alguns dos trabalhos que desenvolvemos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-background border border-foreground/10 hover:border-foreground/20 rounded-xl overflow-hidden transition-all"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-all duration-500" />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-foreground font-semibold text-lg">{project.title}</h3>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-foreground/30 hover:text-foreground/60 transition-colors"
                >
                  <FiExternalLink size={16} />
                </Link>
              </div>

              <p className="text-foreground/50 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs text-foreground/40 bg-foreground/5 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/portfolios"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
        >
          Ver portfólio completo
          <FiExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
