"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Network, Server, Wifi, Monitor, Shield, Zap, Leaf, Beaker,
  Activity, AlertTriangle, CheckCircle2, ArrowRight, Headphones,
  TicketCheck, MapPin, Cpu, BarChart3, Radio,
  TrendingDown, TrendingUp, ChevronRight, RotateCcw,
  Building2, Rocket, Building, Hospital,
} from "lucide-react";

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      nodes.forEach((a, i) => {
        nodes.forEach((b, j) => {
          if (i >= j) return;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.1 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.4)";
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let c = 0;
        const step = target / 60;
        const id = setInterval(() => {
          c += step;
          if (c >= target) {
            setVal(target);
            clearInterval(id);
          } else setVal(Math.floor(c));
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function NetworkDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  const bandwidth = [42, 58, 61, 55, 70, 63, 78, 72, 80, 75, 85, 88 + (tick % 6)];
  const latency = 12 + (tick % 4);
  const devices = 47 + (tick % 3);
  const uptime = 99.97;

  const metrics = [
    { label: "Status da rede", value: "Online", icon: Wifi, ok: true },
    { label: "Uso de banda", value: `${bandwidth[bandwidth.length - 1]}%`, icon: BarChart3, ok: false },
    { label: "Dispositivos", value: String(devices), icon: Monitor, ok: false },
    { label: "Latência", value: `${latency} ms`, icon: Activity, ok: false },
  ];

  return (
    <div className="border border-foreground/10 rounded-xl p-6 md:p-8 bg-background">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Painel de rede</h3>
          <p className="text-foreground/50 text-sm">Monitoramento em tempo real</p>
        </div>
        <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-medium bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Online
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {metrics.map((m, i) => (
          <div key={i} className="p-4 rounded-lg border border-foreground/10 bg-foreground/[0.02]">
            <m.icon size={18} className="text-blue-600 dark:text-blue-400 mb-3" />
            <p className="text-xl font-semibold text-foreground">{m.value}</p>
            <p className="text-foreground/50 text-xs mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <p className="text-foreground/50 text-xs mb-3">Uso de banda — últimos 12 ciclos</p>
        <div className="flex items-end gap-1 h-20 bg-foreground/[0.02] rounded-lg p-3 border border-foreground/10">
          {bandwidth.map((v, i) => (
            <div key={i} className="flex-1 rounded-sm bg-blue-500/60" style={{ height: `${v}%` }} />
          ))}
        </div>
      </div>

      <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between">
        <div>
          <p className="text-foreground/50 text-xs">Uptime</p>
          <p className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">{uptime}%</p>
        </div>
        <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      </div>
    </div>
  );
}

const companyTypes = [
  { id: "startup", label: "Startup / PME", icon: Rocket },
  { id: "medium", label: "Empresa média", icon: Building2 },
  { id: "enterprise", label: "Enterprise", icon: Building },
  { id: "hospital", label: "Hospital / Clínica", icon: Hospital },
];

const problemsList = [
  "Quedas frequentes de internet",
  "Lentidão na rede",
  "Falhas no servidor",
  "Dificuldade em acesso remoto",
  "Sem monitoramento de rede",
];

function InfraSimulator() {
  const [computers, setComputers] = useState(20);
  const [company, setCompany] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const [result, setResult] = useState<{ bottleneck: string; solution: string; priority: string } | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const toggleProblem = (p: string) =>
    setProblems((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  const analyze = async () => {
    if (!company || problems.length === 0) return;
    setAnalyzing(true);
    await new Promise((r) => setTimeout(r, 1500));

    const bottlenecks: Record<string, string> = {
      startup: "Infraestrutura básica sem redundância",
      medium: "Equipamentos antigos e novos criando gargalos",
      enterprise: "Segmentação inadequada e sobrecarga de switches",
      hospital: "Rede crítica sem VLAN para equipamentos médicos",
    };
    const solutions: Record<string, string> = {
      startup: "Switch gerenciável + firewall + monitoramento",
      medium: "Unificação com switches gerenciáveis e cabeamento estruturado",
      enterprise: "Redesign com SD-WAN e segmentação por VLAN",
      hospital: "Rede segregada com QoS prioritário e redundância",
    };

    setResult({
      bottleneck: bottlenecks[company] || "Infraestrutura mal dimensionada",
      solution: solutions[company] || "Auditoria completa e reestruturação gradual",
      priority: problems.length >= 3 ? "Alta" : problems.length === 2 ? "Média" : "Baixa",
    });
    setAnalyzing(false);
  };

  const reset = () => {
    setResult(null);
    setComputers(20);
    setCompany("");
    setProblems([]);
  };

  return (
    <div className="border border-foreground/10 rounded-xl p-6 md:p-8 bg-background">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
          <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Diagnóstico de infraestrutura</h3>
          <p className="text-foreground/50 text-sm">Simule o perfil da sua empresa</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-foreground/70">Dispositivos na rede</label>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{computers}</span>
              </div>
              <input
                type="range"
                min={1}
                max={500}
                value={computers}
                onChange={(e) => setComputers(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>

            <div>
              <p className="text-sm text-foreground/70 mb-3">Tipo de empresa</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {companyTypes.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCompany(c.id)}
                    className={`flex items-center gap-3 p-4 rounded-lg border text-left text-sm transition-colors ${
                      company === c.id
                        ? "bg-blue-500/10 border-blue-500/30 text-foreground"
                        : "border-foreground/10 text-foreground/60 hover:border-foreground/20"
                    }`}
                  >
                    <c.icon size={18} />
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-foreground/70 mb-3">Problemas identificados</p>
              <div className="space-y-2">
                {problemsList.map((p) => (
                  <button
                    key={p}
                    onClick={() => toggleProblem(p)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left text-sm transition-colors ${
                      problems.includes(p)
                        ? "bg-yellow-500/10 border-yellow-500/30 text-foreground"
                        : "border-foreground/10 text-foreground/60 hover:border-foreground/20"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center ${
                        problems.includes(p) ? "border-yellow-500 bg-yellow-500" : "border-foreground/20"
                      }`}
                    >
                      {problems.includes(p) && <CheckCircle2 className="w-2.5 h-2.5 text-black" />}
                    </div>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={analyze}
              disabled={!company || problems.length === 0 || analyzing}
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {analyzing ? "Analisando..." : "Diagnosticar infraestrutura"}
            </button>
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="p-4 rounded-lg border border-foreground/10">
              <p className="text-xs text-foreground/50 mb-1">Prioridade</p>
              <p className="text-lg font-semibold text-foreground">{result.priority}</p>
            </div>
            <div className="p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
              <p className="text-xs text-yellow-600 dark:text-yellow-400 mb-1">Gargalo identificado</p>
              <p className="text-sm text-foreground">{result.bottleneck}</p>
            </div>
            <div className="p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">Solução recomendada</p>
              <p className="text-sm text-foreground">{result.solution}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contatos"
                className="flex-1 text-center py-3 bg-blue-600 text-white font-medium rounded-lg text-sm hover:opacity-90"
              >
                Solicitar solução
              </Link>
              <button
                onClick={reset}
                className="p-3 border border-foreground/10 rounded-lg hover:bg-foreground/5 transition-colors"
                aria-label="Reiniciar"
              >
                <RotateCcw className="w-4 h-4 text-foreground/50" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const services = [
  {
    icon: Headphones,
    title: "Suporte técnico",
    items: ["Atendimento humanizado", "Manutenção preventiva", "Suporte remoto e presencial"],
  },
  {
    icon: Network,
    title: "Infraestrutura de redes",
    items: ["Redes corporativas", "Cabeamento estruturado", "Configuração de equipamentos"],
  },
  {
    icon: Activity,
    title: "Monitoramento 24/7",
    items: ["Monitoramento em tempo real", "Alertas automáticos", "Identificação proativa de falhas"],
  },
  {
    icon: Server,
    title: "Gestão de servidores",
    items: ["Configuração e manutenção", "Alta disponibilidade", "Controle de desempenho"],
  },
];

const beforeAfter = [
  { before: "Quedas de internet frequentes", after: "Uptime de 99,97%" },
  { before: "Horas paradas por falha de rede", after: "Failover automático em segundos" },
  { before: "Sem visibilidade da infraestrutura", after: "Dashboard em tempo real" },
  { before: "Suporte lento e sem SLA", after: "Atendimento com SLA definido" },
  { before: "Servidores sem backup", after: "Backup automatizado com versionamento" },
];

const ecosystem = [
  { name: "Nortech Inovação", icon: Zap, desc: "Sistemas que dependem de rede estável", href: "/" },
  { name: "Nortech Security", icon: Shield, desc: "Proteção da infraestrutura", href: "/nortech-security" },
  { name: "Nortech Lab", icon: Beaker, desc: "Testes e inovação", href: "/nortech-lab" },
  { name: "Nortech Green", icon: Leaf, desc: "Eficiência energética", href: "/green-tech" },
];

export default function NortechNetwork() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden border-b border-foreground/5">
        <NetworkBackground />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-3/5"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-4">
                Infraestrutura & conectividade
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Redes e servidores para empresas
              </h1>
              <p className="text-lg text-foreground/60 max-w-xl mb-8 leading-relaxed">
                Suporte em redes, servidores e conectividade. Montamos infraestruturas
                resilientes para o seu negócio operar com estabilidade.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/contatos"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg text-sm hover:opacity-90"
                >
                  Solicitar análise
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contatos"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-foreground/20 rounded-lg font-medium text-sm hover:bg-foreground/5"
                >
                  <Headphones className="w-4 h-4" />
                  Falar com suporte
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-foreground/10">
                {[
                  { label: "Uptime", value: 99, suffix: ".97%" },
                  { label: "Parceiros", value: 80, suffix: "+" },
                  { label: "Projetos", value: 120, suffix: "+" },
                  { label: "SLA (min)", value: 15, suffix: "" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                      <Counter target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-foreground/50 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:w-2/5 w-full flex justify-center"
            >
              <div className="relative w-full max-w-sm aspect-square rounded-xl border border-foreground/10 overflow-hidden bg-foreground/[0.02]">
                <Image
                  src="/Nortech Network.png"
                  alt="Nortech Network"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 md:py-24 px-6 bg-foreground/[0.02] border-b border-foreground/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Nossos serviços</h2>
            <p className="text-foreground/60">Cobertura completa de infraestrutura de TI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-foreground/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                  <s.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/60">
                      <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard + Simulador */}
      <section className="py-20 md:py-24 px-6 border-b border-foreground/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Ferramentas interativas</h2>
            <p className="text-foreground/60">Visualize e diagnostique sua infraestrutura.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <NetworkDashboard />
            <InfraSimulator />
          </div>
        </div>
      </section>

      {/* Antes / Depois */}
      <section className="py-20 md:py-24 px-6 bg-foreground/[0.02] border-b border-foreground/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Antes e depois</h2>
            <p className="text-foreground/60">O impacto de uma infraestrutura bem gerenciada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/15">
              <TrendingDown size={16} className="text-red-500" />
              <span className="text-sm font-medium text-red-600 dark:text-red-400">Sem suporte especializado</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
              <TrendingUp size={16} className="text-emerald-500" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Com Nortech Network</span>
            </div>
          </div>
          <div className="space-y-2">
            {beforeAfter.map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-4 rounded-lg border border-red-500/10 bg-red-500/[0.03]">
                  <AlertTriangle size={14} className="text-red-500 shrink-0" />
                  <span className="text-sm text-foreground/70">{item.before}</span>
                </div>
                <div className="flex items-center gap-2 p-4 rounded-lg border border-emerald-500/10 bg-emerald-500/[0.03]">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span className="text-sm text-foreground/80">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecossistema */}
      <section className="py-20 md:py-24 px-6 border-b border-foreground/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Integração com o ecossistema</h2>
            <p className="text-foreground/60">Soluções conectadas entre si.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystem.map((eco, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={eco.href}
                  className="flex flex-col items-center p-6 rounded-xl border border-foreground/10 hover:border-foreground/20 bg-background text-center transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <eco.icon size={20} />
                  </div>
                  <p className="font-semibold text-sm text-foreground mb-1">{eco.name}</p>
                  <p className="text-foreground/50 text-xs mb-3">{eco.desc}</p>
                  <ChevronRight size={16} className="text-foreground/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Radio className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Suporte especializado</h2>
          <p className="text-foreground/60 mb-8 max-w-lg mx-auto">
            SLA definido, atendimento humano e resolução rápida quando você precisar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {[
              { icon: Headphones, label: "Suporte técnico", href: "/contatos" },
              { icon: TicketCheck, label: "Abrir chamado", href: "/contatos" },
              { icon: MapPin, label: "Visita técnica", href: "/contatos" },
            ].map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className="flex flex-col items-center p-5 rounded-xl border border-foreground/10 hover:border-blue-500/30 transition-colors"
              >
                <btn.icon size={20} className="text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-sm font-medium">{btn.label}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/contatos"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg text-sm hover:opacity-90"
          >
            Quero uma infraestrutura estável
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
