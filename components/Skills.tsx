"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const skillCategories = [
  { id: "U1", title: "Programming", skills: ["C", "C++", "Embedded C", "Python", "Java"] },
  { id: "R1", title: "IoT & Embedded", skills: ["ESP32", "Arduino", "Sensor Integration", "Real-Time Systems", "I2C / SPI / UART", "Microcontroller Interfacing"] },
  { id: "C1", title: "Technologies", skills: ["MQTT", "REST APIs", "WebSockets", "Firebase", "Edge Computing", "IoT Architecture"] },
  { id: "Q1", title: "Tools & Core", skills: ["Git", "GitHub", "Linux", "Docker", "Blynk IoT", "Problem Solving", "System Design Thinking", "Technical Communication"] },
];

export default function Skills() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="skills" className="py-28 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className={`text-xs tracking-[0.3em] uppercase mb-3 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-accent)" }}>03</span> {isCircuit ? "// Capabilities" : "— Skills"}
          </h2>
          <h3 className={`text-3xl md:text-4xl font-light ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>
            {isCircuit ? "Bill of " : "Technical "}
            <span className="font-bold" style={{ color: isCircuit ? "var(--color-trace)" : "var(--color-accent)" }}>{isCircuit ? "Materials" : "Toolkit"}</span>.
          </h3>
        </motion.div>

        {isCircuit ? (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
            <div className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[100px_200px_1fr]" style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--surface-bg-solid)" }}>
              <div className="px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-text-muted)", borderRight: "1px solid var(--color-border)" }}>Ref</div>
              <div className="px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-text-muted)", borderRight: "1px solid var(--color-border)" }}>Category</div>
              <div className="px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-text-muted)" }}>Components</div>
            </div>
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[100px_200px_1fr] group transition-colors"
                style={idx < skillCategories.length - 1 ? { borderBottom: "1px solid var(--color-border)" } : undefined}>
                <div className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs flex items-start" style={{ color: "var(--color-trace)", borderRight: "1px solid var(--color-border)" }}>[{category.id}]</div>
                <div className="px-4 py-4 font-[family-name:var(--font-mono)] text-sm font-medium flex items-start" style={{ color: "var(--color-text-primary)", borderRight: "1px solid var(--color-border)" }}>{category.title}</div>
                <div className="px-4 py-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="font-[family-name:var(--font-mono)] text-xs px-2.5 py-1 transition-colors" style={{ border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="space-y-4">
                <h4 className="font-[family-name:var(--font-display-sora)] text-sm font-bold uppercase tracking-widest pb-3" style={{ color: "var(--color-text-primary)", borderBottom: "1px solid var(--color-border)" }}>{category.title}</h4>
                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-sm font-[family-name:var(--font-body-noto)] transition-colors" style={{ color: "var(--color-text-secondary)" }}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
