import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const langs = ["en", "de", "fr", "it", "es"] as const;
export type Lang = (typeof langs)[number];
/** A translated string. `en` is required; other languages fall back to it. */
export type L = Partial<Record<Lang, string>> & { en: string };

export const langLabels: Record<Lang, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  es: "Español",
};

export const langShort: Record<Lang, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
  it: "IT",
  es: "ES",
};

const STORAGE_KEY = "nube-lang";

export const dict: Record<string, L> = {
  "nav.menu": { en: "Menu", de: "Menü", fr: "Menu", it: "Menu", es: "Menú" },
  "nav.story": { en: "Story", de: "Story", fr: "Histoire", it: "Storia", es: "Historia" },
  "nav.visit": { en: "Visit", de: "Besuch", fr: "Visite", it: "Visita", es: "Visítanos" },
  "nav.findUs": { en: "Find Us", de: "Finde uns", fr: "Nous trouver", it: "Trovaci", es: "Encuéntranos" },
  "nav.language": { en: "Language", de: "Sprache", fr: "Langue", it: "Lingua", es: "Idioma" },

  "hero.eyebrow": {
    en: "Specialty coffee bar · Zürich",
    de: "Specialty Coffee Bar · Zürich",
    fr: "Bar à café de spécialité · Zurich",
    it: "Specialty coffee bar · Zurigo",
    es: "Cafetería de especialidad · Zúrich",
  },
  "hero.titleA": { en: "Your way into", de: "Dein Weg auf", fr: "Ton chemin vers", it: "La tua via verso", es: "Tu camino a" },
  "hero.titleB": { en: "cloud nine", de: "Wolke sieben", fr: "le septième ciel", it: "il settimo cielo", es: "el séptimo cielo" },
  "hero.body": {
    en: "Cold, clean, unhurried coffee. No syrup shortcuts, no rushed pours — every drink hand-poured to order in a room that feels a little like cloud nine.",
    de: "Kalt, klar, unaufgeregt. Keine Sirup-Abkürzungen, kein gehetztes Eingiessen — jedes Getränk wird frisch von Hand zubereitet, in einem Raum, der sich wie Wolke sieben anfühlt.",
    fr: "Un café froid, net, sans précipitation. Aucun sirop de raccourci, aucun service pressé — chaque boisson est préparée à la main, dans un lieu qui ressemble au septième ciel.",
    it: "Caffè freddo, pulito, senza fretta. Nessuna scorciatoia allo sciroppo, nessuna corsa — ogni drink è versato a mano su ordinazione, in uno spazio che sembra il settimo cielo.",
    es: "Café frío, limpio y sin prisas. Sin atajos de sirope ni servidos a la carrera — cada bebida se prepara a mano al momento, en un espacio que parece el séptimo cielo.",
  },
  "hero.cta": { en: "See the Menu", de: "Zum Menü", fr: "Voir le menu", it: "Vedi il menu", es: "Ver el menú" },

  "marq.1": {
    en: "Sip slower, made effortless",
    de: "Langsamer trinken, mühelos gemacht",
    fr: "Savourer plus lentement, sans effort",
    it: "Bevi più lentamente, senza sforzo",
    es: "Bebe más despacio, sin esfuerzo",
  },
  "marq.2": {
    en: "Hand-poured to order",
    de: "Von Hand frisch zubereitet",
    fr: "Versé à la main sur commande",
    it: "Versato a mano su ordinazione",
    es: "Servido a mano al momento",
  },
  "marq.3": { en: "No syrup shortcuts", de: "Keine Sirup-Abkürzungen", fr: "Aucun raccourci au sirop", it: "Nessuna scorciatoia allo sciroppo", es: "Sin atajos de sirope" },
  "marq.4": { en: "Your way into cloud nine", de: "Dein Weg auf Wolke sieben", fr: "Ton chemin vers le septième ciel", it: "La tua via verso il settimo cielo", es: "Tu camino al séptimo cielo" },
  "marq.5": {
    en: "Matcha whisked to order",
    de: "Matcha frisch aufgeschlagen",
    fr: "Matcha fouetté à la commande",
    it: "Matcha montato su ordinazione",
    es: "Matcha batido al momento",
  },

  "menu.eyebrow": { en: "The pour list", de: "Die Pour-Liste", fr: "La carte des pours", it: "La lista dei pour", es: "La lista de pours" },
  "menu.body": {
    en: "Nothing is pre-batched into a syrup. Every glass is layered when you order it at the counter. No app, no queue online — just come by.",
    de: "Nichts wird vorab zu Sirup verkocht. Jedes Glas wird beim Bestellen an der Theke geschichtet. Keine App, keine Online-Warteschlange — komm einfach vorbei.",
    fr: "Rien n'est préparé d'avance en sirop. Chaque verre est monté au comptoir quand tu commandes. Pas d'appli, pas de file en ligne — passe simplement nous voir.",
    it: "Niente è pre-preparato in sciroppo. Ogni bicchiere è stratificato al banco quando ordini. Nessuna app, nessuna coda online — passa e basta.",
    es: "Nada se prepara de antemano en sirope. Cada vaso se monta en la barra cuando lo pides. Sin app, sin cola online — solo pásate.",
  },
  "cat.matcha": { en: "Matcha", de: "Matcha", fr: "Matcha", it: "Matcha", es: "Matcha" },
  "cat.matcha.blurb": {
    en: "Ceremonial grade, whisked to order — layered over fruit or poured hot.",
    de: "Ceremonial Grade, frisch aufgeschlagen — über Früchten geschichtet oder heiss serviert.",
    fr: "Qualité cérémoniale, fouetté à la commande — en couches sur des fruits ou servi chaud.",
    it: "Grado ceremoniale, montato su ordinazione — a strati sulla frutta o versato caldo.",
    es: "Grado ceremonial, batido al momento — en capas sobre fruta o servido caliente.",
  },
  "cat.lattes": { en: "Lattes", de: "Lattes", fr: "Lattes", it: "Latte", es: "Lattes" },
  "cat.lattes.blurb": {
    en: "Cold, layered and sealed in the can — espresso the long way round.",
    de: "Kalt, geschichtet und in der Dose versiegelt — Espresso auf dem langen Weg.",
    fr: "Froids, en couches et scellés en canette — l'espresso par le chemin long.",
    it: "Freddi, a strati e sigillati nella lattina — espresso per la via lunga.",
    es: "Fríos, en capas y sellados en lata — el espresso por el camino largo.",
  },
  "cat.coffee": { en: "Coffee", de: "Kaffee", fr: "Café", it: "Caffè", es: "Café" },
  "cat.coffee.blurb": {
    en: "The warm side of the counter, served in the cup.",
    de: "Die warme Seite der Theke, in der Tasse serviert.",
    fr: "Le côté chaud du comptoir, servi en tasse.",
    it: "Il lato caldo del banco, servito in tazza.",
    es: "El lado cálido de la barra, servido en taza.",
  },
  "cat.shakes": { en: "Shakes", de: "Shakes", fr: "Shakes", it: "Shake", es: "Batidos" },
  "cat.shakes.blurb": {
    en: "Blended thick, caffeine-light — the easy end of the menu.",
    de: "Dick gemixt, koffeinarm — das leichte Ende der Karte.",
    fr: "Mixés épais, peu caféinés — le côté facile de la carte.",
    it: "Frullati densi, poca caffeina — il lato facile del menu.",
    es: "Batidos espesos, poca cafeína — el lado fácil de la carta.",
  },

  "story.eyebrow": { en: "Our story", de: "Unsere Story", fr: "Notre histoire", it: "La nostra storia", es: "Nuestra historia" },
  "story.titleA": { en: "Taking you to", de: "Wir bringen dich auf", fr: "On t'emmène au", it: "Ti portiamo al", es: "Te llevamos al" },
  "story.p1": {
    en: "nube is a specialty coffee bar in Zürich built around one idea: cold, clean, unhurried coffee. From single-origin cold brew to matcha whisked to order, every drink is hand-poured in a space lit by soft ice-blue and blush-pink light.",
    de: "nube ist eine Specialty Coffee Bar in Zürich mit einer Idee: kalter, klarer, unaufgeregter Kaffee. Von Single-Origin Cold Brew bis frisch aufgeschlagenem Matcha wird jedes Getränk von Hand zubereitet — in einem Raum aus eisblauem und zartrosa Licht.",
    fr: "nube est un bar à café de spécialité à Zurich bâti sur une idée : un café froid, net, sans hâte. Du cold brew single origin au matcha fouetté à la commande, chaque boisson est versée à la main dans une lumière bleu glace et rose poudré.",
    it: "nube è uno specialty coffee bar a Zurigo costruito su un'idea: caffè freddo, pulito, senza fretta. Dal cold brew single origin al matcha montato su ordinazione, ogni drink è versato a mano in una luce azzurro ghiaccio e rosa.",
    es: "nube es una cafetería de especialidad en Zúrich con una sola idea: café frío, limpio y sin prisas. Del cold brew de origen único al matcha batido al momento, cada bebida se sirve a mano bajo una luz azul hielo y rosa.",
  },
  "story.p2": {
    en: "We are not loud about it. Confident type, a lot of negative space, and every gesture behind the bar deliberate rather than fast. You will wait a little longer here — and you will taste it.",
    de: "Wir machen kein Getöse darum. Klare Typo, viel Weissraum und jede Bewegung hinter der Bar bewusst statt schnell. Du wartest hier etwas länger — und du wirst es schmecken.",
    fr: "Sans en faire du bruit. Une typo assumée, beaucoup d'espace, et chaque geste derrière le bar réfléchi plutôt que rapide. Tu attendras un peu plus — et tu le sentiras.",
    it: "Senza farne rumore. Un carattere sicuro, molto spazio bianco e ogni gesto dietro al banco pensato, non veloce. Aspetterai un po' di più — e lo sentirai.",
    es: "No hacemos ruido con ello. Tipografía segura, mucho espacio en blanco y cada gesto tras la barra pensado, no rápido. Esperarás un poco más — y lo notarás.",
  },
  "story.p1t": { en: "No syrup shortcuts", de: "Keine Sirup-Abkürzungen", fr: "Aucun raccourci au sirop", it: "Nessuna scorciatoia allo sciroppo", es: "Sin atajos de sirope" },
  "story.p1d": {
    en: "Sweetness comes from the bean and the milk, never from a pump bottle behind the counter.",
    de: "Süsse kommt aus der Bohne und der Milch, nie aus einer Pumpflasche hinter der Theke.",
    fr: "La douceur vient du grain et du lait, jamais d'un flacon-pompe derrière le comptoir.",
    it: "La dolcezza viene dal chicco e dal latte, mai da una bottiglia con pompetta.",
    es: "El dulzor viene del grano y de la leche, nunca de un bote con dosificador.",
  },
  "story.p2t": { en: "Poured to order", de: "Frisch zubereitet", fr: "Versé à la commande", it: "Versato su ordinazione", es: "Servido al momento" },
  "story.p2d": {
    en: "Nothing sits in a batch jug. Matcha is whisked, cold brew is drawn, cream is poured in front of you.",
    de: "Nichts steht in der Vorratskanne. Matcha wird aufgeschlagen, Cold Brew gezapft, Rahm vor dir eingegossen.",
    fr: "Rien ne dort dans un pichet. Le matcha est fouetté, le cold brew tiré, la crème versée devant toi.",
    it: "Niente resta in una brocca. Il matcha si monta, il cold brew si spilla, la panna si versa davanti a te.",
    es: "Nada espera en una jarra. El matcha se bate, el cold brew se tira y la nata se vierte ante ti.",
  },
  "story.p3t": { en: "Unhurried by design", de: "Bewusst unaufgeregt", fr: "Lent par choix", it: "Senza fretta, per scelta", es: "Sin prisa, a propósito" },
  "story.p3d": {
    en: "Forty seconds slower than the café next door. That difference is the entire point.",
    de: "Vierzig Sekunden langsamer als das Café nebenan. Genau dieser Unterschied ist der Punkt.",
    fr: "Quarante secondes plus lent que le café d'à côté. Toute l'idée est là.",
    it: "Quaranta secondi più lento del bar accanto. Quella differenza è tutto il senso.",
    es: "Cuarenta segundos más lento que el café de al lado. Esa diferencia es justo el punto.",
  },

  "drift.label": {
    en: "Drift through the room",
    de: "Treib durch den Raum",
    fr: "Dérive à travers la salle",
    it: "Lasciati andare nella sala",
    es: "Flota por el local",
  },

  "reviews.eyebrow": { en: "Google reviews", de: "Google Bewertungen", fr: "Avis Google", it: "Recensioni Google", es: "Reseñas de Google" },
  "reviews.from": { en: "from", de: "aus", fr: "sur", it: "su", es: "de" },
  "reviews.ratings": { en: "ratings", de: "Bewertungen", fr: "avis", it: "recensioni", es: "valoraciones" },
  "reviews.cta": { en: "Read on Google", de: "Auf Google lesen", fr: "Lire sur Google", it: "Leggi su Google", es: "Leer en Google" },

  "footer.tagline": {
    en: "Cold, clean, unhurried coffee in Zürich. Sip slower, made effortless.",
    de: "Kalter, klarer, unaufgeregter Kaffee in Zürich. Langsamer trinken, mühelos gemacht.",
    fr: "Un café froid, net et sans hâte à Zurich. Savourer plus lentement, sans effort.",
    it: "Caffè freddo, pulito e senza fretta a Zurigo. Bevi più lentamente, senza sforzo.",
    es: "Café frío, limpio y sin prisas en Zúrich. Bebe más despacio, sin esfuerzo.",
  },
  "footer.visit": { en: "Visit", de: "Besuch", fr: "Visite", it: "Visita", es: "Visítanos" },
  "footer.hours": { en: "Hours", de: "Öffnungszeiten", fr: "Horaires", it: "Orari", es: "Horario" },
  "footer.weekdays": { en: "Mon — Sat", de: "Mo — Sa", fr: "Lun — Sam", it: "Lun — Sab", es: "Lun — Sáb" },
  "footer.sunday": { en: "Sunday", de: "Sonntag", fr: "Dimanche", it: "Domenica", es: "Domingo" },
  "footer.closed": { en: "Closed", de: "Geschlossen", fr: "Fermé", it: "Chiuso", es: "Cerrado" },
  "footer.art": {
    en: "Drawn in-house",
    de: "Hausgemachte Zeichnungen",
    fr: "Dessiné en interne",
    it: "Disegnato in casa",
    es: "Dibujado en casa",
  },
  "footer.area": {
    en: "Old town · 2 min from Bellevue",
    de: "Altstadt · 2 Min. vom Bellevue",
    fr: "Vieille ville · 2 min du Bellevue",
    it: "Centro storico · 2 min dal Bellevue",
    es: "Casco antiguo · 2 min de Bellevue",
  },

  "location.city": { en: "Zürich, Switzerland", de: "Zürich, Schweiz", fr: "Zurich, Suisse", it: "Zurigo, Svizzera", es: "Zúrich, Suiza" },

  "legal.impressum": { en: "Imprint", de: "Impressum", fr: "Mentions légales", it: "Note legali", es: "Aviso legal" },
  "legal.privacy": { en: "Privacy", de: "Datenschutz", fr: "Confidentialité", it: "Privacy", es: "Privacidad" },
  "legal.back": { en: "Back to home", de: "Zurück zur Startseite", fr: "Retour à l'accueil", it: "Torna alla home", es: "Volver al inicio" },
  "legal.reviewNote": {
    en: "Please review and complete this page with your real company details.",
    de: "Bitte prüfe und ergänze diese Angaben mit deinen echten Firmendaten.",
    fr: "Merci de vérifier et compléter cette page avec vos données réelles.",
    it: "Verifica e completa questa pagina con i dati reali dell'azienda.",
    es: "Revisa y completa esta página con los datos reales de la empresa.",
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
  const [lang, setLangState] = useState<Lang>("en");

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
      t: (key) => dict[key]?.[lang] ?? dict[key]?.en ?? key,
      tl: (v) => v[lang] ?? v.en,
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
