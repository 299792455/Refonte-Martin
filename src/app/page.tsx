import Hero from "../components/Hero";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Team from "../components/Team/index";
import "@fortawesome/fontawesome-free/css/all.min.css"
import CardExclusiveService from "@/components/CardExclusiveService";
import CarouselTrack from "@/components/CarouselTrack";
export default function Home() {
  return (
    <main className="bg-black text-white font-['Space_Grotesk'] ">
        <Background />
        
        <section id="Inicio"><Hero /></section>
        <CarouselTrack />
        <section id="Servicios"><Services /></section>
        <section id="PacksExclusivos"><CardExclusiveService /></section>
        <section id="Equipo"><Team /></section>
        <CarouselTrack />
        <section id="Contacto"><Contact /></section>
    </main>
  );
}