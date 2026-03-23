"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certs = [
  { 
    name: "Cloud Computing", 
    issuer: "NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S135870027010527792.pdf"
  },
  { 
    name: "Data Structures and Algorithms", 
    issuer: "LPU",
    link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12307927_843_20_08_2025.pdf"
  },
  {
    name: "Hardware and Operating Systems",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/BG76AH5SCMV3"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:items-center">
          <div>
            <h2 className="text-sm tracking-widest uppercase text-white/40 mb-4">04. Certifications</h2>
            <h3 className="text-3xl md:text-4xl font-light text-white/90"><span className="font-semibold text-indigo-400">Certifications</span>.</h3>
          </div>
          
          <div className="space-y-4 flex-grow">
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl glass hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all gap-4 h-full"
              >
                <div className="flex flex-col">
                  <span className="text-white/90 font-medium mb-1 group-hover:text-indigo-300 transition-colors">{cert.name}</span>
                  <span className="text-white/50 text-sm tracking-wide">{cert.issuer}</span>
                </div>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-indigo-400 hover:text-white transition-colors shrink-0"
                >
                  View Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
