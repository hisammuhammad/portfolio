"use client";
import { motion } from "framer-motion";

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal traces */}
        <motion.path
          d="M0 200 H300 L320 180 H500 L520 200 H800"
          stroke="rgba(74, 222, 128, 0.2)"
          strokeWidth="1"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.path
          d="M400 400 H600 L620 380 H900 L920 400 H1200"
          stroke="rgba(74, 222, 128, 0.15)"
          strokeWidth="1"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3.5, ease: "easeOut", delay: 0.5 }}
        />
        <motion.path
          d="M0 600 H200 L220 580 H450 L470 600 H700 L720 620 H1000"
          stroke="rgba(74, 222, 128, 0.12)"
          strokeWidth="1"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, ease: "easeOut", delay: 1 }}
        />

        {/* Vertical traces */}
        <motion.path
          d="M300 0 V150 L280 170 V350"
          stroke="rgba(74, 222, 128, 0.15)"
          strokeWidth="1"
          strokeDasharray="500"
          initial={{ strokeDashoffset: 500 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path
          d="M800 100 V300 L820 320 V500 L800 520 V700"
          stroke="rgba(74, 222, 128, 0.1)"
          strokeWidth="1"
          strokeDasharray="800"
          initial={{ strokeDashoffset: 800 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.8 }}
        />
        <motion.path
          d="M1050 0 V200 L1070 220 V450"
          stroke="rgba(255, 107, 43, 0.08)"
          strokeWidth="1"
          strokeDasharray="600"
          initial={{ strokeDashoffset: 600 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.8, ease: "easeOut", delay: 1.2 }}
        />

        {/* Junction nodes */}
        {[
          [300, 200],
          [520, 200],
          [620, 380],
          [920, 400],
          [220, 580],
          [470, 600],
          [720, 620],
          [280, 170],
          [820, 320],
          [800, 520],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="rgba(74, 222, 128, 0.3)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.5 + i * 0.15 }}
          />
        ))}

        {/* IC pads */}
        {[
          [500, 180],
          [900, 380],
          [700, 600],
        ].map(([x, y], i) => (
          <motion.rect
            key={`pad-${i}`}
            x={Number(x) - 8}
            y={Number(y) - 8}
            width="16"
            height="16"
            rx="2"
            stroke="rgba(255, 107, 43, 0.2)"
            strokeWidth="1"
            fill="rgba(255, 107, 43, 0.05)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 + i * 0.3 }}
          />
        ))}
      </svg>
    </div>
  );
}
