"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Enabled NFC Smart Lock System",
    tag: "Patent Applied",
    description: "An intelligent access control system using ESP32 and RFID with AI anomaly detection, designed for adaptive and real-time security.",
    features: [
      "AI-based anomaly detection",
      "IoT-enabled remote monitoring (Blynk)",
      "Real-time alerts & dynamic response"
    ]
  },
  {
    title: "Intelligent Pesticide Sprinkler System",
    tag: "Smart Agriculture",
    description: "Automated agricultural system utilizing environmental sensing for smart decision-making to optimize pesticide usage.",
    features: [
      "Precision pesticide application",
      "Reduces manual intervention",
      "Scalable smart farming integration"
    ]
  },
  {
    title: "FPV Drone for Aerial Survey",
    tag: "In Progress",
    description: "An FPV drone system designed for real-time aerial surveying and data capture.",
    features: [
      "Real-time FPV video transmission",
      "Flight control and stabilization",
      "Remote control and telemetry",
      "Scalable architecture for future AI integration"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-sm tracking-widest uppercase text-white/40 mb-4">02. Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-light text-white/90">Engineered <span className="font-semibold text-indigo-400">Systems</span>.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[50px] group-hover:bg-indigo-500/20 transition-all duration-700 pointer-events-none" />
              
              <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs tracking-wider rounded-full mb-6 font-medium border border-indigo-500/20 self-start">
                {project.tag}
              </div>
              
              <h4 className="text-2xl font-semibold mb-4 text-white/90 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-white/60 mb-8 leading-relaxed font-light flex-grow">
                {project.description}
              </p>
              
              <ul className="space-y-3 mt-auto">
                {project.features.map((feat, f_idx) => (
                  <li key={f_idx} className="flex items-center text-sm text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mr-3 shrink-0"></span>
                    {feat}
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
