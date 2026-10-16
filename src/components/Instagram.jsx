import { motion } from "framer-motion";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

import athleteInstagram from "../assets/images/instagram.webp";
import athleteData from "../data/athleteData";
import ImageReveal from "./fx/ImageReveal";
import CountUp from "./fx/CountUp";
import Magnetic from "./fx/Magnetic";
import SplitText from "./fx/SplitText";

const { name, instagram } = athleteData;

const stats = [
  { value: instagram.followers, label: "Followers" },
  { value: instagram.posts, label: "Posts" },
  { value: "Daily", label: "Updates" },
];

const ease = [0.16, 1, 0.3, 1];

const Instagram = () => {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-card"
        >
          {/* Slow-drifting Instagram-coloured glow */}
          <motion.div
            aria-hidden="true"
            animate={{ x: ["0%", "30%", "0%"], y: ["0%", "-20%", "0%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-linear-to-tr from-yellow-500/20 via-pink-600/20 to-purple-600/20 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-2 items-stretch">
            {/* Image */}
            <div className="relative">
              <ImageReveal
                src={athleteInstagram}
                alt={`${name} taking a mirror selfie in the gym`}
                width="1080"
                height="1080"
                className="h-[380px] sm:h-[500px] lg:h-full"
              />

              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-xl"
              >
                <FaInstagram />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500">
                <FaInstagram aria-hidden="true" />
                Instagram
              </div>

              <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mt-6 leading-none">
                <SplitText text="Follow The Journey" stagger={0.08} />
              </h2>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Stay updated with competition highlights, training sessions,
                achievements, and daily powerlifting content.
              </p>

              {/* Stats */}
              <dl className="flex flex-wrap gap-8 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse">
                    <dt className="text-zinc-500 text-sm">{stat.label}</dt>
                    <dd className="font-display text-4xl tracking-wide text-white">
                      <CountUp value={stat.value} />
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Handle */}
              <div className="mt-8 p-4 rounded-2xl border border-zinc-800 bg-black">
                <p className="text-zinc-500 text-sm">Instagram Handle</p>
                <p className="text-white text-lg font-semibold mt-1">{instagram.username}</p>
              </div>

              {/* Button */}
              <Magnetic className="inline-block mt-8">
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden inline-flex items-center gap-3 bg-red-600 px-6 py-3 rounded-xl text-white font-semibold"
                >
                  <span className="absolute inset-0 bg-linear-to-tr from-yellow-500 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">Follow on Instagram</span>
                  <FaArrowRight
                    className="relative transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
