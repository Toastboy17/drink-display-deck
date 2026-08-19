import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { drinks } from "@/data/nube";

/**
 * Calm horizontal drift: the whole row travels sideways as the page scrolls,
 * one can holds the centre at a time, its neighbours sit smaller and hazier.
 */
export default function DriftGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  /** Cards shrink with the viewport so a phone never shows a clipped can. */
  const [card, setCard] = useState(260);
  const last = drinks.length - 1;

  useEffect(() => {
    const measure = () =>
      setCard(Math.max(150, Math.min(260, Math.round(window.innerWidth * 0.56))));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /**
   * Travel is tracked in *card units* so the centred card always lines up with
   * the middle of the screen, whatever width the cards happen to be.
   */
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, last]);
  const smooth = useSpring(rawIndex, { stiffness: 90, damping: 24, mass: 0.6 });
  const unit = useRef(0);

  const paint = () => {
    const el = rowRef.current;
    if (!el) return;
    const v = unit.current;
    el.style.transform = `translate3d(${-v * card}px, 0, 0)`;
    /**
     * Emphasis follows the *continuous* position, so the can that sits in the
     * middle of the screen is always the one that is big, sharp and readable.
     */
    Array.from(el.children).forEach((child, i) => {
      const d = Math.min(Math.abs(i - v), 2.2);
      const node = child as HTMLElement;
      node.style.transform = `scale(${1 - d * 0.17})`;
      node.style.opacity = `${Math.max(0.3, 1 - d * 0.42)}`;
      node.style.filter = `blur(${d * 1.7}px)`;
      const near = Math.max(0, 1 - d);
      const name = node.querySelector<HTMLElement>("[data-name]");
      const story = node.querySelector<HTMLElement>("[data-story]");
      if (name) name.style.color = near > 0.5 ? "#F2F7FA" : "#7FA0B4";
      if (story) story.style.opacity = `${0.3 + near * 0.7}`;
    });
  };

  useMotionValueEvent(smooth, "change", (v) => {
    unit.current = v;
    paint();
  });

  useEffect(paint, [card]);

  return (
    <section ref={ref} data-cursor="drag" className="section-blush relative h-[320svh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <p className="label-caps absolute left-1/2 top-[10%] -translate-x-1/2 px-6 text-center text-[#AECDDD]">
          Drift through the room
        </p>

        <div className="relative" style={{ paddingLeft: `calc(50% - ${card / 2}px)` }}>
          <div ref={rowRef} className="flex items-center will-change-transform">
            {drinks.map((drink, i) => {
              return (
                <div
                  key={drink.id}
                  className="shrink-0 px-2 will-change-transform sm:px-3"
                  style={{ width: card, transform: `scale(${i === 0 ? 1 : 0.7})` }}
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
                    data-name
                    className="mt-4 text-center font-display text-[18px] leading-none tracking-[0.04em] transition-colors duration-500 sm:mt-5 sm:text-[22px]"
                    style={{ color: i === 0 ? "#F2F7FA" : "#7FA0B4" }}
                  >
                    {drink.name}
                  </p>
                  {drink.story ? (
                    <p
                      data-story
                      className="mx-auto mt-2.5 max-w-[30ch] text-center text-[11.5px] leading-relaxed sm:mt-3 sm:text-[12.5px]"
                      style={{ color: "#AECDDD", opacity: i === 0 ? 1 : 0.35 }}
                    >
                      {drink.story}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <p className="absolute bottom-[10%] left-1/2 max-w-[38ch] -translate-x-1/2 px-6 text-center text-[15px] leading-relaxed text-[#DCEDF7]">
          Nothing here is in a hurry. Keep scrolling and the room drifts with you.
        </p>
      </div>
    </section>
  );
}
