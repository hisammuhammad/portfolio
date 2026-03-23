"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C", "C++", "Embedded C", "Python", "Java"],
  },
  {
    title: "IoT & Embedded",
    skills: ["ESP32", "Arduino", "Sensor Integration", "Real-Time Systems", "I2C / SPI / UART", "Microcontroller Interfacing"],
  },
  {
    title: "Technologies",
    skills: ["MQTT", "REST APIs", "WebSockets", "Firebase", "Edge Computing", "IoT Architecture"],
  },
  {
    title: "Tools & Core",
    skills: ["Git", "GitHub", "Linux", "Docker", "Blynk IoT", "Problem Solving", "System Design Thinking", "Technical Communication"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-sm tracking-widest uppercase text-white/40 mb-4">03. Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-light text-white/90">Technical & Professional <span className="font-semibold text-indigo-400">Toolkit</span>.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 h-full flex flex-col hover:border-indigo-500/30 transition-colors"
            >
              <h4 className="text-lg font-semibold text-white/80 mb-6 pb-4 border-b border-white/10 uppercase tracking-widest text-xs shrink-0">
                {category.title}
              </h4>
              <ul className="space-y-4 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-white/60 font-light text-sm flex items-start group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 group-hover:scale-125 transition-all mr-3 mt-1.5 shrink-0"></span>
                    <span className="group-hover:text-white/90 transition-colors leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
