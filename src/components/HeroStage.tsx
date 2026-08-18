import { ArrowDownRight, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n";
import heroFrost from "@/assets/hero-frost.png.asset.json";
import logoMark from "@/assets/logo-nube.png";

export function HeroStage() {
  const { t } = useI18n();

  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink">
      {/* Full-screen frost background */}
      <div className="absolute inset-0">
        <img
          src={heroFrost.url}
          alt=""
          loading="eager"
          className="frost-drift h-full w-full scale-105 object-cover"
        />
        {/* Base navy wash for readability */}
        <div className="absolute inset-0 bg-ink/30" />
        {/* Darker spotlight behind the wordmark */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,35,63,0.5)_0%,transparent_60%)]" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center">
        <img
          src={logoMark}
          alt="nube Zürich"
          width={800}
          height={313}
          className="w-64 drop-shadow-[0_0_28px_rgba(22,35,63,0.55)] sm:w-80 md:w-[28rem]"
        />
        <p className="mt-5 text-sm uppercase tracking-[0.3em] text-cream/90">
          {t("hero.eyebrow")}
        </p>

        <a
          href="#menu"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-cloud px-8 py-4 font-display text-sm uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
        >
          {t("cta.menu")}
          <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/90">
        <span className="rule-label">Scroll</span>
        <ChevronDown className="size-5" aria-hidden="true" />
      </div>
    </section>
  );
}
