import Hero from "../components/Hero";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Team from "../components/Team/index";

export default function Home() {
  return (
    <main className="bg-black text-white font-['Space_Grotesk'] overflow-x-hidden">
      <Background />
      <Hero />
      <Services />
      <Team />
    <Contact />
    </main>
  );
}