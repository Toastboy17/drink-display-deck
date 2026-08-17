import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { MenuBoard } from "@/components/MenuBoard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ReviewsSection } from "@/components/ReviewsSection";
import { MapWidget } from "@/components/MapWidget";
import { InstagramWidget } from "@/components/InstagramWidget";
import { Reveal } from "@/components/Reveal";
import { HeroStage } from "@/components/HeroStage";
import { CategoryPanels } from "@/components/CategoryPanels";
import { Marquee } from "@/components/Marquee";
import { TextureLetters } from "@/components/TextureLetters";
import { GlacierShowcase } from "@/components/GlacierShowcase";
import { CloudFriend } from "@/components/CloudFriend";
import { faqs, gallery, pillars, site } from "@/data/site";
import { useI18n } from "@/i18n";

const title = "nube — Specialty Coffee & Matcha in Zürich";
const description =
  "nube Zürich: Premium Matcha, Specialty Coffee und Shakes in versiegelten Klardosen. Kirchgasse 3, Mo–Sa 12–18 Uhr. Interaktive Karte mit Fotos und Nährwerten.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, tl } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="top">
        <HeroStage />

        {/* Hours & location strip */}
        <section className="border-b border-border bg-accent/40">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 md:px-10">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-rose-deep" aria-hidden="true" />
              <div className="text-sm">
                <p className="rule-label">{t("hours.week")}</p>
                <p className="text-muted-foreground">{t("hours.sun")}</p>
              </div>
            </div>
            <a href="#visit" className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-rose-deep" aria-hidden="true" />
              <div className="text-sm">
                <p className="rule-label">{site.street}</p>
                <p className="text-muted-foreground">{t("location.city")}</p>
              </div>
            </a>
            <a href={site.phoneHref} className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-rose-deep" aria-hidden="true" />
              <div className="text-sm">
                <p className="rule-label">{site.phone}</p>
                <p className="text-muted-foreground">{t("contact.takeaway")}</p>
              </div>
            </a>
          </div>
        </section>

        {/* Category panels */}
        <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
          <Reveal>
            <CategoryPanels />
          </Reveal>
        </section>

        {/* Interactive menu */}
        <section id="menu" className="mx-auto max-w-7xl scroll-mt-20 px-5 pb-16 md:px-10 md:pb-28">
          <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="rule-label text-rose-deep">{t("menu.eyebrow")}</p>
              <h2 className="mt-4 display-lg">{t("menu.title")}</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("menu.body")}</p>
          </div>
          <div className="mt-10 md:mt-12">
            <Reveal>
              <MenuBoard />
            </Reveal>
          </div>
        </section>

        <Marquee
          items={["FRESH TO ORDER", "SEALED IN ZÜRICH", "CEREMONIAL MATCHA", "TAKE IT WITH YOU"]}
          className="overflow-hidden border-y border-border bg-secondary/40 py-3 text-foreground"
        />

        <TextureLetters />

        <GlacierShowcase />

        {/* Story */}
        <section id="story" className="scroll-mt-20 bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-28">
            <div>
              <p className="rule-label text-rose-deep">{t("story.eyebrow")}</p>
              <h2 className="mt-4 display-lg">{t("story.title")}</h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                {t("story.body")}
              </p>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title.en}>
                  <div className="group h-full bg-background p-7 transition-colors duration-300 hover:bg-accent/40">
                    <p className="rule-label text-muted-foreground">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-2xl uppercase">{tl(p.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tl(p.body)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Space gallery */}
        <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-8">
            <h2 className="max-w-xl display-lg">{t("gallery.title")}</h2>
            <p className="rule-label text-rose-deep">{t("gallery.eyebrow")}</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 120}>
                <img
                  src={g.image}
                  alt={tl(g.alt)}
                  loading="lazy"
                  className={
                    i === 1
                      ? "aspect-4/5 w-full rounded-[1.75rem] object-cover transition-transform duration-700 hover:scale-[1.02] sm:mt-10"
                      : "aspect-4/5 w-full rounded-[1.75rem] object-cover transition-transform duration-700 hover:scale-[1.02]"
                  }
                />
              </Reveal>
            ))}
          </div>
        </section>

        <CloudFriend />

        <ReviewsSection />

        {/* Instagram */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <InstagramWidget />
        </section>

        {/* Visit + map */}
        <section id="visit" className="scroll-mt-20 border-t border-border bg-accent/40">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <MapWidget />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16 md:py-24">
          <p className="rule-label text-rose-deep">{t("faq.eyebrow")}</p>
          <h2 className="mt-4 display-lg">{t("faq.title")}</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q.en} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-xl uppercase transition-colors marker:hidden group-hover:text-rose-deep">
                  {tl(f.q)}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tl(f.a)}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}