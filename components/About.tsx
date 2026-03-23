"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const systemSpecs = [
  { key: "DESIGNATION", value: "IoT & Embedded Systems Engineer" },
  { key: "FOCUS", value: "AI × Edge Computing × Security" },
  { key: "STATUS", value: "Active", highlight: true },
  { key: "LOCATION", value: "India" },
];

export default function About() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className={`text-xs tracking-[0.3em] uppercase mb-3 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-accent)" }}>01</span> {isCircuit ? "// About" : "— About"}
          </h2>
          <h3 className={`text-3xl md:text-4xl font-light ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>
            {isCircuit ? "System " : "About "}
            <span className="font-bold" style={{ color: isCircuit ? "var(--color-trace)" : "var(--color-accent)" }}>
              {isCircuit ? "Specification" : "Me"}
            </span>.
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 space-y-6">
            <div className="relative">
              {isCircuit && <div className="absolute -inset-1 border border-dashed pointer-events-none" style={{ borderColor: "var(--color-border)" }} />}
              <div
                className={`overflow-hidden group relative ${isCircuit ? "p-1" : "rounded-2xl"}`}
                style={isCircuit ? { border: "1px solid var(--color-border-bright)" } : { boxShadow: "var(--shadow-card-hover)" }}
              >
                <img src="/profile.jpg" alt="Hisam Muhammad Ameen"
                  className={`w-full h-auto object-cover transition-all duration-700 ${isCircuit ? "grayscale brightness-110 contrast-110 group-hover:grayscale-0" : "rounded-2xl"}`}
                />
                {isCircuit && (
                  <div className="absolute inset-0 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: "var(--img-tint)" }} />
                )}
              </div>
              {isCircuit && (
                <>
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l" style={{ borderColor: "var(--color-trace)" }} />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r" style={{ borderColor: "var(--color-trace)" }} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l" style={{ borderColor: "var(--color-trace)" }} />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r" style={{ borderColor: "var(--color-trace)" }} />
                </>
              )}
            </div>

            {isCircuit && (
              <div style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--surface-bg)" }}>
                <div className="px-4 py-2" style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-text-muted)" }}>SYS_INFO.cfg</span>
                </div>
                <div className="p-4 space-y-2">
                  {systemSpecs.map((spec) => (
                    <div key={spec.key} className="flex items-start font-[family-name:var(--font-mono)] text-xs">
                      <span className="w-32 shrink-0" style={{ color: "var(--color-text-muted)" }}>{spec.key}:</span>
                      <span style={{ color: spec.highlight ? "var(--color-trace)" : "var(--color-text-secondary)" }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 space-y-6">
            <div className={`text-base md:text-lg font-light leading-relaxed space-y-5 ${!isCircuit ? "font-[family-name:var(--font-body-noto)]" : ""}`} style={{ color: "var(--color-text-secondary)" }}>
              <p>
                I am an IoT and Embedded Systems Engineer focused on building intelligent, real-world systems that integrate{" "}
                <span className="font-medium" style={{ color: "var(--color-text-primary)" }}>AI, edge computing, and secure communication</span>.
              </p>
              <p>
                My work involves designing adaptive, hardware-driven solutions such as AI-enabled smart locks and intelligent automation systems.{" "}
                <span className="font-normal" style={{ color: "var(--color-text-primary)" }}>I specialize in developing systems that are not only reactive, but predictive and self-optimizing.</span>
              </p>
              <p>I am driven by a long-term vision to engineer autonomous, interconnected environments where devices can sense, learn, and respond with minimal human intervention.</p>
            </div>

            <div className="pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
              <p className={`text-sm flex items-center gap-2 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-accent)" }}>
                <span className={`w-1.5 h-1.5 rounded-full ${isCircuit ? "animate-pulse" : ""}`} style={{ backgroundColor: "var(--color-accent)" }} />
                Currently building the foundation — engineering the future of intelligent systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
