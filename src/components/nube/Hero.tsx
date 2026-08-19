import { useEffect, useRef, useState, type Ref } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { media, site } from "@/data/nube";
import { useMagnetic } from "@/hooks/useMagnetic";
import { onPlaybackGesture, tryPlay } from "@/lib/video";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const magnet = useMagnetic(0.4);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const plateY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  /** Safari needs the muted attribute in the DOM, and a gesture in Low Power Mode. */
  useEffect(() => {
    if (!videoOk) return;
    const video = videoRef.current;
    tryPlay(video);
    const revealFallback = window.setTimeout(() => {
      if (videoRef.current?.paused) setShowPlay(true);
    }, 900);
    const offGesture = onPlaybackGesture(() => videoRef.current);
    const keepLooping = () => {
      const current = videoRef.current;
      if (!current || document.hidden) return;
      if (current.ended) current.currentTime = 0;
      tryPlay(current);
    };
    const onVisibilityChange = () => {
      if (!document.hidden) keepLooping();
    };
    video?.addEventListener("ended", keepLooping);
    video?.addEventListener("stalled", keepLooping);
    window.addEventListener("pageshow", keepLooping);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearTimeout(revealFallback);
      offGesture();
      video?.removeEventListener("ended", keepLooping);
      video?.removeEventListener("stalled", keepLooping);
      window.removeEventListener("pageshow", keepLooping);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [videoOk]);

  const playVideo = () => {
    setShowPlay(false);
    tryPlay(videoRef.current);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100dvh] min-h-[100svh] overflow-hidden bg-[#10303d]"
    >
      <motion.div className="absolute inset-0" style={{ y: plateY }}>
        <img
          src={media.heroPlate}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        {videoOk ? (
          <video
            ref={videoRef}
            src={media.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            onPlaying={() => {
              setVideoPlaying(true);
              setShowPlay(false);
            }}
            onEnded={(event) => {
              event.currentTarget.currentTime = 0;
              tryPlay(event.currentTarget);
            }}
            onError={() => setVideoOk(false)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: videoPlaying ? 1 : 0 }}
          />
        ) : null}
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 8%, rgba(194,233,255,0.22) 0%, transparent 56%), radial-gradient(90% 80% at 92% 96%, rgba(255,209,224,0.2) 0%, transparent 58%), linear-gradient(to bottom, rgba(11,35,48,0.62) 0%, rgba(11,35,48,0.34) 38%, rgba(16,48,61,0.86) 74%, #10303d 100%)",
        }}
      />

      {videoOk && (showPlay || !videoPlaying) ? (
        <Button
          type="button"
          onClick={playVideo}
          className="absolute right-5 top-24 z-20 h-11 rounded-full bg-primary px-5 text-primary-foreground shadow-none md:hidden"
          aria-label="Play the background video"
        >
          <Play className="fill-current" aria-hidden />
          Play video
        </Button>
      ) : null}

      <motion.div
        style={{ opacity: copyOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12"
      >
        <motion.p
          initial={false}
          className="label-caps text-[#FFD1E0]"
        >
          Specialty coffee bar · Zürich
        </motion.p>

        <motion.h1
          initial={false}
          className="mt-4 max-w-[15ch] text-[#F2F7FA]"
        >
          Your way into<span className="text-[#C2E9FF]"> cloud nine</span>
        </motion.h1>

        <div className="mt-7 flex flex-col gap-9 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={false}
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
            initial={false}
            style={{ x: magnet.x, y: magnet.y }}
            className="label-caps inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-[#C2E9FF]/45 px-8 py-4 text-[#C2E9FF] transition-colors duration-300 hover:border-[#FFD1E0] hover:text-[#FFD1E0] sm:self-auto"
          >
            See the Menu <span aria-hidden>↓</span>
          </motion.a>
        </div>

        <div className="mt-10">
          <p className="font-display text-[clamp(20px,2.4vw,32px)] leading-none tracking-[0.14em] text-[#F2F7FA]/45">
            {site.street} · {site.city}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
