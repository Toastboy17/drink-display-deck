import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ICE = "#C2E9FF";
const PINK = "#FFD1E0";

type Variant = "default" | "hover" | "drag";

/** A spring-smoothed ring that trails the cursor and swells on interactive targets. */
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 26, stiffness: 300, mass: 0.4 });
  const springY = useSpring(y, { damping: 26, stiffness: 300, mass: 0.4 });
  const [variant, setVariant] = useState<Variant>("default");

  const size = variant === "hover" ? 64 : variant === "drag" ? 80 : 36;

  useEffect(() => {
    const half = size / 2;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - half);
      y.set(e.clientY - half);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el?.closest) return;
      if (el.closest('[data-cursor="drag"]')) setVariant("drag");
      else if (el.closest('[data-cursor="hover"]')) setVariant("hover");
      else setVariant("default");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, size]);

  const tone = variant === "drag" ? PINK : ICE;

  return (
    <motion.div
      className="hidden md:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 200,
        pointerEvents: "none",
        x: springX,
        y: springY,
        borderRadius: "999px",
        background: variant === "default" ? "transparent" : `${tone}22`,
        border: `1.5px solid ${tone}`,
      }}
      animate={{ width: size, height: size }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {variant === "drag" && (
        <span
          className="label-caps"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            color: "#0b2330",
          }}
        >
          Drag
        </span>
      )}
    </motion.div>
  );
}
