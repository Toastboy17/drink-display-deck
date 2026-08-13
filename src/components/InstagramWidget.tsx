import { useState } from "react";
import { Heart, Instagram } from "lucide-react";
import { useI18n } from "@/i18n";
import { site, socialPosts } from "@/data/site";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function InstagramWidget() {
  const { t, tl } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const post = openIndex === null ? null : socialPosts[openIndex];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="eyebrow">{t("insta.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{t("insta.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("insta.body")}</p>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <p className="font-display text-3xl leading-none tabular-nums">{site.followers}</p>
            <p className="eyebrow mt-1">{t("insta.followers")}</p>
          </div>
          <div>
            <p className="font-display text-3xl leading-none tabular-nums">{site.postCount}</p>
            <p className="eyebrow mt-1">{t("insta.posts")}</p>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="size-4" aria-hidden="true" />
            {t("insta.follow")}
          </a>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {socialPosts.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-border"
          >
            <img
              src={p.image}
              alt={tl(p.caption)}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 to-transparent p-3 text-left text-xs text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5">
                <Heart className="size-3.5 fill-current" aria-hidden="true" />
                {p.likes}
              </span>
            </span>
          </button>
        ))}
      </div>

      <Dialog open={post !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-lg gap-4">
          {post && (
            <>
              <DialogTitle className="font-display text-2xl leading-none font-normal">
                {site.instagramHandle}
              </DialogTitle>
              <img
                src={post.image}
                alt={tl(post.caption)}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <p className="text-sm text-muted-foreground">{tl(post.caption)}</p>
              <p className="inline-flex items-center gap-1.5 text-sm">
                <Heart className="size-4 fill-current text-matcha" aria-hidden="true" />
                {post.likes}
              </p>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
              >
                <Instagram className="size-4" aria-hidden="true" />
                {t("insta.open")}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}