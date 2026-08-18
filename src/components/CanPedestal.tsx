import { useCallback, useEffect, useRef, useState } from "react";
import canAngle0 from "@/assets/can-angle-0.png.asset.json";
import canAngle1 from "@/assets/can-angle-1.png.asset.json";
import canAngle2 from "@/assets/can-angle-2.png.asset.json";
import canAngle3 from "@/assets/can-angle-3.png.asset.json";
import { Reveal } from "@/components/Reveal";

const FRAMES = [
  { url: canAngle0.url, label: "Front" },
  { url: canAngle1.url, label: "45°" },
  { url: canAngle2.url, label: "Side" },
  { url: canAngle3.url, label: "Top" },
];

/** Matcha can with drag-to-rotate between four angle frames. */
export function CanPedestal() {
  const [pos, setPos] = useState(0); // continuous position 0..FRAMES.length-1
  const [dragging, setDragging] = useState(false);
  const startRef = useRef<{ x: number; pos: number } | null>(null);
  const idleRef = useRef<number | null>(null);

  const clamp = (v: number) => Math.max(0, Math.min(FRAMES.length - 1, v));

  // Gentle idle drift so the can feels alive until the user grabs it.
  useEffect(() => {
    if (dragging) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const base = pos;
    const loop = (t: number) => {
      const e = (t - start) / 5200;
      setPos(clamp(base + (Math.sin(e * Math.PI * 2) + 1) * 0.35));
      raf = requestAnimationFrame(loop);
    };
    idleRef.current = window.setTimeout(() => {
      raf = requestAnimationFrame(loop);
    }, 1600);
    return () => {
      if (idleRef.current) clearTimeout(idleRef.current);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  const onDown = useCallback(
    (e: React.PointerEvent) => {
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      startRef.current = { x: e.clientX, pos };
      setDragging(true);
    },
    [pos],
  );

  const onMove = useCallback((e: React.PointerEvent) => {
    if (!startRef.current) return;
    const delta = (e.clientX - startRef.current.x) / 110;
    setPos(clamp(startRef.current.pos + delta));
  }, []);

  const onUp = useCallback(() => {
    startRef.current = null;
    setDragging(false);
    setPos((p) => Math.round(p));
  }, []);

  const active = Math.round(pos);
  const activeFrame = FRAMES[active] ?? FRAMES[0]!;

  return (
    <section className="relative isolate overflow-hidden bg-sky-wash">
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -top-32 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-cloud/50 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <Reveal>
          <div className="mx-auto w-full max-w-sm">
            {/* Drag stage — clear background, frames crossfade fluidly */}
            <div
              role="slider"
              aria-label="Dose drehen"
              aria-valuemin={0}
              aria-valuemax={FRAMES.length - 1}
              aria-valuenow={active}
              aria-valuetext={activeFrame.label}
              tabIndex={0}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") setPos((p) => clamp(Math.round(p) + 1));
                if (e.key === "ArrowLeft") setPos((p) => clamp(Math.round(p) - 1));
              }}
              className={`relative mx-auto aspect-[3/4] w-full touch-pan-y select-none outline-none ${
                dragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ perspective: "900px" }}
            >
              {FRAMES.map((f, i) => {
                const d = Math.abs(pos - i);
                const visible = d < 1;
                const opacity = visible ? 1 - d : 0;
                return (
                  <img
                    key={f.url}
                    src={f.url}
                    alt={`nube ZÜRICH Matcha Can — Ansicht ${f.label}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                    className="pointer-events-none absolute inset-0 m-auto max-h-full w-auto max-w-full object-contain drop-shadow-[0_30px_45px_rgba(15,23,42,0.22)]"
                    style={{
                      opacity,
                      transform: `translateX(${(i - pos) * 14}px) scale(${1 - d * 0.04}) rotateY(${(i - pos) * 8}deg)`,
                      transition: dragging ? "none" : "opacity 260ms linear, transform 260ms ease-out",
                      willChange: "opacity, transform",
                    }}
                  />
                );
              })}
            </div>

            {/* Frame indicator */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {FRAMES.map((f, i) => (
                <button
                  key={f.label}
                  type="button"
                  aria-label={`Ansicht ${f.label}`}
                  onClick={() => setPos(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-rose-deep" : "w-3 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-center text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Ziehen zum Drehen · {activeFrame.label}
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="md:pl-6">
            <p className="rule-label text-rose-deep">DRAG TO ROTATE · 360°</p>
            <h2 className="mt-5 display-lg">
              LAYERED
              <span className="block">BY HAND.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Mango, Eis, Milch, Matcha — jede Schicht sitzt sichtbar in der Klardose. Zieh die
              Dose zur Seite und schau sie dir von allen Seiten an, bevor du schüttelst.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
