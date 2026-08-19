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
