"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Vision() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div
          className={`w-[600px] h-[600px] rounded-full blur-[100px] animate-float-slow ${
            isCircuit
              ? "bg-gradient-to-r from-[rgba(74,222,128,0.15)] to-[rgba(255,107,43,0.08)]"
              : "bg-gradient-to-r from-[rgba(59,130,246,0.08)] to-[rgba(59,130,246,0.03)]"
          }`}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className={`text-xs tracking-[0.3em] uppercase mb-8 ${
              isCircuit
                ? "font-[family-name:var(--font-mono)] text-[var(--color-text-muted)]"
                : "font-[family-name:var(--font-body-noto)] text-[var(--color-text-muted)] font-medium"
            }`}
          >
            <span className="text-[var(--color-accent)]">06</span>{" "}
            {isCircuit ? "// Vision" : "— Vision"}
          </h2>

          {isCircuit ? (
            /* Circuit: Terminal window */
            <div className="text-left inline-block w-full max-w-3xl mx-auto border border-[var(--color-border)] bg-[var(--terminal-bg)]">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-border)] bg-[var(--terminal-header-bg)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                <div className="w-2 h-2 rounded-full bg-[rgba(74,222,128,0.4)]" />
                <div className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] ml-2">
                  vision.sh
                </span>
              </div>
              <div className="p-6 md:p-8 space-y-4 font-[family-name:var(--font-mono)]">
                <div className="text-xs text-[var(--color-text-muted)]">$ cat ./vision.md</div>
                <p className="text-lg md:text-xl font-light text-[var(--color-text-primary)] leading-relaxed">
                  Focused on building the{" "}
                  <span className="font-semibold text-[var(--color-trace)]">next generation</span>{" "}
                  of intelligent systems that are autonomous, adaptive, and seamlessly integrated into everyday life.
                </p>
                <div className="h-px bg-[var(--color-border)]" />
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Interested in advancing the convergence of AI, IoT, and embedded systems to create predictive, secure, and scalable smart infrastructure.
                </p>
                <div className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 pt-2">
                  <span>$</span>
                  <span className="w-2 h-3.5 bg-[var(--color-trace)] animate-blink inline-block" />
                </div>
              </div>
            </div>
          ) : (
            /* Whiteout: Large centered quote */
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-2xl md:text-4xl font-[family-name:var(--font-display-sora)] font-light text-[var(--color-text-primary)] leading-snug">
                Focused on building the{" "}
                <span className="font-semibold text-[var(--color-accent)]">next generation</span>{" "}
                of intelligent systems that are autonomous, adaptive, and seamlessly integrated into everyday life.
              </p>
              <p className="text-lg font-light text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto font-[family-name:var(--font-body-noto)]">
                Interested in advancing the convergence of AI, IoT, and embedded systems to create predictive, secure, and scalable smart infrastructure.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
