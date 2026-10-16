import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageTransition from "../components/fx/PageTransition";
import SplitText from "../components/fx/SplitText";
import Magnetic from "../components/fx/Magnetic";
import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Page Not Found");

  return (
    <PageTransition className="min-h-screen bg-black flex items-center justify-center px-6 pt-20">
      <div className="text-center">
        {/* Three red referee lights = "no lift" */}
        <div className="flex justify-center gap-4" aria-hidden="true">
          {[0, 1, 2].map((light) => (
            <motion.span
              key={light}
              initial={{ backgroundColor: "#27272a", boxShadow: "0 0 0 rgba(239,68,68,0)" }}
              animate={{ backgroundColor: "#ef4444", boxShadow: "0 0 28px rgba(239,68,68,0.8)" }}
              transition={{ delay: 0.5 + light * 0.35, duration: 0.2 }}
              className="w-6 h-6 rounded-full"
            />
          ))}
        </div>

        <p className="font-display text-[9rem] leading-none text-red-500 mt-6">
          <SplitText text="404" by="char" stagger={0.1} delay={0.2} />
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mt-2">
          No Lift — Page Not Found
        </h1>

        <p className="text-zinc-400 mt-4 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Magnetic className="inline-block mt-8">
          <Link
            to="/"
            className="inline-block px-7 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition"
          >
            Back to Home
          </Link>
        </Magnetic>
      </div>
    </PageTransition>
  );
};

export default NotFound;
