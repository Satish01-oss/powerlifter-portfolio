import { useEffect } from "react";
import { motion } from "framer-motion";

import athleteData, { liftTotal } from "../../data/athleteData";
import { markIntroSeen } from "../../context/intro";
import CountUp from "./CountUp";

const ease = [0.76, 0, 0.24, 1];

// Competition plate colours (IPF): red 25kg, blue 20kg, yellow 15kg — largest innermost.
const plates = [
  { color: "#dc2626", height: 72, offset: 0 },
  { color: "#2563eb", height: 62, offset: 13 },
  { color: "#eab308", height: 52, offset: 26 },
];

const DURATION_MS = 2000;

// Intro: a barbell gets loaded plate by plate while the total counts up.
const Preloader = ({ onDone }) => {
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      markIntroSeen();
      onDone();
    }, DURATION_MS);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = overflow;
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease }}
      role="status"
      aria-label="Loading"
    >
      <svg viewBox="0 0 320 90" className="w-64 sm:w-80" aria-hidden="true">
        {/* Bar */}
        <motion.line
          x1="8"
          y1="45"
          x2="312"
          y2="45"
          stroke="#a1a1aa"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Collars */}
        <rect x="88" y="35" width="6" height="20" rx="1" fill="#d4d4d8" />
        <rect x="226" y="35" width="6" height="20" rx="1" fill="#d4d4d8" />

        {plates.map((plate, index) => (
          <g key={plate.color}>
            <motion.rect
              x={76 - plate.offset}
              y={45 - plate.height / 2}
              width="11"
              height={plate.height}
              rx="2"
              fill={plate.color}
              initial={{ x: -90, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.45 + index * 0.22, type: "spring", stiffness: 260, damping: 18 }}
            />
            <motion.rect
              x={233 + plate.offset}
              y={45 - plate.height / 2}
              width="11"
              height={plate.height}
              rx="2"
              fill={plate.color}
              initial={{ x: 90, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.45 + index * 0.22, type: "spring", stiffness: 260, damping: 18 }}
            />
          </g>
        ))}
      </svg>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-display text-white text-4xl sm:text-5xl tracking-[0.2em] mt-8"
      >
        {athleteData.name}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 text-red-500 text-sm uppercase tracking-[0.4em] tabular-nums"
      >
        Loading <CountUp value={liftTotal} duration={1.4} delay={0.4} /> KG
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
