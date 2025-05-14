"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col justify-between px-4 py-12 sm:py-24 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1440px] mx-auto gap-8">
        {/* Texte gauche */}
        <div className="flex flex-col items-start justify-center text-left gap-6 sm:w-1/3">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            <span className="block">Online</span>
            <span className="block">Dreams</span>
            <span className="block">Makers</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 border-t border-white pt-4">
            Rejoins un collectif de créateurs numériques, experts et visionnaires, qui partagent savoirs et outils pour booster ta présence en ligne.
          </p>
        </div>

        {/* Logo centré */}
        <div className="w-full sm:w-1/3 flex justify-center items-center">
          <img
            src="/medias/WhatsApp%20Image%202025-05-07%20at%2013.41.53%20(1).jpeg"
            alt="Logo"
            className="w-full h-auto max-w-[400px] object-contain"
          />
        </div>

        {/* Texte droite */}
        <div className="flex flex-col items-end justify-center text-right gap-6 sm:w-1/3">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Le seul écosystème qui<br />
            forme, connecte et propulse<br />
            <span className="italic">des esprits brillants</span>
          </h2>
          <button className="mt-4 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Je veux en faire partie
            <span className="text-xl">→</span>
          </button>
          <p className="text-sm text-gray-400 border-t border-white pt-4 max-w-[250px]">
            Connecte-toi à ceux qui construisent l’avenir du digital, dans un écosystème unique.
          </p>
        </div>
      </div>
    </section>
  );
}
