import Hero from "../components/Hero";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Team from "../components/Team/index";
import ExclusiveService from "@/components/ExclusiveService";
import "@fortawesome/fontawesome-free/css/all.min.css"
import CardExclusiveService from "@/components/CardExclusiveService";
export default function Home() {
  return (
    <main className="bg-black text-white font-['Space_Grotesk'] overflow-x-hidden">
      <Background />
      <Hero />
      <ExclusiveService />
      <CardExclusiveService />
      <Services />
      <Team />
     
    <Contact />
    </main>
  );
}