import { motion } from "framer-motion";

const container = (stagger, delay) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const piece = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

/*
  Kinetic text: each word (or letter) rises out of a mask.
  Screen readers get the plain text; the animated pieces are hidden from them.

  Pass `animate` to control it from a parent (e.g. after the intro finishes),
  otherwise it plays when scrolled into view.
*/
const SplitText = ({
  text,
  by = "word",
  stagger = 0.06,
  delay = 0,
  animate,
  className = "",
}) => {
  const words = text.split(" ");
  const trigger =
    animate === undefined
      ? { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } }
      : { animate: animate ? "show" : "hidden" };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        variants={container(stagger, delay)}
        {...trigger}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {(by === "char" ? [...word] : [word]).map((part, partIndex) => (
              <span
                key={partIndex}
                className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
              >
                <motion.span className="inline-block" variants={piece}>
                  {part}
                </motion.span>
              </span>
            ))}
            {wordIndex < words.length - 1 && " "}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export default SplitText;
