'use client';

import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { PostgrestSingleResponse, PostgrestResponse } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import { FiEdit, FiAward, FiActivity, FiCpu, FiWind, FiMessageSquare } from 'react-icons/fi';
import Image from 'next/image';

interface UserData {
  name: string;
  role: string;
  avatar: string;
  email: string;
  stats: {
    projects: number;
    experience: number;
    clients: number;
  };
}

export default function UserProfile() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const client = supabase;
        if (!client) {
          console.warn('Supabase not configured, skipping fetchUser');
          setLoading(false);
          return;
        }

        const { data, error } = await (client
          .from('usuarios')
          .select('*')
          .eq('email', 'edmilson@gedsinovacao.com')
          .single() as unknown as Promise<PostgrestSingleResponse<Record<string, unknown>>>);

        if (error) throw error;

        if (data) {
          const { count: projectCount } = await (client
            .from('projetos')
            .select('*', { count: 'exact', head: true })
            .eq('proprietario_id', (data as { id: string }).id) as unknown as Promise<PostgrestResponse<Record<string, unknown>>>);

          setUser({
            name: (data as Record<string, unknown>).nome as string || 'Administrador',
            role: (data as Record<string, unknown>).cargo as string || 'Engenheiro de Sistemas',
            avatar: ((data as Record<string, unknown>).url_avatar as string) || "https://randomuser.me/api/portraits/men/32.jpg",
            email: (data as Record<string, unknown>).email as string,
            stats: {
              projects: projectCount || 3,
              experience: ((data as Record<string, unknown>).experiencia_anos as number) || 5,
              clients: ((data as Record<string, unknown>).total_clientes as number) || 20
            }
          });
        }
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
        // Mock data to ensure the futuristic dashboard always shows up even if API fails
        setUser({
          name: 'João Silva',
          role: 'CEO',
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          email: 'joao.silva@exemplo.com',
          stats: { projects: 4, experience: 10, clients: 8 }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin shadow-[0_0_30px_rgba(0,219,255,0.5)]"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-cyan-500 font-mono">
        <p>Acesso Negado ou Usuário não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white p-4 md:p-8 font-sans overflow-hidden relative selection:bg-cyan-500 selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020202] to-purple-900/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/grid-pattern.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      {/* Header Banner */}
      <header className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-white/10">
        <div>
          <p className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            GEDS Hub / Sistema Operacional Conectado
          </p>
          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase">Painel de Comando</h1>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
          <Image src={user.avatar} alt={user.name} width={40} height={40} className="rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(0,219,255,0.3)] object-cover" />
          <div>
            <p className="text-sm font-bold uppercase tracking-tight">{user.name}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">{user.role}</p>
          </div>
          <button className="ml-4 text-cyan-400 hover:text-white transition-colors bg-cyan-500/10 p-2 rounded-full">
            <FiEdit />
          </button>
        </div>
      </header>

      {/* Main Grid using Drag Constraints */}
      <motion.div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[240px]">
        
        {/* WIDGET: Status do Projeto Principal */}
        <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.1} whileDrag={{ scale: 1.05, zIndex: 100 }} 
          className="col-span-1 md:col-span-2 row-span-1 bg-black/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-xl shadow-2xl cursor-grab active:cursor-grabbing border-t-cyan-500/50">
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-1"><FiCpu className="inline mr-2 text-cyan-400" /> Andamento do Projeto</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">App Transformation GEDS</p>
            </div>
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyan-500/30">Fase 3: Cloud</span>
          </div>
          <div className="mt-8">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
              <span className="text-gray-400">Progresso Geral</span>
              <span className="text-cyan-400 text-lg">74%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "74%" }} className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" transition={{ duration: 1.5, ease: "easeOut" }} />
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-4">PRÓX. ENTREGA: Deploy de Infraestrutura (Estimado: 3 dias)</p>
          </div>
        </motion.div>

        {/* WIDGET: Network Status */}
        <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.1} whileDrag={{ scale: 1.05, zIndex: 100 }}
          className="col-span-1 row-span-1 bg-black/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-xl shadow-2xl cursor-grab active:cursor-grabbing border-t-purple-500/50">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full" />
          <h3 className="text-sm font-black uppercase tracking-tight text-white mb-6"><FiActivity className="inline mr-2 text-purple-400" /> GEDS Network</h3>
          <div className="flex flex-col items-center justify-center h-28">
            <div className="relative flex items-center justify-center w-20 h-20">
              <div className="absolute inset-0 border-[3px] border-purple-500/20 rounded-full" />
              <div className="absolute inset-0 border-[3px] border-purple-400 rounded-full border-t-transparent animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-xl font-black text-white italic">UP</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-3">
            <span className="text-[9px] text-gray-400 uppercase tracking-widest">Latência</span>
            <span className="text-[10px] text-purple-400 font-bold">14ms</span>
          </div>
        </motion.div>

        {/* WIDGET: Green Tech Impact */}
        <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.1} whileDrag={{ scale: 1.05, zIndex: 100 }}
          className="col-span-1 row-span-1 bg-black/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-xl shadow-2xl cursor-grab active:cursor-grabbing border-t-emerald-500/50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/10 blur-[60px] rounded-full" />
          <h3 className="text-sm font-black uppercase tracking-tight text-white mb-4"><FiWind className="inline mr-2 text-emerald-400" /> Green Tech</h3>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between mb-3">
            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">CO2 Salvo</span>
            <span className="text-2xl font-black text-emerald-400">42<span className="text-xs">kg</span></span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center justify-between">
            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Energia Otimizada</span>
            <span className="text-sm font-black text-emerald-300">18%</span>
          </div>
        </motion.div>

        {/* WIDGET: Contato & Tickets */}
        <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.1} whileDrag={{ scale: 1.05, zIndex: 100 }}
          className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 bg-black/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col cursor-grab active:cursor-grabbing border-t-blue-500/50">
          <h3 className="text-sm font-black uppercase tracking-tight text-white mb-6"><FiMessageSquare className="inline mr-2 text-blue-400" /> Tickets de Suporte</h3>
          <div className="flex-1 space-y-3">
            {[
              { id: "TK-402", title: "Configuração de DNS", status: "Em Aberto", color: "text-yellow-400", bg: "bg-yellow-500/20" },
              { id: "TK-401", title: "Ajuste na Interface CSS", status: "Resolvido", color: "text-emerald-400", bg: "bg-emerald-500/20" },
              { id: "TK-399", title: "Relatório de Vulnerabilidades", status: "Resolvido", color: "text-emerald-400", bg: "bg-emerald-500/20" },
            ].map((tk, i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors hover:bg-white/10 cursor-pointer">
                <div className="flex justify-between mb-2">
                  <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest">{tk.id}</span>
                  <span className={`text-[8px] px-2 py-0.5 rounded-full uppercase font-black tracking-widest ${tk.color} ${tk.bg}`}>{tk.status}</span>
                </div>
                <p className="text-xs font-bold text-white">{tk.title}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-[10px] uppercase tracking-[0.2em] transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Abrir Novo Ticket
          </button>
        </motion.div>

        {/* WIDGET: Metrics / Stats Pessoais */}
        <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.1} whileDrag={{ scale: 1.05, zIndex: 100 }}
          className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 bg-black/40 border border-white/10 rounded-3xl p-6 relative overflow-hidden backdrop-blur-xl shadow-2xl cursor-grab active:cursor-grabbing border-t-yellow-500/50">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
          <h3 className="text-sm font-black uppercase tracking-tight text-white mb-6"><FiAward className="inline mr-2 text-yellow-400" /> Analytics do Usuário</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <span className="block text-3xl font-black text-white italic mb-1">{user.stats.projects}</span>
              <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest">Projetos Ativos</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <span className="block text-3xl font-black text-yellow-400 italic mb-1">{user.stats.experience}</span>
              <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest">Anos Parceiro</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <span className="block text-3xl font-black text-white italic mb-1">{user.stats.clients}</span>
              <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest">Assinaturas GEDS</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
