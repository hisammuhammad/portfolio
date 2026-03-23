"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "education", href: "#education" },
  { label: "vision", href: "#vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(13,17,7,0.92)] backdrop-blur-md border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
          {/* Terminal prompt logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-trace)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1"
          >
            <span className="text-[var(--color-text-muted)]">~/</span>
            <span className="font-bold">hma</span>
            <span className="w-2 h-4 bg-[var(--color-trace)] inline-block animate-blink ml-1" />
          </a>

          {/* Desktop nav — command style */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-trace)] transition-colors tracking-wide"
              >
                <span className="text-[var(--color-text-muted)] mr-1">{`>`}</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="font-[family-name:var(--font-mono)] text-xs px-4 py-2 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all duration-200 tracking-wider"
            >
              ./contact
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[var(--color-trace)] font-[family-name:var(--font-mono)] text-xs"
            >
              {menuOpen ? "[x]" : "[=]"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-[rgba(13,17,7,0.97)] flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="font-[family-name:var(--font-mono)] text-xl text-[var(--color-text-secondary)] hover:text-[var(--color-trace)] transition-colors"
            >
              <span className="text-[var(--color-text-muted)] mr-2">{`>`}</span>
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-[family-name:var(--font-mono)] text-lg px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all"
          >
            ./contact
          </motion.a>
        </motion.div>
      )}
    </>
  );
}
