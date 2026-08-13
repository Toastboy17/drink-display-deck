import matchaLatte from "@/assets/drink-matcha-latte.jpg";
import strawberryMatcha from "@/assets/drink-strawberry-matcha.jpg";
import icedLatte from "@/assets/drink-iced-latte.jpg";
import coldBrew from "@/assets/drink-cold-brew.jpg";
import yuzuRefresher from "@/assets/drink-yuzu-refresher.jpg";
import blueLemonade from "@/assets/drink-blue-lemonade.jpg";
import cakeInACan from "@/assets/drink-cake-in-a-can.jpg";

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
  blurb: string;
  image: string;
  size: string;
  tags: string[];
  nutrition: Nutrition;
};

export type MenuCategory = {
  id: string;
  label: string;
  note: string;
  drinks: Drink[];
};

export const menu: MenuCategory[] = [
  {
    id: "matcha",
    label: "Matcha",
    note: "Ceremonial grade, whisked to order",
    drinks: [
      {
        id: "matcha-latte",
        name: "Cloud Matcha Latte",
        jp: "抹茶ラテ",
        price: "CHF 7.50",
        blurb:
          "Ceremonial grade Uji matcha whisked over cold milk with a whisper of cane sugar.",
        image: matchaLatte,
        size: "400 ml",
        tags: ["Vegan option", "Signature"],
        nutrition: { calories: 180, protein: 7, carbs: 22, sugar: 18, fat: 6, caffeine: 70 },
      },
      {
        id: "strawberry-matcha",
        name: "Strawberry Matcha",
        jp: "いちご抹茶",
        price: "CHF 8.50",
        blurb: "Real strawberry purée layered under matcha and silky milk foam.",
        image: strawberryMatcha,
        size: "400 ml",
        tags: ["Vegan option", "Fruit forward"],
        nutrition: { calories: 220, protein: 6, carbs: 34, sugar: 28, fat: 6, caffeine: 60 },
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    note: "Specialty beans, roasted in Switzerland",
    drinks: [
      {
        id: "iced-latte",
        name: "Cloud Iced Latte",
        jp: "アイスラテ",
        price: "CHF 6.50",
        blurb: "Double espresso poured over cold milk — clean, sweet, endlessly drinkable.",
        image: icedLatte,
        size: "400 ml",
        tags: ["Vegan option"],
        nutrition: { calories: 140, protein: 8, carbs: 13, sugar: 12, fat: 5, caffeine: 150 },
      },
      {
        id: "cold-brew",
        name: "18h Cold Brew",
        jp: "コールドブリュー",
        price: "CHF 6.00",
        blurb: "Steeped for eighteen hours for a low-acid, cocoa-deep cup. Zero sugar.",
        image: coldBrew,
        size: "400 ml",
        tags: ["Sugar free", "Vegan"],
        nutrition: { calories: 15, protein: 1, carbs: 2, sugar: 0, fat: 0, caffeine: 200 },
      },
    ],
  },
  {
    id: "refreshers",
    label: "Refreshers",
    note: "Real purées, unexpected pairings",
    drinks: [
      {
        id: "yuzu-peach",
        name: "Yuzu Peach",
        jp: "柚子ピーチ",
        price: "CHF 7.00",
        blurb: "Japanese yuzu and white peach over ice — bright, floral, barely sweet.",
        image: yuzuRefresher,
        size: "400 ml",
        tags: ["Caffeine free", "Vegan"],
        nutrition: { calories: 110, protein: 0, carbs: 27, sugar: 24, fat: 0, caffeine: 0 },
      },
      {
        id: "blue-lemonade",
        name: "Butterfly Lemonade",
        jp: "バタフライレモネード",
        price: "CHF 7.00",
        blurb: "Butterfly pea tea that shifts from blue to violet as the lemon hits.",
        image: blueLemonade,
        size: "400 ml",
        tags: ["Colour shifting", "Vegan"],
        nutrition: { calories: 90, protein: 0, carbs: 22, sugar: 20, fat: 0, caffeine: 0 },
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "Japanese-inspired sweets",
    drinks: [
      {
        id: "cake-in-a-can",
        name: "Cake in a Can",
        jp: "ケーキ缶",
        price: "CHF 9.50",
        blurb: "Cloud-light sponge, whipped cream and strawberries, sealed in our clear can.",
        image: cakeInACan,
        size: "250 g",
        tags: ["Signature", "Shareable"],
        nutrition: { calories: 340, protein: 6, carbs: 42, sugar: 30, fat: 16, caffeine: 0 },
      },
    ],
  },
];

export const allDrinks: Drink[] = menu.flatMap((c) => c.drinks);