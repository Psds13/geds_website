"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Code2, Cloud, LineChart, Search, Layout, Zap, ArrowRight, type LucideIcon } from "lucide-react";

const IconMap: { [key: string]: LucideIcon } = {
  Code2: Code2,
  Cloud: Cloud,
  LineChart: LineChart,
  Search: Search,
  Layout: Layout,
  Zap: Zap,
};

const services = [
  {
    id: "desenvolvimento-sob-medida",
    titulo: "Desenvolvimento Sob Medida",
    descricao: "Criamos software corporativo de alta complexidade desenhado especificamente para as regras de negócio da sua empresa.",
    nome_icone: "Code2",
    url_imagem: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
    url_link: "/sobre-servicos#desenvolvimento-sob-medida"
  },
  {
    id: "cloud-infraestrutura",
    titulo: "Cloud & Infraestrutura",
    descricao: "Modernize sua operação migrando para a nuvem. Projetamos e gerenciamos infraestruturas cloud-native.",
    nome_icone: "Cloud",
    url_imagem: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    url_link: "/sobre-servicos#cloud-infraestrutura"
  },
  {
    id: "consultoria-estrategica",
    titulo: "Consultoria Estratégica",
    descricao: "Nossos especialistas atuam como parceiros estratégicos para transformar desafios de negócio em roadmaps técnicos viáveis.",
    nome_icone: "LineChart",
    url_imagem: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    url_link: "/sobre-servicos#consultoria-estrategica"
  },
  {
    id: "data-analytics",
    titulo: "Data & Analytics",
    descricao: "Transforme dados brutos em vantagem competitiva. Construímos pipelines de dados e dashboards inteligentes.",
    nome_icone: "Search",
    url_imagem: "https://images.pexels.com/photos/3810787/pexels-photo-3810787.jpeg",
    url_link: "/sobre-servicos#data-analytics"
  },
  {
    id: "ux-ui-design",
    titulo: "UX/UI Design",
    descricao: "Interfaces que encantam e convertem. Nosso time cria experiências digitais centradas no usuário.",
    nome_icone: "Layout",
    url_imagem: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    url_link: "/sobre-servicos#ux-ui-design"
  },
  {
    id: "automacao-inteligente",
    titulo: "Automação Inteligente",
    descricao: "Otimize fluxos de trabalho e elimine tarefas repetitivas com o uso de IA e robótica de software.",
    nome_icone: "Zap",
    url_imagem: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    url_link: "/sobre-servicos#automacao-inteligente"
  }
];

const Services = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = IconMap[iconName] || Layout;
    return <IconComponent className="w-12 h-12 text-cyan-400" />;
  };

  return (
    <section id="servicos" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 text-cyan-400 font-medium bg-cyan-900/30 px-4 py-1 rounded-full border border-cyan-500/30">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções <span className="text-cyan-500 dark:text-cyan-400">Tecnológicas</span> Sob Medida
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Impulsionamos seu negócio com desenvolvimento web de alta qualidade e soluções inovadoras
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const imageUrl = service.url_imagem;
            const targetLink = service.url_link;

            return (
              <Link href={targetLink} key={service.id} className="block">
                <motion.div
                  className="group bg-foreground/5 rounded-xl shadow-lg overflow-hidden border border-foreground/10 hover:shadow-[0_0_20px_rgba(0,219,255,0.2)] hover:border-cyan-500/50 transition-all h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={service.titulo}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 p-2 bg-background/60 rounded-lg backdrop-blur-md border border-foreground/10">
                      {renderIcon(service.nome_icone)}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{service.titulo}</h3>
                      <p className="text-foreground/70 mb-4">{service.descricao}</p>
                    </div>
                    <span className="inline-flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition mt-4">
                      Saiba mais
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Destaque Tecnológico */}
        <motion.div
          className="mt-20 bg-foreground/5 rounded-2xl shadow-xl overflow-hidden border border-foreground/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-14 bg-linear-to-r from-blue-900/60 to-cyan-900/60 text-foreground border-r border-foreground/10">
              <h3 className="text-3xl font-bold mb-4">Tecnologias que Dominamos</h3>
              <p className="text-foreground/80 mb-6">
                Utilizamos as ferramentas mais modernas do mercado para entregar soluções de alta performance e qualidade.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MSQL'].map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-background/40 border border-foreground/20 rounded-full text-sm text-cyan-600 dark:text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-10 lg:p-14">
              <h3 className="text-3xl font-bold text-foreground mb-4">Nossa Abordagem</h3>
              <p className="text-foreground/70 mb-6">
                Combinamos metodologias ágeis com anos de experiência para entregar projetos que realmente fazem a diferença.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-cyan-900/40 p-1 rounded-full mt-1">
                    <ArrowRight className="text-cyan-400" />
                  </div>
                  <span className="text-foreground/80">Desenvolvimento iterativo e incremental</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-cyan-900/40 p-1 rounded-full mt-1">
                    <ArrowRight className="text-cyan-400" />
                  </div>
                  <span className="text-foreground/80">Foco na experiência do usuário</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-cyan-900/40 p-1 rounded-full mt-1">
                    <ArrowRight className="text-cyan-400" />
                  </div>
                  <span className="text-foreground/80">Testes automatizados e qualidade garantida</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Botão de Voltar */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/"
            className="inline-flex items-center bg-cyan-500 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(0,219,255,0.4)] hover:shadow-[0_0_30px_rgba(0,219,255,0.6)]"
          >
            Voltar para a página inicial
            <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;