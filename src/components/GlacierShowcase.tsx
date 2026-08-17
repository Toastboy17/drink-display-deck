import glacier from "@/assets/gen-ice-can-logo.png";
import pedestal from "@/assets/gen-pedestal-cake.jpg";
import { Reveal } from "@/components/Reveal";

/** Full-bleed glacier campaign visual + chrome pedestal still life. */
export function GlacierShowcase() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-cream">
      <img
        src={glacier}
        alt="nube Matcha Can auf Gletschereis"
        loading="lazy"
        width={1440}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
      />

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-5 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-32">
        <Reveal>
          <div>
            <p className="rule-label text-cloud">ZERO DEGREES · ZÜRICH</p>
            <h2 className="mt-6 display-xl text-cream">
              KEPT COLD.
              <span className="block text-chrome">SEALED CLEAR.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-cream/70">
              Jede Dose wird frisch geschichtet, sofort versiegelt und eiskalt übergeben — vom
              Gletscher-Grün des Matcha bis zur letzten Schicht Milch.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <figure className="relative mx-auto w-full max-w-xs md:mx-0 md:ml-auto">
            <img
              src={pedestal}
              alt="Cake in a Can auf Chrom-Sockel"
              loading="lazy"
              width={1024}
              height={1280}
              className="float-slow w-full rounded-[2rem] border border-cream/15 object-cover shadow-lift"
            />
            <figcaption className="mt-4 rule-label text-cream/50">CAKE IN A CAN — 01</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
