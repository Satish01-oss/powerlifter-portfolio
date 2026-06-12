import { motion } from "framer-motion";
import {
  FaMedal,
  FaTrophy,
  FaAward,
  FaStar,
} from "react-icons/fa";

const achievements = [
  {
    title: "West Bengal State Champion",
    icon: <FaTrophy />,
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
  },
  {
    title: "Powerlifting India Champion",
    icon: <FaAward />,
    color: "text-red-500",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
  },
  {
    title: "National Powerlifting Athlete",
    icon: <FaStar />,
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
  },
  {
    title: "All Indian National Championship Participant",
    icon: <FaMedal />,
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
  },
];

const medals = [
  {
    title: "Gold Medals",
    count: "08",
    color: "text-yellow-400",
    bg: "bg-yellow-400/5",
    border: "border-yellow-400/20",
  },
  {
    title: "Silver Medals",
    count: "04",
    color: "text-zinc-300",
    bg: "bg-zinc-300/5",
    border: "border-zinc-300/20",
  },
  {
    title: "Bronze Medals",
    count: "03",
    color: "text-orange-500",
    bg: "bg-orange-500/5",
    border: "border-orange-500/20",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-widest text-red-500 font-semibold">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Medals & Championships
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Years of dedication, discipline and hard work reflected
            through state and national-level achievements.
          </p>
        </motion.div>

        {/* Medal Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {medals.map((medal, index) => (
            <motion.div
              key={medal.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`${medal.bg} ${medal.border}
              border rounded-3xl p-8 text-center`}
            >
              <h3
                className={`text-6xl font-black ${medal.color}`}
              >
                {medal.count}
              </h3>

              <p className="text-zinc-300 mt-3 text-lg">
                {medal.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className={`${item.bg} ${item.border}
              border rounded-3xl p-8
              transition-all duration-300`}
            >
              <div
                className={`text-4xl mb-5 ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-white text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-3">
                Recognized for excellence and competitive
                performance in powerlifting competitions.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-zinc-800
          bg-gradient-to-r from-red-950/30 to-black p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Representing Strength & Discipline
          </h3>

          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            Continuously competing at state and national
            championships while inspiring future athletes
            through dedication and hard work.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;