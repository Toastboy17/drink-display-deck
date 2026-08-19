import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { drinks } from "@/data/nube";
import Logo from "@/components/nube/Logo";

type FloatSpec = {
  id: string;
  /** Horizontal anchor in percent of the stage width. */
  x: number;
  /** Vertical anchor in percent of the stage height. */
  y: number;
  /** Base diameter in px before the depth scale is applied. */
  size: number;
  /** 0 = far away and hazy, 1 = closest to the viewer. */
  depth: number;
  /** Idle vertical travel in px. */
  drift: number;
  /** Idle horizontal sway in px. */
  sway: number;
  duration: number;
  delay: number;
};

/**
 * Drinks are placed like objects suspended in still water rather than on a
 * rotating carousel: no two share a rhythm, size or depth.
 */
const specs: FloatSpec[] = [
  { id: "iced-latte", x: 50, y: 50, size: 300, depth: 1, drift: 22, sway: 11, duration: 10.5, delay: 0 },
  { id: "strawberry-matcha", x: 19, y: 30, size: 230, depth: 0.88, drift: 28, sway: -15, duration: 12.5, delay: 1.1 },
  { id: "salted-caramel-banana-matcha", x: 80, y: 27, size: 214, depth: 0.8, drift: 32, sway: 17, duration: 14, delay: 0.5 },
  { id: "mango-matcha", x: 28, y: 76, size: 180, depth: 0.66, drift: 34, sway: -13, duration: 15.5, delay: 2.2 },
  { id: "blueberry-matcha", x: 86, y: 71, size: 164, depth: 0.56, drift: 30, sway: 15, duration: 17, delay: 1.6 },
  { id: "mango-shake", x: 9, y: 60, size: 146, depth: 0.46, drift: 26, sway: -12, duration: 18.5, delay: 3 },
];

/** Feathered edge so a drink dissolves into the room instead of sitting in a card. */
const FEATHER =
  "radial-gradient(circle at 50% 47%, #000 44%, rgba(0,0,0,0.86) 62%, rgba(0,0,0,0.34) 78%, transparent 92%)";

/** One suspended drink — own component so motion hooks never run inside a map callback. */
function FloatingDrink({ spec, progress }: { spec: FloatSpec; progress: MotionValue<number> }) {
  const drink = drinks.find((d) => d.id === spec.id) ?? drinks[0]!;

  // Closer drinks travel further as the room scrolls past — depth parallax.
  const parallax = useTransform(progress, [0, 1], [spec.depth * 150, spec.depth * -150]);
  const scale = 0.72 + spec.depth * 0.28;
  const blur = (1 - spec.depth) * 2.4;
  const dim = 0.62 + spec.depth * 0.38;

  return (
    <motion.div
      aria-hidden={spec.depth < 0.6}
      style={{
        position: "absolute",
        left: `${spec.x}%`,
        top: `${spec.y}%`,
        y: parallax,
        translateX: "-50%",
        translateY: "-50%",
        width: spec.size,
        willChange: "transform",
      }}
    >
      <motion.div
        animate={{
          y: [0, -spec.drift, spec.drift * 0.45, 0],
          x: [0, spec.sway, spec.sway * -0.55, 0],
          rotate: [0, spec.sway > 0 ? 2.2 : -2.2, spec.sway > 0 ? -1.4 : 1.4, 0],
        }}
        transition={{
          duration: spec.duration,
          delay: spec.delay,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.32, 0.68, 1],
        }}
        style={{ scale }}
      >
        <div className="relative">
          {/* Soft cold halo bedded under the drink so it reads as suspended light. */}
          <div
            className="absolute -inset-[22%] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(194,233,255,0.16) 0%, rgba(255,209,224,0.07) 45%, transparent 72%)",
              filter: "blur(14px)",
            }}
          />
          <img
            src={drink.img}
            alt={drink.name}
            loading="lazy"
            className="relative aspect-square w-full object-cover"
            style={{
              WebkitMaskImage: FEATHER,
              maskImage: FEATHER,
              filter: `blur(${blur.toFixed(2)}px) saturate(1.02)`,
              opacity: dim,
            }}
          />
        </div>

        {spec.depth > 0.7 && (
          <p
            className="label-caps mt-3 text-center text-[#AECDDD]"
            style={{ fontSize: 10, opacity: 0.72 }}
          >
            {drink.name}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

/**
 * Closing section: the menu comes loose and drifts. Scroll only shifts the room's
 * depth — the drinks keep breathing on their own timing, awake or idle.
 */
export default function Scene3D() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const stageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const stageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);
  const headingOpacity = useTransform(scrollYProgress, [0.14, 0.4, 0.66, 0.9], [0, 1, 1, 0]);
  const mistX = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} data-cursor="drag" className="section-blush relative h-[150svh] overflow-hidden">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Cold light pooling in the room. */}
        <motion.div
          className="absolute inset-[-10%]"
          style={{
            x: mistX,
            background:
              "radial-gradient(58% 50% at 34% 34%, rgba(194,233,255,0.11) 0%, transparent 68%), radial-gradient(50% 44% at 74% 76%, rgba(255,209,224,0.09) 0%, transparent 70%)",
          }}
        />

        <p className="label-caps absolute left-1/2 top-[9%] z-20 -translate-x-1/2 px-6 text-center text-[#AECDDD]">
          Move through the room
        </p>

        <motion.p
          style={{ opacity: headingOpacity }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[clamp(72px,17vw,250px)] leading-none tracking-[0.08em] text-[#F2F7FA]/[0.055]"
        >
          WEIGHTLESS
        </motion.p>

        <motion.div className="absolute inset-0 z-10" style={{ y: stageY, scale: stageScale }}>
          {specs.map((spec) => (
            <FloatingDrink key={spec.id} spec={spec} progress={scrollYProgress} />
          ))}
        </motion.div>

        {/* Vignette keeps the drift feeling like a room, not a flat wall. */}
        <div
          className="pointer-events-none absolute inset-0 z-[15]"
          style={{
            background:
              "radial-gradient(80% 74% at 50% 48%, transparent 0%, rgba(11,35,48,0.26) 100%), linear-gradient(to bottom, #10303d 0%, transparent 13%, transparent 87%, #10303d 100%)",
          }}
        />

        {/* The brand mark drifts with the room instead of sitting fixed on it. */}
        <motion.div
          aria-hidden
          className="absolute bottom-[16%] left-1/2 z-20 -translate-x-1/2"
          animate={{ y: [0, -14, 7, 0], opacity: [0.5, 0.78, 0.6, 0.5] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", times: [0, 0.34, 0.7, 1] }}
        >
          <Logo className="h-[46px] sm:h-[56px]" />
        </motion.div>

        <p className="absolute bottom-[8%] left-1/2 z-20 max-w-[36ch] -translate-x-1/2 px-6 text-center text-[14px] text-[#AECDDD]">
          Nothing here is in a hurry. Keep scrolling and the room drifts with you.
        </p>
      </div>
    </section>
  );
}
