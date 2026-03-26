"use client";
import { Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function FloatingCVButton() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
    >
      <a
        href="/resume.pdf"
        download="Hisam_Ameen_CV.pdf"
        className={`flex items-center gap-2 px-5 py-3.5 font-medium text-sm tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xl ${
          isCircuit 
            ? "font-[family-name:var(--font-mono)]" 
            : "font-[family-name:var(--font-body-noto)] rounded-full"
        }`}
        style={
          isCircuit
            ? { 
                backgroundColor: "var(--background)", 
                border: "1px solid var(--color-trace)", 
                color: "var(--color-trace)",
                textShadow: "0 0 8px rgba(0,255,170,0.3)",
                boxShadow: "0 0 15px rgba(0,255,170,0.15)"
              }
            : { 
                backgroundColor: "var(--color-text-primary)", 
                color: "#fff",
              }
        }
      >
        <Download className="w-4 h-4" />
        <span>{isCircuit ? "DOWNLOAD_CV" : "Download CV"}</span>
      </a>
    </motion.div>
  );
}
