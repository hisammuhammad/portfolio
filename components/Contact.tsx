"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Phone, MessageCircle, Instagram } from "lucide-react";

const contactMethods = [
  { label: "Email", action: "mailto:hisam.m@yahoo.com", icon: Mail },
  { label: "Phone", action: "tel:+919778343425", icon: Phone },
  { label: "WhatsApp", action: "https://wa.me/919778343425?text=Hi%20Hisam,%20I%20came%20across%20your%20portfolio", icon: MessageCircle },
  { label: "GitHub", action: "https://github.com/hisammuhammad", icon: Github },
  { label: "LinkedIn", action: "https://www.linkedin.com/in/hisammuhammad/", icon: Linkedin },
  { label: "Instagram", action: "https://www.instagram.com/hisam.mohemmed/", icon: Instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-sm tracking-widest uppercase text-white/40 mb-4">07. What's Next?</h2>
            <h3 className="text-4xl md:text-6xl font-light text-white/90 mb-8">Get In <span className="font-semibold text-indigo-400">Touch</span>.</h3>
            
            <p className="text-white/60 mb-12 font-light text-lg">
              Whether you have a question, a proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a href="https://wa.me/919778343425?text=Hi%20Hisam,%20I%20came%20across%20your%20portfolio..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-500 transition-all mb-20 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
              <MessageCircle className="w-4 h-4" />
              Say Hello
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <a 
                  key={idx}
                  href={method.action} 
                  target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : "_self"} 
                  rel="noopener noreferrer" 
                  className="group flex flex-col items-center gap-3 w-20"
                >
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-lg border border-white/5">
                    <Icon className="w-6 h-6 text-white/70 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <span className="text-[11px] text-white/40 group-hover:text-white/70 transition-colors flex items-center justify-center gap-1 uppercase tracking-wider font-semibold">
                    {method.label} 
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      <div className="mt-32 text-center text-white/20 text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Hisam Muhammad Ameen. All rights reserved.</p>
      </div>
    </section>
  );
}
