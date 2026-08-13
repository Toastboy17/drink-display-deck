import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import heroCan from "@/assets/hero-can.jpg";
import { MenuBoard } from "@/components/MenuBoard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ReviewsSection } from "@/components/ReviewsSection";
import { MapWidget } from "@/components/MapWidget";
import { InstagramWidget } from "@/components/InstagramWidget";
import { faqs, gallery, pillars, site, teamMembers } from "@/data/site";
import { useI18n } from "@/i18n";

const title = "nube — Specialty Coffee & Matcha in Zürich";
const description =
  "nube Zürich: Premium Matcha, Specialty Coffee, Food und Desserts in versiegelten Klardosen. Kirchgasse 3, Mo–Sa 12–18 Uhr. Interaktive Karte mit Preisen und Nährwerten.";

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
        {/* Hero */}
        <section className="bg-sky-wash">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
            <div>
              <p className="eyebrow">{t("hero.eyebrow")}</p>
              <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                {t("hero.title1")}
                <br />
                <em className="italic">{t("hero.title2")}</em>
              </h1>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1.5 text-xs backdrop-blur-sm">
                <Star className="size-3.5 fill-current text-matcha" aria-hidden="true" />
                <span className="font-medium tabular-nums">{site.rating}</span>
                <span className="text-muted-foreground">
                  · {site.reviewCount} {t("reviews.basedOn")}
                </span>
              </div>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {t("hero.body")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {t("cta.menu")}
                </a>
                <a
                  href="#visit"
                  className="rounded-full border border-foreground/15 px-6 py-3 text-sm transition-colors hover:bg-card"
                >
                  {site.street}, 8001
                </a>
              </div>
            </div>
            <div>
              <img
                src={heroCan}
                alt="Transparente nube Dose mit geschichtetem Iced Matcha Latte"
                width={1408}
                height={1408}
                className="mx-auto w-full max-w-md rounded-4xl object-cover shadow-lift"
              />
            </div>
          </div>
        </section>

        {/* Hours & location strip */}
        <section className="border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-matcha" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-medium">{t("hours.week")}</p>
                <p className="text-muted-foreground">{t("hours.sun")}</p>
              </div>
            </div>
            <a href="#visit" className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-matcha" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-medium">{site.street}</p>
                <p className="text-muted-foreground">{t("location.city")}</p>
              </div>
            </a>
            <a href={site.phoneHref} className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-matcha" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-medium">{site.phone}</p>
                <p className="text-muted-foreground">{t("contact.takeaway")}</p>
              </div>
            </a>
          </div>
        </section>

        {/* Interactive menu */}
        <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:py-28">
          <div className="max-w-xl">
            <p className="eyebrow">{t("menu.eyebrow")}</p>
            <h2 className="mt-4 text-4xl md:text-5xl">{t("menu.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("menu.body")}</p>
          </div>
          <div className="mt-10 md:mt-12">
            <MenuBoard />
          </div>
        </section>

        {/* Story */}
        <section id="story" className="scroll-mt-20 border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
            <div>
              <p className="eyebrow">{t("story.eyebrow")}</p>
              <h2 className="mt-4 text-4xl md:text-5xl">{t("story.title")}</h2>
              <p className="mt-5 text-muted-foreground">{t("story.body")}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title.en}
                  className="rounded-3xl border border-border bg-background p-6 transition-shadow hover:shadow-soft"
                >
                  <h3 className="text-xl">{tl(p.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tl(p.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Space gallery */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">{t("gallery.eyebrow")}</p>
          <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">{t("gallery.title")}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {gallery.map((g, i) => (
              <img
                key={i}
                src={g.image}
                alt={tl(g.alt)}
                loading="lazy"
                className="aspect-4/5 w-full rounded-4xl border border-border object-cover shadow-soft"
              />
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="scroll-mt-20 border-y border-border bg-card/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="eyebrow">{t("team.eyebrow")}</p>
            <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">{t("team.title")}</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">{t("team.body")}</p>

            <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {teamMembers.map((m) => (
                <figure
                  key={m.name}
                  className="w-[70vw] shrink-0 snap-center overflow-hidden rounded-4xl border border-border bg-background shadow-soft sm:w-auto"
                >
                  <img
                    src={m.image}
                    alt={`${m.name} — ${tl(m.role)} @ nube`}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover"
                  />
                  <figcaption className="p-5">
                    <p className="font-display text-2xl leading-none">{m.name}</p>
                    <p className="mt-1.5 text-sm text-matcha">{tl(m.role)}</p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      {t("team.favourite")}: {m.favourite}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ReviewsSection />

        {/* Instagram */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <InstagramWidget />
        </section>

        {/* Visit + map */}
        <section id="visit" className="scroll-mt-20 border-t border-border bg-card/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <MapWidget />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 md:py-24">
          <p className="eyebrow">{t("faq.eyebrow")}</p>
          <h2 className="mt-4 text-4xl">{t("faq.title")}</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q.en} className="group py-5">
                <summary className="cursor-pointer list-none text-lg marker:hidden">
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