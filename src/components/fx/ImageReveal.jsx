import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/*
  Photo that wipes in from the bottom when scrolled into view,
  then drifts slightly inside its frame as the page scrolls (parallax).
*/
const ImageReveal = ({ src, alt, width, height, className = "", imgClassName = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        style={{ y, scale: 1.18 }}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
};

export default ImageReveal;
