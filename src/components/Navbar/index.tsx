"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Liens pour les sections du one-page
  const navLinks = ["Inicio", "Servicios", "PacksExclusivos", "Equipo"];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#b8860b]/40 backdrop-blur-lg px-6 py-3 ${
        scrolled ? "bg-black-900/70" : "bg-black-900/50"
      }`}
    >
      <div className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-2 w-20 h-20 relative logo-flip">
            <Image
              src="/medias/Design sans titre.png"
              alt="Online Dreams Makers logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link text-gray-300 hover:text-[#dfa30b] px-4 py-2 rounded-md transition-colors duration-200"
            >
              {id.replace(/([A-Z])/g, " $1").trim()}
            </a>
          ))}

          {/* Bouton Contacto séparé pour l’effet visuel */}
          <div className="relative ml-4 group flex justify-center">
            <a
    href="#Contacto"
    className="relative overflow-hidden px-6 py-3 border border-[#b8860b] text-[#d4af37] text-base font-medium rounded-lg tracking-wide transition-all duration-300 hover:border-[#d4af37] hover:bg-[#fff8dc]/5 shadow-md group"
  >
    <span className="relative z-10">Contacto</span>
    <span className="absolute left-[-100%] top-[-50%] w-48 h-24 rotate-45 bg-white/20 group-hover:translate-x-[250%] transition-transform duration-[1100ms] ease-in-out blur-sm z-0" />
  </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            id="mobile-menu-button"
            onClick={handleToggle}
            className="relative w-10 h-10 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`block h-0.5 w-5 bg-[#dfa30b] mb-1 transition duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-[#dfa30b] mb-1 transition duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-[#dfa30b] transition duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "h-auto pt-2 pb-4" : "h-0"
        }`}
      >
        <div className="space-y-1">
          {navLinks.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {id.replace(/([A-Z])/g, " $1").trim()}
            </a>
          ))}
          <div className="px-4 pt-2">
  <div className="relative group">
    <a
      href="#Contacto"
      className="relative overflow-hidden block text-center px-6 py-3 border border-[#b8860b] text-[#d4af37] text-base font-medium rounded-lg tracking-wide transition-all duration-300 hover:border-[#d4af37] bg-[#111]/90 hover:bg-[#1a1a1a] shadow-md group"
      onClick={() => setMenuOpen(false)}
    >
      <span className="relative z-10">Contacto</span>
      <span className="absolute left-[-100%] top-[-50%] w-48 h-24 rotate-45 bg-white/20 group-hover:translate-x-[250%] transition-transform duration-[1100ms] ease-in-out blur-sm z-0" />
    </a>
  </div>
</div>

        </div>
      </div>
    </nav>
  );
}
