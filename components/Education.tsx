"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const educationData = [
  {
    title: "B.Tech Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    duration: "Aug 2023 – Present",
    score: "",
    active: true,
  },
  {
    title: "Intermediate (PCM)",
    institution: "Garden Valley EM HSS",
    location: "Kuttippala, Kerala",
    duration: "Mar 2021 – May 2022",
    score: "Percentage: 86%",
    active: false,
  },
  {
    title: "Matriculation",
    institution: "Govt Higher Secondary School",
    location: "Kuttiady, Kerala",
    duration: "Mar 2019 – May 2020",
    score: "Percentage: 96%",
    active: false,
  },
];

export default function Education() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="education" className="py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className={`text-xs tracking-[0.3em] uppercase mb-3 ${
              isCircuit
                ? "font-[family-name:var(--font-mono)] text-[var(--color-text-muted)]"
                : "font-[family-name:var(--font-body-noto)] text-[var(--color-text-muted)] font-medium"
            }`}
          >
            <span className="text-[var(--color-accent)]">05</span>{" "}
            {isCircuit ? "// Education" : "— Education"}
          </h2>
          <h3
            className={`text-3xl md:text-4xl font-light text-[var(--color-text-primary)] ${
              !isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""
            }`}
          >
            Education{" "}
            <span className={`font-bold ${isCircuit ? "text-[var(--color-trace)]" : "text-[var(--color-accent)]"}`}>
              Timeline
            </span>
            .
          </h3>
        </motion.div>

        <div className="relative ml-4 md:ml-8">
          <div className={`absolute left-0 top-0 bottom-0 w-px ${isCircuit ? "bg-[var(--color-border)]" : "bg-[var(--color-border)]"}`} />

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-10 group"
              >
                {/* Node */}
                <div
                  className={`absolute w-3 h-3 -left-[6px] top-5 transition-all duration-300 z-10 ${
                    isCircuit
                      ? edu.active
                        ? "bg-[var(--color-trace)] border-2 border-[var(--color-trace)] shadow-[0_0_12px_rgba(74,222,128,0.6)]"
                        : "bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-bright)] group-hover:border-[var(--color-trace)]"
                      : edu.active
                        ? "bg-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-full"
                        : "bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-bright)] rounded-full group-hover:border-[var(--color-accent)]"
                  }`}
                />

                {/* Horizontal trace — circuit only */}
                {isCircuit && (
                  <div className="absolute left-[6px] top-[22px] w-8 h-px bg-[var(--color-border)] group-hover:bg-[var(--color-border-bright)] transition-colors" />
                )}

                <div
                  className={`p-5 transition-all duration-300 ${
                    isCircuit
                      ? edu.active
                        ? "border border-[var(--color-trace)] bg-[rgba(74,222,128,0.03)]"
                        : "border border-[var(--color-border)] hover:border-[var(--color-border-bright)] bg-[rgba(26,31,18,0.4)]"
                      : edu.active
                        ? "border border-[var(--color-accent)] bg-white rounded-xl shadow-[0_2px_16px_rgba(59,130,246,0.06)]"
                        : "border border-[var(--color-border)] hover:border-[var(--color-border-bright)] bg-white rounded-xl"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="flex-grow">
                      <h4
                        className={`text-base md:text-lg font-semibold mb-1 transition-colors ${
                          isCircuit
                            ? edu.active ? "text-[var(--color-trace)]" : "text-[var(--color-text-primary)] group-hover:text-[var(--color-trace)]"
                            : edu.active
                              ? "text-[var(--color-accent)] font-[family-name:var(--font-display-sora)]"
                              : "text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] font-[family-name:var(--font-display-sora)]"
                        }`}
                      >
                        {edu.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                        <span className="text-[var(--color-text-secondary)] font-medium">{edu.institution}</span>
                        <span className="hidden sm:inline text-[var(--color-text-muted)]">•</span>
                        <span className="text-[var(--color-text-muted)]">{edu.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`text-[10px] tracking-wider uppercase px-2 py-1 ${
                          isCircuit
                            ? "font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                            : "font-[family-name:var(--font-body-noto)] text-[var(--color-text-muted)] font-medium bg-[var(--color-bg-elevated)] rounded-md"
                        }`}
                      >
                        {edu.duration}
                      </span>
                      {edu.score && (
                        <span
                          className={`text-[10px] tracking-wider px-2 py-1 ${
                            isCircuit
                              ? "font-[family-name:var(--font-mono)] text-[var(--color-accent)] border border-[var(--color-accent-dim)]"
                              : "font-[family-name:var(--font-body-noto)] text-[var(--color-accent)] font-semibold bg-[var(--color-accent-dim)] rounded-md"
                          }`}
                        >
                          {edu.score}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
