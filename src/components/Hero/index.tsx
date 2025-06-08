"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Images de background */}
      <img
        src="/medias/HeroBgL.png"
        alt="Background gauche"
        className="absolute top-0 left-0 h-full object-cover z-0"
      />
      

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-end text-right">
          <div className="relative mb-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white pb-2 relative">
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
          </div>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8">
            UN ECOSISTEMA EN EL QUE <br />SOLO UNOS POCOS SABEN
          </p>
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
