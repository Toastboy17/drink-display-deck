import icedLatte from "@/assets/nube/drink-iced-latte.jpg.asset.json";
import matchaLatte from "@/assets/nube/drink-matcha-latte.jpg.asset.json";
import strawberryMatcha from "@/assets/nube/drink-strawberry-matcha.jpg.asset.json";
import blueberryMatcha from "@/assets/nube/drink-blueberry-matcha.jpg.asset.json";
import mangoMatcha from "@/assets/nube/drink-mango-matcha.jpg.asset.json";
import blueberryLatte from "@/assets/nube/drink-blueberry-latte.jpg.asset.json";
import saltedCaramelBanana from "@/assets/nube/drink-salted-caramel-banana.jpg.asset.json";
import saltedCaramelBananaMatcha from "@/assets/nube/drink-salted-caramel-banana-matcha.jpg.asset.json";
import mangoShake from "@/assets/nube/drink-mango-shake.jpg.asset.json";
import kidsMatcha from "@/assets/nube/drink-kids-matcha.jpg.asset.json";
import logo from "@/assets/nube/nube-logo.png.asset.json";
import heroVideo from "@/assets/nube/hero.mp4.asset.json";
import scrubVideo from "@/assets/nube/matcha-pour.mp4.asset.json";

export type Drink = {
  id: string;
  name: string;
  tagline: string;
  notes: string;
  img: string;
  temp: "Cold" | "Whisked" | "Blended";
};

/** The nube menu — every drink hand-poured to order, in-store only. */
export const drinks: Drink[] = [
  {
    id: "iced-latte",
    name: "Iced Latte",
    tagline: "Our house pour",
    notes: "Espresso · cold milk · clear ice",
    img: icedLatte.url,
    temp: "Cold",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    tagline: "Whisked to order",
    notes: "Ceremonial matcha · cold milk",
    img: matchaLatte.url,
    temp: "Whisked",
  },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha",
    tagline: "Five layers, one straw",
    notes: "Crushed strawberry · milk · matcha",
    img: strawberryMatcha.url,
    temp: "Whisked",
  },
  {
    id: "blueberry-matcha",
    name: "Blueberry Matcha",
    tagline: "Deep purple into green",
    notes: "Blueberry compote · milk · matcha",
    img: blueberryMatcha.url,
    temp: "Whisked",
  },
  {
    id: "mango-matcha",
    name: "Mango Matcha",
    tagline: "Sunrise in a glass",
    notes: "Mango purée · milk · matcha",
    img: mangoMatcha.url,
    temp: "Whisked",
  },
  {
    id: "blueberry-latte",
    name: "Blueberry Latte",
    tagline: "Coffee, but fruit-forward",
    notes: "Blueberry compote · milk · espresso",
    img: blueberryLatte.url,
    temp: "Cold",
  },
  {
    id: "salted-caramel-banana",
    name: "Salted Caramel Banana",
    tagline: "Caramel down the glass",
    notes: "Salted caramel · banana · espresso",
    img: saltedCaramelBanana.url,
    temp: "Cold",
  },
  {
    id: "salted-caramel-banana-matcha",
    name: "Salted Caramel Banana Matcha",
    tagline: "The one people come back for",
    notes: "Salted caramel · banana · matcha",
    img: saltedCaramelBananaMatcha.url,
    temp: "Whisked",
  },
  {
    id: "mango-shake",
    name: "Mango Shake",
    tagline: "Blended thick, no coffee",
    notes: "Ripe mango · milk · a little ice",
    img: mangoShake.url,
    temp: "Blended",
  },
  {
    id: "kids-matcha",
    name: "Kids Matcha",
    tagline: "Caffeine-light, small glass",
    notes: "Mild matcha · lots of milk · fruit",
    img: kidsMatcha.url,
    temp: "Whisked",
  },
];

/** Hero / scrub media, plus the brand mark. */
export const media = {
  logo: logo.url,
  heroVideo: heroVideo.url,
  /** Jade matcha purée poured into cold milk over clear ice — drives the scroll scrub. */
  scrubVideo: scrubVideo.url,
  heroPlate: icedLatte.url,
  scrubPlate: matchaLatte.url,
};

export const site = {
  street: "Kirchgasse 3",
  city: "8001 Zürich",
  area: "Altstadt · 2 min vom Bellevue",
  email: "hello@nubeworldwide.com",
  instagram: "https://www.instagram.com/nube.zurich/",
  hours: [
    { d: "Mon — Sat", h: "12:00 — 18:00" },
    { d: "Sunday", h: "Closed" },
  ],
};
