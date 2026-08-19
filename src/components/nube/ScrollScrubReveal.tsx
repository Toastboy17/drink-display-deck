import { useEffect, useRef, useState } from "react";
import { media } from "@/data/nube";
import { onPlaybackGesture, tryPlay } from "@/lib/video";

/**
 * The pour plays itself. The section pins for one screen, the video starts the
 * moment it fills the viewport, a soft circular mask opens with it, and just
 * before the last frame the page glides on to the next section by itself.
 */
export default function ScrollScrubReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  /**
   * Start the pour when the pinned stage fills the screen. We watch the sticky
   * stage (exactly one viewport tall) rather than the taller section — on phones
   * a 130svh section can never reach a high intersection ratio, which used to
   * mean the video simply never started.
   */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0.18) {
          setOpen(true);
        } else {
          if (entry.intersectionRatio < 0.2) {
            setOpen(false);
          }
        }
      },
      { threshold: [0, 0.18, 0.4, 0.7] },
    );

    observer.observe(stage);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const stop = onPlaybackGesture(() => videoRef.current);
    const id = window.setInterval(() => {
      const v = videoRef.current;
      if (!v) return;
      v.playbackRate = 1.5;
      if (v.paused) tryPlay(v);
    }, 600);
    return () => {
      stop();
      window.clearInterval(id);
    };
  }, []);

  const mask = "radial-gradient(circle at 50% 50%, #000 0%, #000 62%, transparent 100%)";
  const size = open ? "180%" : "56%";

  return (
    <section ref={sectionRef} className="section-deep relative h-[130dvh] min-h-[130svh]">
      <div ref={stageRef} className="sticky top-0 h-[100dvh] min-h-[100svh] overflow-hidden">
        <div className="section-deep absolute inset-0" />

        <div
          className="absolute inset-0 transition-[mask-size,-webkit-mask-size] duration-[2600ms] ease-out"
          style={{
            maskImage: mask,
            maskSize: size,
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 transition-transform duration-[3000ms] ease-out"
            style={{ transform: open ? "scale(1)" : "scale(1.14)" }}
          >
            <video
              ref={videoRef}
              src={media.scrubVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Ceremonial matcha pouring into iced milk"
              onLoadedData={(e) => {
                e.currentTarget.playbackRate = 1.5;
                tryPlay(e.currentTarget);
              }}
              onCanPlay={(e) => tryPlay(e.currentTarget)}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(66% 66% at 50% 50%, transparent 0%, rgba(11,35,48,0.16) 100%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <h2
            className="px-6 text-center text-[#F2F7FA] mix-blend-difference transition-opacity duration-1000"
            style={{ opacity: open ? 0 : 1 }}
          >
            Scroll to pour
          </h2>
        </div>

        <p
          className="label-caps absolute bottom-[9%] left-1/2 -translate-x-1/2 text-[#FFD1E0] transition-opacity duration-1000"
          style={{ opacity: open ? 0 : 1 }}
        >
          Ceremonial matcha · poured in slow motion
        </p>
      </div>
    </section>
  );
}
