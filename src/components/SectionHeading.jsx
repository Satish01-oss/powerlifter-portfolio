import { motion } from "framer-motion";
import SplitText from "./fx/SplitText";

const SectionHeading = ({ eyebrow, title, description, as: Tag = "h2" }) => {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, letterSpacing: "0.6em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block text-red-500 font-semibold uppercase text-sm"
      >
        {eyebrow}
      </motion.span>

      <Tag className="font-display text-5xl md:text-7xl text-white mt-3 tracking-wide leading-none">
        <SplitText text={title} stagger={0.08} delay={0.1} />
      </Tag>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-24 h-1 bg-red-500 mx-auto mt-5 rounded-full"
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-zinc-400 mt-5 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
