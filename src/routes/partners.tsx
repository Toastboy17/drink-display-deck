import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { partners, site } from "@/data/site";
import { useI18n } from "@/i18n";

const title = "Creators & Partner — nube Zürich";
const description =
  "Food Blogger, lokale Creator und Partner, die nube Zürich gefeatured haben. Reels, Posts und Kollaborationen rund um Matcha, Coffee und Cake in a Can.";

export const Route = createFileRoute("/partners")({
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
  component: PartnersPage,
});

function PartnersPage() {
  const { t, tl } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t("legal.back")}
        </Link>

        <p className="eyebrow mt-8">{t("partners.eyebrow")}</p>
        <h1 className="mt-4 max-w-2xl text-4xl md:text-6xl">{t("partners.title")}</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">{t("partners.body")}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <article
              key={p.handle}
              className="overflow-hidden rounded-4xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
            >
              <img
                src={p.image}
                alt={`${p.name} — ${p.platform}`}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-2xl leading-none">{p.name}</h2>
                  <span className="text-xs text-muted-foreground">{p.platform}</span>
                </div>
                <p className="mt-2 text-sm text-matcha">{p.handle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tl(p.note)}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground tabular-nums">{p.reach}</span>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm underline-offset-4 hover:underline"
                  >
                    {t("partners.viewPost")}
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-4xl bg-accent/40 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl">{t("partners.cta")}</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">{t("partners.ctaBody")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-foreground/15 px-5 py-3 text-sm transition-colors hover:bg-card"
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}