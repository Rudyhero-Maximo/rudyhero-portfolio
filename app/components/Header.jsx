"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 NOVO

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Meu Portfólio
        </Link>

        
        <nav className={styles.nav}>
          <Link href="/">Início</Link>

          <a
            href="https://github.com/Rudyhero-Maximo?tab=repositories"
            target="_blank"
          >
            Trabalhos
          </a>

          <div style={{ position: "relative" }}>
            <button onClick={() => setShowContact(!showContact)}>
              Contato
            </button>

            {showContact && (
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  right: 0,
                  background: "#fff",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <a href="tel:+5582996149030">(82) 99614-9030</a>
                <br />
                <a href="mailto:rudyheromsantos@hotmail.com">
                  rudyheromsantos@hotmail.com
                </a>
              </div>
            )}
          </div>
        </nav>

        
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

    
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Início
            </Link>

            <a
              href="https://github.com/Rudyhero-Maximo?tab=repositories"
              target="_blank"
              onClick={() => setMenuOpen(false)}
            >
              Trabalhos
            </a>

            <button onClick={() => setShowContact(!showContact)}>
              Contato
            </button>

            {showContact && (
              <div className={styles.contactBox}>
                <a href="tel:+5582996149030">(82) 99614-9030</a>
                <br />
                <a href="mailto:rudyheromsantos@hotmail.com">
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