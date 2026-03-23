"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MessageCircle, Instagram } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const contactMethods = [
  { label: "Email", cmd: "mailto:hisam.m@yahoo.com", icon: Mail, flag: "--via email" },
  { label: "Phone", cmd: "tel:+919778343425", icon: Phone, flag: "--via phone" },
  { label: "WhatsApp", cmd: "https://wa.me/919778343425?text=Hi%20Hisam,%20I%20came%20across%20your%20portfolio", icon: MessageCircle, flag: "--via whatsapp" },
  { label: "GitHub", cmd: "https://github.com/hisammuhammad", icon: Github, flag: "--via github" },
  { label: "LinkedIn", cmd: "https://www.linkedin.com/in/hisammuhammad/", icon: Linkedin, flag: "--via linkedin" },
  { label: "Instagram", cmd: "https://www.instagram.com/hisam.mohemmed/", icon: Instagram, flag: "--via instagram" },
];

export default function Contact() {
  const { theme } = useTheme();
  const isCircuit = theme === "circuit";

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className={`text-xs tracking-[0.3em] uppercase mb-3 ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] font-medium"}`} style={{ color: "var(--color-text-muted)" }}>
              <span style={{ color: "var(--color-accent)" }}>07</span> {isCircuit ? "// Contact" : "— Contact"}
            </h2>
            <h3 className={`text-3xl md:text-5xl font-light mb-6 ${!isCircuit ? "font-[family-name:var(--font-display-sora)]" : ""}`} style={{ color: "var(--color-text-primary)" }}>
              {isCircuit ? "Establish " : "Get In "}
              <span className="font-bold" style={{ color: isCircuit ? "var(--color-trace)" : "var(--color-accent)" }}>{isCircuit ? "Connection" : "Touch"}</span>.
            </h3>
            <p className="font-light text-base max-w-lg mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Whether you have a question, a proposal, or just want to say hi — I&apos;ll try my best to get back to you!
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <a href="https://wa.me/919778343425?text=Hi%20Hisam,%20I%20came%20across%20your%20portfolio..." target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-4 font-bold text-sm tracking-wider transition-all ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)] rounded-full"}`}
              style={isCircuit ? { backgroundColor: "var(--color-accent)", color: "#000" } : { backgroundColor: "var(--color-text-primary)", color: "#fff" }}>
              <MessageCircle className="w-4 h-4" />
              {isCircuit ? "$ CONNECT --NOW" : "Say Hello"}
            </a>
          </motion.div>

          {isCircuit ? (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--terminal-bg)" }}>
              <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--terminal-header-bg)" }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-trace)", opacity: 0.4 }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-text-muted)" }} />
                <span className="font-[family-name:var(--font-mono)] text-[10px] ml-2" style={{ color: "var(--color-text-muted)" }}>connect.sh</span>
              </div>
              <div className="p-4 space-y-1">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <motion.a key={idx} href={method.cmd} target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : "_self"} rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.4 + idx * 0.08 }}
                      className="group flex items-center gap-3 px-3 py-2.5 transition-all font-[family-name:var(--font-mono)] text-sm">
                      <span style={{ color: "var(--color-text-muted)" }}>$</span>
                      <span style={{ color: "var(--color-trace)" }}>connect</span>
                      <span className="transition-colors" style={{ color: "var(--color-text-secondary)" }}>{method.flag}</span>
                      <Icon className="w-3.5 h-3.5 ml-auto transition-colors" style={{ color: "var(--color-text-muted)" }} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-6">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a key={idx} href={method.cmd} target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : "_self"} rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + idx * 0.08 }}
                    className="group flex flex-col items-center gap-3 w-20">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-all"
                      style={{ border: "1px solid var(--color-border)" }}>
                      <Icon className="w-5 h-5 transition-colors" style={{ color: "var(--color-text-secondary)" }} />
                    </div>
                    <span className="text-[11px] transition-colors uppercase tracking-wider font-medium font-[family-name:var(--font-body-noto)]" style={{ color: "var(--color-text-muted)" }}>{method.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className={`text-[10px] tracking-[0.3em] uppercase ${isCircuit ? "font-[family-name:var(--font-mono)]" : "font-[family-name:var(--font-body-noto)]"}`} style={{ color: "var(--color-text-muted)" }}>
          &copy; {new Date().getFullYear()} Hisam Muhammad Ameen {isCircuit ? "//" : "—"} All rights reserved
        </p>
      </div>
    </section>
  );
}
