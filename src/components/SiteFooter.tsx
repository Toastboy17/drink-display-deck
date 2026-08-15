import { Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { logoUrl, site } from "@/data/site";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-8 border-t-2 border-secondary/70 px-5 py-12 sm:grid-cols-3">
        <div>
          <img src={logoUrl} alt="nube Zürich Logo" className="h-9 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground">{t("contact.takeaway")}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:glow-rose"
          >
            <Instagram className="size-4" aria-hidden="true" />
            {site.instagramHandle}
          </a>
        </div>

        <div className="text-sm">
          <p className="eyebrow">{t("location.label")}</p>
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
          <p className="mt-4 text-muted-foreground">{t("hours.week")}</p>
          <p className="text-muted-foreground">{t("hours.sun")}</p>
        </div>

        <div className="text-sm">
          <p className="eyebrow">{t("legal.impressum")} &amp; {t("legal.privacy")}</p>
          <div className="mt-3 grid gap-2">
            <Link
              to="/impressum"
              className="underline-offset-4 transition-colors hover:text-cloud-deep hover:underline"
            >
              {t("legal.impressum")}
            </Link>
            <Link
              to="/datenschutz"
              className="underline-offset-4 transition-colors hover:text-cloud-deep hover:underline"
            >
              {t("legal.privacy")}
            </Link>
          </div>
          <p className="mt-6 text-muted-foreground">© {new Date().getFullYear()} nube worldwide</p>
        </div>
      </div>
    </footer>
  );
}