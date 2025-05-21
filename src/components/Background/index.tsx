export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black">
      {/* Grille verticale noire */}
      <div className="absolute inset-0 grid grid-cols-12 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="border-r border-black" />
        ))}
      </div>
      {/* Grille horizontale noire */}
      <div className="absolute inset-0 grid grid-rows-12 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={`h-${i}`} className="border-b border-black" />
        ))}
      </div>
    </div>
  );
}
