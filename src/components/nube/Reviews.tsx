import { motion } from "framer-motion";
import { reviews, site } from "@/data/nube";
import { useI18n } from "@/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-1" aria-label={`${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden>
          <path
            d="M10 1.6l2.6 5.3 5.8.85-4.2 4.1 1 5.75L10 14.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85z"
            fill={i + 1 <= Math.round(rating) ? "#FFD1E0" : "rgba(194,233,255,0.22)"}
          />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  const { t } = useI18n();
  return (
    <section id="reviews" className="section-deep px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-caps text-[#C2E9FF]">{t("reviews.eyebrow")}</p>
            <h2 className="mt-4 text-[#F2F7FA]">
              {site.rating} {t("reviews.from")} {site.reviewCount} {t("reviews.ratings")}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Stars rating={site.rating} />
            <a
              href={site.reviewsLink}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="label-caps rounded-full border border-[#C2E9FF]/30 px-5 py-3 text-[#C2E9FF] transition-colors duration-200 hover:bg-[#C2E9FF]/10"
            >
              {t("reviews.cta")}
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="rounded-[22px] border border-[#C2E9FF]/15 bg-[#1a4150]/60 p-6"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-[14px] leading-relaxed text-[#DCEDF7]">
                {review.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-[#C2E9FF]/10 pt-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD1E0]/20 font-display text-[16px] text-[#FFD1E0]">
                  {review.initial}
                </span>
                <span className="text-[13px] text-[#AECDDD]">{review.name}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
