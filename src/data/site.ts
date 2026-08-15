import storeAsset1 from "@/assets/store-1.jpg.asset.json";
import storeAsset2 from "@/assets/store-2.jpg.asset.json";
import storeAsset3 from "@/assets/store-3.jpg.asset.json";
import ig1 from "@/assets/ig-1.jpg.asset.json";
import ig2 from "@/assets/ig-2.jpg.asset.json";
import ig3 from "@/assets/ig-3.jpg.asset.json";
import ig4 from "@/assets/ig-4.jpg.asset.json";
import ig5 from "@/assets/ig-5.jpg.asset.json";
import ig6 from "@/assets/ig-6.jpg.asset.json";
import matchaLatteAsset from "@/assets/iced-matcha-latte.jpg.asset.json";
import logoAsset from "@/assets/nube-logo.png.asset.json";
import type { L } from "@/i18n";

export const logoUrl = logoAsset.url;
export const heroImage = matchaLatteAsset.url;

/** Same string for every locale (original quotes, brand names, etc.). */
function L4(v: string): L {
  return { de: v, en: v, fr: v, it: v };
}

export const site = {
  name: "nube",
  street: "Kirchgasse 3",
  zipCity: "8001 Zürich",
  phone: "+41 79 952 50 55",
  phoneHref: "https://wa.me/41799525055",
  email: "info@nubeworldwide.com",
  instagram: "https://www.instagram.com/nubeworldwide/",
  instagramHandle: "@nubeworldwide",
  tiktok: "https://www.tiktok.com/@nubeworldwide",
  mapsEmbed:
    "https://www.google.com/maps?q=Kirchgasse+3,+8001+Z%C3%BCrich&hl=de&z=17&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Kirchgasse+3,+8001+Z%C3%BCrich",
  directionsLink:
    "https://www.google.com/maps/dir/?api=1&destination=Kirchgasse+3,+8001+Z%C3%BCrich",
  reviewsLink: "https://www.google.com/maps/search/?api=1&query=nube+Kirchgasse+3+Z%C3%BCrich",
  rating: 5.0,
  reviewCount: 3,
} as const;

export const pillars: { title: L; body: L }[] = [
  {
    title: {
      de: "Versiegelte Klardosen",
      en: "Sealed transparent cans",
      fr: "Canettes transparentes scellées",
      it: "Lattine trasparenti sigillate",
    },
    body: {
      de: "Jedes kalte Getränk wird auf Bestellung zubereitet und versiegelt — takeaway-ready und trotzdem schön.",
      en: "Every cold drink is prepared and sealed to order — take-away ready, still beautiful.",
      fr: "Chaque boisson froide est préparée et scellée à la commande — prête à emporter.",
      it: "Ogni bevanda fredda è preparata e sigillata al momento — pronta da portare via.",
    },
  },
  {
    title: {
      de: "Premium Matcha",
      en: "Premium matcha",
      fr: "Matcha premium",
      it: "Matcha premium",
    },
    body: {
      de: "Ausgewählt für aussergewöhnlichen Geschmack und Farbe. Das Herz von allem, was wir machen.",
      en: "Sourced for exceptional taste and colour. The heart of everything we make.",
      fr: "Sélectionné pour son goût et sa couleur exceptionnels. Le cœur de tout ce que nous faisons.",
      it: "Selezionato per gusto e colore eccezionali. Il cuore di tutto ciò che facciamo.",
    },
  },
  {
    title: {
      de: "Specialty Coffee",
      en: "Specialty coffee",
      fr: "Café de spécialité",
      it: "Specialty coffee",
    },
    body: {
      de: "Sorgfältig ausgewählte Bohnen für Klassiker und eigene Kreationen.",
      en: "Carefully selected beans, pulled into classics and signature creations.",
      fr: "Des grains soigneusement choisis, pour les classiques et nos créations.",
      it: "Chicchi selezionati con cura, per classici e creazioni della casa.",
    },
  },
  {
    title: {
      de: "Japanisch inspiriert",
      en: "Japanese-inspired",
      fr: "Inspiration japonaise",
      it: "Ispirazione giapponese",
    },
    body: {
      de: "Getränke und Süsses, geprägt von moderner Tokioter Café-Kultur.",
      en: "Drinks and desserts shaped by modern Tokyo café culture.",
      fr: "Boissons et douceurs inspirées de la culture café de Tokyo.",
      it: "Bevande e dolci ispirati alla cultura café di Tokyo.",
    },
  },
];

