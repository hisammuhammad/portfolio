"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-indigo-500"></div>
            <span className="uppercase tracking-widest text-indigo-400 text-sm font-semibold">
              IoT & Embedded Systems Engineer
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight text-white/90">
            Hisam Muhammad <br /> Ameen
          </h1>

          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mb-12 leading-relaxed">
            Designing intelligent, autonomous systems at the intersection of AI, IoT, and embedded technologies.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-indigo-50 transition-all"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download="Hisam_Ameen_CV.pdf"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/10 transition-all text-white/90"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            className="w-full h-1/2 bg-white/60 absolute top-0"
            animate={{ y: ["0%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
