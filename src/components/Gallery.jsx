import { motion } from "framer-motion";

import gallery1 from "../assets/images/gallery/gallery1.jpeg";
import gallery2 from "../assets/images/gallery/gallery2.jpeg";
import gallery3 from "../assets/images/gallery/gallery3.jpeg";
import gallery4 from "../assets/images/gallery/gallery4.jpeg";
import gallery5 from "../assets/images/gallery/gallery5.png";
import gallery6 from "../assets/images/gallery/gallery6.png";

const galleryImages = [
  {
    image: gallery1,
    category: "Competition",
  },
  {
    image: gallery2,
    category: "Gold Medal",
  },
  {
    image: gallery3,
    category: "Training",
  },
  {
    image: gallery4,
    category: "Championship",
  },
  {
    image: gallery5,
    category: "Powerlifting",
  },
  {
    image: gallery6,
    category: "National Event",
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 uppercase tracking-widest font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Moments of Strength
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            A glimpse into competitions, achievements, training,
            and the journey of becoming stronger every day.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800"
            >
              <img
                src={item.image}
                alt={item.category}
                className="
                  w-full
                  h-[400px]
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-6
                  w-full
                "
              >
                <span
                  className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-red-600
                    text-white
                    text-sm
                  "
                >
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mt-16
            border
            border-zinc-800
            rounded-3xl
            bg-[#141414]
            p-8
            text-center
          "
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Every Competition Tells a Story
          </h3>

          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            From training sessions to championship stages,
            every moment reflects dedication, sacrifice,
            and relentless pursuit of excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;