import icedLatteAsset from "@/assets/iced-latte.jpg.asset.json";
import saltedCaramelBananaAsset from "@/assets/salted-caramel-banana.jpg.asset.json";
import blueberryLatteAsset from "@/assets/blueberry-latte.jpg.asset.json";
import icedMatchaLatteAsset from "@/assets/iced-matcha-latte.jpg.asset.json";
import strawberryMatchaAsset from "@/assets/strawberry-matcha.jpg.asset.json";
import blueberryMatchaAsset from "@/assets/blueberry-matcha.jpg.asset.json";
import mangoMatchaAsset from "@/assets/mango-matcha.jpg.asset.json";
import saltedCaramelBananaMatchaAsset from "@/assets/salted-caramel-banana-matcha.jpg.asset.json";
import kidsMatchaAsset from "@/assets/kids-matcha.jpg.asset.json";
import mangoShakeAsset from "@/assets/mango-shake.jpg.asset.json";
import cappuccinoAsset from "@/assets/cappuccino.png.asset.json";
import flatWhiteAsset from "@/assets/flat-white.png.asset.json";
import caffeLatteAsset from "@/assets/caffe-latte.png.asset.json";
import latteMacchiatoAsset from "@/assets/latte-macchiato.png.asset.json";
import mochaAsset from "@/assets/mocha.png.asset.json";
import filterCoffeeAsset from "@/assets/filter-coffee.png.asset.json";
import hotMatchaLatteAsset from "@/assets/hot-matcha-latte.png.asset.json";
import espressoAsset from "@/assets/espresso.jpg.asset.json";
import espressoDoppioAsset from "@/assets/espresso-doppio.jpg.asset.json";
import type { L } from "@/i18n";

export type Drink = {
  id: string;
  name: string;
  jp: string;
  blurb: L;
  image: string;
  /** Cut-out photo that should float without a photo frame. */
  floating?: boolean;
  size: string;
  tags: string[];
};

export type MenuCategory = {
  id: string;
  label: L;
  note: L;
  drinks: Drink[];
};

