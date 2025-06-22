import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white text-center px-6">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-serif">
          Página <br /> no encontrada
        </h2>
        <p className="text-lg text-gray-400 font-sans mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-[#b8860b] rounded-lg text-[#b8860b] hover:bg-[#b8860b] hover:text-black transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
