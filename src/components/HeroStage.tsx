import { ArrowDownRight, MapPin, Star } from "lucide-react";
import { useI18n } from "@/i18n";
import { heroImage, site } from "@/data/site";
import icedLatte from "@/assets/iced-latte.jpg.asset.json";
import { Marquee } from "@/components/Marquee";

export function HeroStage() {
  const { t } = useI18n();

  return (
    <section className="grain relative isolate overflow-hidden bg-ink">
      {/* soft cloud blooms */}
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -top-32 -left-24 size-[38rem] rounded-full bg-cloud/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -right-24 bottom-0 size-[30rem] rounded-full bg-rose/25 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-14 pb-24 md:grid-cols-[1.05fr_0.95fr] md:items-end md:px-10 md:pt-24 md:pb-32">
        <div>
          <p className="rule-label text-cloud">{t("hero.eyebrow")}</p>

          <h1 className="mt-7 display-xl text-cream">
            {t("hero.title1")}
            <span className="block text-chrome">{t("hero.title2")}</span>
          </h1>

          <div className="mt-9 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-cream/70">{t("hero.body")}</p>
            <div className="flex shrink-0 items-center gap-2 border-l border-cream/20 pl-4">
              <Star className="size-4 fill-current text-rose" aria-hidden="true" />
              <span className="font-display text-2xl leading-none text-cream tabular-nums">
                {site.rating}
              </span>
              <span className="rule-label text-cream/50">{site.reviewCount}</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 rule-label text-ink transition-all duration-300 hover:-translate-y-0.5 hover:glow-cloud"
            >
              {t("cta.menu")}
              <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 rule-label text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-rose hover:text-rose"
            >
              <MapPin className="size-4" aria-hidden="true" />
              {site.street}
            </a>
          </div>
        </div>

        {/* Drink collage */}
        <div className="relative mx-auto w-full max-w-md md:mx-0">
          <span
            aria-hidden="true"
            className="sparkle absolute top-4 left-2 text-3xl text-cloud/80 select-none"
          >
            ✦
          </span>
          <span
            aria-hidden="true"
            className="sparkle absolute right-6 bottom-10 text-xl text-rose/80 select-none"
            style={{ animationDelay: "1.6s" }}
          >
            ✦
          </span>

          <img
            src={heroImage}
            alt="nube Iced Matcha Latte in der signature Klardose"
            width={1408}
            height={1408}
            className="float-slow aspect-4/5 w-full rounded-[2.5rem] border border-cream/15 object-cover shadow-lift"
          />
          <img
            src={icedLatte.url}
            alt="nube Iced Latte"
            loading="lazy"
            width={900}
            height={1100}
            className="absolute -bottom-10 -left-4 w-28 rotate-[-7deg] rounded-3xl border border-cream/15 object-cover shadow-lift sm:w-36 md:-left-12"
          />
          <p className="vertical-label absolute top-6 -right-1 rule-label text-cream/40 md:-right-6">
            KIRCHGASSE 3 · ZÜRICH
          </p>
        </div>
      </div>

      <Marquee
        items={["MATCHA", "SPECIALTY COFFEE", "SEALED CANS", "CAKE IN A CAN", "ZÜRICH ALTSTADT"]}
        className="relative overflow-hidden border-y border-cream/15 bg-cream/5 py-3 text-cream"
      />
    </section>
  );
}