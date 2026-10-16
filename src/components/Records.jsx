import { motion } from "framer-motion";
import { FaDumbbell, FaFire, FaBolt, FaTrophy } from "react-icons/fa";

import athleteData, { liftTotal } from "../data/athleteData";
import SectionHeading from "./SectionHeading";
import InteractiveCard from "./fx/InteractiveCard";
import CountUp from "./fx/CountUp";
import ParallaxWord from "./fx/ParallaxWord";

const { squat, bench, deadlift } = athleteData.records;

const records = [
  { title: "Squat", value: squat, icon: FaDumbbell, color: "text-red-500", bar: "bg-red-500", spot: "" },
  { title: "Bench Press", value: bench, icon: FaBolt, color: "text-blue-500", bar: "bg-blue-500", spot: "spot-blue" },
  { title: "Deadlift", value: deadlift, icon: FaFire, color: "text-orange-500", bar: "bg-orange-500", spot: "spot-orange" },
  { title: "Total", value: liftTotal, icon: FaTrophy, color: "text-yellow-400", bar: "bg-yellow-400", spot: "spot-gold", featured: true },
];

const ease = [0.16, 1, 0.3, 1];

const Records = () => {
  return (
    <section className="relative bg-ink py-24 overflow-hidden">
      <ParallaxWord text="Personal Best • Personal Best •" reverse className="absolute top-10 inset-x-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Personal Records"
          title="Competition Best Lifts"
          description="Strength is measured through consistency, discipline, and performance on the platform."
        />

        {/* Records Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {records.map((record, index) => (
            <InteractiveCard
              key={record.title}
              tilt
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.8, ease }}
              viewport={{ once: true }}
              className={`${record.spot} group overflow-hidden rounded-3xl border bg-card p-5 sm:p-8 ${
                record.featured
                  ? "border-yellow-500/40 bg-linear-to-br from-yellow-500/10 to-card"
                  : "border-zinc-800"
              }`}
            >
              <record.icon
                className={`text-3xl sm:text-4xl mb-5 ${record.color} transition-transform duration-300 group-hover:scale-125`}
                aria-hidden="true"
              />

              <h3 className="text-zinc-400 uppercase tracking-wider text-xs sm:text-sm">
                {record.title}
              </h3>

              <p className="mt-3 flex items-end gap-2">
                <span className={`font-display text-6xl sm:text-7xl leading-none ${record.color}`}>
                  <CountUp value={record.value} delay={0.2 + index * 0.12} />
                </span>
                <span className="text-zinc-400 mb-1.5">KG</span>
              </p>

              {/* Share of total */}
              <div className="mt-6 h-1.5 rounded-full bg-zinc-800 overflow-hidden" aria-hidden="true">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(record.value / liftTotal) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.4 + index * 0.12, ease }}
                  className={`h-full rounded-full ${record.bar}`}
                />
              </div>
            </InteractiveCard>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 rounded-3xl border border-zinc-800 bg-linear-to-r from-red-950/50 via-black to-black p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-4xl md:text-5xl tracking-wide text-white">
            Every Lift Represents Years of Discipline
          </h3>

          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            Powerlifting is more than numbers. It's commitment, consistency,
            and the courage to compete against yourself every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Records;
