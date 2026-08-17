import { Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { logoUrl, site } from "@/data/site";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="grain relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-3 md:px-10">
        <div>
          <img
            src={logoUrl}
            alt="nube Zürich Logo"
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-3 text-sm text-cream/60">{t("contact.takeaway")}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 rule-label text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-rose hover:text-rose"
          >
            <Instagram className="size-4" aria-hidden="true" />
            {site.instagramHandle}
          </a>
        </div>

        <div className="text-sm text-cream">
          <p className="rule-label text-cloud">{t("location.label")}</p>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-start gap-2 underline-offset-4 hover:underline"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              {site.street}
              <br />
              {t("location.city")}
            </span>
          </a>
          <p className="mt-4 text-cream/60">{t("hours.week")}</p>
          <p className="text-cream/60">{t("hours.sun")}</p>
        </div>

        <div className="text-sm text-cream">
          <p className="rule-label text-cloud">
            {t("legal.impressum")} &amp; {t("legal.privacy")}
          </p>
          <div className="mt-3 grid gap-2">
            <Link
              to="/impressum"
              className="underline-offset-4 transition-colors hover:text-rose hover:underline"
            >
              {t("legal.impressum")}
            </Link>
            <Link
              to="/datenschutz"
              className="underline-offset-4 transition-colors hover:text-rose hover:underline"
            >
              {t("legal.privacy")}
            </Link>
          </div>
          <p className="mt-6 text-cream/50">© {new Date().getFullYear()} nube worldwide</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none px-5 pb-4 display-xl leading-[0.7] text-cream/10 select-none md:px-10"
      >
        nube
      </p>
    </footer>
  );
}