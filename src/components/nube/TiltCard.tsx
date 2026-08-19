import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

/** Wraps a card so it rotates in 3D toward the cursor with a sweeping specular glare. */
export default function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), { stiffness: 200, damping: 20 });
  const glarePct = useTransform(px, [0, 1], [0, 100]);
  const glarePosition = useMotionTemplate`${glarePct}% 0%`;

  const onMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      data-cursor="hover"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 900 }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d", position: "relative" }}>
        {children}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "22px",
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(105deg, transparent 34%, rgba(255,255,255,0.15) 47%, transparent 62%)",
            backgroundSize: "240% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: glarePosition,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
