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
        nutrition: { calories: 180, protein: 7, carbs: 22, sugar: 18, fat: 6, caffeine: 70 },
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
        nutrition: { calories: 220, protein: 6, carbs: 34, sugar: 28, fat: 6, caffeine: 60 },
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
        nutrition: { calories: 230, protein: 6, carbs: 36, sugar: 29, fat: 6, caffeine: 60 },
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
        nutrition: { calories: 240, protein: 6, carbs: 38, sugar: 31, fat: 6, caffeine: 60 },
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
        nutrition: { calories: 280, protein: 7, carbs: 42, sugar: 34, fat: 8, caffeine: 60 },
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
        nutrition: { calories: 150, protein: 4, carbs: 26, sugar: 22, fat: 4, caffeine: 0 },
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
        nutrition: { calories: 140, protein: 8, carbs: 13, sugar: 12, fat: 5, caffeine: 150 },
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
        nutrition: { calories: 260, protein: 7, carbs: 40, sugar: 33, fat: 7, caffeine: 150 },
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
        nutrition: { calories: 220, protein: 7, carbs: 33, sugar: 28, fat: 6, caffeine: 150 },
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
        nutrition: { calories: 300, protein: 6, carbs: 48, sugar: 40, fat: 8, caffeine: 0 },
      },
    ],
  },
];

export const allDrinks: Drink[] = menu.flatMap((c) => c.drinks);
