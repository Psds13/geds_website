"use client";

import { useForm } from 'react-hook-form';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, Zap, Code2, Cloud, BarChart3, Layout, Shield } from 'lucide-react';

// Certifique-se que estes arquivos existem em src/components/ui/
import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  problemType: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const problemTypes = [
  { id: 'automacao', icon: <Zap className="w-5 h-5" />, label: 'Automação de Processos', suggestion: 'Identificamos que você precisa de soluções de automação. Recomendamos começar com um diagnóstico dos processos manuais da sua empresa.', services: ['Automação de Fluxos', 'Integração de Sistemas', 'IA Processual'], complexity: "Média", avgTime: "4-8 semanas" },
  { id: 'desenvolvimento', icon: <Code2 className="w-5 h-5" />, label: 'Desenvolvimento de Software', suggestion: 'Para desenvolvimento, podemos construir desde MVPs ágeis até sistemas enterprise completos.', services: ['Web Apps', 'APIs & Backend', 'Mobile'], complexity: "Alta", avgTime: "12-24 semanas" },
  { id: 'cloud', icon: <Cloud className="w-5 h-5" />, label: 'Cloud & Infraestrutura', suggestion: 'A migração para cloud pode reduzir seus custos em até 50%.', services: ['AWS/GCP Migration', 'DevOps', 'Monitoramento 24/7'], complexity: "Média", avgTime: "2-6 semanas" },
  { id: 'dados', icon: <BarChart3 className="w-5 h-5" />, label: 'Dados & Analytics', suggestion: 'Transformaremos seus dados dispersos em insights acionáveis.', services: ['Business Intelligence', 'Dashboards', 'Data Pipeline'], complexity: "Alta", avgTime: "8-16 semanas" },
  { id: 'design', icon: <Layout className="w-5 h-5" />, label: 'UX/UI Design', suggestion: 'Uma interface bem desenhada pode aumentar suas conversões em até 60%.', services: ['UX Research', 'UI Design', 'Prototipagem'], complexity: "Baixa", avgTime: "3-8 semanas" },
  { id: 'seguranca', icon: <Shield className="w-5 h-5" />, label: 'Segurança & Compliance', suggestion: 'Protegeremos seus dados e garantiremos conformidade com LGPD.', services: ['Auditoria de Segurança', 'LGPD', 'Criptografia'], complexity: "Crítica", avgTime: "4-12 semanas" },
];

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2 flex-1">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black transition-all duration-500 shrink-0 ${i < current ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' : i === current ? 'bg-white/5 text-cyan-400 border border-cyan-500/30' : 'bg-white/[0.02] text-gray-700 border border-white/5'}`}>
            {i < current ? <CheckCircle className="w-5 h-5" /> : i + 1}
          </div>
          {i < total - 1 && <div className={`h-px flex-1 transition-all duration-700 ${i < current ? 'bg-cyan-500' : 'bg-white/10'}`} />}
        </div>
      ))}
    </div>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<typeof problemTypes[0] | null>(null);
  const [step, setStep] = useState(0); 

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", problemType: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      if (!supabase) throw new Error('Supabase não inicializado');

      const { error } = await supabase.from('contatos').insert([{
        nome: data.name,
        email: data.email,
        assunto: selectedProblem ? `[${selectedProblem.label}] ${data.subject || ''}` : (data.subject || 'Sem assunto'),
        mensagem: data.message,
        status: 'nao_lido'
      }] as any);
      if (error) throw error;
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) return <div className="min-h-screen flex items-center justify-center text-cyan-500"><h1>Mensagem Enviada!</h1></div>;

  return (
    <main className="min-h-screen w-full bg-background p-10">
      <div className="max-w-4xl mx-auto">
        <StepIndicator current={step} total={2} />
        {step === 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {problemTypes.map((t) => (
              <button key={t.id} onClick={() => { setSelectedProblem(t); form.setValue('problemType', t.id); setStep(1); }} className="p-6 border rounded-xl hover:border-cyan-500 transition-all text-left">
                {t.icon} <span className="block mt-2 font-bold">{t.label}</span>
              </button>
            ))}
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl><Input placeholder="Seu nome" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" disabled={isSubmitting}>Enviar</Button>
            </form>
          </Form>
        )}
      </div>
    </main>
  );
}