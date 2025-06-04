// tailwind.config.js
module.exports = {
  mode: "jit",      // uniquement pour Tailwind v2.x ; tu peux retirer si tu utilises v3+
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",       // si tu utilises encore Pages Router
    "./app/**/*.{js,ts,jsx,tsx}",         // si tu utilises App Router
    "./components/**/*.{js,ts,jsx,tsx}",  // <-- obligatoire pour tes composants
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
