import { motion } from "framer-motion";
import { FaInstagram, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        py-24
        md:py-0
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Prashant Singh"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 md:pt-0 lg:pt-20">
        <div className="max-w-4xl">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-[3.2rem]
              sm:text-6xl
              md:text-7xl
              font-black
              text-white
              leading-[0.9]
              tracking-tight
            "
          >
            PRASHANT
            <br />
            SINGH

            <span className="block text-red-500 mt-3">
              NATIONAL
              <br className="md:hidden" />
              {" "}
              POWERLIFTER
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              mt-5
              text-base
              md:text-xl
              text-zinc-300
              max-w-2xl
              leading-relaxed
            "
          >
            West Bengal Champion • Jharkhand Gold Medalist •
            National Powerlifting Athlete

            <br />
            <br />

            Dedicated to pushing limits, inspiring athletes,
            and representing strength through discipline.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
            "
          >
            <Link
              to="/achievements"
              className="
                px-7
                py-4
                bg-red-600
                hover:bg-red-700
                rounded-xl
                text-white
                font-semibold
                transition
                text-center
              "
            >
              View Achievements
            </Link>

            <a
              href="https://instagram.com/ps_world07"
              target="_blank"
              rel="noreferrer"
              className="
                px-7
                py-4
                border
                border-zinc-600
                hover:border-red-500
                rounded-xl
                text-white
                flex
                items-center
                justify-center
                gap-2
                transition
              "
            >
              <FaInstagram />
              Instagram
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
              mt-12
            "
          >
            <div className="bg-white/5 backdrop-blur-md border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-red-500">
                7+
              </h3>
              <p className="text-zinc-400 mt-1">
                Competitions
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-yellow-400">
                2
              </h3>
              <p className="text-zinc-400 mt-1">
                Gold Medals
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-zinc-300">
                5
              </h3>
              <p className="text-zinc-400 mt-1">
                Silver Medals
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-orange-500">
                2
              </h3>
              <p className="text-zinc-400 mt-1">
                Bronze Medals
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-zinc-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;