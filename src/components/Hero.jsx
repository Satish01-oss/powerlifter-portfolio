import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaInstagram, FaArrowRight, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero.webp";
import athleteData, { liftTotal } from "../data/athleteData";
import { useIntroDone } from "../context/intro";
import SplitText from "./fx/SplitText";
import CountUp from "./fx/CountUp";
import Magnetic from "./fx/Magnetic";

const { name, title, competitions, medals, hero, instagram } = athleteData;
const [firstName, ...lastNames] = name.toUpperCase().split(" ");

const stats = [
  { value: competitions, label: "Competitions", color: "text-red-500" },
  { value: medals.gold, label: "Gold Medals", color: "text-yellow-400" },
  { value: medals.silver, label: "Silver Medals", color: "text-zinc-300" },
  { value: medals.bronze, label: "Bronze Medals", color: "text-orange-500" },
];

const ease = [0.16, 1, 0.3, 1];

const Hero = () => {
  const ref = useRef(null);
  const ready = useIntroDone();

  // Scroll-linked parallax: background sinks and zooms, content lifts and fades.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { delay, duration: 0.9, ease },
  });

  return (
    <section
      ref={ref}
      className="relative min-h-svh flex items-center overflow-hidden pt-28 pb-24 md:pb-28"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <motion.img
          src={heroImage}
          alt=""
          fetchPriority="high"
          initial={{ scale: 1.25 }}
          animate={{ scale: ready ? 1.05 : 1.25 }}
          transition={{ duration: 2.4, ease }}
          className="w-full h-full object-cover object-[center_30%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />

      {/* Giant outlined total in the background */}
      <motion.div
        aria-hidden="true"
        style={{ y: watermarkY }}
        className="hidden lg:block absolute right-[-2vw] top-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 1.4, ease }}
          className="font-display text-outline text-[24vw] leading-[0.8] text-right"
        >
          {liftTotal}
          <span className="block text-[8vw] tracking-widest">KG Total</span>
        </motion.p>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full"
      >
        <div className="max-w-4xl">
          <motion.div {...fadeUp(0)} className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/50 bg-yellow-400/10 text-yellow-300 text-xs uppercase tracking-[0.2em]">
              <FaTrophy aria-hidden="true" />
              {athleteData.headlineTitle}
            </span>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/40 bg-red-500/10 text-red-400 text-xs uppercase tracking-[0.25em]">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              {athleteData.weightClass}
            </span>
          </motion.div>

          <h1 className="font-display text-[5rem] sm:text-8xl lg:text-9xl text-white leading-[0.85] tracking-wide">
            <SplitText text={firstName} by="char" stagger={0.05} delay={0.1} animate={ready} className="block" />
            <SplitText text={lastNames.join(" ")} by="char" stagger={0.05} delay={0.35} animate={ready} className="block" />

            {/* Title wipes in left-to-right */}
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: ready ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
              transition={{ delay: 0.75, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="block text-red-500 text-[2.75rem] sm:text-6xl lg:text-7xl mt-3"
            >
              {title}
            </motion.span>
          </h1>

          <motion.ul
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 1 } } }}
            className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-x-3 gap-y-1 text-base md:text-xl text-zinc-200 font-medium"
          >
            {/* Stacked with bullets on mobile, inline with separators on larger screens */}
            {hero.highlights.map((item, index) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className="flex items-center gap-3"
              >
                <span
                  className={`text-red-500 ${index === 0 ? "sm:hidden" : ""}`}
                  aria-hidden="true"
                >
                  •
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            {...fadeUp(1.3)}
            className="mt-4 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed"
          >
            {hero.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(1.45)} className="flex flex-col sm:flex-row gap-4 mt-8">
            <Magnetic>
              <Link
                to="/achievements"
                className="group relative overflow-hidden px-7 py-4 bg-red-600 rounded-xl text-white font-semibold text-center shadow-lg shadow-red-900/40 flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative">View Achievements</span>
                <FaArrowRight className="relative transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 border border-zinc-600 hover:border-red-500 hover:bg-white/5 rounded-xl text-white flex items-center justify-center gap-2 transition"
              >
                <FaInstagram aria-hidden="true" />
                Instagram
              </a>
            </Magnetic>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1.6 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="flex flex-col-reverse bg-white/5 backdrop-blur-md border border-zinc-800 hover:border-zinc-600 transition-colors rounded-2xl p-5"
              >
                <dt className="text-zinc-400 text-sm mt-1">{stat.label}</dt>
                <dd className={`font-display text-5xl tracking-wide ${stat.color}`}>
                  <CountUp value={stat.value} start={ready} delay={1.7} />
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 2.2 }}
        className="hidden md:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-[10px] uppercase tracking-[0.3em]"
        aria-hidden="true"
      >
        Scroll
        <div className="w-6 h-10 border border-zinc-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
