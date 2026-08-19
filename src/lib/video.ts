/**
 * iOS/Android autoplay helpers. React's `muted` prop is not always reflected as
 * an attribute in the DOM, and Safari refuses to autoplay without it — so we
 * set both, and retry playback on the visitor's first gesture (Low Power Mode).
 */
export function primeVideo(v: HTMLVideoElement | null) {
  if (!v) return;
  v.muted = true;
  v.defaultMuted = true;
  v.volume = 0;
  v.setAttribute("muted", "");
  v.setAttribute("playsinline", "");
  v.setAttribute("webkit-playsinline", "true");
  v.setAttribute("preload", "auto");
}

export function tryPlay(v: HTMLVideoElement | null) {
  if (!v) return;
  primeVideo(v);
  void v.play().catch(() => undefined);
}

/**
 * Keep a real user-gesture retry available until the video has actually
 * started. iOS Low Power Mode rejects autoplay, and a gesture used before a
 * below-the-fold video is visible must not consume that video's only retry.
 */
export function onPlaybackGesture(
  getVideo: () => HTMLVideoElement | null,
  shouldPlay: () => boolean = () => true,
) {
  const events = ["touchstart", "pointerdown", "click", "keydown"] as const;
  const run = () => {
    const video = getVideo();
    if (!video || !shouldPlay()) return;
    tryPlay(video);
    if (!video.paused) events.forEach((event) => window.removeEventListener(event, run));
  };
  events.forEach((event) => window.addEventListener(event, run, { passive: true }));
  return () => events.forEach((event) => window.removeEventListener(event, run));
}

/** Runs `cb` on the first touch/click/scroll, then unbinds itself. */
export function onFirstGesture(cb: () => void) {
  const events = ["touchstart", "pointerdown", "click", "scroll", "keydown"] as const;
  const run = () => {
    cb();
    events.forEach((e) => window.removeEventListener(e, run));
  };
  events.forEach((e) => window.addEventListener(e, run, { passive: true, once: false }));
  return () => events.forEach((e) => window.removeEventListener(e, run));
}
