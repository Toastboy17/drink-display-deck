import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/data/site";
import { useI18n, type L } from "@/i18n";

const title = "Impressum — nube Zürich";
const description =
  "Impressum von nube worldwide, Kirchgasse 3, 8001 Zürich: Verantwortliche Stelle, Kontaktangaben und Haftungshinweise.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

const copy: Record<string, L> = {
  responsible: {
    de: "Verantwortlich für den Inhalt",
    en: "Responsible for the content",
    fr: "Responsable du contenu",
    it: "Responsabile del contenuto",
  },
  contact: { de: "Kontakt", en: "Contact", fr: "Contact", it: "Contatti" },
  legalForm: {
    de: "Rechtsform & Eintrag",
    en: "Legal form & registration",
    fr: "Forme juridique & registre",
    it: "Forma giuridica e registro",
  },
  legalFormBody: {
    de: "Einzelunternehmen / GmbH mit Sitz in Zürich, Schweiz. UID-Nummer: CHE-XXX.XXX.XXX.",
    en: "Sole proprietorship / limited company based in Zürich, Switzerland. UID number: CHE-XXX.XXX.XXX.",
    fr: "Entreprise individuelle / Sàrl sise à Zurich, Suisse. Numéro UID : CHE-XXX.XXX.XXX.",
    it: "Ditta individuale / Sagl con sede a Zurigo, Svizzera. Numero UID: CHE-XXX.XXX.XXX.",
  },
  liability: { de: "Haftungsausschluss", en: "Disclaimer", fr: "Clause de non-responsabilité", it: "Esclusione di responsabilità" },
  liabilityBody: {
    de: "Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität wird keine Haftung übernommen. Für Inhalte verlinkter externer Websites sind ausschliesslich deren Betreiber verantwortlich.",
    en: "The content of this website is compiled with care. No liability is accepted for its accuracy, completeness or timeliness. The operators of linked external websites are solely responsible for their content.",
    fr: "Le contenu de ce site est élaboré avec soin. Aucune responsabilité n'est assumée quant à son exactitude, son exhaustivité ou son actualité. Les exploitants des sites externes liés sont seuls responsables de leur contenu.",
    it: "I contenuti di questo sito sono redatti con cura. Non si assume alcuna responsabilità per correttezza, completezza o attualità. I gestori dei siti esterni collegati sono i soli responsabili dei relativi contenuti.",
  },
  copyright: { de: "Urheberrecht", en: "Copyright", fr: "Droit d'auteur", it: "Diritto d'autore" },
  copyrightBody: {
    de: "Alle Texte, Bilder und Grafiken auf dieser Website sind urheberrechtlich geschützt. Eine Verwendung ohne schriftliche Zustimmung ist nicht zulässig.",
    en: "All texts, images and graphics on this website are protected by copyright. Any use without written consent is not permitted.",
    fr: "Tous les textes, images et graphiques de ce site sont protégés par le droit d'auteur. Toute utilisation sans accord écrit est interdite.",
    it: "Tutti i testi, le immagini e i grafici di questo sito sono protetti dal diritto d'autore. L'uso senza consenso scritto non è consentito.",
  },
};

function ImpressumPage() {
  const { t, tl } = useI18n();

  return (
    <LegalLayout heading={t("legal.impressum")}>
      <LegalSection title={tl(copy.responsible!)}>
        <p>
          nube worldwide
          <br />
          {site.street}
          <br />
          {site.zipCity}, {t("location.city").split(", ")[1] ?? "Schweiz"}
        </p>
      </LegalSection>

      <LegalSection title={tl(copy.contact!)}>
        <p>
          <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
            {site.email}
          </a>
          <br />
          <a href={site.phoneHref} className="underline-offset-4 hover:underline">
            {site.phone}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={tl(copy.legalForm!)}>
        <p>{tl(copy.legalFormBody!)}</p>
      </LegalSection>

      <LegalSection title={tl(copy.liability!)}>
        <p>{tl(copy.liabilityBody!)}</p>
      </LegalSection>

      <LegalSection title={tl(copy.copyright!)}>
        <p>{tl(copy.copyrightBody!)}</p>
      </LegalSection>
    </LegalLayout>
  );
}