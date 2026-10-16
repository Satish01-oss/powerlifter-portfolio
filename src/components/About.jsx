import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaMedal,
  FaMapMarkerAlt,
  FaTrophy,
} from "react-icons/fa";

import athleteImage from "../assets/images/athlete.webp";
import athleteData, { medalTotal } from "../data/athleteData";
import SectionHeading from "./SectionHeading";
import ImageReveal from "./fx/ImageReveal";
import InteractiveCard from "./fx/InteractiveCard";
import CountUp from "./fx/CountUp";
import ParallaxWord from "./fx/ParallaxWord";

const { name, title, state, category, competitions, weightClass, about, federations } =
  athleteData;

const athleteInfo = [
  { icon: FaMapMarkerAlt, title: "State", value: state },
  { icon: FaDumbbell, title: "Category", value: category },
  { icon: FaTrophy, title: "Competitions", value: competitions, count: true },
  { icon: FaMedal, title: "Medals", value: medalTotal, count: true },
];

const badgeStyles = [
  "bg-red-500/10 border-red-500/30 text-red-400",
  "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  "bg-blue-500/10 border-blue-500/30 text-blue-400",
];

const ease = [0.16, 1, 0.3, 1];

const About = () => {
  return (
    <section className="relative bg-ink py-24 overflow-hidden">
      <ParallaxWord text="Discipline • Strength •" className="absolute top-10 inset-x-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="Athlete Profile" title="About The Athlete" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Athlete Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
              className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-red-600/40 via-red-900/10 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <ImageReveal
              src={athleteImage}
              alt={`${name} flexing his bicep in the gym, wearing an India (Bharat) singlet`}
              width="990"
              height="1588"
              className="rounded-3xl border border-zinc-800 h-[460px] sm:h-[560px]"
              imgClassName="object-[center_30%]"
            />

            {/* Floating weight-class tag */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 14 }}
              className="absolute -bottom-5 -right-2 sm:right-6 px-6 py-4 rounded-2xl bg-red-600 text-white shadow-2xl shadow-red-900/50"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-red-100">Weight Class</p>
              <p className="font-display text-3xl tracking-wider leading-none mt-1">{weightClass}</p>
            </motion.div>
          </div>

          {/* Athlete Details */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }}
              className="block text-red-500 uppercase tracking-widest font-medium text-sm"
            >
              {title}
            </motion.span>

            <motion.h3
              variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }}
              className="font-display text-5xl md:text-6xl text-white tracking-wide mt-2"
            >
              {name}
            </motion.h3>

            <motion.p
              variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }}
              className="text-zinc-400 mt-4 leading-relaxed"
            >
              {about.description}
            </motion.p>

            {/* Federation Badges */}
            <motion.ul
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-wrap gap-3 mt-8"
              aria-label="Federations"
            >
              {federations.map((federation, index) => (
                <motion.li
                  key={federation}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
                  }}
                  className={`px-4 py-2 border rounded-full text-sm ${badgeStyles[index % badgeStyles.length]}`}
                >
                  {federation}
                </motion.li>
              ))}
            </motion.ul>

            {/* Info Cards */}
            <dl className="grid grid-cols-2 gap-4 sm:gap-5 mt-10">
              {athleteInfo.map((item, index) => (
                <InteractiveCard
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease }}
                  className="group flex flex-col bg-card border border-zinc-800 rounded-2xl p-5"
                >
                  <item.icon
                    className="text-red-500 text-2xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
                    aria-hidden="true"
                  />
                  <dt className="text-zinc-400 text-sm">{item.title}</dt>
                  <dd className="text-white text-lg sm:text-xl font-semibold mt-1">
                    {item.count ? <CountUp value={item.value} /> : item.value}
                  </dd>
                </InteractiveCard>
              ))}
            </dl>

            {/* Current Status */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 p-5 bg-card border border-zinc-800 border-l-4 border-l-red-500 rounded-2xl"
            >
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </span>
                Current Status
              </h4>

              <p className="text-zinc-400">{about.currentStatus}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
