import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/i18n";

export function LegalLayout({ heading, children }: { heading: string; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t("legal.back")}
        </Link>
        <h1 className="mt-8 text-4xl md:text-5xl">{heading}</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
        <p className="mt-12 rounded-2xl bg-accent/40 p-4 text-xs text-foreground">
          {t("legal.reviewNote")}
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl text-foreground">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  );
}