"use client";
import { motion } from "framer-motion";

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
  return (
    <section id="education" className="py-28 relative z-10">
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
            <span className="text-[var(--color-accent)]">05</span> // Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)]">
            Education{" "}
            <span className="font-bold text-[var(--color-trace)]">
              Timeline
            </span>
            .
          </h3>
        </motion.div>

        {/* PCB Trace timeline */}
        <div className="relative ml-4 md:ml-8">
          {/* Vertical trace line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)]" />

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
                {/* Solder point node */}
                <div
                  className={`absolute w-3 h-3 border-2 -left-[6px] top-5 transition-all duration-300 z-10 ${
                    edu.active
                      ? "bg-[var(--color-trace)] border-[var(--color-trace)] shadow-[0_0_12px_rgba(74,222,128,0.6)]"
                      : "bg-[var(--color-bg-surface)] border-[var(--color-border-bright)] group-hover:border-[var(--color-trace)]"
                  }`}
                />

                {/* Horizontal trace from node to card */}
                <div className="absolute left-[6px] top-[22px] w-8 h-px bg-[var(--color-border)] group-hover:bg-[var(--color-border-bright)] transition-colors" />

                {/* Card */}
                <div
                  className={`border p-5 transition-all duration-300 ${
                    edu.active
                      ? "border-[var(--color-trace)] bg-[rgba(74,222,128,0.03)]"
                      : "border-[var(--color-border)] hover:border-[var(--color-border-bright)] bg-[rgba(26,31,18,0.4)]"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="flex-grow">
                      <h4
                        className={`text-base md:text-lg font-semibold mb-1 transition-colors ${
                          edu.active
                            ? "text-[var(--color-trace)]"
                            : "text-[var(--color-text-primary)] group-hover:text-[var(--color-trace)]"
                        }`}
                      >
                        {edu.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                        <span className="text-[var(--color-text-secondary)] font-medium">
                          {edu.institution}
                        </span>
                        <span className="hidden sm:inline text-[var(--color-text-muted)]">
                          •
                        </span>
                        <span className="text-[var(--color-text-muted)]">
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-1 uppercase">
                        {edu.duration}
                      </span>
                      {edu.score && (
                        <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-accent)] border border-[var(--color-accent-dim)] px-2 py-1">
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
