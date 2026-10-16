import { motion } from "framer-motion";
import { FaMedal, FaTrophy, FaAward, FaGlobeAsia, FaCrown } from "react-icons/fa";

import athleteData from "../data/athleteData";
import SectionHeading from "./SectionHeading";
import InteractiveCard from "./fx/InteractiveCard";
import CountUp from "./fx/CountUp";

const tones = {
  gold: { icon: FaTrophy, color: "text-yellow-400", card: "border-yellow-400/20 bg-yellow-400/5", spot: "spot-gold" },
  red: { icon: FaAward, color: "text-red-500", card: "border-red-500/20 bg-red-500/5", spot: "" },
  blue: { icon: FaGlobeAsia, color: "text-blue-400", card: "border-blue-400/20 bg-blue-400/5", spot: "spot-blue" },
  green: { icon: FaMedal, color: "text-green-400", card: "border-green-400/20 bg-green-400/5", spot: "spot-green" },
  orange: { icon: FaCrown, color: "text-orange-400", card: "border-orange-400/20 bg-orange-400/5", spot: "spot-orange" },
};

const featured = athleteData.achievements.filter((item) => item.featured);
const regular = athleteData.achievements.filter((item) => !item.featured);

const medals = [
  { title: "Gold Medals", count: athleteData.medals.gold, color: "text-yellow-400", card: "bg-yellow-400/5 border-yellow-400/20", spot: "spot-gold" },
  { title: "Silver Medals", count: athleteData.medals.silver, color: "text-zinc-300", card: "bg-zinc-300/5 border-zinc-300/20", spot: "" },
  { title: "Bronze Medals", count: athleteData.medals.bronze, color: "text-orange-500", card: "bg-orange-500/5 border-orange-500/20", spot: "spot-orange" },
];

const ease = [0.16, 1, 0.3, 1];

const Achievements = ({ headingLevel }) => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          as={headingLevel}
          eyebrow="Achievements"
          title="Medals & Championships"
          description="Years of dedication, discipline and hard work reflected through state, national and international achievements."
        />

        {/* Medal Stats */}
        <dl className="grid grid-cols-3 gap-3 sm:gap-6">
          {medals.map((medal, index) => (
            <InteractiveCard
              key={medal.title}
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease }}
              viewport={{ once: true }}
              className={`${medal.card} ${medal.spot} group flex flex-col-reverse items-center border rounded-3xl p-5 sm:p-8 text-center`}
            >
              <dt className="text-zinc-300 mt-2 text-sm sm:text-lg">{medal.title}</dt>
              <dd className={`font-display text-6xl sm:text-8xl leading-none ${medal.color}`}>
                <span className="text-shine">
                  <CountUp value={medal.count} pad={2} delay={0.2 + index * 0.15} />
                </span>
              </dd>
              <FaMedal
                className={`text-2xl sm:text-3xl mb-3 ${medal.color} transition-transform duration-500 group-hover:rotate-[360deg]`}
                aria-hidden="true"
              />
            </InteractiveCard>
          ))}
        </dl>

        {/* Featured title(s): full-width trophy card */}
        {featured.map((item) => (
          <InteractiveCard
            as="article"
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className="spot-gold group relative overflow-hidden mt-16 rounded-3xl border border-yellow-400/40 bg-linear-to-br from-yellow-500/15 via-yellow-900/5 to-black p-8 md:p-12"
          >
            {/* Slow light sweep across the card */}
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-yellow-200/10 to-transparent"
            />

            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
                className="shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-linear-to-br from-yellow-300 to-yellow-600 flex items-center justify-center text-black text-5xl md:text-6xl shadow-2xl shadow-yellow-500/30"
              >
                <FaTrophy aria-hidden="true" />
              </motion.div>

              <div>
                <span className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-semibold">
                  Biggest Title
                </span>
                <h3 className="font-display text-5xl md:text-7xl tracking-wide leading-none mt-2 text-yellow-400">
                  <span className="text-shine">{item.title}</span>
                </h3>
                <p className="text-zinc-300 mt-4 max-w-2xl leading-relaxed">{item.description}</p>
              </div>
            </div>
          </InteractiveCard>
        ))}

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {regular.map((item, index) => {
            const tone = tones[item.tone] ?? tones.red;

            return (
              <InteractiveCard
                as="article"
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 2) * 0.15, duration: 0.8, ease }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                whileHover={{ y: -8 }}
                className={`${tone.card} ${tone.spot} group relative overflow-hidden border rounded-3xl p-8`}
              >
                {/* Big outlined index number */}
                <span
                  aria-hidden="true"
                  className="absolute -top-4 right-4 font-display text-[7rem] leading-none text-outline transition-transform duration-500 group-hover:-translate-y-2"
                >
                  {String(featured.length + index + 1).padStart(2, "0")}
                </span>

                <tone.icon
                  className={`relative text-4xl mb-5 ${tone.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                  aria-hidden="true"
                />

                <h3 className="relative text-white text-2xl font-bold">{item.title}</h3>

                <p className="relative text-zinc-400 mt-3 leading-relaxed">{item.description}</p>
              </InteractiveCard>
            );
          })}
        </div>

        {/* Achievement Banner with a light sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden mt-16 rounded-3xl border border-zinc-800 bg-linear-to-r from-red-950/50 to-black p-8 md:p-12 text-center"
        >
          <motion.div
            aria-hidden="true"
            initial={{ x: "-120%" }}
            whileInView={{ x: "120%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent"
          />

          <h3 className="relative font-display text-4xl md:text-5xl tracking-wide text-white">
            Representing Strength & Discipline
          </h3>

          <p className="relative text-zinc-400 mt-3 max-w-2xl mx-auto">
            Competing at state, national and international level while
            inspiring future athletes through dedication and hard work.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
