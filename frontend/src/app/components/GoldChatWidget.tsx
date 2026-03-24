"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Shield, Zap, Network, Leaf, Send, Sparkles, Code2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

type FlowStep = "initial" | "diagnostic_challenge" | "diagnostic_details" | "generating" | "blueprint_done" | "regular_atendimento" | "regular_pagamento";

export default function GoldChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<FlowStep>("initial");
  
  // Chat History
  const [messages, setMessages] = useState<{ id: string, from: "gold" | "user", text?: string, component?: React.ReactNode, timestamp: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Diagnostic Data
  const [diagnosticData, setDiagnosticData] = useState({ challenge: "", focus: "", name: "" });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getTimestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const addMessage = (from: "gold" | "user", text?: string, component?: React.ReactNode) => {
    setMessages(prev => [...prev, { id: Math.random().toString(36).substring(7), from, text, component, timestamp: getTimestamp() }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Initial Boot Sequence
  useEffect(() => {
    if (open && messages.length === 0) {
      bootSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, messages.length]);

  const bootSequence = async () => {
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 800));
    setIsTyping(false);
    
    addMessage("gold", "Olá! Eu sou Gold, seu Consultor GEDS AI. 🚀\nEstou aqui para mapear a jornada de transformação da sua empresa.");
    
    await new Promise(r => setTimeout(r, 600));
    
    addMessage("gold", "Como podemos acelerar seu negócio hoje?", (
      <div className="flex flex-col gap-2 mt-3">
        <OptionButton icon={<Sparkles className="w-4 h-4 text-purple-400"/>} text="Diagnóstico Inteligente (Recomendado)" onClick={() => startDiagnostic()} />
        <OptionButton icon={<MessageCircle className="w-4 h-4 text-cyan-400"/>} text="Atendimento Comum" onClick={() => startRegular("regular_atendimento")} />
        <OptionButton icon={<Zap className="w-4 h-4 text-yellow-400"/>} text="Setor de Pagamentos" onClick={() => startRegular("regular_pagamento")} />
      </div>
    ));
  };

  const startDiagnostic = async () => {
    addMessage("user", "Fazer Diagnóstico Inteligente");
    setStep("diagnostic_challenge");
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsTyping(false);
    
    addMessage("gold", "Excelente. Para começar, qual é o **maior desafio** que a sua empresa enfrenta no momento?", (
      <div className="grid grid-cols-1 gap-2 mt-3">
        <OptionButton text="Sofremos ataques e falta segurança" onClick={() => handleChallenge("Security")} />
        <OptionButton text="Queremos escalar e inovar nosso software" onClick={() => handleChallenge("Software")} />
        <OptionButton text="Nossa matriz de rede está instável" onClick={() => handleChallenge("Network")} />
        <OptionButton text="Precisamos de eficiência energética e ESG" onClick={() => handleChallenge("GreenTech")} />
      </div>
    ));
  };

  const handleChallenge = async (challenge: string) => {
    const labels: Record<string, string> = {
      Security: "Sofremos ataques e falta segurança",
      Software: "Queremos escalar e inovar nosso software",
      Network: "Nossa matriz de rede está instável",
      GreenTech: "Precisamos de eficiência energética e ESG"
    };
    addMessage("user", labels[challenge]);
    setDiagnosticData(prev => ({ ...prev, focus: challenge, challenge: labels[challenge] }));
    setStep("diagnostic_details");
    
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 1200));
    setIsTyping(false);
    
    addMessage("gold", "Entendido. A conectividade e segurança são pilares na GEDS. Por favor, digite seu **Nome e o Nome da Empresa** para que eu possa gerar o seu Blueprint exclusivo.");
  };

  const handleTextSubmit = async () => {
    if (!input.trim()) return;
    const text = input;
    setInput("");
    addMessage("user", text);

    if (step === "diagnostic_details") {
      setDiagnosticData(prev => ({ ...prev, name: text }));
      setStep("generating");
      
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1500));
      
      addMessage("gold", "Analisando seus dados através do nosso motor de inteligência...");
      
      await new Promise(r => setTimeout(r, 2000));
      setIsTyping(false);
      
      generateBlueprint(diagnosticData.focus, text);
    }
    // Simplificando o fallback para os modos "Atendimento" e "Pagamento" base
    else if (step === "regular_atendimento" || step === "regular_pagamento") {
      setIsTyping(true);
      await new Promise(r => setTimeout(r, 1000));
      setIsTyping(false);
      addMessage("gold", "Nossa equipe foi notificada do seu interesse e logo entrará em contato. Que a força da inovação GEDS esteja com você!");
      setStep("initial");
    }
  };

  const generateBlueprint = (focus: string, name: string) => {
    setStep("blueprint_done");
    
    let Icon = Shield;
    let title = "GEDS Cybersecurity Shield";
    let color = "from-emerald-500 to-cyan-500";
    let stats = ["Zero-Trust Arc", "12.4k Ameaças/s"];

    if (focus === "Software") {
      Icon = Code2; title = "GEDS Lab Factory"; color = "from-purple-500 to-blue-500"; stats = ["Cloud-Native", "99.9% Uptime"];
    } else if (focus === "Network") {
      Icon = Network; title = "GEDS Neural Net"; color = "from-cyan-500 to-blue-600"; stats = ["Latência < 5ms", "SD-WAN"];
    } else if (focus === "GreenTech") {
      Icon = Leaf; title = "GEDS Eco Core"; color = "from-green-400 to-emerald-600"; stats = ["Zero Carbon", "Painel ESG"];
    }

    addMessage("gold", "✅ Diagnóstico concluído! Aqui está a sua planta tática personalizada GEDS:");
    
    addMessage("gold", "", (
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`mt-2 rounded-2xl p-[1px] bg-gradient-to-br ${color} overflow-hidden shadow-2xl`}>
        <div className="bg-[#050505] rounded-[15px] p-5 h-full relative overflow-hidden">
           <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${color} opacity-20 blur-3xl rounded-full`} />
           
           <div className="flex items-center gap-3 mb-4 relative z-10">
             <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${color} flex items-center justify-center shadow-lg`}>
               <Icon className="w-5 h-5 text-white" />
             </div>
             <div>
               <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">GEDS Blueprint</p>
               <h4 className="text-white font-black text-sm leading-tight">{title}</h4>
             </div>
           </div>

           <p className="text-gray-300 text-xs mb-4">Solução recomendada para <strong>{name}</strong> superar o desafio de mercado.</p>
           
           <div className="grid grid-cols-2 gap-2 mb-4">
             {stats.map((s, i) => (
               <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                 <span className="text-[9px] text-cyan-400 font-black uppercase tracking-wider">{s}</span>
               </div>
             ))}
           </div>

           <button 
             onClick={() => window.location.href = '/contatos'}
             className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${color} text-white font-black text-[10px] uppercase tracking-widest hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2`}
           >
             Implementar Solução <ChevronRight className="w-3 h-3"/>
           </button>
        </div>
      </motion.div>
    ));

    setTimeout(() => {
      addMessage("gold", "Fascinante, não é? Um especialista da GEDS entrará em contato com você em menos de 15 minutos para falar sobre esse diagnóstico.");
    }, 1500);
  };

  const startRegular = async (type: FlowStep) => {
    setStep(type);
    addMessage("user", type === "regular_atendimento" ? "Atendimento Comum" : "Setor de Pagamentos");
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 800));
    setIsTyping(false);
    addMessage("gold", type === "regular_atendimento" 
      ? "Certamente. Por favor, descreva em poucas palavras sobre o que você deseja conversar com nossa equipe."
      : "Perfeito. Trabalhamos com PIX, Cartão de Crédito e Boleto. Qual seu nome e o que deseja pagar?"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 bg-[#0a0a0a]/90 backdrop-blur-xl text-cyan-400 text-[10px] sm:text-xs font-black px-6 py-3 rounded-2xl shadow-[0_0_30px_rgba(0,219,255,0.2)] border border-cyan-500/30 mb-2 whitespace-nowrap uppercase tracking-widest flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Inovação a um clique <span className="animate-bounce inline-block ml-1">👇</span>
          </motion.div>
        )}
      </AnimatePresence>

      {!open ? (
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,219,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="bg-black/80 backdrop-blur-md text-cyan-400 p-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,219,255,0.2)] border border-cyan-500/40 transition-all duration-500 group relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          {/* Animated Gold Orb */}
          <div className="absolute inset-0 bg-cyan-400/20 animate-ping rounded-full" />
          <MessageCircle className="w-8 h-8 relative z-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,219,255,0.8)]" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="w-[calc(100vw-40px)] sm:w-[420px] h-[600px] bg-[#050505]/95 backdrop-blur-3xl rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(0,219,255,0.15)] border border-white/10 flex flex-col overflow-hidden relative"
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Header */}
          <div className="p-5 flex justify-between items-center relative overflow-hidden border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-12 h-12 rounded-2xl border border-cyan-500/40 shadow-[0_0_20px_rgba(0,219,255,0.3)] overflow-hidden relative transition-transform duration-500 group-hover:scale-105 bg-black">
                  <NextImage src="/gold.jpg" alt="Gold AI" fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent mix-blend-overlay" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-[2px] border-[#0a0a0a] shadow-[0_0_10px_rgba(52,211,153,0.8)]">
                  <div className="w-full h-full bg-emerald-300 rounded-full animate-ping opacity-75" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-black text-lg tracking-tight leading-none mb-1 flex items-center gap-2">
                  GEDS AI <Sparkles className="w-4 h-4 text-cyan-400"/>
                </h3>
                <p className="text-cyan-400 text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 mt-1">
                  Consultoria Avançada
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Wrapper */}
          <div className="flex-1 px-5 py-6 overflow-y-auto space-y-6 custom-scrollbar relative z-10 w-full flex flex-col">
            {messages.map((msg) => (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                key={msg.id}
                className={`flex w-full ${msg.from === "gold" ? "justify-start" : "justify-end"}`}
              >
                <div className={`max-w-[85%] flex flex-col ${msg.from === "gold" ? "items-start" : "items-end"}`}>
                  {msg.text && (
                    <div
                      className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-lg relative ${msg.from === "gold"
                        ? "bg-white/[0.06] text-gray-200 border border-white/10 rounded-tl-sm"
                        : "bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-tr-sm shadow-[0_10px_30px_rgba(0,219,255,0.2)]"
                        }`}
                    >
                      {/* Markdown bold formatting highlight */}
                      <p className="whitespace-pre-line font-medium" 
                         dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-300 font-black">$1</strong>') }} />
                    </div>
                  )}
                  {msg.component && (
                    <div className="w-full mt-2">
                      {msg.component}
                    </div>
                  )}
                  <div className={`text-[9px] mt-1.5 opacity-40 font-bold uppercase tracking-widest ${msg.from === "gold" ? "self-start ml-2" : "self-end mr-2"}`}>
                    {msg.timestamp}
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                 <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                   <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                   <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                   <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                 </div>
               </motion.div>
            )}
            
            <div ref={messagesEndRef} className="h-1" />
          </div>

          {/* Input Area */}
          <div className="p-5 bg-black/60 border-t border-white/10 backdrop-blur-3xl relative z-10">
            <div className="flex items-center bg-white/5 rounded-2xl border border-white/10 p-1.5 focus-within:border-cyan-500/50 focus-within:bg-white/[0.08] transition-all duration-300 shadow-inner group">
              <input
                type="text"
                placeholder="Escreva sua mensagem..."
                className="flex-1 bg-transparent border-none outline-none text-white text-sm font-bold px-4 placeholder:text-white/30"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTextSubmit()}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleTextSubmit}
                disabled={!input.trim()}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-lg ${input.trim() ? 'bg-cyan-500 text-black shadow-cyan-500/30' : 'bg-white/10 text-white/30'}`}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
            
            <div className="flex justify-center mt-3 items-center gap-1 opacity-40">
              <Shield className="w-3 h-3 text-cyan-400" />
              <span className="text-[8px] uppercase font-black tracking-widest text-cyan-400">GEDS Secure Encryption</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Custom Helper Component for Buttons inside Chat
function OptionButton({ icon, text, onClick }: { icon?: React.ReactNode, text: string, onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-black/40 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all cursor-pointer group"
    >
      {icon && <div className="bg-white/5 p-1.5 rounded-lg border border-white/5 group-hover:border-cyan-500/30 transition-colors">{icon}</div>}
      <span className="text-white text-xs font-bold flex-1">{text}</span>
      <ChevronRight className="w-3 h-3 text-white/30 group-hover:text-cyan-400 transition-colors" />
    </motion.button>
  );
}
