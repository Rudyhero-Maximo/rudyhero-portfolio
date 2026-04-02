"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between relative">

        <Link href="/" className="text-xl font-bold">
          Meu Portfolio
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-xl font-bold">
          <Link href="/">Inicio</Link>

          <a href="https://github.com/Rudyhero-Maximo?tab=repositories" target="_blank">
            Trabalhos
          </a>

          <div className="relative">
            <button
              className="bg-transparent border-none cursor-pointer font-bold text-xl"
              onClick={() => setShowContact(!showContact)}
            >
              Contato
            </button>

            {showContact && (
              <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-md p-3 flex flex-col gap-2 z-50">
                <a href="tel:+5582996149030" className="text-gray-700 hover:underline text-sm">
                  (82) 99614-9030
                </a>
                <a href="mailto:rudyheromsantos@hotmail.com" className="text-gray-700 hover:underline text-sm">
                  rudyheromsantos@hotmail.com
                </a>
              </div>
            )}
          </div>
        </nav>

        <button
          className="md:hidden text-3xl bg-transparent border-none cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-5 bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3 z-50 min-w-[160px]">
            <Link href="/" className="font-medium" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>

            <a
              href="https://github.com/Rudyhero-Maximo?tab=repositories"
              target="_blank"
              className="font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Trabalhos
            </a>

            <button
              className="text-left font-medium bg-transparent border-none cursor-pointer p-0"
              onClick={() => setShowContact(!showContact)}
            >
              Contato
            </button>

            {showContact && (
              <div className="bg-gray-50 rounded-lg p-3 flex flex-col gap-2">
                <a href="tel:+5582996149030" className="text-gray-700 hover:underline text-sm">
                  (82) 99614-9030
                </a>
                <a href="mailto:rudyheromsantos@hotmail.com" className="text-gray-700 hover:underline text-sm">
                  rudyheromsantos@hotmail.com
                </a>
              </div>
            )}
          </div>
        )}

      </div>
    </header>
  );
}
