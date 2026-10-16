import { motion, useReducedMotion, useSpring } from "framer-motion";

const spring = { stiffness: 200, damping: 20 };

const tags = {
  div: motion.div,
  a: motion.a,
  article: motion.article,
};

/*
  Card with a cursor-following spotlight (see .spotlight in App.css)
  and an optional 3D tilt toward the pointer. Accepts any motion props.
*/
const InteractiveCard = ({
  as = "div",
  tilt = false,
  className = "",
  style,
  children,
  ...props
}) => {
  const Tag = tags[as];
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);

  const handleMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    el.style.setProperty("--x", `${px}px`);
    el.style.setProperty("--y", `${py}px`);

    if (tilt && !reduceMotion && event.pointerType === "mouse") {
      rotateY.set((px / rect.width - 0.5) * 14);
      rotateX.set(-(py / rect.height - 0.5) * 14);
    }
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Tag
      {...props}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ ...style, rotateX, rotateY, transformPerspective: 900 }}
      className={`spotlight ${className}`}
    >
      {children}
    </Tag>
  );
};

export default InteractiveCard;
