"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/80 text-white backdrop-blur-md">
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight">
          ODM
        </Link>

        {/* Menu */}
        <div className="hidden sm:flex gap-6 text-sm sm:text-base font-medium">
          <Link href="/about" className="hover:underline underline-offset-4">
            À propos
          </Link>
          <Link href="/works" className="hover:underline underline-offset-4">
            Réalisations
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
