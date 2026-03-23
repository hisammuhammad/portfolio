"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="py-32 relative flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 to-blue-500/10 rounded-full blur-[100px] animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-widest uppercase text-white/40 mb-8">06. Vision</h2>
          
          <h3 className="text-3xl md:text-5xl font-light text-white/90 leading-tight mb-12">
            Focused on building the <span className="font-semibold text-indigo-400">next generation</span> of intelligent systems that are autonomous, adaptive, and seamlessly integrated into everyday life.
          </h3>
          
          <p className="text-xl font-light text-white/60 leading-relaxed max-w-2xl mx-auto">
            Interested in advancing the convergence of AI, IoT, and embedded systems to create predictive, secure, and scalable smart infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
