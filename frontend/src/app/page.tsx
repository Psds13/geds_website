// app/page.tsx

import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";
import About from "./components/About";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <HomeContent />
      <section className="bg-background border-t border-foreground/5">
        <About />
      </section>
    </main>
  );
}
