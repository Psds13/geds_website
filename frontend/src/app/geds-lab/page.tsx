import { Metadata } from 'next';
import Image from 'next/image';
import { Beaker, Code, Cpu, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
    title: 'GEDS Lab - Laboratório de Inovação',
    description: 'O espaço onde a GEDS Inovação mostra ideias, protótipos e experimentos tecnológicos.',
};

export default function GedsLab() {
    const sections = [
        {
            id: "desenvolvimento",
            title: "Projetos em desenvolvimento",
            description: "Tecnologias que estamos construindo agora.",
            icon: <Code className="w-8 h-8 text-cyan" />,
            items: [
                { title: "Sistema inteligente para pequenas empresas", status: "Em progresso" },
                { title: "Plataforma de ideias de startups", status: "Em progresso" }
            ]
        },
        {
            id: "prototipos",
            title: "Protótipos",
            description: "Demonstrações práticas e testes de conceitos.",
            icon: <Cpu className="w-8 h-8 text-blue-400" />,
            items: [
                { title: "Site teste interativo", status: "Teste" },
                { title: "Aplicativo em fase inicial", status: "MVP" },
                { title: "Sistema experimental", status: "Alfa" }
            ]
        },
        {
            id: "inovacao",
            title: "Ideias de inovação",
            description: "Conceitos que podem se tornar grandes projetos.",
            icon: <Lightbulb className="w-8 h-8 text-cyan" />,
            items: [
                { title: "Aplicativo para conectar estudantes", status: "Conceito" },
                { title: "Plataforma de colaboração tecnológica", status: "Ideia" }
            ]
        }
    ];

    return (
        <main className="bg-black min-h-screen text-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header do Lab */}
                <section className="text-center mb-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan/20 rounded-full mb-6 relative">
                        <Beaker className="w-10 h-10 text-cyan relative z-10" />
                        <div className="absolute inset-0 bg-cyan blur-[30px] opacity-30 rounded-full"></div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-linear-to-r from-blue-400 via-cyan to-white bg-clip-text text-transparent">
                        GEDS Lab
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
                        Laboratório de Inovação
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto italic">
                        &quot;O espaço onde ideias se transformam em tecnologia.&quot; 🚀
                    </p>
                </section>

                {/* Sobre o Lab */}
                <section className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 mb-20">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-full max-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,219,255,0.2)] border border-white/10">
                                <Image src="/GEDS Lab.png" alt="GEDS Lab" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold mb-4">Um espaço de experimentação</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                O GEDS Lab é o laboratório de inovação da GEDS onde demonstramos
                                nossas ideias, protótipos e experimentos tecnológicos. É aqui que nossa
                                criatividade ganha forma para mostrar que estamos sempre criando,
                                testando e validando novas soluções para o futuro.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-cyan/10 text-cyan rounded-full text-sm font-bold border border-cyan/20">💡 Ideias</span>
                                <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm font-bold border border-blue-500/20">🖥️ Protótipos</span>
                                <span className="px-4 py-2 bg-cyan/10 text-cyan rounded-full text-sm font-bold border border-cyan/20">🤖 Experimentos</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Estrutura de Projetos */}
                <div className="space-y-16">
                    {sections.map((section) => (
                        <section key={section.id} className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                                    <p className="text-gray-400">{section.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item, i) => (
                                    <div key={i} className="bg-black/50 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors shadow-lg group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                                                <span className="text-xs">✨</span>
                                            </div>
                                            <span className="text-[10px] font-bold px-3 py-1 bg-white/10 rounded-full text-gray-300 uppercase tracking-wider">
                                                {item.status}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan transition-colors">{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
