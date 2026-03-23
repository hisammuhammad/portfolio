"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const projects = [
  { id: "U1", title: "AI-Enabled NFC Smart Lock System", tag: "Patent Applied", description: "An intelligent access control system using ESP32 and RFID with AI anomaly detection, designed for adaptive and real-time security.", features: ["AI-based anomaly detection", "IoT-enabled remote monitoring (Blynk)", "Real-time alerts & dynamic response"] },
  { id: "U2", title: "Intelligent Pesticide Sprinkler System", tag: "Smart Agriculture", description: "Automated agricultural system utilizing environmental sensing for smart decision-making to optimize pesticide usage.", features: ["Precision pesticide application", "Reduces manual intervention", "Scalable smart farming integration"] },
  { id: "U3", title: "FPV Drone for Aerial Survey", tag: "In Progress", description: "An FPV drone system designed for real-time aerial surveying and data capture.", features: ["Real-time FPV video transmission", "Flight control and stabilization", "Remote control and telemetry", "Scalable architecture for future AI integration"] },
];

export default function Projects() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="projects" className="py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className={`text-xs tracking-[0.3em] uppercase mb-3 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-accent)" }}>02</span> {isCircuit ? "// Projects" : "— Projects"}
          </h2>
          <h3 className={`text-3xl md:text-4xl font-light ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>
            Engineered <span className="font-bold" style={{ color: isCircuit ? "var(--color-trace)" : "var(--color-accent)" }}>Systems</span>.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} whileHover={{ y: -6 }} className="relative group flex flex-col h-full">
              <div
                className={`relative p-6 transition-all duration-300 flex flex-col h-full ${!isCircuit ? "rounded-2xl" : ""}`}
                style={{
                  border: isCircuit ? "1px dashed var(--color-border)" : "1px solid var(--color-border)",
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {isCircuit && (
                  <>
                    <div className="absolute -top-1 -left-1 w-2 h-2" style={{ border: "1px solid var(--color-trace)", backgroundColor: "var(--color-bg-base)" }} />
                    <div className="absolute -top-1 -right-1 w-2 h-2" style={{ border: "1px solid var(--color-trace)", backgroundColor: "var(--color-bg-base)" }} />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2" style={{ border: "1px solid var(--color-trace)", backgroundColor: "var(--color-bg-base)" }} />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2" style={{ border: "1px solid var(--color-trace)", backgroundColor: "var(--color-bg-base)" }} />
                  </>
                )}

                <div className="flex items-center justify-between mb-4">
                  {isCircuit ? (
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] px-2 py-0.5" style={{ color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>[{project.id}]</span>
                  ) : (
                    <span className="text-[10px] font-[family-name:var(--font-body-noto)] tracking-wider font-semibold uppercase" style={{ color: "var(--color-text-muted)" }}>{String(idx + 1).padStart(2, "0")}</span>
                  )}
                  <span className={`text-[10px] tracking-wider uppercase ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-semibold"}`} style={{ color: "var(--color-accent)" }}>{project.tag}</span>
                </div>

                <h4 className={`text-lg font-semibold mb-3 leading-snug transition-colors ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>{project.title}</h4>
                <p className="text-sm mb-6 leading-relaxed font-light flex-grow" style={{ color: "var(--color-text-secondary)" }}>{project.description}</p>

                <div className="pt-4 mt-auto" style={{ borderTop: "1px solid var(--color-border)" }}>
                  <span className={`text-[9px] tracking-[0.3em] uppercase block mb-3 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-semibold"}`} style={{ color: "var(--color-text-muted)" }}>Features</span>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-start text-xs ${isCircuit ? "font-[family-name:var(--font-mono)]" : ""}`} style={{ color: "var(--color-text-secondary)" }}>
                        <span className="mr-2 mt-0.5 shrink-0" style={{ color: isCircuit ? "var(--color-trace)" : "var(--color-accent)" }}>{isCircuit ? "├─" : "·"}</span>
                        <span>{feat}</span>
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
