import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from "react-icons/fa";

import gallery from "../data/gallery";
import SectionHeading from "./SectionHeading";

const slide = {
  enter: (direction) => ({ x: direction * 120, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({ x: direction * -120, opacity: 0, scale: 0.96 }),
};

const Lightbox = ({ index, direction, onClose, onNavigate }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const item = gallery[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate(1);
      if (event.key === "ArrowLeft") onNavigate(-1);

      // Keep keyboard focus inside the dialog
      if (event.key === "Tab" && dialogRef.current) {
        const buttons = [...dialogRef.current.querySelectorAll("button")];
        const first = buttons[0];
        const last = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNavigate]);

  const navButton =
    "absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition";

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-red-600 text-white text-xl flex items-center justify-center transition"
      >
        <FaTimes />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Previous photo"
        className={`${navButton} left-2 sm:left-6`}
      >
        <FaChevronLeft />
      </button>

      <figure
        className="relative max-h-full flex flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Slides in the direction of travel; swipe left/right on touch screens */}
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.img
            key={item.image}
            src={item.image}
            alt={item.alt}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) onNavigate(1);
              else if (info.offset.x > 80) onNavigate(-1);
            }}
            draggable={false}
            className="max-h-[62vh] sm:max-h-[66vh] max-w-full w-auto rounded-2xl object-contain shadow-2xl shadow-black cursor-grab active:cursor-grabbing touch-pan-y"
          />
        </AnimatePresence>

        <figcaption className="mt-4 max-w-xl text-center" aria-live="polite">
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white">
              {item.category}
            </span>
            <span className="text-zinc-400">
              {index + 1} / {gallery.length}
            </span>
          </div>
          <p className="font-display text-3xl tracking-wide text-white mt-3">{item.title}</p>
          <p className="text-zinc-400 text-sm mt-1 leading-relaxed">{item.description}</p>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Next photo"
        className={`${navButton} right-2 sm:right-6`}
      >
        <FaChevronRight />
      </button>
    </motion.div>
  );
};

const Gallery = ({ headingLevel }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [direction, setDirection] = useState(1);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const navigate = useCallback((step) => {
    setDirection(step);
    setActiveIndex((current) => (current + step + gallery.length) % gallery.length);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          as={headingLevel}
          eyebrow="Gallery"
          title="Moments of Strength"
          description="A glimpse into competitions, achievements, training, and the journey of becoming stronger every day."
        />

        {/* Gallery Grid */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.li
              key={item.image}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              // Middle column trails slightly for a staggered, editorial feel
              className={index % 3 === 1 ? "lg:mt-12" : ""}
            >
              <motion.button
                type="button"
                onClick={() => {
                  setDirection(1);
                  setActiveIndex(index);
                }}
                aria-label={`View photo: ${item.title}. ${item.alt}`}
                variants={{
                  hidden: { clipPath: "inset(100% 0% 0% 0% round 24px)" },
                  show: {
                    clipPath: "inset(0% 0% 0% 0% round 24px)",
                    transition: { duration: 1.1, delay: (index % 3) * 0.15, ease: [0.76, 0, 0.24, 1] },
                  },
                }}
                className="group relative block w-full overflow-hidden rounded-3xl border border-zinc-800 hover:border-red-500/60 transition-colors text-left"
              >
                {/* Wrapper handles the hover zoom so it doesn't fight the reveal scale */}
                <div className="transition-transform duration-700 ease-out group-hover:scale-110">
                  <motion.img
                    src={item.thumb}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    variants={{
                      hidden: { scale: 1.4 },
                      show: { scale: 1, transition: { duration: 1.4, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-6 w-full flex items-end justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-sm">
                      {item.category}
                    </span>
                    <p className="font-display text-3xl tracking-wide text-white mt-3 leading-none">
                      {item.title}
                    </p>
                    {/* Description slides open on hover */}
                    <p className="text-zinc-300 text-sm max-h-0 opacity-0 overflow-hidden group-hover:max-h-28 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="shrink-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                    <FaExpand aria-hidden="true" />
                  </span>
                </div>
              </motion.button>
            </motion.li>
          ))}
        </ul>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-28 border border-zinc-800 rounded-3xl bg-card p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-4xl md:text-5xl tracking-wide text-white">
            Every Competition Tells a Story
          </h3>

          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            From training sessions to championship stages, every moment
            reflects dedication, sacrifice, and relentless pursuit of
            excellence.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            index={activeIndex}
            direction={direction}
            onClose={closeLightbox}
            onNavigate={navigate}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
