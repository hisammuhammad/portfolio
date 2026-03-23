"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: "U1",
    title: "AI-Enabled NFC Smart Lock System",
    tag: "Patent Applied",
    description:
      "An intelligent access control system using ESP32 and RFID with AI anomaly detection, designed for adaptive and real-time security.",
    features: [
      "AI-based anomaly detection",
      "IoT-enabled remote monitoring (Blynk)",
      "Real-time alerts & dynamic response",
    ],
  },
  {
    id: "U2",
    title: "Intelligent Pesticide Sprinkler System",
    tag: "Smart Agriculture",
    description:
      "Automated agricultural system utilizing environmental sensing for smart decision-making to optimize pesticide usage.",
    features: [
      "Precision pesticide application",
      "Reduces manual intervention",
      "Scalable smart farming integration",
    ],
  },
  {
    id: "U3",
    title: "FPV Drone for Aerial Survey",
    tag: "In Progress",
    description:
      "An FPV drone system designed for real-time aerial surveying and data capture.",
    features: [
      "Real-time FPV video transmission",
      "Flight control and stabilization",
      "Remote control and telemetry",
      "Scalable architecture for future AI integration",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative z-10">
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
            <span className="text-[var(--color-accent)]">02</span> // Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)]">
            Engineered{" "}
            <span className="font-bold text-[var(--color-trace)]">Systems</span>
            .
          </h3>
        </motion.div>

        {/* Schematic cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative group flex flex-col h-full"
            >
              {/* IC chip schematic card */}
              <div className="relative border border-dashed border-[var(--color-border)] hover:border-[var(--color-border-bright)] p-6 bg-[rgba(26,31,18,0.5)] transition-all duration-300 flex flex-col h-full">
                {/* Corner pins */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border border-[var(--color-trace)] bg-[var(--color-bg-base)]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border border-[var(--color-trace)] bg-[var(--color-bg-base)]" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-[var(--color-trace)] bg-[var(--color-bg-base)]" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-[var(--color-trace)] bg-[var(--color-bg-base)]" />

                {/* Component ID label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] border border-[var(--color-border)] px-2 py-0.5">
                    [{project.id}]
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-[var(--color-accent)] uppercase">
                    {project.tag}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-trace)] transition-colors leading-snug">
                  {project.title}
                </h4>

                {/* Desc */}
                <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light flex-grow">
                  {project.description}
                </p>

                {/* Features — BOM style */}
                <div className="border-t border-[var(--color-border)] pt-4 mt-auto">
                  <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.3em] uppercase text-[var(--color-text-muted)] block mb-3">
                    Features
                  </span>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-mono)]"
                      >
                        <span className="text-[var(--color-trace)] mr-2 mt-0.5 shrink-0">
                          ├─
                        </span>
                        <span className="group-hover:text-[var(--color-text-primary)] transition-colors">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
