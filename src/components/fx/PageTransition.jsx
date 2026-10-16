import { useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

// The first page load is covered by the intro, so only later navigations get the curtain.
let hasNavigated = false;

/*
  Wraps each page. On navigation a red curtain sweeps up to cover the old page,
  then lifts away to reveal the new one. App.jsx scrolls to the top in between.
*/
const PageTransition = ({ children, className = "" }) => {
  const playCurtain = hasNavigated;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      <motion.main
        id="main"
        className={className}
        initial={{ opacity: playCurtain ? 0 : 1 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.25 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {children}
      </motion.main>

      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[80] bg-red-600 pointer-events-none"
        initial={{ scaleY: playCurtain ? 1 : 0, originY: 0 }}
        animate={{ scaleY: 0, originY: 0, transition: { duration: 0.55, ease, originY: { duration: 0 } } }}
        exit={{ scaleY: 1, originY: 1, transition: { duration: 0.45, ease, originY: { duration: 0 } } }}
      />
    </>
  );
};

export default PageTransition;
