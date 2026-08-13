import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/data/site";
import { useI18n, type L } from "@/i18n";

const title = "Datenschutzerklärung — nube Zürich";
const description =
  "Datenschutzerklärung von nube worldwide: welche Daten beim Besuch der Website bearbeitet werden, Google Maps, Instagram und deine Rechte.";

export const Route = createFileRoute("/datenschutz")({
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
  component: PrivacyPage,
});

const copy = {
  generalTitle: { de: "Allgemeines", en: "General", fr: "Généralités", it: "In generale" },
  general: {
    de: "Wir bearbeiten Personendaten nach dem Schweizer Datenschutzgesetz (DSG) und, soweit anwendbar, nach der DSGVO. Verantwortlich ist nube worldwide, Kirchgasse 3, 8001 Zürich.",
    en: "We process personal data in accordance with the Swiss Data Protection Act (FADP) and, where applicable, the GDPR. The controller is nube worldwide, Kirchgasse 3, 8001 Zürich.",
    fr: "Nous traitons les données personnelles conformément à la LPD suisse et, le cas échéant, au RGPD. Le responsable est nube worldwide, Kirchgasse 3, 8001 Zurich.",
    it: "Trattiamo i dati personali secondo la legge svizzera sulla protezione dei dati (LPD) e, se applicabile, il GDPR. Il titolare è nube worldwide, Kirchgasse 3, 8001 Zurigo.",
  },
  logsTitle: { de: "Server-Logfiles", en: "Server log files", fr: "Fichiers journaux", it: "File di log" },
  logs: {
    de: "Beim Besuch dieser Website werden technische Daten wie IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs verarbeitet. Diese Daten dienen ausschliesslich dem sicheren Betrieb der Website.",
    en: "When you visit this website, technical data such as IP address, browser type, date and time of access are processed. This data is used solely to operate the website securely.",
    fr: "Lors de la visite, des données techniques telles que l'adresse IP, le type de navigateur, la date et l'heure d'accès sont traitées, uniquement pour l'exploitation sécurisée du site.",
    it: "Durante la visita vengono trattati dati tecnici come indirizzo IP, tipo di browser, data e ora dell'accesso, esclusivamente per il funzionamento sicuro del sito.",
  },
  thirdTitle: {
    de: "Google Maps & Instagram",
    en: "Google Maps & Instagram",
    fr: "Google Maps & Instagram",
    it: "Google Maps e Instagram",
  },
  third: {
    de: "Wir binden eine Google-Maps-Karte und Links zu Instagram ein. Beim Laden der Karte können Daten (u. a. IP-Adresse) an Google übermittelt werden. Es gelten die Datenschutzbestimmungen von Google bzw. Meta.",
    en: "We embed a Google Maps map and links to Instagram. Loading the map may transmit data (including your IP address) to Google. The privacy policies of Google and Meta apply.",
    fr: "Nous intégrons une carte Google Maps et des liens vers Instagram. Le chargement de la carte peut transmettre des données (dont l'adresse IP) à Google. Les politiques de Google et Meta s'appliquent.",
    it: "Integriamo una mappa Google Maps e link a Instagram. Il caricamento della mappa può trasmettere dati (incluso l'indirizzo IP) a Google. Si applicano le informative di Google e Meta.",
  },
  storageTitle: {
    de: "Lokale Speicherung",
    en: "Local storage",
    fr: "Stockage local",
    it: "Archiviazione locale",
  },
  storage: {
    de: "Deine gewählte Sprache wird im Local Storage deines Browsers gespeichert. Es findet kein Tracking und keine Weitergabe statt.",
    en: "Your selected language is stored in your browser's local storage. No tracking or sharing takes place.",
    fr: "La langue choisie est enregistrée dans le stockage local de ton navigateur. Aucun suivi ni partage n'a lieu.",
    it: "La lingua scelta è salvata nel local storage del browser. Non avviene alcun tracciamento o condivisione.",
  },
  rightsTitle: { de: "Deine Rechte", en: "Your rights", fr: "Tes droits", it: "I tuoi diritti" },
  rights: {
    de: "Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung deiner Daten. Melde dich dafür jederzeit per E-Mail.",
    en: "You have the right to access, rectify, delete and restrict the processing of your data. Contact us by email at any time.",
    fr: "Tu disposes d'un droit d'accès, de rectification, d'effacement et de limitation du traitement. Écris-nous par e-mail à tout moment.",
    it: "Hai diritto di accesso, rettifica, cancellazione e limitazione del trattamento. Scrivici via e-mail in qualsiasi momento.",
  },
} satisfies Record<string, L>;

function PrivacyPage() {
  const { t, tl } = useI18n();
  return (
    <LegalLayout heading={t("legal.privacy")}>
      <LegalSection title={tl(copy.generalTitle)}>
        <p>{tl(copy.general)}</p>
      </LegalSection>
      <LegalSection title={tl(copy.logsTitle)}>
        <p>{tl(copy.logs)}</p>
      </LegalSection>
      <LegalSection title={tl(copy.thirdTitle)}>
        <p>{tl(copy.third)}</p>
      </LegalSection>
      <LegalSection title={tl(copy.storageTitle)}>
        <p>{tl(copy.storage)}</p>
      </LegalSection>
      <LegalSection title={tl(copy.rightsTitle)}>
        <p>{tl(copy.rights)}</p>
        <p>
          <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
            {site.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}