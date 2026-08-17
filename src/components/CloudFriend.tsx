import cloudFriend from "@/assets/gen-cloud-mascot.png";
import pour from "@/assets/gen-pour.jpg";
import { Reveal } from "@/components/Reveal";

/** Cloud mascot moment paired with the cinematic pour frame. */
export function CloudFriend() {
  return (
    <section className="relative isolate overflow-hidden bg-sky-wash">
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -top-24 left-1/3 size-[26rem] rounded-full bg-cream/50 blur-[100px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-28">
        <Reveal>
          <img
            src={cloudFriend}
            alt="nube Wolken-Maskottchen mit zwei Drinks"
            loading="lazy"
            width={1024}
            height={1024}
            className="float-slow mx-auto w-full max-w-md"
          />
        </Reveal>

        <Reveal delay={140}>
          <div className="md:pl-6">
            <p className="rule-label text-rose-deep">CLOUD NINE CREW</p>
            <h2 className="mt-5 display-lg">
              ZWEI HÄNDE.
              <span className="block">ZWEI DOSEN.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Eine für dich, eine für die Person, die deinen Tag besser macht. Wir packen sie so ein,
              dass sie den Weg durch die Altstadt übersteht.
            </p>
            <figure className="mt-8 overflow-hidden rounded-[1.75rem] border border-border">
              <img
                src={pour}
                alt="Matcha wird in eine Klardose gegossen"
                loading="lazy"
                width={1440}
                height={1088}
                className="aspect-16/10 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <figcaption className="bg-ink px-4 py-3 rule-label text-cream/70">
                POURED IN ZÜRICH — KIRCHGASSE 3
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
