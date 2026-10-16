import { motion, useScroll, useSpring } from "framer-motion";

// Thin red reading-progress bar along the top of the window.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-linear-to-r from-red-700 via-red-500 to-orange-400"
    />
  );
};

export default ScrollProgress;
