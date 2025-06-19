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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ maxWidth: "100%" }}
    >
      {/* Motion background intégré */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Contenu Hero */}
      <div className="w-full px-4 sm:px-6 py-20 relative z-10 flex justify-center">

        <div className="flex flex-col items-center text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] gap-4">

          <div className="relative mb-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-bold text-white pb-2 relative text-[clamp(2rem,4vw,3rem)] max-w-full leading-tight flex flex-col items-center"
            >
              <span className="flex items-center -ml-4 -mb-2 sm:mb-0">
                <img
                  src="/medias/Design sans titre.png"
                  alt="Logo"
                  className="inline-block w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                />
                <span className="-ml-2 uppercase text-white font-bold text-[clamp(2rem,4vw,3rem)] leading-none tracking-wide text-center">

                  nline
                </span>
              </span>
             <span className="uppercase text-white font-bold text-[clamp(2rem,4vw,3rem)] leading-none tracking-wide text-center  sm:pl-0">
  Dreams
  <span className="block sm:inline">Makers</span>
</span>

            </motion.h1>
          </div>

          <div className="w-full flex justify-center ">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-md sm:max-w-xl mb-8 px-2  text-center !text-center"
            >
              UN ECOSISTEMA EN EL QUE SOLO <br/> UNOS POCOS SABEN JUGAR
            </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6"
          style={{ color: "#fff" }}
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
