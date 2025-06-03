"use client";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            {/* BLUR DORÉ */}
            <div className="absolute inset-0 bg-[#FFF]/20 rounded-full blur-3xl" />
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white pb-2 relative">
  OnlineDreamsMakers
</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8">
            Un ecosistema digital completo donde tus ambiciones se realizan.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white-600/50 to-white-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
             


            </div>
           <button className="relative overflow-hidden px-6 py-3 border border-[#b8860b] text-[#d4af37] text-base font-medium rounded-lg tracking-wide transition-all duration-300 hover:border-[#d4af37] hover:bg-[#fff8dc]/5 shadow-md group">
  <span className="relative z-10">Empecamos ya !</span>

  {/* Masque de brillance */}
  <span className="absolute left-[-100%] top-[-50%] w-48 h-24 rotate-45 bg-white/20 group-hover:translate-x-[250%] transition-transform duration-[1100ms] ease-in-out blur-sm z-0" />
</button>



          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
  className="w-6 h-6"
  style={{ color: "#b8860b" }}
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
