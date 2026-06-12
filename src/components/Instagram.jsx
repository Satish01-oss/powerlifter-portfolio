import { motion } from "framer-motion";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

import athleteInstagram from "../assets/images/instagram.jpeg";

const Instagram = () => {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-[#141414]
          "
        >
          <div className="grid lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-full">
              <img
                src={athleteInstagram}
                alt="Instagram Profile"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-red-500/10
                  border
                  border-red-500/20
                  text-red-500
                "
              >
                <FaInstagram />
                Instagram
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
                Follow The Journey
              </h2>

              <p className="text-zinc-400 mt-5 leading-relaxed">
                Stay updated with competition highlights,
                training sessions, achievements, and daily
                powerlifting content.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    1K+
                  </h3>
                  <p className="text-zinc-500 text-sm">
                    Followers
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    3
                  </h3>
                  <p className="text-zinc-500 text-sm">
                    Posts
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Daily
                  </h3>
                  <p className="text-zinc-500 text-sm">
                    Updates
                  </p>
                </div>
              </div>

              {/* Handle */}
              <div
                className="
                  mt-8
                  p-4
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black
                "
              >
                <p className="text-zinc-500 text-sm">
                  Instagram Handle
                </p>

                <p className="text-white text-lg font-semibold mt-1">
                  @ps_world07
                </p>
              </div>

              {/* Button */}
              <a
                href="https://instagram.com/ps_world07"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  bg-red-600
                  hover:bg-red-700
                  transition
                  px-6
                  py-3
                  rounded-xl
                  text-white
                  font-semibold
                "
              >
                Follow on Instagram
                <FaArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;