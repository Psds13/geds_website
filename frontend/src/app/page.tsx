import Hero from "./components/Hero";
import HomeContent from "./components/HomeContent";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <HomeContent />
    </main>
  );
}
