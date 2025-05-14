export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Online Dreams Makers. Tous droits réservés.
        </p>
        <div className="flex gap-4">
          <a
            href="/about"
            className="hover:text-white transition-colors duration-200"
          >
            À propos
          </a>
          <a
            href="/works"
            className="hover:text-white transition-colors duration-200"
          >
            Réalisations
          </a>
          <a
            href="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
