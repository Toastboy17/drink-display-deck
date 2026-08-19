import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { drinks } from "@/data/nube";

/**
 * Calm horizontal drift: the whole row travels sideways as the page scrolls,
 * one can holds the centre at a time, its neighbours sit smaller and hazier.
 */
export default function DriftGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const last = drinks.length - 1;

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(last, Math.max(0, Math.round(p * last))));
  });

  /** Row travel: item 0 centred at the start, last item centred at the end. */
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -last * 260]);
  const x = useSpring(rawX, { stiffness: 90, damping: 24, mass: 0.6 });
  const rowX = useTransform(x, (v) => `calc(50% - 130px + ${v}px)`);

  return (
    <section ref={ref} data-cursor="drag" className="section-blush relative h-[320svh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <p className="label-caps absolute left-1/2 top-[10%] -translate-x-1/2 px-6 text-center text-[#AECDDD]">
          Drift through the room
        </p>

        <div className="relative">
          <motion.div
            className="flex items-center will-change-transform"
            style={{ x: rowX }}
          >
            {drinks.map((drink, i) => {
              const distance = Math.abs(i - active);
              const isActive = distance === 0;
              const scale = isActive ? 1 : distance === 1 ? 0.78 : 0.66;
              const opacity = isActive ? 1 : distance === 1 ? 0.6 : 0.32;
              const blur = isActive ? 0 : Math.min(distance * 1.8, 4);

              return (
                <div
                  key={drink.id}
                  className="shrink-0 px-3 transition-all duration-700 ease-out"
                  style={{
                    width: 260,
                    transform: `scale(${scale})`,
                    opacity,
                    filter: `blur(${blur}px)`,
                  }}
                >
                  <div className="relative">
                    <div
                      aria-hidden
                      className="animate-bloom pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${drink.glow}59 0%, ${drink.glow}1f 50%, transparent 74%)`,
                        filter: "blur(22px)",
                      }}
                    />
                    <img
                      src={drink.img}
                      alt={drink.name}
                      loading={i < 3 ? "eager" : "lazy"}
                      className="relative aspect-square w-full object-contain"
                      style={{ filter: `drop-shadow(0 16px 26px ${drink.glow}30)` }}
                    />
                  </div>
                  <p
                    className="mt-5 text-center font-display text-[22px] leading-none tracking-[0.04em] transition-colors duration-500"
                    style={{ color: isActive ? "#F2F7FA" : "#7FA0B4" }}
                  >
                    {drink.name}
                  </p>
                  {drink.story ? (
                    <p
                      className="mx-auto mt-3 max-w-[30ch] text-center text-[12.5px] leading-relaxed transition-opacity duration-500"
                      style={{ color: "#AECDDD", opacity: isActive ? 1 : 0.35 }}
                    >
                      {drink.story}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </motion.div>
        </div>

        <p className="absolute bottom-[10%] left-1/2 max-w-[38ch] -translate-x-1/2 px-6 text-center text-[15px] leading-relaxed text-[#DCEDF7]">
          Nothing here is in a hurry. Keep scrolling and the room drifts with you.
        </p>
      </div>
    </section>
  );
}