export const menu: MenuCategory[] = [
  {
    id: "matcha",
    label: { de: "Matcha", en: "Matcha", fr: "Matcha", it: "Matcha" },
    note: {
      de: "Ceremonial Grade, frisch aufgeschlagen",
      en: "Ceremonial grade, whisked to order",
      fr: "Qualité cérémonielle, fouetté à la commande",
      it: "Ceremonial grade, montato al momento",
    },
    drinks: [
      {
        id: "iced-matcha-latte",
        name: "Iced Matcha Latte",
        jp: "抹茶ラテ",
        blurb: {
          de: "Ceremonial Grade Uji-Matcha auf kalter Milch — unser Klassiker.",
          en: "Ceremonial grade Uji matcha over cold milk — our classic.",
          fr: "Matcha Uji de qualité cérémonielle sur lait froid — notre classique.",
          it: "Matcha Uji ceremonial grade su latte freddo — il nostro classico.",
        },
        image: icedMatchaLatteAsset.url,
        size: "400 ml",
        tags: ["tag.veganOption", "tag.signature"],
      },
      {
        id: "strawberry-matcha",
        name: "Strawberry Matcha",
        jp: "いちご抹茶",
        blurb: {
          de: "Echtes Erdbeerpüree, geschichtet unter Matcha und seidiger Milch.",
          en: "Real strawberry purée layered under matcha and silky milk.",
          fr: "Purée de fraises sous une couche de matcha et de lait soyeux.",
          it: "Purea di fragole sotto matcha e latte setoso.",
        },
        image: strawberryMatchaAsset.url,
        size: "400 ml",
        tags: ["tag.veganOption", "tag.fruit"],
      },
      {
        id: "blueberry-matcha",
        name: "Blueberry Matcha",
        jp: "ブルーベリー抹茶",
        blurb: {
          de: "Blaubeer-Compote unter tiefgrünem Matcha und kalter Milch.",
          en: "Blueberry compote beneath deep-green matcha and cold milk.",
          fr: "Compote de myrtilles sous un matcha vert profond et du lait froid.",
          it: "Composta di mirtilli sotto matcha verde intenso e latte freddo.",
        },
        image: blueberryMatchaAsset.url,
        size: "400 ml",
        tags: ["tag.veganOption", "tag.fruit"],
      },
      {
        id: "mango-matcha",
        name: "Mango Matcha",
        jp: "マンゴー抹茶",
        blurb: {
          de: "Reifes Mangopüree, Milch und Matcha — tropisch und grasfrisch.",
          en: "Ripe mango purée, milk and matcha — tropical and grassy.",
          fr: "Purée de mangue mûre, lait et matcha — tropical et végétal.",
          it: "Purea di mango maturo, latte e matcha — tropicale e vegetale.",
        },
        image: mangoMatchaAsset.url,
        size: "400 ml",
        tags: ["tag.veganOption", "tag.fruit"],
      },
      {
        id: "salted-caramel-banana-matcha",
        name: "Salted Caramel Banana Matcha",
        jp: "塩キャラメルバナナ抹茶",
        blurb: {
          de: "Salzkaramell und Banane treffen auf kräftigen Matcha.",
          en: "Salted caramel and banana meeting bold matcha.",
          fr: "Caramel salé et banane rencontrent un matcha puissant.",
          it: "Caramello salato e banana incontrano un matcha intenso.",
        },
        image: saltedCaramelBananaMatchaAsset.url,
        size: "400 ml",
        tags: ["tag.signature", "tag.veganOption"],
      },
      {
        id: "kids-matcha",
        name: "Kids Matcha",
        jp: "キッズ抹茶",
        blurb: {
          de: "Koffeinfreie, milde Version für die Kleinen — bunt geschichtet.",
          en: "A caffeine-free, gentle layered version for the little ones.",
          fr: "Version douce et sans caféine pour les enfants.",
          it: "Versione delicata e senza caffeina per i più piccoli.",
        },
        image: kidsMatchaAsset.url,
        size: "300 ml",
        tags: ["tag.caffeineFree", "tag.veganOption"],
      },
      {
        id: "hot-matcha-latte",
        name: "Hot Matcha Latte",
        jp: "ホット抹茶ラテ",
        blurb: {
          de: "Warm aufgeschlagener Matcha mit samtigem Milchschaum und Latte Art.",
          en: "Warm whisked matcha with velvety microfoam and latte art.",
          fr: "Matcha fouetté chaud, mousse velouté et latte art.",
          it: "Matcha caldo montato, microschiuma vellutata e latte art.",
        },
        image: hotMatchaLatteAsset.url,
        floating: true,
        size: "300 ml",
        tags: ["tag.warm", "tag.veganOption"],
      },
    ],
  },
  {
    id: "hot",
    label: {
      de: "Heisse Klassiker",
      en: "Hot classics",
      fr: "Classiques chauds",
      it: "Classici caldi",
    },
    note: {
      de: "Im nube Cup, mit Latte Art",
      en: "In the nube cup, with latte art",
      fr: "Dans le gobelet nube, avec latte art",
      it: "Nel bicchiere nube, con latte art",
    },
    drinks: [
      {
        id: "espresso",
        name: "Espresso",
        jp: "エスプレッソ",
        blurb: {
          de: "Ein Shot Specialty Espresso mit dichter, karamellfarbener Crema.",
          en: "A single specialty shot with a dense, caramel-coloured crema.",
          fr: "Un shot de spécialité, crema dense et caramel.",
          it: "Un singolo shot specialty con crema densa e caramellata.",
        },
        image: espressoAsset.url,
        size: "30 ml",
        tags: ["tag.warm", "tag.sugarFree"],
      },
      {
        id: "espresso-doppio",
        name: "Espresso Doppio",
        jp: "ドッピオ",
        blurb: {
          de: "Doppelter Espresso — voller Körper, langer Schokoabgang.",
          en: "Double espresso — full body, long chocolate finish.",
          fr: "Double espresso — corps plein, finale cacaotée.",
          it: "Doppio espresso — corpo pieno, finale di cacao.",
        },
        image: espressoDoppioAsset.url,
        size: "60 ml",
        tags: ["tag.warm", "tag.sugarFree"],
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        jp: "カプチーノ",
        blurb: {
          de: "Espresso unter dichtem Milchschaum — cremig, klassisch, mit Herz.",
          en: "Espresso under dense microfoam — creamy, classic, heart on top.",
          fr: "Espresso sous une mousse dense — crémeux et classique.",
          it: "Espresso sotto microschiuma densa — cremoso e classico.",
        },
        image: cappuccinoAsset.url,
        floating: true,
        size: "200 ml",
        tags: ["tag.warm", "tag.veganOption"],
      },
      {
        id: "flat-white",
        name: "Flat White",
        jp: "フラットホワイト",
        blurb: {
          de: "Doppelter Ristretto mit feiner Mikroschaum-Milch — intensiv und rund.",
          en: "Double ristretto with silky microfoam — intense and round.",
          fr: "Double ristretto et microfoam soyeux — intense et rond.",
          it: "Doppio ristretto con microschiuma setosa — intenso e rotondo.",
        },
        image: flatWhiteAsset.url,
        floating: true,
        size: "220 ml",
        tags: ["tag.warm", "tag.veganOption", "tag.signature"],
      },
      {
        id: "caffe-latte",
        name: "Caffè Latte",
        jp: "カフェラテ",
        blurb: {
          de: "Viel warme Milch, ein sanfter Espresso — der milde Alltagsbegleiter.",
          en: "Plenty of warm milk, a gentle espresso — the mild everyday cup.",
          fr: "Beaucoup de lait chaud, un espresso doux — la tasse du quotidien.",
          it: "Tanto latte caldo e un espresso delicato — la tazza di ogni giorno.",
        },
        image: caffeLatteAsset.url,
        floating: true,
        size: "300 ml",
        tags: ["tag.warm", "tag.veganOption"],
      },
      {
        id: "latte-macchiato",
        name: "Latte Macchiato",
        jp: "ラテマキアート",
        blurb: {
          de: "Geschichtet: warme Milch, Schaum und ein Espresso obendrauf.",
          en: "Layered: warm milk, foam and an espresso poured on top.",
          fr: "En couches : lait chaud, mousse et espresso versé dessus.",
          it: "A strati: latte caldo, schiuma ed espresso versato sopra.",
        },
        image: latteMacchiatoAsset.url,
        floating: true,
        size: "300 ml",
        tags: ["tag.warm", "tag.veganOption"],
      },
      {
        id: "mocha",
        name: "Mocha",
        jp: "モカ",
        blurb: {
          de: "Espresso, Schokolade und Milch — Dessert im Becher.",
          en: "Espresso, chocolate and milk — dessert in a cup.",
          fr: "Espresso, chocolat et lait — un dessert en tasse.",
          it: "Espresso, cioccolato e latte — dessert in tazza.",
        },
        image: mochaAsset.url,
        floating: true,
        size: "300 ml",
        tags: ["tag.warm", "tag.signature"],
      },
      {
        id: "filter-coffee",
        name: "Filter Coffee",
        jp: "フィルターコーヒー",
        blurb: {
          de: "Handgefiltert, klar und aromatisch — Single Origin des Monats.",
          en: "Hand-brewed, clean and aromatic — single origin of the month.",
          fr: "Filtré à la main, net et aromatique — single origin du mois.",
          it: "Filtro a mano, pulito e aromatico — single origin del mese.",
        },
        image: filterCoffeeAsset.url,
        floating: true,
        size: "300 ml",
        tags: ["tag.warm", "tag.sugarFree"],
      },
    ],
  },
  {
    id: "coffee",
    label: {
      de: "Iced Coffee",
      en: "Iced coffee",
      fr: "Cafés glacés",
      it: "Caffè freddi",
    },
    note: {
      de: "Specialty Beans, in der Schweiz geröstet",
      en: "Specialty beans, roasted in Switzerland",
      fr: "Grains de spécialité, torréfiés en Suisse",
      it: "Chicchi specialty, torrefatti in Svizzera",
    },
    drinks: [
      {
        id: "iced-latte",
        name: "Iced Latte",
        jp: "アイスラテ",
        blurb: {
          de: "Doppelter Espresso auf kalte Milch — klar, süss, endlos trinkbar.",
          en: "Double espresso poured over cold milk — clean and endlessly drinkable.",
          fr: "Double espresso sur lait froid — net et irrésistible.",
          it: "Doppio espresso su latte freddo — pulito e bevibilissimo.",
        },
        image: icedLatteAsset.url,
        size: "400 ml",
        tags: ["tag.veganOption"],
      },
      {
        id: "salted-caramel-banana",
        name: "Salted Caramel Banana",
        jp: "塩キャラメルバナナ",
        blurb: {
          de: "Espresso, Banane und Salzkaramell-Drizzle in Schichten.",
          en: "Espresso, banana and a salted caramel drizzle, layered.",
          fr: "Espresso, banane et filet de caramel salé, en couches.",
          it: "Espresso, banana e colata di caramello salato, a strati.",
        },
        image: saltedCaramelBananaAsset.url,
        size: "400 ml",
        tags: ["tag.signature", "tag.veganOption"],
      },
      {
        id: "blueberry-latte",
        name: "Blueberry Latte",
        jp: "ブルーベリーラテ",
        blurb: {
          de: "Blaubeer-Compote unter Milch und Espresso — fruchtig und rund.",
          en: "Blueberry compote under milk and espresso — fruity and round.",
          fr: "Compote de myrtilles sous lait et espresso — fruité et rond.",
          it: "Composta di mirtilli sotto latte ed espresso — fruttato e rotondo.",
        },
        image: blueberryLatteAsset.url,
        size: "400 ml",
        tags: ["tag.fruit", "tag.veganOption"],
      },
    ],
  },
  {
    id: "shakes",
    label: { de: "Shakes", en: "Shakes", fr: "Shakes", it: "Shake" },
    note: {
      de: "Echte Früchte, cremig geshaked",
      en: "Real fruit, shaken creamy",
      fr: "Fruits véritables, texture crémeuse",
      it: "Frutta vera, cremosa e shakerata",
    },
    drinks: [
      {
        id: "mango-shake",
        name: "Mango Shake",
        jp: "マンゴーシェイク",
        blurb: {
          de: "Cremiger Mango-Shake mit marmorierter Milch — pure Sonne.",
          en: "Creamy mango shake marbled with milk — pure sunshine.",
          fr: "Shake à la mangue marbré de lait — plein soleil.",
          it: "Shake al mango marmorizzato con latte — pura estate.",
        },
        image: mangoShakeAsset.url,
        size: "400 ml",
        tags: ["tag.caffeineFree", "tag.fruit"],
      },
    ],
  },
];

export const allDrinks: Drink[] = menu.flatMap((c) => c.drinks);
