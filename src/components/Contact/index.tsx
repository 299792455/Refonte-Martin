"use client";

import React from "react";

export default function ContactForm() {
  return (
    <section className="relative z-10 flex flex-col items-center bg-black text-white py-10 px-4">
       <h2 className="text-[clamp(3.5rem,5vw,3rem)] font-bold text-center mb-4">Contactanos</h2>
       <p className="text-[#a3a3a3]">
        Y impulsa tu marca al no se que
      </p>
      <form className=" p-8 rounded-lg shadow-lg w-full max-w-md space-y-6 ">

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
            Tu Mensaje
          </label>
          <textarea
            required
            rows={4}
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500 resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded transition duration-300"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
