import matchaLatte from "@/assets/drink-matcha-latte.jpg";
import strawberryMatcha from "@/assets/drink-strawberry-matcha.jpg";
import icedLatte from "@/assets/drink-iced-latte.jpg";
import coldBrew from "@/assets/drink-cold-brew.jpg";
import yuzuRefresher from "@/assets/drink-yuzu-refresher.jpg";
import blueLemonade from "@/assets/drink-blue-lemonade.jpg";
import cakeInACan from "@/assets/drink-cake-in-a-can.jpg";
import tamagoSando from "@/assets/food-tamago-sando.jpg";
import onigiri from "@/assets/food-onigiri.jpg";
import pastry from "@/assets/food-pastry.jpg";
import matchaCheesecake from "@/assets/food-matcha-cheesecake.jpg";
import type { L } from "@/i18n";

export type Nutrition = {
  calories: number;
  protein: number;
  carbs: number;
  sugar: number;
  fat: number;
  caffeine: number;
};

export type Drink = {
  id: string;
  name: string;
  jp: string;
  price: string;
  blurb: L;
  image: string;
  size: string;
  tags: string[];
  nutrition: Nutrition;
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
        id: "matcha-latte",
        name: "Cloud Matcha Latte",
        jp: "抹茶ラテ",
        price: "CHF 7.50",
        blurb: {
          de: "Ceremonial Grade Uji-Matcha auf kalter Milch mit einem Hauch Rohrzucker.",
          en: "Ceremonial grade Uji matcha whisked over cold milk with a whisper of cane sugar.",
          fr: "Matcha Uji de qualité cérémonielle sur lait froid, une pointe de sucre de canne.",
          it: "Matcha Uji ceremonial grade su latte freddo con un tocco di zucchero di canna.",
        },
        image: matchaLatte,
        size: "400 ml",
        tags: ["tag.veganOption", "tag.signature"],
        nutrition: { calories: 180, protein: 7, carbs: 22, sugar: 18, fat: 6, caffeine: 70 },
      },
      {
        id: "strawberry-matcha",
        name: "Strawberry Matcha",
        jp: "いちご抹茶",
        price: "CHF 8.50",
        blurb: {
          de: "Echtes Erdbeerpüree, geschichtet unter Matcha und seidigem Milchschaum.",
          en: "Real strawberry purée layered under matcha and silky milk foam.",
          fr: "Purée de fraises fraîches sous une couche de matcha et de mousse de lait.",
          it: "Purea di fragole vera sotto matcha e schiuma di latte setosa.",
        },
        image: strawberryMatcha,
        size: "400 ml",
        tags: ["tag.veganOption", "tag.fruit"],
        nutrition: { calories: 220, protein: 6, carbs: 34, sugar: 28, fat: 6, caffeine: 60 },
      },
    ],
  },
  {
    id: "coffee",
    label: {
      de: "Kaffeespezialitäten",
      en: "Coffee specialties",
      fr: "Cafés de spécialité",
      it: "Specialità di caffè",
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
        name: "Cloud Iced Latte",
        jp: "アイスラテ",
        price: "CHF 6.50",
        blurb: {
          de: "Doppelter Espresso auf kalte Milch — klar, süss, endlos trinkbar.",
          en: "Double espresso poured over cold milk — clean, sweet, endlessly drinkable.",
          fr: "Double espresso versé sur du lait froid — net, doux, irrésistible.",
          it: "Doppio espresso su latte freddo — pulito, dolce, bevibilissimo.",
        },
        image: icedLatte,
        size: "400 ml",
        tags: ["tag.veganOption"],
        nutrition: { calories: 140, protein: 8, carbs: 13, sugar: 12, fat: 5, caffeine: 150 },
      },
      {
        id: "cold-brew",
        name: "18h Cold Brew",
        jp: "コールドブリュー",
        price: "CHF 6.00",
        blurb: {
          de: "18 Stunden kalt extrahiert: säurearm, kakaotief, ohne Zucker.",
          en: "Steeped for eighteen hours for a low-acid, cocoa-deep cup. Zero sugar.",
          fr: "Infusé 18 heures : peu acide, profond en cacao, sans sucre.",
          it: "In infusione 18 ore: poco acido, profondo di cacao, zero zucchero.",
        },
        image: coldBrew,
        size: "400 ml",
        tags: ["tag.sugarFree", "tag.vegan"],
        nutrition: { calories: 15, protein: 1, carbs: 2, sugar: 0, fat: 0, caffeine: 200 },
      },
    ],
  },
  {
    id: "refreshers",
    label: { de: "Refresher", en: "Refreshers", fr: "Rafraîchissements", it: "Refresher" },
    note: {
      de: "Echte Purées, überraschende Kombinationen",
      en: "Real purées, unexpected pairings",
      fr: "Purées véritables, associations inattendues",
      it: "Puree vere, abbinamenti inattesi",
    },
    drinks: [
      {
        id: "yuzu-peach",
        name: "Yuzu Peach",
        jp: "柚子ピーチ",
        price: "CHF 7.00",
        blurb: {
          de: "Japanische Yuzu und weisser Pfirsich auf Eis — frisch, floral, kaum süss.",
          en: "Japanese yuzu and white peach over ice — bright, floral, barely sweet.",
          fr: "Yuzu japonais et pêche blanche sur glace — vif, floral, à peine sucré.",
          it: "Yuzu giapponese e pesca bianca su ghiaccio — fresco, floreale, poco dolce.",
        },
        image: yuzuRefresher,
        size: "400 ml",
        tags: ["tag.caffeineFree", "tag.vegan"],
        nutrition: { calories: 110, protein: 0, carbs: 27, sugar: 24, fat: 0, caffeine: 0 },
      },
      {
        id: "blue-lemonade",
        name: "Butterfly Lemonade",
        jp: "バタフライレモネード",
        price: "CHF 7.00",
        blurb: {
          de: "Butterfly-Pea-Tee, der mit der Zitrone von Blau zu Violett wechselt.",
          en: "Butterfly pea tea that shifts from blue to violet as the lemon hits.",
          fr: "Thé de pois papillon qui passe du bleu au violet avec le citron.",
          it: "Tè di butterfly pea che passa dal blu al viola con il limone.",
        },
        image: blueLemonade,
        size: "400 ml",
        tags: ["tag.colourShifting", "tag.vegan"],
        nutrition: { calories: 90, protein: 0, carbs: 22, sugar: 20, fat: 0, caffeine: 0 },
      },
    ],
  },
  {
    id: "food",
    label: { de: "Food", en: "Food", fr: "Food", it: "Food" },
    note: {
      de: "Japanisch inspiriert, täglich frisch",
      en: "Japanese-inspired, made fresh daily",
      fr: "Inspiration japonaise, préparé chaque jour",
      it: "Ispirazione giapponese, fresco ogni giorno",
    },
    drinks: [
      {
        id: "tamago-sando",
        name: "Tamago Sando",
        jp: "卵サンド",
        price: "CHF 8.90",
        blurb: {
          de: "Fluffiges Milchbrot mit japanischem Eiersalat — unser Mittagsklassiker.",
          en: "Fluffy milk bread with Japanese egg salad — our lunchtime classic.",
          fr: "Pain de mie moelleux et salade d'œufs à la japonaise — le classique du midi.",
          it: "Pane al latte soffice con insalata di uova giapponese — il classico di mezzogiorno.",
        },
        image: tamagoSando,
        size: "180 g",
        tags: ["tag.homemade", "tag.signature"],
        nutrition: { calories: 380, protein: 14, carbs: 38, sugar: 6, fat: 19, caffeine: 0 },
      },
      {
        id: "onigiri",
        name: "Onigiri (2 pcs)",
        jp: "おにぎり",
        price: "CHF 6.50",
        blurb: {
          de: "Zwei Reisdreiecke mit Nori — leicht, salzig, perfekt für unterwegs.",
          en: "Two rice triangles wrapped in nori — light, savoury, perfect to go.",
          fr: "Deux triangles de riz au nori — léger, salé, parfait à emporter.",
          it: "Due triangoli di riso con nori — leggeri, sapidi, perfetti da portare via.",
        },
        image: onigiri,
        size: "2 × 110 g",
        tags: ["tag.vegan", "tag.homemade"],
        nutrition: { calories: 290, protein: 6, carbs: 58, sugar: 2, fat: 3, caffeine: 0 },
      },
      {
        id: "pastry",
        name: "Croissant & Matcha Cookie",
        jp: "クロワッサン",
        price: "CHF 4.50",
        blurb: {
          de: "Butterzarter Gipfeli oder unser weicher Matcha-Cookie — beides frisch gebacken.",
          en: "A buttery croissant or our soft matcha cookie — both baked fresh.",
          fr: "Croissant au beurre ou cookie matcha moelleux — les deux cuits du jour.",
          it: "Croissant al burro o il nostro cookie al matcha — entrambi appena sfornati.",
        },
        image: pastry,
        size: "ab / from CHF 4.50",
        tags: ["tag.warm", "tag.homemade"],
        nutrition: { calories: 310, protein: 5, carbs: 34, sugar: 12, fat: 17, caffeine: 5 },
      },
    ],
  },
  {
    id: "desserts",
    label: { de: "Desserts", en: "Desserts", fr: "Desserts", it: "Dolci" },
    note: {
      de: "Japanisch inspirierte Süssigkeiten",
      en: "Japanese-inspired sweets",
      fr: "Douceurs d'inspiration japonaise",
      it: "Dolci d'ispirazione giapponese",
    },
    drinks: [
      {
        id: "cake-in-a-can",
        name: "Cake in a Can",
        jp: "ケーキ缶",
        price: "CHF 9.50",
        blurb: {
          de: "Wolkenleichter Biskuit, Rahm und Erdbeeren — versiegelt in der klaren Dose.",
          en: "Cloud-light sponge, whipped cream and strawberries, sealed in our clear can.",
          fr: "Génoise légère, crème fouettée et fraises, scellées dans notre canette.",
          it: "Pan di spagna leggerissimo, panna e fragole, sigillati nella lattina.",
        },
        image: cakeInACan,
        size: "250 g",
        tags: ["tag.signature", "tag.shareable"],
        nutrition: { calories: 340, protein: 6, carbs: 42, sugar: 30, fat: 16, caffeine: 0 },
      },
      {
        id: "matcha-cheesecake",
        name: "Matcha Basque Cheesecake",
        jp: "抹茶バスクチーズケーキ",
        price: "CHF 7.90",
        blurb: {
          de: "Karamellisiert obenauf, cremig innen, tief nach Matcha.",
          en: "Caramelised on top, molten in the middle, deeply matcha.",
          fr: "Caramélisé dessus, fondant au centre, profondément matcha.",
          it: "Caramellato in superficie, cremoso al centro, profondamente matcha.",
        },
        image: matchaCheesecake,
        size: "120 g",
        tags: ["tag.homemade", "tag.signature"],
        nutrition: { calories: 320, protein: 7, carbs: 26, sugar: 20, fat: 21, caffeine: 15 },
      },
    ],
  },
];

export const allDrinks: Drink[] = menu.flatMap((c) => c.drinks);