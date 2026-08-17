import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Star, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { site } from "@/data/site";
import logoMark from "@/assets/logo-nube.png";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#menu", key: "nav.menu" },
  { href: "/#story", key: "nav.about" },
  { href: "/#reviews", key: "nav.reviews" },
  { href: "/#visit", key: "nav.visit" },
];

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/15 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 md:px-10">
        <Link to="/" className="flex items-center" aria-label="nube Zürich">
          <img src={logoMark} alt="nube Zürich Logo" className="h-8 w-auto md:h-9" />
        </Link>

        <nav className="hidden gap-7 rule-label text-cream/60 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-rose after:transition-transform after:duration-300 hover:text-cream hover:after:origin-left hover:after:scale-x-100"
            >
              {t(l.key)}
            </a>
          ))}
          <a
            href="/#faq"
            className="relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-rose after:transition-transform after:duration-300 hover:text-cream hover:after:origin-left hover:after:scale-x-100"
          >
            {t("nav.faq")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.reviewsLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-cream/20 px-3 py-2 text-xs text-cream transition-all duration-300 hover:border-rose sm:flex"
          >
            <Star className="size-3.5 fill-current text-rose" aria-hidden="true" />
            <span className="font-medium tabular-nums">{site.rating}</span>
            <span className="text-cream/50">({site.reviewCount})</span>
          </a>
          <LanguageSwitcher />
          <a
            href="/#visit"
            className="hidden rounded-full bg-cream px-5 py-2.5 rule-label text-ink transition-all duration-300 hover:-translate-y-0.5 hover:glow-rose sm:block"
          >
            {t("cta.visit")}
          </a>
          <button
            type="button"
            aria-label={t("nav.menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-cream/25 p-2 text-cream transition-colors hover:border-rose lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-cream/15 bg-ink text-cream transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-3 display-lg text-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-2 py-2 transition-colors hover:text-rose"
            >
              {t(l.key)}
            </a>
          ))}
          <a
            href="/#faq"
            onClick={() => setOpen(false)}
            className="rounded-xl px-2 py-2 transition-colors hover:text-rose"
          >
            {t("nav.faq")}
          </a>
        </nav>
      </div>
    </header>
  );
}