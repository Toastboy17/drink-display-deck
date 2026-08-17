import { ArrowDownRight, MapPin, Star } from "lucide-react";
import { useI18n } from "@/i18n";
import { site } from "@/data/site";
import skyCans from "@/assets/gen-sky-cans.png";
import logoMark from "@/assets/logo-nube.png";
import { Marquee } from "@/components/Marquee";

export function HeroStage() {
  const { t } = useI18n();

  return (
    <section className="grain relative isolate overflow-hidden bg-[linear-gradient(180deg,var(--cloud)_0%,#eaf7ff_55%,var(--background)_100%)]">
      {/* soft cloud blooms */}
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -top-32 -left-24 size-[38rem] rounded-full bg-white/70 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute -right-24 bottom-0 size-[30rem] rounded-full bg-rose/50 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-14 pb-24 md:grid-cols-[1.05fr_0.95fr] md:items-end md:px-10 md:pt-24 md:pb-32">
        <div>
          <img
            src={logoMark}
            alt="nube Zürich"
            width={800}
            height={313}
            className="float-slow w-44 sm:w-56"
          />
          <p className="mt-6 rule-label text-cloud-deep">{t("hero.eyebrow")}</p>

          <h1 className="mt-5 display-xl text-ink">
            {t("hero.title1")}
            <span className="block text-cloud-deep">{t("hero.title2")}</span>
          </h1>

          <div className="mt-9 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-ink/70">{t("hero.body")}</p>
            <div className="flex shrink-0 items-center gap-2 border-l border-ink/15 pl-4">
              <Star className="size-4 fill-current text-rose-deep" aria-hidden="true" />
              <span className="font-display text-2xl leading-none text-ink tabular-nums">
                {site.rating}
              </span>
              <span className="rule-label text-ink/50">{site.reviewCount}</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 rule-label text-cream transition-all duration-300 hover:-translate-y-0.5 hover:glow-cloud"
            >
              {t("cta.menu")}
              <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-white/50 px-7 py-3.5 rule-label text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep"
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
            className="sparkle absolute top-4 left-2 text-3xl text-white select-none"
          >
            ✦
          </span>
          <span
            aria-hidden="true"
            className="sparkle absolute right-6 bottom-10 text-xl text-rose-deep/80 select-none"
            style={{ animationDelay: "1.6s" }}
          >
            ✦
          </span>

          <img
            src={skyCans}
            alt="nube Klardosen mit Matcha und Iced Coffee in Wolken"
            width={1280}
            height={1280}
            className="float-slow w-full rounded-[2.5rem] object-cover shadow-lift"
          />
          <p className="vertical-label absolute top-6 -right-1 rule-label text-ink/40 md:-right-6">
            KIRCHGASSE 3 · ZÜRICH
          </p>
        </div>
      </div>

      <Marquee
        items={["MATCHA", "SPECIALTY COFFEE", "SEALED CANS", "CAKE IN A CAN", "ZÜRICH ALTSTADT"]}
        className="relative overflow-hidden border-y border-ink/10 bg-white/50 py-3 text-ink"
      />
    </section>
  );
}