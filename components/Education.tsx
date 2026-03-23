"use client";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.Tech Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    duration: "Aug 2023 – Present",
    score: "",
    active: true
  },
  {
    title: "Intermediate (PCM)",
    institution: "Garden Valley EM HSS",
    location: "Kuttippala, Kerala",
    duration: "Mar 2021 – May 2022",
    score: "Percentage: 86%",
    active: false
  },
  {
    title: "Matriculation",
    institution: "Govt Higher Secondary School",
    location: "Kuttiady, Kerala",
    duration: "Mar 2019 – May 2020",
    score: "Percentage: 96%",
    active: false
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-sm tracking-widest uppercase text-white/40 mb-4">05. Education</h2>
          <h3 className="text-4xl md:text-5xl font-light text-white/90">Education <span className="font-semibold text-indigo-400">Timeline</span>.</h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 pb-4">
          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline node */}
                <div className={`absolute w-3.5 h-3.5 rounded-full border-2 -left-[7.5px] top-6 group-hover:scale-125 transition-transform duration-300 z-10 ${edu.active ? 'bg-indigo-500 border-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.8)]' : 'bg-white/10 border-white/20'}`} />
                
                <div className={`glass p-5 rounded-2xl border transition-colors duration-300 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4 h-full ${edu.active ? 'border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10' : 'border-white/5 group-hover:bg-white/5 hover:border-white/20'}`}>
                  {/* Subtle gradient glow inside card for active item */}
                  {edu.active && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none transition-opacity duration-700" />
                  )}
                  
                  <div className="flex-grow">
                    <h4 className={`text-lg md:text-xl font-bold transition-colors ${edu.active ? 'text-indigo-300' : 'text-white/90 group-hover:text-white'}`}>
                      {edu.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1 text-white/60">
                      <span className="font-medium text-white/80 text-sm">{edu.institution}</span>
                      <span className="hidden sm:inline text-white/30">•</span>
                      <span className="text-sm tracking-wide">{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto mt-2 md:mt-0 gap-3">
                    <span className="inline-block px-3 py-1 bg-white/5 text-white/60 text-xs font-medium tracking-wider uppercase rounded border border-white/10 shrink-0">
                      {edu.duration}
                    </span>
                    {edu.score && (
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest rounded border border-indigo-500/20 shadow-inner shrink-0">
                        {edu.score}
                      </span>
                    )}
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
