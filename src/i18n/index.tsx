import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const langs = ["de", "en", "fr", "it"] as const;
export type Lang = (typeof langs)[number];
export type L = Record<Lang, string>;

export const langLabels: Record<Lang, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
  it: "Italiano",
};

const STORAGE_KEY = "nube-lang";

export const dict: Record<string, L> = {
  "nav.menu": { de: "Menü", en: "Menu", fr: "Menu", it: "Menu" },
  "nav.about": { de: "Über uns", en: "About", fr: "À propos", it: "Chi siamo" },
  "nav.team": { de: "Team", en: "Team", fr: "Équipe", it: "Team" },
  "nav.reviews": { de: "Bewertungen", en: "Reviews", fr: "Avis", it: "Recensioni" },
  "nav.visit": { de: "Besuch", en: "Visit", fr: "Visite", it: "Visita" },
  "nav.partners": { de: "Partner", en: "Partners", fr: "Partenaires", it: "Partner" },
  "nav.faq": { de: "FAQ", en: "FAQ", fr: "FAQ", it: "FAQ" },
  "nav.home": { de: "Startseite", en: "Home", fr: "Accueil", it: "Home" },
  "nav.language": { de: "Sprache", en: "Language", fr: "Langue", it: "Lingua" },

  "cta.visit": { de: "Besuch uns", en: "Visit us", fr: "Nous rendre visite", it: "Vieni a trovarci" },
  "cta.menu": {
    de: "Menü entdecken",
    en: "Explore the menu",
    fr: "Découvrir le menu",
    it: "Scopri il menu",
  },
  "cta.directions": {
    de: "Route planen",
    en: "Get directions",
    fr: "Itinéraire",
    it: "Indicazioni",
  },
  "cta.openMap": {
    de: "Karte öffnen",
    en: "Open map",
    fr: "Ouvrir la carte",
    it: "Apri la mappa",
  },
  "cta.close": { de: "Schliessen", en: "Close", fr: "Fermer", it: "Chiudi" },

  "hero.eyebrow": {
    de: "Specialty Coffee & Matcha — Zürich",
    en: "Specialty coffee & matcha — Zürich",
    fr: "Café de spécialité & matcha — Zurich",
    it: "Specialty coffee & matcha — Zurigo",
  },
  "hero.title1": { de: "Willkommen auf", en: "Step into", fr: "Entrez dans", it: "Entra nella" },
  "hero.title2": { de: "Wolke 7.", en: "cloud 9.", fr: "le 7e ciel.", it: "settima nuvola." },
  "hero.body": {
    de: "Premium Matcha, Specialty Coffee und handgemachte Refresher — frisch zubereitet und in unsere transparenten Dosen versiegelt.",
    en: "Premium matcha, specialty coffee and handcrafted refreshers — freshly prepared and sealed to order in our transparent cans.",
    fr: "Matcha premium, café de spécialité et boissons rafraîchissantes — préparés à la commande et scellés dans nos canettes transparentes.",
    it: "Matcha premium, specialty coffee e refresher artigianali — preparati al momento e sigillati nelle nostre lattine trasparenti.",
  },

  "hours.label": { de: "Öffnungszeiten", en: "Opening hours", fr: "Horaires", it: "Orari" },
  "hours.week": {
    de: "Mo – Sa, 12:00 – 18:00",
    en: "Mon – Sat, 12:00 – 18:00",
    fr: "Lun – Sam, 12h00 – 18h00",
    it: "Lun – Sab, 12:00 – 18:00",
  },
  "hours.sun": {
    de: "Sonntag geschlossen",
    en: "Sunday closed",
    fr: "Dimanche fermé",
    it: "Domenica chiuso",
  },
  "hours.openNow": { de: "Jetzt offen", en: "Open now", fr: "Ouvert", it: "Aperto ora" },
  "hours.closedNow": { de: "Geschlossen", en: "Closed", fr: "Fermé", it: "Chiuso" },
  "location.label": { de: "Standort", en: "Location", fr: "Adresse", it: "Posizione" },
  "location.city": {
    de: "8001 Zürich, Schweiz",
    en: "8001 Zürich, Switzerland",
    fr: "8001 Zurich, Suisse",
    it: "8001 Zurigo, Svizzera",
  },
  "contact.label": { de: "Kontakt", en: "Say hi", fr: "Contact", it: "Contatti" },
  "contact.takeaway": {
    de: "Takeaway — 2 Min. vom Bellevue",
    en: "Takeaway — 2 min from Bellevue",
    fr: "À emporter — 2 min de Bellevue",
    it: "Takeaway — 2 min da Bellevue",
  },

  "menu.eyebrow": { de: "Unser Menü", en: "Our menu", fr: "Notre menu", it: "Il nostro menu" },
  "menu.title": {
    de: "Vier Wege auf Wolke 7",
    en: "Every way into cloud 9",
    fr: "Tous les chemins vers le 7e ciel",
    it: "Tutti i modi per salire sulla nuvola",
  },
  "menu.body": {
    de: "Matcha, Kaffeespezialitäten und Shakes — jedes Produkt zeigt Bild und Nährwerte.",
    en: "Matcha, coffee specialties and shakes — every item shows its photo and nutrition.",
    fr: "Matcha, cafés de spécialité et shakes — chaque produit affiche sa photo et ses valeurs nutritives.",
    it: "Matcha, specialità di caffè e shake — ogni prodotto mostra foto e valori nutrizionali.",
  },
  "menu.hintDesktop": {
    de: "Fahre über ein Produkt",
    en: "Hover a product",
    fr: "Survolez un produit",
    it: "Passa su un prodotto",
  },
  "menu.hintMobile": {
    de: "Wischen & antippen",
    en: "Swipe & tap",
    fr: "Glissez & touchez",
    it: "Scorri e tocca",
  },
  "menu.tapDetails": {
    de: "Antippen für Nährwerte",
    en: "Tap for nutrition",
    fr: "Toucher pour les valeurs",
    it: "Tocca per i valori",
  },
  "menu.nutritionNote": {
    de: "Werte pro Portion, zubereitet mit Hafermilch. Jedes Getränk gibt es auch vegan.",
    en: "Values per serving as prepared with oat milk. Every drink is available vegan.",
    fr: "Valeurs par portion, préparées au lait d'avoine. Chaque boisson existe en version végane.",
    it: "Valori per porzione, preparati con latte d'avena. Ogni bevanda è disponibile vegana.",
  },

  "nutrition.calories": { de: "Kalorien", en: "Calories", fr: "Calories", it: "Calorie" },
  "nutrition.caffeine": { de: "Koffein", en: "Caffeine", fr: "Caféine", it: "Caffeina" },
  "nutrition.protein": { de: "Protein", en: "Protein", fr: "Protéines", it: "Proteine" },
  "nutrition.carbs": { de: "Kohlenhydrate", en: "Carbs", fr: "Glucides", it: "Carboidrati" },
  "nutrition.sugar": { de: "Zucker", en: "Sugar", fr: "Sucre", it: "Zucchero" },
  "nutrition.fat": { de: "Fett", en: "Fat", fr: "Graisses", it: "Grassi" },

  "tag.veganOption": {
    de: "Vegan möglich",
    en: "Vegan option",
    fr: "Option végane",
    it: "Opzione vegana",
  },
  "tag.vegan": { de: "Vegan", en: "Vegan", fr: "Végane", it: "Vegano" },
  "tag.signature": { de: "Signature", en: "Signature", fr: "Signature", it: "Signature" },
  "tag.sugarFree": { de: "Ohne Zucker", en: "Sugar free", fr: "Sans sucre", it: "Senza zucchero" },
  "tag.fruit": { de: "Fruchtig", en: "Fruit forward", fr: "Fruité", it: "Fruttato" },
  "tag.caffeineFree": {
    de: "Koffeinfrei",
    en: "Caffeine free",
    fr: "Sans caféine",
    it: "Senza caffeina",
  },
  "tag.colourShifting": {
    de: "Farbwechsel",
    en: "Colour shifting",
    fr: "Change de couleur",
    it: "Cambia colore",
  },
  "tag.shareable": { de: "Zum Teilen", en: "Shareable", fr: "À partager", it: "Da condividere" },
  "tag.warm": { de: "Warm", en: "Served warm", fr: "Servi chaud", it: "Servito caldo" },
  "tag.homemade": { de: "Hausgemacht", en: "Homemade", fr: "Fait maison", it: "Fatto in casa" },

  "story.eyebrow": {
    de: "Unsere Geschichte",
    en: "Our story",
    fr: "Notre histoire",
    it: "La nostra storia",
  },
  "story.title": {
    de: "Alltägliche Getränke verdienen aussergewöhnliche Aufmerksamkeit.",
    en: "Ordinary drinks deserve extraordinary attention.",
    fr: "Les boissons du quotidien méritent une attention extraordinaire.",
    it: "Le bevande di ogni giorno meritano un'attenzione straordinaria.",
  },
  "story.body": {
    de: "Wir verbinden erstklassige Zutaten, sorgfältige Handarbeit und schöne Präsentation. Wir servieren nicht einfach Getränke — wir machen kleine Erlebnisse, die du durch die Stadt tragen kannst.",
    en: "We combine premium ingredients, careful craftsmanship and beautiful presentation. We don't just serve drinks — we make small experiences you can carry through the city.",
    fr: "Nous associons des ingrédients premium, un savoir-faire soigné et une belle présentation. Nous ne servons pas seulement des boissons — nous créons de petites expériences à emporter.",
    it: "Uniamo ingredienti premium, cura artigianale e una bella presentazione. Non serviamo solo bevande — creiamo piccole esperienze da portare in giro per la città.",
  },

  "team.eyebrow": {
    de: "Deine Freunde bei nube",
    en: "Your friends at nube",
    fr: "Tes amis chez nube",
    it: "I tuoi amici di nube",
  },
  "team.title": {
    de: "Die Menschen hinter der Theke",
    en: "The people behind the counter",
    fr: "Les personnes derrière le comptoir",
    it: "Le persone dietro al banco",
  },
  "team.body": {
    de: "Ein kleines Team, das dich mit Namen kennt — und deine Bestellung meistens auch.",
    en: "A small team that knows you by name — and usually your order too.",
    fr: "Une petite équipe qui te connaît par ton prénom — et souvent aussi ta commande.",
    it: "Un piccolo team che ti conosce per nome — e di solito anche il tuo ordine.",
  },
  "team.favourite": {
    de: "Lieblingsdrink",
    en: "Favourite drink",
    fr: "Boisson préférée",
    it: "Bevanda preferita",
  },

  "reviews.eyebrow": {
    de: "Google Bewertungen",
    en: "Google reviews",
    fr: "Avis Google",
    it: "Recensioni Google",
  },
  "reviews.title": {
    de: "Zürich mag uns",
    en: "Zürich loves us",
    fr: "Zurich nous aime",
    it: "Zurigo ci ama",
  },
  "reviews.basedOn": {
    de: "Bewertungen auf Google",
    en: "reviews on Google",
    fr: "avis sur Google",
    it: "recensioni su Google",
  },
  "reviews.viewAll": {
    de: "Alle Bewertungen ansehen",
    en: "Read all reviews",
    fr: "Voir tous les avis",
    it: "Leggi tutte le recensioni",
  },
  "reviews.write": {
    de: "Bewertung schreiben",
    en: "Write a review",
    fr: "Laisser un avis",
    it: "Scrivi una recensione",
  },

  "gallery.eyebrow": { de: "Der Ort", en: "The space", fr: "Le lieu", it: "Lo spazio" },
  "gallery.title": {
    de: "Hell, ruhig, ein bisschen wie eine Wolke",
    en: "Bright, calm, a little like a cloud",
    fr: "Lumineux, calme, un peu comme un nuage",
    it: "Luminoso, calmo, un po' come una nuvola",
  },

  "insta.eyebrow": { de: "Instagram", en: "Instagram", fr: "Instagram", it: "Instagram" },
  "insta.title": {
    de: "Live aus dem Café",
    en: "Live from the café",
    fr: "En direct du café",
    it: "Dal café, in diretta",
  },
  "insta.body": {
    de: "Neue Specials, Drops und Momente — täglich auf @nubeworldwide.",
    en: "New specials, drops and moments — daily on @nubeworldwide.",
    fr: "Nouveautés, drops et moments — chaque jour sur @nubeworldwide.",
    it: "Novità, drop e momenti — ogni giorno su @nubeworldwide.",
  },
  "insta.followers": { de: "Follower", en: "Followers", fr: "Abonnés", it: "Follower" },
  "insta.posts": { de: "Beiträge", en: "Posts", fr: "Publications", it: "Post" },
  "insta.open": {
    de: "Feed öffnen",
    en: "Open the feed",
    fr: "Ouvrir le feed",
    it: "Apri il feed",
  },
  "insta.follow": { de: "Auf Instagram folgen", en: "Follow on Instagram", fr: "Suivre sur Instagram", it: "Segui su Instagram" },

  "map.eyebrow": { de: "Finde uns", en: "Find us", fr: "Nous trouver", it: "Trovaci" },
  "map.title": { de: "Komm vorbei", en: "Come say hello", fr: "Passe nous voir", it: "Vieni a salutarci" },
  "map.body": {
    de: "Mitten in der Zürcher Altstadt — Karte antippen, zoomen und direkt losnavigieren.",
    en: "In the heart of Zürich's old town — tap the map, zoom around and navigate straight there.",
    fr: "Au cœur de la vieille ville de Zurich — touchez la carte, zoomez et lancez l'itinéraire.",
    it: "Nel cuore del centro storico di Zurigo — tocca la mappa, zooma e avvia il percorso.",
  },

  "partners.eyebrow": {
    de: "Creators & Partner",
    en: "Creators & partners",
    fr: "Créateurs & partenaires",
    it: "Creator & partner",
  },
  "partners.title": {
    de: "Wer über nube spricht",
    en: "Who's talking about nube",
    fr: "Qui parle de nube",
    it: "Chi parla di nube",
  },
  "partners.body": {
    de: "Food Blogger, lokale Creator und Freunde des Hauses, die nube gefeatured haben.",
    en: "Food bloggers, local creators and friends of the house who have featured nube.",
    fr: "Food bloggers, créateurs locaux et amis de la maison qui ont parlé de nube.",
    it: "Food blogger, creator locali e amici della casa che hanno raccontato nube.",
  },
  "partners.cta": {
    de: "Partner werden",
    en: "Become a partner",
    fr: "Devenir partenaire",
    it: "Diventa partner",
  },
  "partners.ctaBody": {
    de: "Du bist Creator in Zürich und möchtest mit uns arbeiten? Schreib uns — wir antworten schnell.",
    en: "Creating in Zürich and want to work with us? Write us — we answer fast.",
    fr: "Créateur à Zurich et envie de collaborer ? Écris-nous — nous répondons vite.",
    it: "Sei un creator a Zurigo e vuoi collaborare? Scrivici — rispondiamo veloci.",
  },
  "partners.viewPost": { de: "Beitrag ansehen", en: "View post", fr: "Voir le post", it: "Guarda il post" },
  "partners.page": {
    de: "Partnerseite ansehen",
    en: "See the partner page",
    fr: "Voir la page partenaires",
    it: "Vedi la pagina partner",
  },

  "faq.eyebrow": { de: "FAQ", en: "FAQ", fr: "FAQ", it: "FAQ" },
  "faq.title": { de: "Gut zu wissen", en: "Good to know", fr: "Bon à savoir", it: "Buono a sapersi" },

  "legal.impressum": { de: "Impressum", en: "Imprint", fr: "Mentions légales", it: "Note legali" },
  "legal.privacy": { de: "Datenschutz", en: "Privacy", fr: "Confidentialité", it: "Privacy" },
  "legal.back": { de: "Zurück zur Startseite", en: "Back to home", fr: "Retour à l'accueil", it: "Torna alla home" },
  "legal.reviewNote": {
    de: "Bitte prüfe und ergänze diese Angaben mit deinen echten Firmendaten.",
    en: "Please review and complete this page with your real company details.",
    fr: "Merci de vérifier et compléter cette page avec vos données réelles.",
    it: "Verifica e completa questa pagina con i dati reali dell'azienda.",
  },
};

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tl: (value: L) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && (langs as readonly string[]).includes(stored)) {
      setLangState(stored);
      return;
    }
    const nav = window.navigator.language.slice(0, 2).toLowerCase();
    if ((langs as readonly string[]).includes(nav)) setLangState(nav as Lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key) => dict[key]?.[lang] ?? key,
      tl: (v) => v[lang],
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}