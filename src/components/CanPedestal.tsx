import canAngle0 from "@/assets/can-angle-0.png.asset.json";
import { Reveal } from "@/components/Reveal";

/** Matcha can standing on a frosted-glass pedestal. */
export function CanPedestal() {
  return (
    <section className="relative isolate overflow-hidden bg-sky-wash">
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -top-32 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-cloud/50 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            {/* Can */}
            <img
              src={canAngle0.url}
              alt="nube ZÜRICH Matcha Can auf Frosted-Glass-Sockel"
              loading="lazy"
              width={540}
              height={720}
              className="float-slow relative z-10 mx-auto w-[72%] drop-shadow-[0_30px_45px_rgba(15,23,42,0.25)]"
            />

            {/* Frosted glass pedestal */}
            <div className="relative -mt-10">
              <div className="mx-auto h-28 w-full rounded-[2rem] border border-white/50 bg-white/30 backdrop-blur-xl shadow-lift" />
              <div className="mx-auto -mt-3 h-4 w-[86%] rounded-full bg-ink/10 blur-md" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="md:pl-6">
            <p className="rule-label text-rose-deep">FROSTED PEDESTAL · 360°</p>
            <h2 className="mt-5 display-lg">
              LAYERED
              <span className="block">BY HAND.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Mango, Eis, Milch, Matcha — jede Schicht sitzt sichtbar in der Klardose. Auf
              Frostglas gestellt, damit du jede Linie siehst, bevor du schüttelst.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}