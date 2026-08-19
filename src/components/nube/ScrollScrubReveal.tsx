import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "framer-motion";
import { media } from "@/data/nube";

/**
 * Pinned section where scroll position drives the video's currentTime frame-by-frame
 * while a circular see-through mask grows from a small window to full-bleed.
 */
export default function ScrollScrubReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Drive video.currentTime directly from scroll position — this is the scrub.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();

    /** Frame 0 is an almost-empty glass, so seek straight to the visible pour. */
    const seek = (progress: number) => {
      const d = video.duration;
      if (!Number.isFinite(d) || d <= 0) return;
      const eased = 0.34 + Math.min(Math.max(progress, 0), 1) * 0.62;
      video.currentTime = eased * d;
    };

    seek(scrollYProgress.get());
    const onMeta = () => seek(scrollYProgress.get());
    video.addEventListener("loadedmetadata", onMeta);
    const unsub = scrollYProgress.on("change", seek);
    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      unsub();
    };
  }, [scrollYProgress, videoOk]);

  const rawMask = useTransform(scrollYProgress, [0, 1], [52, 175]);
  const maskPct = useSpring(rawMask, { stiffness: 120, damping: 26, mass: 0.5 });
  const maskSize = useMotionTemplate`${maskPct}%`;
  const captionOpacity = useTransform(scrollYProgress, [0, 0.14, 0.86, 1], [1, 0, 0, 1]);
  const plateScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  return (
    <section ref={sectionRef} className="section-deep relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="section-deep absolute inset-0" />

        <motion.div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at 50% 50%, #000 0%, #000 62%, transparent 100%)",
            WebkitMaskSize: maskSize,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: "radial-gradient(circle at 50% 50%, #000 0%, #000 62%, transparent 100%)",
            maskSize: maskSize,
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        >
          <motion.div className="absolute inset-0" style={{ scale: plateScale }}>
            {videoOk ? (
              <video
                ref={videoRef}
                src={media.scrubVideo}
                poster={media.scrubPlate}
                muted
                playsInline
                preload="auto"
                onError={() => setVideoOk(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={media.scrubPlate}
                alt="Jade matcha purée poured slowly into cold milk over clear ice"
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(66% 66% at 50% 50%, transparent 0%, rgba(11,35,48,0.16) 100%)",
            }}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.h2
            style={{ opacity: captionOpacity }}
            className="px-6 text-center text-[#F2F7FA] mix-blend-difference"
          >
            Scroll to whisk
          </motion.h2>
        </div>

        <motion.p
          style={{ opacity: captionOpacity }}
          className="label-caps absolute bottom-[9%] left-1/2 -translate-x-1/2 text-[#FFD1E0]"
        >
          Ceremonial matcha · poured in slow motion
        </motion.p>
      </div>
    </section>
  );
}
