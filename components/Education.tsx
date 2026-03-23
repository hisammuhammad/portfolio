"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const educationData = [
  { title: "B.Tech Computer Science and Engineering", institution: "Lovely Professional University", location: "Phagwara, Punjab", duration: "Aug 2023 – Present", score: "", active: true },
  { title: "Intermediate (PCM)", institution: "Garden Valley EM HSS", location: "Kuttippala, Kerala", duration: "Mar 2021 – May 2022", score: "Percentage: 86%", active: false },
  { title: "Matriculation", institution: "Govt Higher Secondary School", location: "Kuttiady, Kerala", duration: "Mar 2019 – May 2020", score: "Percentage: 96%", active: false },
];

export default function Education() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="education" className="py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className={`text-xs tracking-[0.3em] uppercase mb-3 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-accent)" }}>05</span> {isCircuit ? "// Education" : "— Education"}
          </h2>
          <h3 className={`text-3xl md:text-4xl font-light ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>
            Education <span className="font-bold" style={{ color: isCircuit ? "var(--color-trace)" : "var(--color-accent)" }}>Timeline</span>.
          </h3>
        </motion.div>

        <div className="relative ml-4 md:ml-8">
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: "var(--color-border)" }} />
          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="relative pl-10 group">
                <div
                  className={`absolute w-3 h-3 -left-[6px] top-5 transition-all duration-300 z-10 ${!isCircuit ? "rounded-full" : ""}`}
                  style={
                    edu.active
                      ? { backgroundColor: isCircuit ? "var(--color-trace)" : "var(--color-accent)", border: `2px solid ${isCircuit ? "var(--color-trace)" : "var(--color-accent)"}`, boxShadow: "var(--active-glow)" }
                      : { backgroundColor: "var(--color-bg-surface)", border: "2px solid var(--color-border-bright)" }
                  }
                />
                {isCircuit && <div className="absolute left-[6px] top-[22px] w-8 h-px transition-colors" style={{ backgroundColor: "var(--color-border)" }} />}

                <div
                  className={`p-5 transition-all duration-300 ${!isCircuit ? "rounded-xl" : ""}`}
                  style={{
                    border: edu.active ? `1px solid ${isCircuit ? "var(--color-trace)" : "var(--color-accent)"}` : "1px solid var(--color-border)",
                    backgroundColor: "var(--card-bg)",
                    boxShadow: edu.active && !isCircuit ? "0 2px 16px rgba(59,130,246,0.06)" : undefined,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="flex-grow">
                      <h4 className={`text-base md:text-lg font-semibold mb-1 transition-colors ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`}
                        style={{ color: edu.active ? (isCircuit ? "var(--color-trace)" : "var(--color-accent)") : "var(--color-text-primary)" }}>
                        {edu.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                        <span className="font-medium" style={{ color: "var(--color-text-secondary)" }}>{edu.institution}</span>
                        <span className="hidden sm:inline" style={{ color: "var(--color-text-muted)" }}>•</span>
                        <span style={{ color: "var(--color-text-muted)" }}>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`text-[10px] tracking-wider uppercase px-2 py-1 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium rounded-md"}`}
                        style={{ color: "var(--color-text-muted)", border: isCircuit ? "1px solid var(--color-border)" : undefined, backgroundColor: !isCircuit ? "var(--color-bg-elevated)" : undefined }}>
                        {edu.duration}
                      </span>
                      {edu.score && (
                        <span className={`text-[10px] tracking-wider px-2 py-1 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-semibold rounded-md"}`}
                          style={{ color: "var(--color-accent)", border: isCircuit ? "1px solid var(--color-accent-dim)" : undefined, backgroundColor: !isCircuit ? "var(--color-accent-dim)" : undefined }}>
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
