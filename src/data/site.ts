import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import spaceInterior from "@/assets/space-interior.jpg";
import spaceCounter from "@/assets/space-counter.jpg";
import matchaLatteAsset from "@/assets/iced-matcha-latte.jpg.asset.json";
import mangoShakeAsset from "@/assets/mango-shake.jpg.asset.json";

const matchaLatte = matchaLatteAsset.url;
const cakeInACan = mangoShakeAsset.url;
import type { L } from "@/i18n";

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
  followers: "12.4K",
  postCount: "310",
  mapsEmbed:
    "https://www.google.com/maps?q=Kirchgasse+3,+8001+Z%C3%BCrich&hl=de&z=17&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Kirchgasse+3,+8001+Z%C3%BCrich",
  directionsLink:
    "https://www.google.com/maps/dir/?api=1&destination=Kirchgasse+3,+8001+Z%C3%BCrich",
  reviewsLink:
    "https://www.google.com/maps/search/?api=1&query=nube+Kirchgasse+3+Z%C3%BCrich",
  rating: 4.9,
  reviewCount: 214,
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
    title: { de: "Premium Matcha", en: "Premium matcha", fr: "Matcha premium", it: "Matcha premium" },
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

export const teamMembers: { name: string; role: L; favourite: string; image: string }[] = [
  {
    name: "Aiko",
    role: { de: "Gründerin", en: "Founder", fr: "Fondatrice", it: "Fondatrice" },
    favourite: "Cloud Matcha Latte",
    image: team1,
  },
  {
    name: "Luca",
    role: { de: "Head Barista", en: "Head barista", fr: "Chef barista", it: "Head barista" },
    favourite: "18h Cold Brew",
    image: team2,
  },
  {
    name: "Noemi",
    role: { de: "Matcha Master", en: "Matcha master", fr: "Maître matcha", it: "Maestra del matcha" },
    favourite: "Strawberry Matcha",
    image: team3,
  },
  {
    name: "Sami",
    role: { de: "Küche & Bake", en: "Kitchen & bake", fr: "Cuisine & pâtisserie", it: "Cucina & forno" },
    favourite: "Tamago Sando",
    image: team4,
  },
];

export const reviews: { name: string; initial: string; rating: number; text: L; when: L }[] = [
  {
    name: "Melanie K.",
    initial: "M",
    rating: 5,
    text: {
      de: "Der beste Matcha in Zürich, und die Dosen sind einfach zu schön. Team super freundlich!",
      en: "The best matcha in Zürich, and those cans are just beautiful. Super friendly team!",
      fr: "Le meilleur matcha de Zurich, et ces canettes sont magnifiques. Équipe très sympa !",
      it: "Il miglior matcha di Zurigo e le lattine sono splendide. Team super gentile!",
    },
    when: { de: "vor 2 Wochen", en: "2 weeks ago", fr: "il y a 2 semaines", it: "2 settimane fa" },
  },
  {
    name: "Daniel R.",
    initial: "D",
    rating: 5,
    text: {
      de: "Cold Brew auf Weltklasse-Niveau. Mein täglicher Stop auf dem Weg ins Büro.",
      en: "World-class cold brew. My daily stop on the way to the office.",
      fr: "Un cold brew d'exception. Mon arrêt quotidien avant le bureau.",
      it: "Cold brew di livello mondiale. La mia tappa quotidiana verso l'ufficio.",
    },
    when: { de: "vor 1 Monat", en: "1 month ago", fr: "il y a 1 mois", it: "1 mese fa" },
  },
  {
    name: "Sofia B.",
    initial: "S",
    rating: 5,
    text: {
      de: "Cake in a Can ist ein Erlebnis. Sieht toll aus, schmeckt noch besser.",
      en: "Cake in a Can is an experience. Looks great, tastes even better.",
      fr: "Le Cake in a Can est une expérience. Beau et encore meilleur au goût.",
      it: "Cake in a Can è un'esperienza. Bellissimo e ancora più buono.",
    },
    when: { de: "vor 3 Wochen", en: "3 weeks ago", fr: "il y a 3 semaines", it: "3 settimane fa" },
  },
  {
    name: "Jon P.",
    initial: "J",
    rating: 4,
    text: {
      de: "Klein, aber perfekt organisiert. Der Yuzu Peach ist im Sommer unschlagbar.",
      en: "Small but perfectly run. The Yuzu Peach is unbeatable in summer.",
      fr: "Petit mais parfaitement tenu. Le Yuzu Peach est imbattable en été.",
      it: "Piccolo ma perfetto. Lo Yuzu Peach in estate è imbattibile.",
    },
    when: { de: "vor 5 Tagen", en: "5 days ago", fr: "il y a 5 jours", it: "5 giorni fa" },
  },
  {
    name: "Elena V.",
    initial: "E",
    rating: 5,
    text: {
      de: "Freundlichstes Team der Altstadt. Sie kennen meine Bestellung auswendig.",
      en: "Friendliest team in the old town. They know my order by heart.",
      fr: "L'équipe la plus sympa de la vieille ville. Ils connaissent ma commande par cœur.",
      it: "Il team più gentile del centro storico. Conoscono il mio ordine a memoria.",
    },
    when: { de: "vor 2 Monaten", en: "2 months ago", fr: "il y a 2 mois", it: "2 mesi fa" },
  },
];