export const faqs: { q: L; a: L }[] = [
  {
    q: {
      de: "Gibt es nur Takeaway?",
      en: "Are you takeaway only?",
      fr: "Uniquement à emporter ?",
      it: "Solo takeaway?",
    },
    a: {
      de: "Ja. nube ist aktuell ein Takeaway-Konzept.",
      en: "Yes. nube is currently a takeaway-only concept.",
      fr: "Oui. nube est actuellement un concept à emporter.",
      it: "Sì. nube è attualmente un concept solo takeaway.",
    },
  },
  {
    q: {
      de: "Habt ihr vegane Optionen?",
      en: "Do you offer vegan options?",
      fr: "Proposez-vous des options véganes ?",
      it: "Avete opzioni vegane?",
    },
    a: {
      de: "Jedes Getränk auf der Karte gibt es als vegane Version.",
      en: "Every drink on the board is available as a vegan version.",
      fr: "Chaque boisson de la carte existe en version végane.",
      it: "Ogni bevanda del menu è disponibile in versione vegana.",
    },
  },
  {
    q: {
      de: "Wird alles frisch zubereitet?",
      en: "Are your drinks freshly prepared?",
      fr: "Tout est-il préparé à la commande ?",
      it: "Tutto è preparato al momento?",
    },
    a: {
      de: "Immer. Jedes Getränk wird auf Bestellung gemacht und versiegelt.",
      en: "Always. Each one is made and sealed to order.",
      fr: "Toujours. Chaque boisson est préparée et scellée à la commande.",
      it: "Sempre. Ogni bevanda è preparata e sigillata al momento.",
    },
  },
  {
    q: {
      de: "Warum Dosen?",
      en: "Why cans?",
      fr: "Pourquoi des canettes ?",
      it: "Perché le lattine?",
    },
    a: {
      de: "Unsere transparenten Dosen halten die Drinks frisch, sind einfach zu tragen und zeigen jede Schicht.",
      en: "Our transparent cans keep drinks fresh, are easy to carry, and show off every layer.",
      fr: "Nos canettes transparentes gardent la fraîcheur, se transportent facilement et révèlent chaque couche.",
      it: "Le nostre lattine trasparenti mantengono la freschezza, sono comode e mostrano ogni strato.",
    },
  },
];

/**
 * Google Reviews — Platzhalter.
 * Zum Aktualisieren einfach name, initial (Anfangsbuchstabe), rating (1–5)
 * und den Review-Text ersetzen bzw. weitere Einträge hinzufügen.
 */
export const reviews: { name: string; initial: string; rating: number; text: L; when: L }[] = [
  {
    name: "Madeleine Mattli",
    initial: "M",
    rating: 5,
    text: L4(
      "Super Takeaway Kaffee! Würde sofort wieder gehen. Fand die Getränkeauswahl mega und der Kuchen (Matcha/Strawberry) hat super geschmeckt. Was sehr stark aufgefallen ist wie schön alles aussah, Packaging und Branding super nice, geschmacklich war es definitiv auch auf dem Niveau.",
    ),
    when: L4("Google Review"),
  },
  {
    name: "Nici N.",
    initial: "N",
    rating: 5,
    text: L4(
      "Sehr cuter Laden. Leckere Drinks. Ich hatte das letzte Mal Mango-Matcha und diesmal caramel-coffee. Beide 10/10!!! Auf jeden Fall mein Lieblingscafé in Zürich. \U0001F60C",
    ),
    when: L4("Google Review"),
  },
  {
    name: "Saskia K.",
    initial: "S",
    rating: 5,
    text: L4(
      "Super süsses Café mit leckeren Matchas in einer fancy Dose. Sehr zuvorkommendes Personal und der Schmuck ist auch super hübsch!",
    ),
    when: L4("Google Review"),
  },
];

/** Instagram-Platzhalter mit echten Fotos. Neue Posts einfach ergänzen. */
export const socialPosts: { image: string; caption: L; href: string }[] = [
  { image: ig1.url, caption: L4("nube Zurich"), href: site.instagram },
  { image: ig2.url, caption: L4("Cake in a Can"), href: site.instagram },
  { image: ig3.url, caption: L4("Ceremonial Grade Matcha"), href: site.instagram },
  { image: ig4.url, caption: L4("PORSHE x GOLDXBODY x nube"), href: site.instagram },
  { image: ig5.url, caption: L4("Student Discount — Fruit Matchas & Lattes"), href: site.instagram },
  { image: ig6.url, caption: L4("Coconut Cloud Matcha"), href: site.instagram },
];

export const gallery: { image: string; alt: L }[] = [
  { image: storeAsset1.url, alt: L4("nube Drinks vor der Menütafel im Store") },
  { image: storeAsset2.url, alt: L4("Frisch versiegelte nube Dosen an der Theke") },
  { image: storeAsset3.url, alt: L4("nube Logo auf der La Marzocco Espressomaschine") },
];
