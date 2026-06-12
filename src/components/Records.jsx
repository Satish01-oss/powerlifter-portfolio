import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaFire,
  FaBolt,
  FaTrophy,
} from "react-icons/fa";

const records = [
  {
    title: "Squat",
    value: "150",
    unit: "KG",
    icon: <FaDumbbell />,
    color: "text-red-500",
  },
  {
    title: "Bench Press",
    value: "110",
    unit: "KG",
    icon: <FaBolt />,
    color: "text-blue-500",
  },
  {
    title: "Deadlift",
    value: "220",
    unit: "KG",
    icon: <FaFire />,
    color: "text-orange-500",
  },
  {
    title: "Total",
    value: "480",
    unit: "KG",
    icon: <FaTrophy />,
    color: "text-yellow-400",
    featured: true,
  },
];

const Records = () => {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 uppercase tracking-widest font-semibold">
            Personal Records
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Competition Best Lifts
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Strength is measured through consistency, discipline,
            and performance on the platform.
          </p>
        </motion.div>

        {/* Records Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {records.map((record, index) => (
            <motion.div
              key={record.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`
                relative overflow-hidden rounded-3xl
                border border-zinc-800
                bg-[#141414]
                p-8
                transition-all duration-300
                ${
                  record.featured
                    ? "ring-1 ring-yellow-500/30"
                    : ""
                }
              `}
            >
              {/* Background Glow */}
              <div
                className="
                absolute -top-20 -right-20
                w-40 h-40
                bg-white/5
                rounded-full blur-3xl
              "
              />

              <div className="relative z-10">
                <div
                  className={`text-4xl mb-5 ${record.color}`}
                >
                  {record.icon}
                </div>

                <h3 className="text-zinc-400 uppercase tracking-wider text-sm">
                  {record.title}
                </h3>

                <div className="mt-4 flex items-end gap-2">
                  <span
                    className={`text-5xl font-black ${record.color}`}
                  >
                    {record.value}
                  </span>

                  <span className="text-zinc-400 mb-2">
                    {record.unit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mt-16
            rounded-3xl
            border border-zinc-800
            bg-gradient-to-r
            from-red-950/30
            via-black
            to-black
            p-8
            text-center
          "
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Every Lift Represents Years of Discipline
          </h3>

          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            Powerlifting is more than numbers. It's commitment,
            consistency, and the courage to compete against
            yourself every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Records;