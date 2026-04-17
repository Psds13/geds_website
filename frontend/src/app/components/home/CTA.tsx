"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-linear-to-br from-background to-background dark:from-[#050505] dark:to-black border border-cyan-500/10 p-12 md:p-20 rounded-[3rem] overflow-hidden text-center shadow-2xl group transition-colors"
      >
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-4xl mb-10 shadow-xl"
          >
            🚀
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-8 tracking-tight leading-tight uppercase italic"
          >
            Pronto para liderar a inovação?
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Fale hoje com nosso time de elite e descubra como a Nortech Inovação impulsionará sua escalabilidade.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center w-full"
          >
            <Link href="/contatos" className="group">
              <span className="inline-flex items-center gap-3 bg-cyan-500 text-black px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(0,219,255,0.4)] transition-all duration-300 transform hover:scale-105 shadow-xl">
                Começar Agora
                <FiArrowRight className="text-xl group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
