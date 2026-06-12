import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaMedal,
  FaMapMarkerAlt,
  FaTrophy,
} from "react-icons/fa";

import athleteImage from "../assets/images/athlete.jpg";

const athleteInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "State",
    value: "West Bengal",
  },
  {
    icon: <FaDumbbell />,
    title: "Category",
    value: "Powerlifting",
  },
  {
    icon: <FaTrophy />,
    title: "Competitions",
    value: "15+",
  },
  {
    icon: <FaMedal />,
    title: "Medals",
    value: "20+",
  },
];

const About = () => {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-semibold uppercase tracking-widest">
            Athlete Profile
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            About The Athlete
          </h2>

          <div className="w-24 h-1 bg-red-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Athlete Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800">
              <img
                src={athleteImage}
                alt="Athlete"
                className="w-full h-[550px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Athlete Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-red-500 uppercase tracking-widest font-medium">
              National Powerlifter
            </span>

            <h3 className="text-4xl font-bold text-white mt-3">
              Athlete Name
            </h3>

            <p className="text-zinc-400 mt-5 leading-relaxed">
              National-level powerlifter representing West Bengal with multiple
              medals across state and national championships. Dedicated to
              strength, discipline, and competitive excellence.
            </p>

            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-sm">
                State Champion
              </span>

              <span className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-full text-sm">
                Gold Medalist
              </span>

              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm">
                National Athlete
              </span>

              <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm">
                Active Competitor
              </span>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {athleteInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#141414] border border-zinc-800 rounded-2xl p-5 hover:border-red-500/40 transition"
                >
                  <div className="text-red-500 text-2xl mb-3">
                    {item.icon}
                  </div>

                  <h4 className="text-zinc-400 text-sm">
                    {item.title}
                  </h4>

                  <p className="text-white text-xl font-semibold mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div className="mt-10 p-5 bg-[#141414] border border-zinc-800 rounded-2xl">
              <h4 className="text-white font-semibold mb-2">
                Current Status
              </h4>

              <p className="text-zinc-400">
                Currently participating in national-level powerlifting events
                and preparing for upcoming championships.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;