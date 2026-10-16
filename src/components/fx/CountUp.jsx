import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Splits values like 480, "7+" or "1K+" into a number to count and a suffix.
const parse = (value) => {
  const match = String(value).match(/^(\d+)(.*)$/);
  return match ? { number: Number(match[1]), suffix: match[2] } : null;
};

const format = (number, pad) => String(Math.round(number)).padStart(pad, "0");

// Counts up from 0 when scrolled into view. Non-numeric values render as-is.
const CountUp = ({ value, pad = 0, duration = 1.8, delay = 0, start = true, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const parsed = parse(value);
  const number = parsed?.number;
  const suffix = parsed?.suffix ?? "";

  useEffect(() => {
    if (number === undefined || !inView || !start || !ref.current) return;

    if (reduceMotion) {
      ref.current.textContent = format(number, pad) + suffix;
      return;
    }

    const controls = animate(0, number, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = format(latest, pad) + suffix;
      },
    });

    return () => controls.stop();
  }, [inView, start, reduceMotion, number, suffix, pad, duration, delay]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {format(0, pad) + suffix}
    </span>
  );
};

export default CountUp;
