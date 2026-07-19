"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-background text-foreground min-h-[80vh] flex flex-col items-center justify-center px-6 pt-28 pb-20"
    >
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-4">
            Nortech Inovação · São Luís, MA
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
            Desenvolvimento de software
            <br />
            <span className="text-cyan-600 dark:text-cyan-400">sob medida</span>
          </h1>

          <p className="text-lg text-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Criamos sistemas web, automações e infraestrutura cloud para empresas
            que precisam de resultados concretos — do diagnóstico à entrega.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contatos"
              className="px-8 py-3.5 bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Fale conosco
            </Link>
            <Link
              href="/servicos"
              className="px-8 py-3.5 border border-foreground/20 text-foreground rounded-lg hover:bg-foreground/5 transition-colors text-sm font-medium"
            >
              Ver serviços
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
