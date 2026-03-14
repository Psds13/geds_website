import { Metadata } from 'next';
import Image from 'next/image';
import { Target, Leaf, MonitorCheck, Globe2, ArrowUpRight, BarChart3, TreePine, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'GEDS Green Tech - Inovação Sustentável',
    description: 'A tecnologia da GEDS voltada para um futuro mais eficiente e responsável.',
};

export default function GreenTech() {
    return (
        <main className="bg-black min-h-screen text-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <section className="text-center mb-24">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan/10 rounded-full mb-6 relative">
                        <Leaf className="w-10 h-10 text-cyan relative z-10" />
                        <div className="absolute inset-0 bg-cyan blur-[40px] opacity-20 rounded-full"></div>
                    </div>
                    <span className="block mb-2 text-cyan font-bold tracking-widest uppercase text-sm">
                        Future Impact
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 bg-linear-to-r from-white via-cyan to-blue-500 bg-clip-text text-transparent">
                        GEDS Green Tech
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Inovação digital alinhada com a sustentabilidade global.
                    </p>
                </section>

                {/* Dashboard: Impacto Tecnológico */}
                <section className="mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50%] bg-cyan/5 blur-[120px] rounded-full -z-10"></div>
                    <div className="flex items-center gap-3 mb-8">
                        <BarChart3 className="w-6 h-6 text-cyan" />
                        <h2 className="text-2xl md:text-3xl font-bold">Impacto Tecnológico da GEDS</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-cyan/30 transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                <TreePine className="w-16 h-16 text-cyan/20 group-hover:text-cyan/40 transition-colors" />
                            </div>
                            <h3 className="text-gray-400 text-lg font-medium mb-2 relative z-10">Papel Economizado</h3>
                            <div className="text-5xl font-black text-white mb-2 flex items-baseline gap-2 relative z-10">
                                📄 <span className="text-xl text-cyan">em alta</span>
                            </div>
                            <p className="text-sm text-gray-500 relative z-10">Documentos e fluxos migrados para o digital</p>
                        </div>
                        
                        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-cyan/30 transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                <Zap className="w-16 h-16 text-cyan/20 group-hover:text-cyan/40 transition-colors" />
                            </div>
                            <h3 className="text-gray-400 text-lg font-medium mb-2 relative z-10">Processos Automatizados</h3>
                            <div className="text-5xl font-black text-white mb-2 flex items-baseline gap-2 relative z-10">
                                98<span className="text-xl text-cyan">%</span>
                            </div>
                            <p className="text-sm text-gray-500 relative z-10">Aumento do grau de eficiência operacional</p>
                        </div>

                        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-cyan/30 transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                <Globe2 className="w-16 h-16 text-cyan/20 group-hover:text-cyan/40 transition-colors" />
                            </div>
                            <h3 className="text-gray-400 text-lg font-medium mb-2 relative z-10">Soluções Digitais</h3>
                            <div className="text-5xl font-black text-white mb-2 flex items-baseline gap-2 relative z-10">
                                100<span className="text-xl text-cyan">%</span>
                            </div>
                            <p className="text-sm text-gray-500 relative z-10">Focadas no uso inteligente de cloud computing</p>
                        </div>
                    </div>
                </section>

                {/* Duas Colunas: Visão & Soluções */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* Tecnologia e Futuro */}
                    <section className="bg-linear-to-b from-cyan/5 to-transparent border border-cyan/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-cyan/10 blur-[50px] rounded-full"></div>
                        <div className="mb-8 relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,219,255,0.2)] border border-cyan/20">
                            <Image src="/GEDS Green Tech.png" alt="GEDS Green Tech" fill className="object-cover" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Tecnologia e Futuro</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            A transformação digital não é apenas sobre o agora. É sobre garantir que as nossas 
                            inovações não prejudiquem o amanhã. Na GEDS, o ecossistema digital é projetado para 
                            operar de forma limpa, baseando-se em arquiteturas modernas que consomem apenas 
                            os recursos necessários, na hora certa.
                        </p>
                        <div className="mt-auto">
                            <span className="inline-flex items-center gap-2 text-sm text-cyan font-bold bg-cyan/10 px-4 py-2 rounded-full">
                                Infraestrutura Eficiente <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </div>
                    </section>

                    {/* Soluções Digitais Sustentáveis */}
                    <section className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 h-full">
                        <MonitorCheck className="w-12 h-12 text-cyan mb-6" />
                        <h2 className="text-3xl font-bold mb-4 text-white">Soluções Sustentáveis</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Nossa frente de engenharia atua ativamente para reduzir a dívida técnica e 
                            o desperdício, eliminando redundâncias de servidores e papéis físicos com sistemas 
                            robustos e de alta usabilidade.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="bg-cyan/10 p-2 rounded-lg text-cyan shrink-0">
                                    <MonitorCheck className="w-5 h-5" />
                                </span>
                                <div>
                                    <strong className="block text-white text-lg">Sistemas Online</strong>
                                    <span className="text-sm text-gray-400">Migração de fluxo físico para o digital.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="bg-cyan/10 p-2 rounded-lg text-cyan shrink-0">
                                    <Zap className="w-5 h-5" />
                                </span>
                                <div>
                                    <strong className="block text-white text-lg">Automação Inteligente</strong>
                                    <span className="text-sm text-gray-400">Redução do tempo logístico e recursos vitais.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="bg-cyan/10 p-2 rounded-lg text-cyan shrink-0">
                                    <Leaf className="w-5 h-5" />
                                </span>
                                <div>
                                    <strong className="block text-white text-lg">Paperless (Zero Papel)</strong>
                                    <span className="text-sm text-gray-400">Assinaturas, contratos e fichas 100% via software.</span>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Compromisso */}
                <section className="max-w-4xl mx-auto text-center border-t border-white/10 pt-16">
                    <Target className="w-12 h-12 mx-auto text-cyan mb-6" />
                    <h2 className="text-3xl font-bold mb-4 text-white">Nosso Compromisso</h2>
                    <p className="text-xl text-gray-400 leading-relaxed italic">
                        &quot;Desenvolver software é criar o futuro. E nós tomamos a decisão de construir 
                        um amanhã onde a agilidade dos negócios coexista perfeitamente com a responsabilidade 
                        para com o planeta.&quot;
                    </p>
                </section>
                
            </div>
        </main>
    );
}
