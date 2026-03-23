"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const certs = [
  { name: "Cloud Computing", issuer: "NPTEL", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S135870027010527792.pdf" },
  { name: "Data Structures and Algorithms", issuer: "LPU", link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12307927_843_20_08_2025.pdf" },
  { name: "Hardware and Operating Systems", issuer: "IBM (Coursera)", link: "https://www.coursera.org/account/accomplishments/verify/BG76AH5SCMV3" },
];

export default function Certifications() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className={`text-xs tracking-[0.3em] uppercase mb-3 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-text-muted)" }}>
              <span style={{ color: "var(--color-accent)" }}>04</span> {isCircuit ? "// Certifications" : "— Certifications"}
            </h2>
            <h3 className={`text-3xl md:text-4xl font-light ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>
              Verified <span className="font-bold" style={{ color: isCircuit ? "var(--color-trace)" : "var(--color-accent)" }}>Credentials</span>.
            </h3>
          </motion.div>

          <div className="space-y-3">
            {certs.map((cert, idx) => (
              <motion.a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group flex items-center justify-between p-4 transition-all ${!isCircuit ? "rounded-xl" : ""}`}
                style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--card-bg)" }}>
                <div className="flex items-start gap-3">
                  {isCircuit && <span className="font-[family-name:var(--font-mono)] text-[10px] mt-1 shrink-0" style={{ color: "var(--color-text-muted)" }}>├─</span>}
                  <div>
                    <span className={`text-sm font-medium block transition-colors ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>{cert.name}</span>
                    <span className={`text-xs ${isCircuit ? "font-[family-name:var(--font-mono)]" : ""}`} style={{ color: "var(--color-text-muted)" }}>{cert.issuer}</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 transition-colors shrink-0" style={{ color: "var(--color-text-muted)" }} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