export const socialPosts: { image: string; caption: L; likes: string; href: string }[] = [
  {
    image: social1,
    caption: {
      de: "Matcha-Wolken über der Limmat ☁️",
      en: "Matcha clouds over the Limmat ☁️",
      fr: "Nuages de matcha sur la Limmat ☁️",
      it: "Nuvole di matcha sulla Limmat ☁️",
    },
    likes: "1.2K",
    href: site.instagram,
  },
  {
    image: social2,
    caption: {
      de: "Neue Sommer-Refresher sind da 🍑",
      en: "New summer refreshers are here 🍑",
      fr: "Les refreshers d'été arrivent 🍑",
      it: "Arrivano i refresher estivi 🍑",
    },
    likes: "890",
    href: site.instagram,
  },
  {
    image: social3,
    caption: {
      de: "Samstag in der Kirchgasse ✨",
      en: "Saturday on Kirchgasse ✨",
      fr: "Samedi à Kirchgasse ✨",
      it: "Sabato in Kirchgasse ✨",
    },
    likes: "2.1K",
    href: site.instagram,
  },
  {
    image: matchaLatte,
    caption: {
      de: "Ceremonial Grade, jeden Morgen 🍵",
      en: "Ceremonial grade, every morning 🍵",
      fr: "Qualité cérémonielle, chaque matin 🍵",
      it: "Ceremonial grade, ogni mattina 🍵",
    },
    likes: "740",
    href: site.instagram,
  },
  {
    image: cakeInACan,
    caption: {
      de: "Mango Shake — Sommer-Drop 🥭",
      en: "Mango Shake — summer drop 🥭",
      fr: "Mango Shake — drop de l'été 🥭",
      it: "Mango Shake — drop estivo 🥭",
    },
    likes: "1.6K",
    href: site.instagram,
  },
  {
    image: spaceCounter,
    caption: {
      de: "Hinter der Theke 🤍",
      en: "Behind the counter 🤍",
      fr: "Derrière le comptoir 🤍",
      it: "Dietro al banco 🤍",
    },
    likes: "620",
    href: site.instagram,
  },
];

export const gallery: { image: string; alt: L }[] = [
  {
    image: spaceInterior,
    alt: {
      de: "Heller Innenraum von nube mit Holz und Pflanzen",
      en: "Bright nube interior with wood and plants",
      fr: "Intérieur lumineux de nube avec bois et plantes",
      it: "Interno luminoso di nube con legno e piante",
    },
  },
  {
    image: spaceCounter,
    alt: {
      de: "Barista schlägt Uji-Matcha an der Theke auf",
      en: "Barista whisking Uji matcha at the counter",
      fr: "Barista fouettant du matcha Uji au comptoir",
      it: "Barista che monta il matcha Uji al banco",
    },
  },
  {
    image: social1,
    alt: {
      de: "nube Dose in der Zürcher Altstadt",
      en: "nube can in Zürich's old town",
      fr: "Canette nube dans la vieille ville de Zurich",
      it: "Lattina nube nel centro storico di Zurigo",
    },
  },
];

export const partners: {
  name: string;
  handle: string;
  platform: string;
  reach: string;
  image: string;
  note: L;
  href: string;
}[] = [
  {
    name: "Zürich Eats",
    handle: "@zuricheats",
    platform: "Instagram",
    reach: "84K",
    image: social2,
    note: {
      de: "Reel über unsere versiegelten Klardosen — 400K Views.",
      en: "Reel about our sealed clear cans — 400K views.",
      fr: "Reel sur nos canettes scellées — 400K vues.",
      it: "Reel sulle nostre lattine sigillate — 400K views.",
    },
    href: site.instagram,
  },
  {
    name: "Matcha Diaries",
    handle: "@matchadiaries",
    platform: "TikTok",
    reach: "126K",
    image: matchaLatte,
    note: {
      de: "Blind-Tasting: nube Matcha auf Platz 1 in Zürich.",
      en: "Blind tasting: nube matcha ranked #1 in Zürich.",
      fr: "Dégustation à l'aveugle : nube matcha n°1 à Zurich.",
      it: "Degustazione alla cieca: nube matcha n°1 a Zurigo.",
    },
    href: site.tiktok,
  },
  {
    name: "Lea Bakes",
    handle: "@leabakes",
    platform: "Instagram",
    reach: "31K",
    image: cakeInACan,
    note: {
      de: "Rezept-Kollab zum Cake in a Can.",
      en: "Recipe collab around Cake in a Can.",
      fr: "Collab recette autour du Cake in a Can.",
      it: "Collab ricetta intorno al Cake in a Can.",
    },
    href: site.instagram,
  },
  {
    name: "Old Town Guide",
    handle: "@oldtownzurich",
    platform: "Blog",
    reach: "—",
    image: spaceInterior,
    note: {
      de: "«Der schönste Kaffee-Stop der Kirchgasse.»",
      en: "\u201cThe prettiest coffee stop on Kirchgasse.\u201d",
      fr: "« Le plus beau stop café de la Kirchgasse. »",
      it: "«La sosta caffè più bella della Kirchgasse.»",
    },
    href: site.mapsLink,
  },
  {
    name: "Sara Runs ZH",
    handle: "@sararunszh",
    platform: "Strava & IG",
    reach: "19K",
    image: social3,
    note: {
      de: "Sonntags-Runs enden immer bei nube.",
      en: "Sunday runs always end at nube.",
      fr: "Les runs du dimanche finissent chez nube.",
      it: "Le corse della domenica finiscono da nube.",
    },
    href: site.instagram,
  },
  {
    name: "Kaffee Kollektiv",
    handle: "@kaffeekollektiv",
    platform: "Roastery",
    reach: "—",
    image: spaceCounter,
    note: {
      de: "Rösterei-Partner für unsere Specialty Beans.",
      en: "Roastery partner for our specialty beans.",
      fr: "Partenaire torréfacteur de nos grains.",
      it: "Partner di torrefazione per i nostri chicchi.",
    },
    href: site.instagram,
  },
];