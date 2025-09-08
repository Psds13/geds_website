"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

interface Collaborator {
  name: string;
  role: string;
  bio: string;
  github: string;
  avatar: string;
  projects: {
    title: string;
    link: string;
    description?: string;
    techs?: string[];
  }[];
}

const collaborators: Collaborator[] = [
  {
    name: "Edmilson Oliveira",
    role: "Desenvolvedor Full Stack",
    bio: "Apaixonado por interfaces modernas e experiências digitais com React e Next.js.",
    github: "https://github.com/Psds13",
    avatar: "/eusinho.jpg",
    projects: [
      {
        title: "Gerenciador de Tarefas",
        link: "https://github.com/Psds13/Gerenciador-de-Tarefas",
        description: "Aplicação para organizar tarefas com PHP e usando o banco de dados PostgreSQL.",
        techs: ["PHP", "PostgreSQL"],
      },
      {
        title: "Meu Carrinho",
        link: "https://github.com/prof-freedson/pi-meu-carrinho",
        description: "Simulação de carrinho para facilitar nas compras em site.",
        techs: ["Express.js", "Javascript", "CSS/HTML"],
      },
    ],
  },
  // Adicione mais colaboradores aqui...
];

export default function PortfoliosPage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfólios dos Colaboradores
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nosso time de talentos e explore seus projetos incríveis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborators.map((colab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={colab.avatar}
                    alt={colab.name}
                    width={112}
                    height={112}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-orange-400 animate-ping opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{colab.name}</h2>
                <p className="text-orange-500 font-medium">{colab.role}</p>
                <p className="text-gray-600 mt-3 text-center">{colab.bio}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">
                  Projetos Destacados
                </h3>
                <ul className="space-y-4">
                  {colab.projects.map((project, i) => (
                    <li key={i} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-start">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:text-orange-500 font-medium flex items-center"
                        >
                          {project.title}
                          <FiExternalLink className="ml-1 text-sm" />
                        </a>
                      </div>
                      {project.description && (
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                      )}
                      {project.techs && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.techs.map((tech, j) => (
                            <span
                              key={j}
                              className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-center">
                <a
                  href={colab.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FiGithub className="mr-2" />
                  Ver GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}