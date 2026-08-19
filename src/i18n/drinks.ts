import type { L } from "@/i18n";

/**
 * Menu copy in every supported language, keyed by drink id.
 * `drink.<id>.tag` = tagline, `.notes` = ingredient line, `.story` = origin blurb.
 */
export const drinkDict: Record<string, L> = {
  "temp.Cold": { en: "Cold", de: "Kalt", fr: "Froid", it: "Freddo", es: "Frío" },
  "temp.Poured": { en: "Poured", de: "Gegossen", fr: "Versé", it: "Versato", es: "Servido" },
  "temp.Blended": { en: "Blended", de: "Gemixt", fr: "Mixé", it: "Frullato", es: "Batido" },
  "temp.Hot": { en: "Hot", de: "Heiss", fr: "Chaud", it: "Caldo", es: "Caliente" },

  "drink.iced-latte.tag": { en: "Our house pour", de: "Unser Hauswurf", fr: "Notre signature", it: "Il nostro classico", es: "Nuestro clásico" },
  "drink.iced-latte.notes": { en: "Espresso · cold milk · clear ice", de: "Espresso · kalte Milch · klares Eis", fr: "Espresso · lait froid · glace claire", it: "Espresso · latte freddo · ghiaccio limpido", es: "Espresso · leche fría · hielo claro" },
  "drink.iced-latte.story": {
    en: "The first thing we ever poured. A Zürich summer, a fridge full of clear ice, and one shot pulled slow enough to keep its sweetness.",
    de: "Das Erste, das wir je eingegossen haben. Ein Zürcher Sommer, ein Kühlschrank voll klarem Eis und ein Shot, langsam genug gezogen für seine Süsse.",
    fr: "Notre toute première boisson. Un été zurichois, un frigo plein de glace claire et un shot tiré assez lentement pour garder sa douceur.",
    it: "La prima cosa che abbiamo mai versato. Un'estate a Zurigo, un frigo pieno di ghiaccio limpido e uno shot estratto lento per restare dolce.",
    es: "Lo primero que servimos. Un verano en Zúrich, una nevera llena de hielo claro y un shot extraído despacio para guardar su dulzor.",
  },

  "drink.matcha-latte.tag": { en: "Whisked to order", de: "Frisch aufgeschlagen", fr: "Fouetté à la commande", it: "Montato su ordinazione", es: "Batido al momento" },
  "drink.matcha-latte.notes": { en: "Ceremonial matcha · cold milk", de: "Ceremonial Matcha · kalte Milch", fr: "Matcha cérémonial · lait froid", it: "Matcha ceremoniale · latte freddo", es: "Matcha ceremonial · leche fría" },
  "drink.matcha-latte.story": {
    en: "Borrowed from a quiet Kyoto tea room where nobody spoke while the whisk moved. We kept the silence and added cold milk.",
    de: "Geborgt aus einem stillen Teehaus in Kyoto, wo niemand sprach, während der Besen lief. Wir behielten die Stille und gossen kalte Milch dazu.",
    fr: "Emprunté à un salon de thé de Kyoto où personne ne parlait pendant que le fouet tournait. On a gardé le silence et ajouté du lait froid.",
    it: "Preso da una sala da tè di Kyoto dove nessuno parlava mentre il frullino girava. Abbiamo tenuto il silenzio e aggiunto latte freddo.",
    es: "Tomado de una sala de té de Kioto donde nadie hablaba mientras batían. Guardamos el silencio y añadimos leche fría.",
  },

  "drink.strawberry-matcha.tag": { en: "Five layers, one straw", de: "Fünf Schichten, ein Strohhalm", fr: "Cinq couches, une paille", it: "Cinque strati, una cannuccia", es: "Cinco capas, una pajita" },
  "drink.strawberry-matcha.notes": { en: "Crushed strawberry · milk · matcha", de: "Zerdrückte Erdbeere · Milch · Matcha", fr: "Fraise écrasée · lait · matcha", it: "Fragola schiacciata · latte · matcha", es: "Fresa machacada · leche · matcha" },
  "drink.strawberry-matcha.story": {
    en: "Built one June from market strawberries that were too ripe to sell. Crushed, layered, and gone by the afternoon.",
    de: "Entstand im Juni aus Marktbeeren, die zu reif zum Verkaufen waren. Zerdrückt, geschichtet und bis zum Nachmittag ausverkauft.",
    fr: "Née un juin de fraises du marché trop mûres pour la vente. Écrasées, superposées, épuisées avant l'après-midi.",
    it: "Nata a giugno da fragole del mercato troppo mature per la vendita. Schiacciate, stratificate ed esaurite entro il pomeriggio.",
    es: "Nació un junio con fresas del mercado demasiado maduras para vender. Machacadas, en capas y agotadas por la tarde.",
  },

  "drink.blueberry-matcha.tag": { en: "Deep purple into green", de: "Tiefes Violett in Grün", fr: "Violet profond sur vert", it: "Viola profondo nel verde", es: "Violeta profundo en verde" },
  "drink.blueberry-matcha.notes": { en: "Blueberry compote · milk · matcha", de: "Blaubeerkompott · Milch · Matcha", fr: "Compote de myrtille · lait · matcha", it: "Composta di mirtilli · latte · matcha", es: "Compota de arándano · leche · matcha" },
  "drink.blueberry-matcha.story": {
    en: "Inspired by dusk over the lake — deep purple sinking into green. We stopped stirring it once we saw the colour.",
    de: "Inspiriert von der Dämmerung über dem See — tiefes Violett, das in Grün sinkt. Wir hörten auf zu rühren, als wir die Farbe sahen.",
    fr: "Inspirée du crépuscule sur le lac — violet profond glissant dans le vert. On a cessé de mélanger en voyant la couleur.",
    it: "Ispirata al crepuscolo sul lago — viola profondo che scende nel verde. Abbiamo smesso di mescolare appena visto il colore.",
    es: "Inspirada en el atardecer sobre el lago — violeta profundo cayendo en verde. Dejamos de removerla al ver el color.",
  },

  "drink.mango-matcha.tag": { en: "Sunrise in a glass", de: "Sonnenaufgang im Glas", fr: "Un lever de soleil en verre", it: "Un'alba nel bicchiere", es: "Un amanecer en vaso" },
  "drink.mango-matcha.notes": { en: "Mango purée · milk · matcha", de: "Mangopüree · Milch · Matcha", fr: "Purée de mangue · lait · matcha", it: "Purea di mango · latte · matcha", es: "Puré de mango · leche · matcha" },
  "drink.mango-matcha.story": {
    en: "A sunrise drink. Mango purée at the bottom so the first sip is bright and the last one is grassy and calm.",
    de: "Ein Sonnenaufgangs-Drink. Mangopüree unten, damit der erste Schluck hell und der letzte grasig und ruhig ist.",
    fr: "Une boisson d'aube. La purée de mangue au fond : première gorgée éclatante, dernière herbacée et calme.",
    it: "Un drink all'alba. Purea di mango sul fondo: il primo sorso è vivo, l'ultimo erbaceo e calmo.",
    es: "Una bebida de amanecer. El puré de mango al fondo: el primer sorbo brilla, el último es herbal y calmado.",
  },

  "drink.blueberry-latte.tag": { en: "Coffee, but fruit-forward", de: "Kaffee, aber fruchtbetont", fr: "Le café, version fruitée", it: "Caffè, ma fruttato", es: "Café, pero frutal" },
  "drink.blueberry-latte.notes": { en: "Blueberry compote · milk · espresso", de: "Blaubeerkompott · Milch · Espresso", fr: "Compote de myrtille · lait · espresso", it: "Composta di mirtilli · latte · espresso", es: "Compota de arándano · leche · espresso" },
  "drink.blueberry-latte.story": {
    en: "Someone asked for the blueberry compote in a coffee instead. We said no once, then tried it and changed the menu.",
    de: "Jemand wollte das Blaubeerkompott im Kaffee. Wir sagten einmal Nein, probierten es und änderten die Karte.",
    fr: "Quelqu'un a voulu la compote de myrtille dans un café. On a dit non une fois, puis goûté, puis changé la carte.",
    it: "Qualcuno ha chiesto la composta di mirtilli nel caffè. Prima no, poi l'abbiamo provata e cambiato il menu.",
    es: "Alguien pidió la compota de arándano en un café. Dijimos no una vez, lo probamos y cambiamos la carta.",
  },

  "drink.salted-caramel-banana.tag": { en: "Caramel down the glass", de: "Karamell am Glas hinunter", fr: "Caramel le long du verre", it: "Caramello lungo il bicchiere", es: "Caramelo por el vaso" },
  "drink.salted-caramel-banana.notes": { en: "Salted caramel · banana · espresso", de: "Salzkaramell · Banane · Espresso", fr: "Caramel salé · banane · espresso", it: "Caramello salato · banana · espresso", es: "Caramelo salado · plátano · espresso" },
  "drink.salted-caramel-banana.story": {
    en: "Made from a late-shift snack: banana, salt, and the caramel we drizzle down the inside of the glass on purpose.",
    de: "Aus einem Spätschicht-Snack: Banane, Salz und das Karamell, das wir absichtlich am Glasrand hinunterlaufen lassen.",
    fr: "Née d'un en-cas de fin de service : banane, sel et ce caramel qu'on fait couler exprès dans le verre.",
    it: "Nata da uno snack di fine turno: banana, sale e il caramello che facciamo scendere di proposito nel bicchiere.",
    es: "Nació de un snack de cierre: plátano, sal y el caramelo que dejamos caer a propósito por el vaso.",
  },

  "drink.salted-caramel-banana-matcha.tag": { en: "The one people come back for", de: "Der Grund zum Wiederkommen", fr: "Celle pour laquelle on revient", it: "Quello per cui si torna", es: "El motivo para volver" },
  "drink.salted-caramel-banana-matcha.notes": { en: "Salted caramel · banana · matcha", de: "Salzkaramell · Banane · Matcha", fr: "Caramel salé · banane · matcha", it: "Caramello salato · banana · matcha", es: "Caramelo salado · plátano · matcha" },
  "drink.salted-caramel-banana-matcha.story": {
    en: "The accident that stuck. A caramel banana poured over matcha by mistake — now the one regulars order by name.",
    de: "Der Zufall, der blieb. Karamell-Banane versehentlich über Matcha gegossen — heute die Bestellung der Stammgäste.",
    fr: "L'accident devenu classique. Caramel-banane versé par erreur sur du matcha — aujourd'hui commandé par son nom.",
    it: "L'errore che è rimasto. Caramello e banana versati per sbaglio sul matcha — ora l'ordine degli habitué.",
    es: "El accidente que se quedó. Caramelo y plátano vertidos por error sobre matcha — hoy el favorito de los clientes.",
  },

  "drink.mango-shake.tag": { en: "Blended thick, no coffee", de: "Dick gemixt, ohne Kaffee", fr: "Mixé épais, sans café", it: "Frullato denso, senza caffè", es: "Batido espeso, sin café" },
  "drink.mango-shake.notes": { en: "Ripe mango · milk · a little ice", de: "Reife Mango · Milch · wenig Eis", fr: "Mangue mûre · lait · un peu de glace", it: "Mango maturo · latte · poco ghiaccio", es: "Mango maduro · leche · algo de hielo" },
  "drink.mango-shake.story": {
    en: "Holiday drink energy, no coffee at all. Ripe mango, milk, barely any ice, blended thick enough to hold a straw.",
    de: "Ferienstimmung im Glas, ganz ohne Kaffee. Reife Mango, Milch, kaum Eis — so dick, dass der Strohhalm steht.",
    fr: "Une énergie de vacances, sans café. Mangue mûre, lait, presque pas de glace, assez épais pour tenir la paille.",
    it: "Energia da vacanza, senza caffè. Mango maturo, latte, quasi niente ghiaccio, denso da tenere la cannuccia.",
    es: "Energía de vacaciones, sin café. Mango maduro, leche, casi sin hielo, tan espeso que sostiene la pajita.",
  },

  "drink.kids-matcha.tag": { en: "Caffeine-light, small glass", de: "Koffeinarm, kleines Glas", fr: "Peu caféiné, petit verre", it: "Poca caffeina, bicchiere piccolo", es: "Poca cafeína, vaso pequeño" },
  "drink.kids-matcha.notes": { en: "Mild matcha · lots of milk · fruit", de: "Milder Matcha · viel Milch · Frucht", fr: "Matcha doux · beaucoup de lait · fruit", it: "Matcha delicato · molto latte · frutta", es: "Matcha suave · mucha leche · fruta" },
  "drink.kids-matcha.story": {
    en: "For the smallest guests on Kirchgasse. Mild matcha, mostly milk, a little fruit — so they get their own cloud too.",
    de: "Für die kleinsten Gäste an der Kirchgasse. Milder Matcha, viel Milch, etwas Frucht — auch sie bekommen ihre Wolke.",
    fr: "Pour les plus petits de la Kirchgasse. Matcha doux, surtout du lait, un peu de fruit — leur nuage à eux.",
    it: "Per gli ospiti più piccoli di Kirchgasse. Matcha delicato, molto latte, un po' di frutta — anche loro hanno la loro nuvola.",
    es: "Para los más pequeños de Kirchgasse. Matcha suave, mucha leche, algo de fruta — su propia nube.",
  },

  "drink.hot-matcha-latte.tag": { en: "Whisked, then steamed", de: "Aufgeschlagen, dann aufgeschäumt", fr: "Fouetté, puis vapeur", it: "Montato, poi vaporizzato", es: "Batido y luego vaporizado" },
  "drink.hot-matcha-latte.notes": { en: "Ceremonial matcha · steamed milk", de: "Ceremonial Matcha · aufgeschäumte Milch", fr: "Matcha cérémonial · lait vapeur", it: "Matcha ceremoniale · latte vaporizzato", es: "Matcha ceremonial · leche vaporizada" },

  "drink.cappuccino.tag": { en: "Dense, velvet foam", de: "Dichter Samtschaum", fr: "Mousse dense et velours", it: "Schiuma densa e vellutata", es: "Espuma densa y de terciopelo" },
  "drink.cappuccino.notes": { en: "Double espresso · steamed milk", de: "Doppelter Espresso · aufgeschäumte Milch", fr: "Double espresso · lait vapeur", it: "Espresso doppio · latte vaporizzato", es: "Espresso doble · leche vaporizada" },

  "drink.flat-white.tag": { en: "Coffee-forward, silky", de: "Kaffeebetont, seidig", fr: "Café marqué, soyeux", it: "Caffè in primo piano, setoso", es: "Café marcado, sedoso" },
  "drink.flat-white.notes": { en: "Double ristretto · microfoam", de: "Doppelter Ristretto · Mikroschaum", fr: "Double ristretto · micromousse", it: "Ristretto doppio · microschiuma", es: "Ristretto doble · microespuma" },

  "drink.caffe-latte.tag": { en: "The gentle one", de: "Der Sanfte", fr: "Le tout doux", it: "Il più delicato", es: "El suave" },
  "drink.caffe-latte.notes": { en: "Espresso · lots of steamed milk", de: "Espresso · viel aufgeschäumte Milch", fr: "Espresso · beaucoup de lait vapeur", it: "Espresso · molto latte vaporizzato", es: "Espresso · mucha leche vaporizada" },

  "drink.latte-macchiato.tag": { en: "Three clean layers", de: "Drei klare Schichten", fr: "Trois couches nettes", it: "Tre strati puliti", es: "Tres capas limpias" },
  "drink.latte-macchiato.notes": { en: "Milk · espresso · foam", de: "Milch · Espresso · Schaum", fr: "Lait · espresso · mousse", it: "Latte · espresso · schiuma", es: "Leche · espresso · espuma" },

  "drink.mocha.tag": { en: "Chocolate, not syrup", de: "Schokolade, kein Sirup", fr: "Du chocolat, pas du sirop", it: "Cioccolato, non sciroppo", es: "Chocolate, no sirope" },
  "drink.mocha.notes": { en: "Espresso · cocoa · steamed milk", de: "Espresso · Kakao · aufgeschäumte Milch", fr: "Espresso · cacao · lait vapeur", it: "Espresso · cacao · latte vaporizzato", es: "Espresso · cacao · leche vaporizada" },

  "drink.filter-coffee.tag": { en: "Single origin, brewed clear", de: "Single Origin, klar gebrüht", fr: "Single origin, infusé net", it: "Single origin, estratto pulito", es: "Origen único, limpio" },
  "drink.filter-coffee.notes": { en: "Hand-brewed · no milk", de: "Von Hand gebrüht · ohne Milch", fr: "Infusé à la main · sans lait", it: "Preparato a mano · senza latte", es: "Preparado a mano · sin leche" },

  "drink.espresso.tag": { en: "One short shot", de: "Ein kurzer Shot", fr: "Un shot court", it: "Uno shot corto", es: "Un shot corto" },
  "drink.espresso.notes": { en: "Single origin · 25 ml", de: "Single Origin · 25 ml", fr: "Single origin · 25 ml", it: "Single origin · 25 ml", es: "Origen único · 25 ml" },

  "drink.espresso-doppio.tag": { en: "Twice, for the day", de: "Doppelt, für den Tag", fr: "Double, pour la journée", it: "Doppio, per la giornata", es: "Doble, para el día" },
  "drink.espresso-doppio.notes": { en: "Double shot · 50 ml", de: "Doppelter Shot · 50 ml", fr: "Double shot · 50 ml", it: "Shot doppio · 50 ml", es: "Shot doble · 50 ml" },
};
