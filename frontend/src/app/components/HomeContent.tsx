"use client";

import About from "./About";
import Servicos from "./home/Servicos";
import Processo from "./home/Processo";
import Portfolio from "./home/Portfolio";
import Ecosystem3D from "./home/Ecosystem3D";
import Teasers from "./home/Teasers";
import CTA from "./home/CTA";

const HomeContent = () => {
  return (
    <div className="bg-background overflow-x-hidden">
      <section id="about" className="relative z-10 border-t border-foreground/5">
        <About />
      </section>

      <section id="servicos" className="relative z-10 border-t border-foreground/5">
        <Servicos />
      </section>

      <section id="processo" className="relative z-10 border-t border-foreground/5 bg-foreground/[0.02]">
        <Processo />
      </section>

      <section id="portfolio" className="relative z-10 border-t border-foreground/5">
        <Portfolio />
      </section>

      <section className="relative z-10 border-t border-foreground/5 bg-foreground/[0.02]">
        <Ecosystem3D />
      </section>

      <section className="relative z-10 border-t border-foreground/5">
        <Teasers />
      </section>

      <section className="relative z-10 border-t border-foreground/5 bg-foreground/[0.02]">
        <CTA />
      </section>
    </div>
  );
};

export default HomeContent;
