"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-[rgba(74,222,128,0.15)] to-[rgba(255,107,43,0.08)] rounded-full blur-[100px] animate-float-slow" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-8">
            <span className="text-[var(--color-accent)]">06</span> // Vision
          </h2>

          {/* Terminal output style */}
          <div className="text-left inline-block w-full max-w-3xl mx-auto border border-[var(--color-border)] bg-[rgba(13,17,7,0.8)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-border)] bg-[rgba(26,31,18,0.6)]">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <div className="w-2 h-2 rounded-full bg-[rgba(74,222,128,0.4)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] ml-2">
                vision.sh
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 md:p-8 space-y-4 font-[family-name:var(--font-mono)]">
              <div className="text-xs text-[var(--color-text-muted)]">
                $ cat ./vision.md
              </div>
              <p className="text-lg md:text-xl font-light text-[var(--color-text-primary)] leading-relaxed">
                Focused on building the{" "}
                <span className="font-semibold text-[var(--color-trace)]">
                  next generation
                </span>{" "}
                of intelligent systems that are autonomous, adaptive, and
                seamlessly integrated into everyday life.
              </p>
              <div className="h-px bg-[var(--color-border)]" />
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Interested in advancing the convergence of AI, IoT, and embedded
                systems to create predictive, secure, and scalable smart
                infrastructure.
              </p>
              <div className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 pt-2">
                <span>$</span>
                <span className="w-2 h-3.5 bg-[var(--color-trace)] animate-blink inline-block" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
