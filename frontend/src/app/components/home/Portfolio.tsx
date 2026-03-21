"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Legacidos",
    description: "Museu digital interativo que preserva a memória de objetos cotidianos e legados tecnológicos.",
    link: "https://legacidos.vercel.app/",
    image: "/legacidos.png",
    techs: ["Next.js", "Three.js", "Tailwind"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Borasiô",
    description: "Aplicativo de mobilidade humana e segura focado nas necessidades reais da ilha de São Luís.",
    link: "https://pi-borasio.vercel.app/",
    image: "/ora.png",
    techs: ["React Native", "Node.js", "PostgreSQL"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "SmartUPA",
    description: "Sistema inteligente para gestão de leitos e agendamentos em Unidades de Pronto Atendimento.",
    link: "https://sistema-upa-mauve.vercel.app/",
    image: "/smartUPA.png",
    techs: ["React", "Firebase", "Real-time Metrics"],
    color: "from-purple-500/20 to-blue-500/20"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto py-32 px-6 bg-black">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block mb-4 text-cyan-400 font-bold bg-cyan-500/10 px-6 py-2 rounded-full text-[10px] uppercase tracking-widest border border-cyan-500/20 shadow-xl">
           Nossos Cases de Sucesso
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Engenharia aplicada a <br />
          <span className="text-cyan-400 italic">resultados extraordinários.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-[#050505] border border-white/5 hover:border-cyan-500/30 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-2xl flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 group-hover:opacity-0 transition-opacity duration-500`} />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase italic tracking-tighter">
                  {project.title}
                </h3>
                <Link href={project.link} target="_blank" className="text-white/40 hover:text-cyan-400 transition-colors">
                  <FiExternalLink size={20} />
                </Link>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.techs.map((tech, j) => (
                  <span key={j} className="text-[9px] uppercase font-black tracking-widest text-cyan-400/60 bg-cyan-400/5 px-3 py-1 rounded-full border border-cyan-400/10">
                    {tech}
                  </span>
                ))}
              </div>

              <Link 
                href={project.link} 
                target="_blank"
                className="inline-flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.2em] group/btn"
              >
                Explorar Projeto
                <FiArrowRight className="transition-transform group-hover/btn:translate-x-2 text-cyan-400" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
