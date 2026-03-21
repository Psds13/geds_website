// app/page.tsx

import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";
import About from "./components/About";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <HomeContent />
      <section className="bg-black border-t border-white/5">
        <About />
      </section>
    </main>
  );
}
