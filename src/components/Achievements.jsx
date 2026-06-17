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
    description: "Secured the title of West Bengal State Champion in 2026, demonstrating exceptional performance and dedication to powerlifting at the state level.",
  },
  {
    title: "India Powerlifting Champion",
    icon: <FaAward />,
    color: "text-red-500",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    description: "Won the prestigious India Powerlifting Championship in 2026, showcasing exceptional strength and dedication to the sport.",
  },
  {
    title: "National-level Powerlifter",
    icon: <FaStar />,
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
      description: "Consistently ranked among the top powerlifters in national competitions, demonstrating a commitment to excellence and continuous improvement.",
  },
  {
    title: "All Indian National Championship Medalist",
    icon: <FaMedal />,
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    description: "Achieved multiple medals at the All Indian National Championship, including 1 Gold Medal and 2 Silver Medals, highlighting competitive success on a national stage.",
  },
];

const medals = [
  {
    title: "Gold Medals",
    count: "02",
    color: "text-yellow-400",
    bg: "bg-yellow-400/5",
    border: "border-yellow-400/20",
  },
  {
    title: "Silver Medals",
    count: "05",
    color: "text-zinc-300",
    bg: "bg-zinc-300/5",
    border: "border-zinc-300/20",
  },
  {
    title: "Bronze Medals",
    count: "02",
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
                {item.description}
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