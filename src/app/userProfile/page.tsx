'use client';

import { FiEdit, FiAward, FiBriefcase, FiCode, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const UserProfile = () => {
  // Dados do usuário - podem vir de props ou API
  const user = {
    name: "Carlos Silva",
    role: "Desenvolvedor Full Stack",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Especialista em React, Node.js e soluções escaláveis. Apaixonado por criar experiências digitais excepcionais.",
    email: "carlos.silva@gedsinovacao.com",
    skills: ["React", "TypeScript", "Node.js", "UI/UX", "AWS"],
    stats: {
      projects: 24,
      experience: 5, // anos
      clients: 18
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        {/* Cabeçalho do perfil */}
        <div className="relative h-32 bg-gradient-to-r from-orange-500 to-blue-600">
          <div className="absolute -bottom-16 left-6">
              <Image 
                src={user.avatar} 
                alt={user.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full border-4 border-gray-800 object-cover shadow-lg"
                priority
              />
              <button className="absolute bottom-2 right-2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition">
                <FiEdit className="text-orange-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Corpo do perfil */}
        <div className="pt-20 px-6 pb-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Informações principais */}
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-orange-400 flex items-center gap-2 mt-1">
                <FiBriefcase />
                {user.role}
              </p>
              
              <p className="text-gray-300 mt-4">{user.bio}</p>
              
              {/* Habilidades */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FiCode /> Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200 hover:bg-gray-600 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Estatísticas e contato */}
            <div className="md:w-1/3 space-y-6">
              {/* Estatísticas */}
              <div className="bg-gray-800 bg-opacity-50 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FiAward /> Estatísticas
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Projetos</p>
                    <p className="text-white font-bold text-xl">{user.stats.projects}+</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Experiência</p>
                    <p className="text-white font-bold text-xl">{user.stats.experience} anos</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Clientes</p>
                    <p className="text-white font-bold text-xl">{user.stats.clients}+</p>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="bg-gray-800 bg-opacity-50 p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FiMail /> Contato
                </h3>
                <div className="space-y-2">
                  <a 
                    href={`mailto:${user.email}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition"
                  >
                    <FiMail /> {user.email}
                  </a>
                  <div className="flex gap-3 mt-3">
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300 transition">
                      <FaGithub className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                );
};

export default UserProfile;