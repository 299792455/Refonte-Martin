"use client";

import React from "react";

export default function ContactForm() {
  return (
    <section className="flex justify-center items-center bg-black text-white py-10 px-4">
      <form className="bg-zinc-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h1 className="text-2xl text-white-500 font-bold text-center mb-4">Contact Us</h1>

        <div className="relative">
          <input
            type="text"
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500"
          />
          <label className="absolute left-0 top-2 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-yellow-500">
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            required
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500"
          />
          <label className="absolute left-0 top-2 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-yellow-500">
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            required
            rows={4}
            className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-white focus:outline-none focus:border-yellow-500 resize-none"
          ></textarea>
          <label className="absolute left-0 top-2 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-yellow-500">
            Message
          </label>
        </div>
        <span className="absolute left-[-100%] top-[-50%] w-48 h-24 rotate-45 bg-white/20 group-hover:translate-x-[250%] transition-transform duration-[1100ms] ease-in-out blur-sm z-0" />
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded transition duration-300"
        >
          Send
        </button>
      </form>
    </section>
  );
}
