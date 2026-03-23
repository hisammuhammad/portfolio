"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGE COLUMN (NOW ON LEFT) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative order-last lg:order-first"
          >
            {/* Image Container with Antigravity floating effect */}
            <div className="relative w-full max-w-sm mx-auto animate-float">
              {/* Abstract decorative background behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10"></div>
              
              <div className="glass p-2 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(79,70,229,0.1)] group">
                {/* 
                  To match the theme, we add a deep blue tint and high contrast, 
                  which fades into full color on hover.
                */}
                <img 
                  src="/profile.jpg" 
                  alt="Hisam Muhammad Ameen" 
                  className="w-full h-auto rounded-xl object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 ease-in-out"
                />
              </div>
              
              </div>
          </motion.div>

          {/* TEXT COLUMN (NOW ON RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2 className="text-sm tracking-widest uppercase text-white/40 mb-4">01. About Me</h2>
              <h3 className="text-3xl md:text-4xl font-light text-white/90">The <span className="font-semibold text-indigo-400">Architect</span> of Intelligent Infrastructure.</h3>
            </div>
            
            <div className="text-lg font-light leading-relaxed text-white/70 space-y-6">
              <p>
                I am an IoT and Embedded Systems Engineer focused on building intelligent, real-world systems that integrate AI, edge computing, and secure communication.
              </p>
              <p>
                My work involves designing adaptive, hardware-driven solutions such as AI-enabled smart locks and intelligent automation systems. <span className="text-white/90 font-normal">I specialize in developing systems that are not only reactive, but predictive and self-optimizing.</span>
              </p>
              <p>
                I am driven by a long-term vision to engineer autonomous, interconnected environments where devices can sense, learn, and respond with minimal human intervention.
              </p>
              <div className="pt-4">
                <p className="text-indigo-300 font-medium">
                  Currently building the foundation — aiming to engineer the future of intelligent systems.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
