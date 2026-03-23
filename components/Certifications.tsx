"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S135870027010527792.pdf",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "LPU",
    link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12307927_843_20_08_2025.pdf",
  },
  {
    name: "Hardware and Operating Systems",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/BG76AH5SCMV3",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:items-start">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-3">
              <span className="text-[var(--color-accent)]">04</span> //
              Certifications
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)]">
              Verified{" "}
              <span className="font-bold text-[var(--color-trace)]">
                Credentials
              </span>
              .
            </h3>
          </motion.div>

          {/* Cert entries */}
          <div className="space-y-3">
            {certs.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex items-center justify-between p-4 border border-[var(--color-border)] hover:border-[var(--color-border-bright)] hover:bg-[var(--color-trace-dim)] transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--color-text-muted)] mt-1 shrink-0">
                    ├─
                  </span>
                  <div>
                    <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-trace)] transition-colors block">
                      {cert.name}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
