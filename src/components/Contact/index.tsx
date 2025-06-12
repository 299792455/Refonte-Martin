"use client";

import React from "react";

export default function ContactForm() {
  return (
    <section className="relative z-10 flex flex-col items-center bg-black text-white py-10 px-4 max-w-[1440px] mx-auto">
       <h2 className="text-[clamp(3.5rem,5vw,3rem)] font-bold text-center mb-4">Contactanos</h2>
       <p className="text-[#a3a3a3]">
        Y LLEVA TU MARCA A NUEVAS ALTURAS
      </p>
      <form className="  rounded-lg shadow-lg w-full space-y-6 ">

        <div className="relative">
          <label className="absolute left-0 top-2 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-yellow-500">
            Nombre
          </label>
           <input
            type="text"
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div className="relative">
          <label className="absolute left-0 top-2 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-yellow-500">
            Email
          </label>
          <input
            type="email"
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div className="relative">
          <label className="absolute left-0 top-2 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-yellow-500">
            Telefono
          </label>
           <input
            type="text"
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div className="relative">
          
          <label className="absolute left-0 top-2 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-yellow-500">
            Tu Mensaje*
          </label>
          <textarea
            required
            rows={4}
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500 resize-none"
          ></textarea>
          <p>*Para nosotros es muy importante acompañarte en cada parte del proceso. Por eso, cuanta más información pongas en este apartado nos será más fácil darte una personalización completa y lo más optimizada posible 😊</p>
        </div>
        
      <div className="relative ml-4 group flex justify-center">
            <a
    href="#Contacto"
    className="relative overflow-hidden px-6 py-3 border border-[#b8860b] text-[#d4af37] text-center font-medium rounded-lg tracking-wide transition-all duration-300 hover:border-[#d4af37] hover:bg-[#fff8dc]/5 shadow-md group mx-auto w-[200px]"
  >
    <span className="relative z-10">Enviar</span>
    <span className="absolute left-[-100%] top-[-50%] w-48 h-24 rotate-45 bg-white/20 group-hover:translate-x-[250%] transition-transform duration-[1100ms] ease-in-out blur-sm z-0" />
  </a>
          </div>
      </form>
    </section>
  );
}
