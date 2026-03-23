"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const fullName = "Hisam Muhammad Ameen";

export default function Hero() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    if (!isCircuit) {
      setDisplayedName(fullName);
      setDoneTyping(true);
      return;
    }
    let i = 0;
    setDisplayedName("");
    setDoneTyping(false);
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        setDoneTyping(true);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [isCircuit]);

  useEffect(() => {
    if (!isCircuit) return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [isCircuit]);

  const animDelay = isCircuit ? 2 : 0.3;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          {/* Boot line / subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            {isCircuit ? (
              <>
                <div className="w-2 h-2 rounded-full bg-[var(--color-trace)] animate-pulse-glow" />
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[var(--color-trace)]">
                  SYS.INIT // IoT &amp; Embedded Systems Engineer
                </span>
              </>
            ) : (
              <>
                <div className="h-px w-12 bg-[var(--color-accent)]" />
                <span className="font-[family-name:var(--font-body-noto)] text-sm tracking-widest uppercase text-[var(--color-text-muted)] font-medium">
                  IoT &amp; Embedded Systems Engineer
                </span>
              </>
            )}
          </motion.div>

          {/* Name */}
          <div className="mb-8">
            <h1
              className={`font-bold tracking-tight leading-[1.1] ${
                isCircuit
                  ? "font-[family-name:var(--font-mono)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--color-text-primary)]"
                  : "font-[family-name:var(--font-display-sora)] text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-[var(--color-text-primary)]"
              }`}
            >
              {displayedName}
              {isCircuit && (
                <span
                  className={`inline-block w-[3px] h-[0.85em] bg-[var(--color-accent)] ml-1 align-middle ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animDelay, duration: 0.8 }}
            className={`text-lg md:text-xl font-light max-w-2xl mb-12 leading-relaxed ${
              isCircuit ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-secondary)]"
            }`}
          >
            Designing intelligent, autonomous systems at the intersection of{" "}
            <span className={`font-medium ${isCircuit ? "text-[var(--color-trace)]" : "text-[var(--color-accent)]"}`}>
              AI
            </span>
            ,{" "}
            <span className={`font-medium ${isCircuit ? "text-[var(--color-trace)]" : "text-[var(--color-accent)]"}`}>
              IoT
            </span>
            , and{" "}
            <span className={`font-medium ${isCircuit ? "text-[var(--color-trace)]" : "text-[var(--color-accent)]"}`}>
              embedded technologies
            </span>
            .
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animDelay + 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className={`group flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wider transition-all ${
                isCircuit
                  ? "bg-[var(--color-accent)] text-black font-[family-name:var(--font-mono)] hover:shadow-[0_0_20px_rgba(255,107,43,0.3)]"
                  : "bg-[var(--color-text-primary)] text-white font-[family-name:var(--font-body-noto)] rounded-full hover:opacity-85"
              }`}
            >
              {isCircuit ? "VIEW_WORK" : "View Work"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download="Hisam_Ameen_CV.pdf"
              className={`flex items-center gap-2 px-7 py-3.5 font-medium text-sm tracking-wider transition-all ${
                isCircuit
                  ? "font-[family-name:var(--font-mono)] border border-[var(--color-border-bright)] text-[var(--color-text-primary)] hover:bg-[var(--color-trace-dim)]"
                  : "font-[family-name:var(--font-body-noto)] border border-[var(--color-border-bright)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)] rounded-full"
              }`}
            >
              <Download className="w-4 h-4" />
              {isCircuit ? "DOWNLOAD_CV" : "Download CV"}
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
        <span
          className={`text-[10px] uppercase tracking-[0.3em] ${
            isCircuit
              ? "font-[family-name:var(--font-mono)] text-[var(--color-text-muted)]"
              : "font-[family-name:var(--font-body-noto)] text-[var(--color-text-muted)]"
          }`}
        >
          scroll
        </span>
        <div className="w-[1px] h-10 bg-[var(--color-border)] overflow-hidden relative">
          <motion.div
            className={`w-full h-1/3 absolute top-0 ${
              isCircuit ? "bg-[var(--color-trace)]" : "bg-[var(--color-accent)]"
            }`}
            animate={{ y: ["0%", "300%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
