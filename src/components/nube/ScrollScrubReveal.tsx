import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { media } from "@/data/nube";
import { onPlaybackGesture, primeVideo, tryPlay } from "@/lib/video";
import { Button } from "@/components/ui/button";

/**
 * The pour plays itself. The section pins for one screen, the video starts the
 * moment it fills the viewport, a soft circular mask opens with it, and just
 * before the last frame the page glides on to the next section by itself.
 */
export default function ScrollScrubReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handedOff = useRef(false);
  const [videoOk, setVideoOk] = useState(true);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [blocked, setBlocked] = useState(false);

  /**
   * Start the pour when the pinned stage fills the screen. We watch the sticky
   * stage (exactly one viewport tall) rather than the taller section — on phones
   * a 130svh section can never reach a high intersection ratio, which used to
   * mean the video simply never started.
   */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    primeVideo(videoRef.current);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0.18) {
          if (video) video.playbackRate = 2.0;
          tryPlay(video);
          window.setTimeout(() => {
            const current = videoRef.current;
            if (current?.paused) setBlocked(true);
          }, 500);
        } else {
          video?.pause();
          if (entry.intersectionRatio < 0.2) {
            setOpen(false);
            setBlocked(false);
            setReady(false);
            handedOff.current = false;
            if (video) video.currentTime = 0;
          }
        }
      },
      { threshold: [0, 0.18, 0.4, 0.7] },
    );

    observer.observe(stage);
    const offGesture = onPlaybackGesture(
      () => videoRef.current,
      () => {
        const rect = stage.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      },
    );
    return () => {
      observer.disconnect();
      offGesture();
    };
  }, []);

  /** Keep the playback rate pinned once metadata lands (Safari resets it). */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setRate = () => {
      video.playbackRate = 2.0;
    };
    video.addEventListener("loadedmetadata", setRate);
    video.addEventListener("play", setRate);
    return () => {
      video.removeEventListener("loadedmetadata", setRate);
      video.removeEventListener("play", setRate);
    };
  }, [videoOk]);

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

  const playVideo = () => {
    const video = videoRef.current;
    if (video) video.playbackRate = 2.0;
    setBlocked(false);
    tryPlay(video);
  };

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
            <img
              src={media.scrubPlate}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            {videoOk ? (
              <video
                ref={videoRef}
                src={media.scrubVideo}
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                onPlaying={() => {
                  setReady(true);
                  setOpen(true);
                  setBlocked(false);
                }}
                onPause={() => setReady(false)}
                onError={() => setVideoOk(false)}
                className="h-full w-full object-cover transition-opacity duration-700"
                style={{ opacity: ready ? 1 : 0 }}
              />
            ) : null}
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

        {videoOk && blocked ? (
          <Button
            type="button"
            onClick={playVideo}
            className="absolute left-1/2 top-[58%] z-20 h-12 -translate-x-1/2 rounded-full bg-primary px-6 text-primary-foreground shadow-none md:hidden"
            aria-label="Play the matcha pour video"
          >
            <Play className="fill-current" aria-hidden />
            Play pour
          </Button>
        ) : null}

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
