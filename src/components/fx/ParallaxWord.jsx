import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Giant outlined background word that slides sideways as its section scrolls by.
const ParallaxWord = ({ text, reverse = false, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ["-25%", "5%"] : ["5%", "-25%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${className}`}
    >
      <motion.p
        style={{ x }}
        className="font-display text-outline whitespace-nowrap leading-none text-[22vw] md:text-[16vw]"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default ParallaxWord;
