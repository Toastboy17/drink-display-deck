import { useState } from "react";
import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { useI18n } from "@/i18n";
import { site } from "@/data/site";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

function MapFrame({ title, className }: { title: string; className?: string }) {
  return (
    <iframe
      title={title}
      src={site.mapsEmbed}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={className}
      allowFullScreen
    />
  );
}

export function MapWidget() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="eyebrow">{t("map.eyebrow")}</p>
        <h2 className="mt-4 text-4xl md:text-5xl">{t("map.title")}</h2>
        <p className="mt-4 max-w-md text-muted-foreground">{t("map.body")}</p>

        <div className="mt-8 grid gap-3 text-sm">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-matcha" aria-hidden="true" />
            <span>
              {site.street}, {site.zipCity}
            </span>
          </p>
          <p className="text-muted-foreground">{t("hours.week")}</p>
          <p className="text-muted-foreground">{t("hours.sun")}</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={site.directionsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Navigation className="size-4" aria-hidden="true" />
            {t("cta.directions")}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm transition-colors hover:bg-card"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            {t("cta.openMap")}
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("cta.openMap")}
        className="group relative block h-72 overflow-hidden rounded-4xl border border-border shadow-soft transition-shadow hover:shadow-lift sm:h-80 lg:h-full"
      >
        <MapFrame title="nube — Kirchgasse 3, 8001 Zürich" className="pointer-events-none h-full w-full" />
        <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-xs backdrop-blur-sm">
          {t("cta.openMap")}
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl gap-3 p-4 sm:p-5">
          <DialogTitle className="font-display text-2xl leading-none font-normal">
            {site.street}, {site.zipCity}
          </DialogTitle>
          <div className="h-[60vh] overflow-hidden rounded-2xl border border-border">
            <MapFrame title="nube map" className="h-full w-full" />
          </div>
          <a
            href={site.directionsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
          >
            <Navigation className="size-4" aria-hidden="true" />
            {t("cta.directions")}
          </a>
        </DialogContent>
      </Dialog>
    </div>
  );
}