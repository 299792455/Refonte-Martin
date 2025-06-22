"use client";

export default function Footer() {
  return (
    <footer className="relative w-full text-center text-white p-4 text-sm bg-black">
      <p>
        © {new Date().getFullYear()} OnlineDreamsMakers.{" "}
        <a
          href="/aviso-legal"
          className="underline text-[#d4af37] hover:text-yellow-500 transition"
        >
          Todos los derechos reservados.
        </a>
      </p>
    </footer>
  );
}
