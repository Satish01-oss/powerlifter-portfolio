import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

const spring = { stiffness: 220, damping: 15, mass: 0.4 };

// Pulls its child toward the mouse cursor, then springs back on leave.
const Magnetic = ({ children, strength = 0.3, className = "" }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const handleMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
