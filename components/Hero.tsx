"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

const fullName = "Hisam Muhammad Ameen";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          {/* System boot line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-trace)] animate-pulse-glow" />
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[var(--color-trace)]">
              SYS.INIT // IoT &amp; Embedded Systems Engineer
            </span>
          </motion.div>

          {/* Name with typewriter */}
          <div className="mb-8">
            <h1 className="font-[family-name:var(--font-mono)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1]">
              {displayedName}
              <span
                className={`inline-block w-[3px] h-[0.85em] bg-[var(--color-accent)] ml-1 align-middle ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] font-light max-w-2xl mb-12 leading-relaxed"
          >
            Designing intelligent, autonomous systems at the intersection of{" "}
            <span className="text-[var(--color-trace)] font-medium">AI</span>,{" "}
            <span className="text-[var(--color-trace)] font-medium">IoT</span>,
            and{" "}
            <span className="text-[var(--color-trace)] font-medium">
              embedded technologies
            </span>
            .
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-[var(--color-accent)] text-black px-7 py-3.5 font-[family-name:var(--font-mono)] font-semibold text-sm tracking-wider hover:shadow-[0_0_20px_rgba(255,107,43,0.3)] transition-all"
            >
              VIEW_WORK
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download="Hisam_Ameen_CV.pdf"
              className="flex items-center gap-2 px-7 py-3.5 font-[family-name:var(--font-mono)] font-medium text-sm border border-[var(--color-border-bright)] text-[var(--color-text-primary)] hover:bg-[var(--color-trace-dim)] transition-all tracking-wider"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD_CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
          scroll
        </span>
        <div className="w-[1px] h-10 bg-[var(--color-border)] overflow-hidden relative">
          <motion.div
            className="w-full h-1/3 bg-[var(--color-trace)] absolute top-0"
            animate={{ y: ["0%", "300%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
