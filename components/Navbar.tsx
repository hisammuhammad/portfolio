"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

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
  const { theme, toggleTheme } = useTheme();
  const isCircuit = theme === "circuit";

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
            ? isCircuit
              ? "bg-[rgba(13,17,7,0.92)] backdrop-blur-md border-b border-[var(--color-border)]"
              : "bg-[rgba(250,250,249,0.92)] backdrop-blur-md border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
          {/* Logo */}
          {isCircuit ? (
            <a
              href="#"
              className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-trace)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1"
            >
              <span className="text-[var(--color-text-muted)]">~/</span>
              <span className="font-bold">hma</span>
              <span className="w-2 h-4 bg-[var(--color-trace)] inline-block animate-blink ml-1" />
            </a>
          ) : (
            <a
              href="#"
              className="font-[family-name:var(--font-display-sora)] text-xl font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              HMA
            </a>
          )}

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs tracking-wide transition-colors ${
                  isCircuit
                    ? "font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)] hover:text-[var(--color-trace)]"
                    : "font-[family-name:var(--font-body-noto)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] uppercase tracking-widest font-medium"
                }`}
              >
                {isCircuit && (
                  <span className="text-[var(--color-text-muted)] mr-1">{`>`}</span>
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 flex items-center justify-center border transition-all duration-200 ${
                isCircuit
                  ? "border-[var(--color-border)] text-[var(--color-trace)] hover:bg-[var(--color-trace-dim)]"
                  : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] rounded-full"
              }`}
              aria-label="Toggle theme"
            >
              {isCircuit ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Contact */}
            <a
              href="#contact"
              className={`text-xs px-4 py-2 transition-all duration-200 tracking-wider ${
                isCircuit
                  ? "font-[family-name:var(--font-mono)] border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black"
                  : "font-[family-name:var(--font-body-noto)] font-medium bg-[var(--color-text-primary)] text-[var(--color-bg-base)] hover:opacity-80 rounded-full"
              }`}
            >
              {isCircuit ? "./contact" : "Contact"}
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden text-xs ${
                isCircuit
                  ? "text-[var(--color-trace)] font-[family-name:var(--font-mono)]"
                  : "text-[var(--color-text-primary)] font-[family-name:var(--font-body-noto)]"
              }`}
            >
              {menuOpen ? (isCircuit ? "[x]" : "✕") : (isCircuit ? "[=]" : "☰")}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 ${
            isCircuit ? "bg-[rgba(13,17,7,0.97)]" : "bg-[rgba(250,250,249,0.98)]"
          }`}
        >
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`text-xl transition-colors ${
                isCircuit
                  ? "font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)] hover:text-[var(--color-trace)]"
                  : "font-[family-name:var(--font-display-sora)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {isCircuit && <span className="text-[var(--color-text-muted)] mr-2">{`>`}</span>}
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
}
