import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

const COPIES = 4;

/*
  Endless ticker that speeds up, reverses and skews with scroll velocity.
  Based on Motion's scroll-velocity pattern (useScroll + useVelocity + useSpring).
*/
const VelocityMarquee = ({ items, baseVelocity = 3, className = "", itemClassName = "" }) => {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const direction = useRef(1);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-2000, 2000], [8, -8], { clamp: true });

  // Each copy is 1/COPIES of the track, so wrapping by one copy is seamless.
  const x = useTransform(baseX, (v) => `${wrap(-100 / COPIES, -200 / COPIES, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;

    const factor = velocityFactor.get();

    // Scrolling up flips the direction; scrolling fast speeds it up.
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;

    let moveBy = direction.current * baseVelocity * (delta / 1000);
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`} aria-hidden="true">
      <motion.div className="flex whitespace-nowrap" style={{ x, skewX }}>
        {Array.from({ length: COPIES }, (_, copy) => (
          <span key={copy} className="flex shrink-0">
            {items.map((item) => (
              <span key={item} className={`flex items-center ${itemClassName}`}>
                {item}
                <span className="mx-6 md:mx-10 text-[0.6em]">✦</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default VelocityMarquee;
