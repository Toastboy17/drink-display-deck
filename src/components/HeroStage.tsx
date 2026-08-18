import { useRef } from "react";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import { ClientOnly } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import ProceduralDrink from "@/components/three/ProceduralDrink";
import { DrinkStage } from "@/components/three/DrinkStage";
import { drinks } from "@/data/drinks";
import heroFrost from "@/assets/hero-frost.png.asset.json";
import logoMark from "@/assets/logo-nube.png";
import mascotWave from "@/assets/mascot-wave.png.asset.json";

export function HeroStage() {
  const { t } = useI18n();
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    target.style.setProperty("--mag-x", `${x * 0.25}px`);
    target.style.setProperty("--mag-y", `${y * 0.25}px`);
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty("--mag-x", "0px");
    e.currentTarget.style.setProperty("--mag-y", "0px");
  };

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
        <div className="chrome-sweep">
          <img
            src={logoMark}
            alt="nube Zürich"
            width={800}
            height={313}
            className="w-64 drop-shadow-[0_0_28px_rgba(22,35,63,0.55)] sm:w-80 md:w-[28rem]"
          />
        </div>
        <p className="mt-5 text-sm uppercase tracking-[0.3em] text-cream/90">
          {t("hero.eyebrow")}
        </p>

        {/* Live 3D drink */}
        <div className="mt-2 h-64 w-full max-w-md sm:h-80">
          <ClientOnly fallback={<div className="h-full w-full" />}>
            <DrinkStage className="h-full w-full">
              <ProceduralDrink drink={drinks[0]!} focused />
            </DrinkStage>
          </ClientOnly>
        </div>

        <a
          ref={btnRef}
          href="#menu"
          className="magnetic-btn group mt-4 inline-flex items-center gap-2 rounded-full bg-cloud px-8 py-4 font-display text-sm uppercase tracking-[0.12em] text-ink hover:bg-cream"
          onMouseMove={handleMagneticMove}
          onMouseLeave={handleMagneticLeave}
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

      {/* Mascot cameo */}
      <img
        src={mascotWave.url}
        alt=""
        loading="eager"
        className="mascot-cameo absolute bottom-8 right-4 z-10 w-20 drop-shadow-[0_8px_24px_rgba(22,35,63,0.25)] sm:bottom-12 sm:right-8 sm:w-24"
      />
    </section>
  );
}
