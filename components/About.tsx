"use client";
import { motion } from "framer-motion";

const systemSpecs = [
  { key: "DESIGNATION", value: "IoT & Embedded Systems Engineer" },
  { key: "FOCUS", value: "AI × Edge Computing × Security" },
  { key: "STATUS", value: "Active", highlight: true },
  { key: "LOCATION", value: "India" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-3">
            <span className="text-[var(--color-accent)]">01</span> // About
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)]">
            System{" "}
            <span className="font-bold text-[var(--color-trace)]">
              Specification
            </span>
            .
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Profile image + system spec card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Image with green channel duotone feel */}
            <div className="relative">
              <div className="absolute -inset-1 border border-dashed border-[var(--color-border)] pointer-events-none" />
              <div className="p-1 border border-[var(--color-border-bright)] relative overflow-hidden group">
                <img
                  src="/profile.jpg"
                  alt="Hisam Muhammad Ameen"
                  className="w-full h-auto object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Scanline effect on image */}
                <div className="absolute inset-0 bg-[var(--color-trace)] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
              </div>
              {/* Corner markers */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[var(--color-trace)]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[var(--color-trace)]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[var(--color-trace)]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[var(--color-trace)]" />
            </div>

            {/* System spec card — datasheet style */}
            <div className="border border-[var(--color-border)] bg-[rgba(26,31,18,0.6)]">
              <div className="border-b border-[var(--color-border)] px-4 py-2">
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]">
                  SYS_INFO.cfg
                </span>
              </div>
              <div className="p-4 space-y-2">
                {systemSpecs.map((spec) => (
                  <div
                    key={spec.key}
                    className="flex items-start font-[family-name:var(--font-mono)] text-xs"
                  >
                    <span className="text-[var(--color-text-muted)] w-32 shrink-0">
                      {spec.key}:
                    </span>
                    <span
                      className={
                        spec.highlight
                          ? "text-[var(--color-trace)]"
                          : "text-[var(--color-text-secondary)]"
                      }
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-base md:text-lg font-light leading-relaxed text-[var(--color-text-secondary)] space-y-5">
              <p>
                I am an IoT and Embedded Systems Engineer focused on building
                intelligent, real-world systems that integrate{" "}
                <span className="text-[var(--color-text-primary)] font-medium">
                  AI, edge computing, and secure communication
                </span>
                .
              </p>
              <p>
                My work involves designing adaptive, hardware-driven solutions
                such as AI-enabled smart locks and intelligent automation
                systems.{" "}
                <span className="text-[var(--color-text-primary)] font-normal">
                  I specialize in developing systems that are not only reactive,
                  but predictive and self-optimizing.
                </span>
              </p>
              <p>
                I am driven by a long-term vision to engineer autonomous,
                interconnected environments where devices can sense, learn, and
                respond with minimal human intervention.
              </p>
            </div>

            {/* Status line */}
            <div className="pt-4 border-t border-[var(--color-border)]">
              <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Currently building the foundation — engineering the future of
                intelligent systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
