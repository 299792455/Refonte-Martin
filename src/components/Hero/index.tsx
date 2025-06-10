"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.2 + i * 0.01,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg
        className="w-full h-full text-[#dfa30b] dark:text-[#dfa30b]"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Motion background intégré */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Contenu Hero inchangé */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-end text-right">
          <div className="relative mb-4">
            <h1 className="font-bold text-white pb-2 relative text-[clamp(2.25rem,5vw,4rem)] max-w-full leading-tight">

              <span className="flex items-center -mb-20 md:-mb-25 lg:-mb-25">
                <img
                  src="/medias/Design sans titre.png"
                  alt="Logo"
                  className="inline-block w-20 h-20 md:w-30 md:h-30 object-contain"
                />
                nline
              </span>
              <br />
              <span>Dreams</span>
              <br />
              <span>Makers</span>
            </h1>
            <div className="w-full flex justify-end">
    <p className=" text-xl md:text-2xl text-gray-400 max-w-3xl mb-8">
      UN ECOSISTEMA EN EL QUE <br />SOLO UNOS POCOS SABEN JUGAR
    </p>
  </div>
        </div>
          </div>

           
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6"
          style={{ color: "#b8860b" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
