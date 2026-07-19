"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Tem um projeto em mente?
        </h2>
        <p className="text-foreground/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Entre em contato e vamos conversar sobre como podemos ajudar.
        </p>

        <Link
          href="/contatos"
          className="inline-flex items-center gap-2 bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black px-8 py-4 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Fale Conosco
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
