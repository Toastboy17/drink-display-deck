import { useEffect, useRef, useState } from "react";
import { media } from "@/data/nube";

/**
 * The pour plays itself. The section pins for one screen, the video starts the
 * moment it fills the viewport, a soft circular mask opens with it, and just
 * before the last frame the page glides on to the next section by itself.
 */
export default function ScrollScrubReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handedOff = useRef(false);
  const [videoOk, setVideoOk] = useState(true);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  /** Start the pour when the section is centred, pause it whenever it leaves. */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!entry) return;
        if (entry.intersectionRatio > 0.75) {
          setOpen(true);
          if (video) video.playbackRate = 2.0;
          void video?.play().catch(() => undefined);
        } else {
          video?.pause();
          if (entry.intersectionRatio < 0.2) {
            setOpen(false);
            handedOff.current = false;
            if (video) video.currentTime = 0;
          }
        }
      },
      { threshold: [0, 0.2, 0.75, 1] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /** Hand the scroll over ~1.1s before the final frame so nothing ever stalls. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      const d = video.duration;
      if (!Number.isFinite(d) || d <= 0 || handedOff.current) return;
      if (video.currentTime < d - 0.7) return;
      handedOff.current = true;
      const next = sectionRef.current?.nextElementSibling;
      if (next instanceof HTMLElement) {
        next.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, [videoOk]);

  const mask = "radial-gradient(circle at 50% 50%, #000 0%, #000 62%, transparent 100%)";
  const size = open ? "180%" : "56%";

  return (
    <section ref={sectionRef} className="section-deep relative h-[130svh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
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
            {videoOk ? (
              <video
                ref={videoRef}
                src={media.scrubVideo}
                muted
                playsInline
                preload="auto"
                onPlaying={() => setReady(true)}
                onError={() => setVideoOk(false)}
                className="h-full w-full object-cover transition-opacity duration-700"
                style={{ opacity: ready ? 1 : 0 }}
              />
            ) : (
              <img
                src={media.scrubPlate}
                alt="Jade matcha purée poured slowly into cold milk over clear ice"
                className="h-full w-full object-cover"
              />
            )}
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
