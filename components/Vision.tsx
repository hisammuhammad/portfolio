"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Vision() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <h2 className={`text-xs tracking-[0.3em] uppercase mb-8 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-accent)" }}>06</span> {isCircuit ? "// Vision" : "— Vision"}
          </h2>

          {isCircuit ? (
            <div className="text-left inline-block w-full max-w-3xl mx-auto" style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--terminal-bg)" }}>
              <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--terminal-header-bg)" }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-trace)", opacity: 0.4 }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-text-muted)" }} />
                <span className="font-[family-name:var(--font-mono)] text-[10px] ml-2" style={{ color: "var(--color-text-muted)" }}>vision.sh</span>
              </div>
              <div className="p-6 md:p-8 space-y-4 font-[family-name:var(--font-mono)]">
                <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>$ cat ./vision.md</div>
                <p className="text-lg md:text-xl font-light leading-relaxed" style={{ color: "var(--color-text-primary)" }}>
                  Focused on building the <span className="font-semibold" style={{ color: "var(--color-trace)" }}>next generation</span> of intelligent systems that are autonomous, adaptive, and seamlessly integrated into everyday life.
                </p>
                <div className="h-px" style={{ backgroundColor: "var(--color-border)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  Interested in advancing the convergence of AI, IoT, and embedded systems to create predictive, secure, and scalable smart infrastructure.
                </p>
                <div className="text-xs flex items-center gap-1 pt-2" style={{ color: "var(--color-text-muted)" }}>
                  <span>$</span>
                  <span className="w-2 h-3.5 animate-blink inline-block" style={{ backgroundColor: "var(--color-trace)" }} />
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-2xl md:text-4xl font-[family-name:var(--font-display-sora)] font-light leading-snug" style={{ color: "var(--color-text-primary)" }}>
                Focused on building the <span className="font-semibold" style={{ color: "var(--color-accent)" }}>next generation</span> of intelligent systems that are autonomous, adaptive, and seamlessly integrated into everyday life.
              </p>
              <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto font-[family-name:var(--font-body-noto)]" style={{ color: "var(--color-text-secondary)" }}>
                Interested in advancing the convergence of AI, IoT, and embedded systems to create predictive, secure, and scalable smart infrastructure.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
