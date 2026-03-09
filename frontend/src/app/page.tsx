// app/page.tsx

import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";
import About from "./components/About";
import SquareReveal from "./components/SquareReveal";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <SquareReveal gridSize={10} threshold={0.1}>
        <Hero />
      </SquareReveal>

      <SquareReveal gridSize={12} threshold={0.05}>
        <HomeContent />
      </SquareReveal>

      <SquareReveal gridSize={8} threshold={0.1}>
        <About />
      </SquareReveal>
    </main>
  );
}
