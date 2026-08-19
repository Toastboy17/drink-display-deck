import { useRef, useState, type Ref } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { media, site } from "@/data/nube";
import { useMagnetic } from "@/hooks/useMagnetic";
import Logo from "@/components/nube/Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [videoOk, setVideoOk] = useState(true);
  const magnet = useMagnetic(0.4);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const plateY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[#10303d]"
    >
      <motion.div className="absolute inset-0" style={{ y: plateY }}>
        {videoOk ? (
          <video
            src={media.heroVideo}
            poster={media.heroPlate}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoOk(false)}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={media.heroPlate}
            alt="Cold brew poured over clear ice at nube"
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 8%, rgba(194,233,255,0.22) 0%, transparent 56%), radial-gradient(90% 80% at 92% 96%, rgba(255,209,224,0.2) 0%, transparent 58%), linear-gradient(to bottom, rgba(11,35,48,0.62) 0%, rgba(11,35,48,0.34) 38%, rgba(16,48,61,0.86) 74%, #10303d 100%)",
        }}
      />

      <motion.div
        style={{ opacity: copyOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="label-caps text-[#FFD1E0]"
        >
          Specialty coffee bar · Zürich
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
          className="mt-4 max-w-[15ch] text-[#F2F7FA]"
        >
          Your way into<span className="text-[#C2E9FF]"> cloud nine</span>
        </motion.h1>

        <div className="mt-7 flex flex-col gap-9 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="max-w-[46ch] text-[16px] text-[#DCEDF7] sm:text-[17px]"
          >
            Cold, clean, unhurried coffee. No syrup shortcuts, no rushed pours — every drink
            hand-poured to order in a room that feels a little like cloud nine.
          </motion.p>

          <motion.a
            ref={magnet.ref as Ref<HTMLAnchorElement>}
            href="#menu"
            data-cursor="hover"
            onMouseMove={magnet.onMouseMove}
            onMouseLeave={magnet.onMouseLeave}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.42 }}
            style={{ x: magnet.x, y: magnet.y }}
            className="label-caps inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-[#C2E9FF]/45 px-8 py-4 text-[#C2E9FF] transition-colors duration-300 hover:border-[#FFD1E0] hover:text-[#FFD1E0] sm:self-auto"
          >
            See the Menu <span aria-hidden>↓</span>
          </motion.a>
        </div>

        <div className="mt-10 flex items-end justify-between gap-6">
          <p className="font-display text-[clamp(20px,2.4vw,32px)] leading-none tracking-[0.14em] text-[#F2F7FA]/45">
            {site.street} · {site.city}
          </p>
          <Logo aria-hidden className="hidden h-[54px] opacity-40 sm:block lg:h-[64px]" />
        </div>
      </motion.div>
    </section>
  );
}
