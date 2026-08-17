import { Star } from "lucide-react";
import { useI18n } from "@/i18n";
import { reviews, site } from "@/data/site";

function StarSlot({ filled }: { filled: number }) {
  if (filled <= 0) {
    return <Star className="size-3.5 text-muted-foreground/40" aria-hidden="true" />;
  }
  if (filled >= 1) {
    return <Star className="size-3.5 fill-current text-matcha" aria-hidden="true" />;
  }
  return (
    <div className="relative size-3.5">
      <Star className="absolute size-3.5 text-muted-foreground/40" aria-hidden="true" />
      <div className="absolute overflow-hidden" style={{ width: `${filled * 100}%` }}>
        <Star className="size-3.5 fill-current text-matcha" aria-hidden="true" />
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating}/5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = Math.min(1, Math.max(0, rating - (i - 1)));
        return <StarSlot key={i} filled={filled} />;
      })}
    </div>
  );
}

export function ReviewsSection() {
  const { t, tl } = useI18n();

  return (
    <section id="reviews" className="grain scroll-mt-20 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="rule-label text-cloud">{t("reviews.eyebrow")}</p>
            <h2 className="mt-4 display-lg text-chrome">{t("reviews.title")}</h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="font-display text-5xl leading-none tabular-nums">{site.rating}</span>
              <div>
                <Stars rating={site.rating} />
                <p className="mt-1 text-xs text-cream/60">
                  {site.reviewCount} {t("reviews.basedOn")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.reviewsLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cream px-6 py-3 rule-label text-ink transition-all duration-300 hover:-translate-y-0.5 hover:glow-cloud"
            >
              {t("reviews.viewAll")}
            </a>
            <a
              href={site.reviewsLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/30 px-6 py-3 rule-label transition-all duration-300 hover:-translate-y-0.5 hover:border-rose hover:text-rose"
            >
              {t("reviews.write")}
            </a>
          </div>
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="w-[80vw] shrink-0 snap-center rounded-[1.5rem] border border-cream/15 bg-cream/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose/60 md:w-auto"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-rose text-sm font-medium text-ink">
                  {r.initial}
                </span>
                <div>
                  <figcaption className="text-sm font-medium">{r.name}</figcaption>
                  <p className="text-xs text-cream/50">{tl(r.when)}</p>
                </div>
              </div>
              <div className="mt-4">
                <Stars rating={r.rating} />
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-cream/70">
                “{tl(r.text)}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}