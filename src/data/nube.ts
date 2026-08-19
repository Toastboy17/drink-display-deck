import icedLatte from "@/assets/cut/iced-latte.png.asset.json";
import matchaLatte from "@/assets/cut/matcha-latte.png.asset.json";
import strawberryMatcha from "@/assets/cut/strawberry-matcha.png.asset.json";
import blueberryMatcha from "@/assets/cut/blueberry-matcha.png.asset.json";
import mangoMatcha from "@/assets/cut/mango-matcha.png.asset.json";
import blueberryLatte from "@/assets/cut/blueberry-latte.png.asset.json";
import saltedCaramelBanana from "@/assets/cut/salted-caramel-banana.png.asset.json";
import saltedCaramelBananaMatcha from "@/assets/cut/salted-caramel-banana-matcha.png.asset.json";
import mangoShake from "@/assets/cut/mango-shake.png.asset.json";
import kidsMatcha from "@/assets/cut/kids-matcha.png.asset.json";
import logo from "@/assets/nube/nube-logo.png.asset.json";
import heroVideo from "@/assets/nube/hero-matcha-loop.mp4.asset.json";
import hotMatchaLatte from "@/assets/hot-matcha-latte.png.asset.json";
import cappuccino from "@/assets/cappuccino.png.asset.json";
import flatWhite from "@/assets/flat-white.png.asset.json";
import caffeLatte from "@/assets/caffe-latte.png.asset.json";
import latteMacchiato from "@/assets/latte-macchiato.png.asset.json";
import mocha from "@/assets/mocha.png.asset.json";
import filterCoffee from "@/assets/filter-coffee.png.asset.json";
import espresso from "@/assets/espresso.jpg.asset.json";
import espressoDoppio from "@/assets/espresso-doppio.jpg.asset.json";
import scrubVideo from "@/assets/nube/matcha-pour.mp4.asset.json";

export type Drink = {
  id: string;
  name: string;
  tagline: string;
  notes: string;
  img: string;
  temp: "Cold" | "Whisked" | "Blended" | "Hot";
  /** Dominant colour of the drink — drives the soft glow behind the can. */
  glow: string;
  /** Two or three lines on where the drink came from. */
  story?: string;
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
    glow: "#C08A5A",
    story:
      "The first thing we ever poured. A Zürich summer, a fridge full of clear ice, and one shot pulled slow enough to keep its sweetness.",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    tagline: "Whisked to order",
    notes: "Ceremonial matcha · cold milk",
    img: matchaLatte.url,
    temp: "Whisked",
    glow: "#7FC08A",
    story:
      "Borrowed from a quiet Kyoto tea room where nobody spoke while the whisk moved. We kept the silence and added cold milk.",
  },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha",
    tagline: "Five layers, one straw",
    notes: "Crushed strawberry · milk · matcha",
    img: strawberryMatcha.url,
    temp: "Whisked",
    glow: "#F58AA6",
    story:
      "Built one June from market strawberries that were too ripe to sell. Crushed, layered, and gone by the afternoon.",
  },
  {
    id: "blueberry-matcha",
    name: "Blueberry Matcha",
    tagline: "Deep purple into green",
    notes: "Blueberry compote · milk · matcha",
    img: blueberryMatcha.url,
    temp: "Whisked",
    glow: "#8E7BD6",
    story:
      "Inspired by dusk over the lake — deep purple sinking into green. We stopped stirring it once we saw the colour.",
  },
  {
    id: "mango-matcha",
    name: "Mango Matcha",
    tagline: "Sunrise in a glass",
    notes: "Mango purée · milk · matcha",
    img: mangoMatcha.url,
    temp: "Whisked",
    glow: "#F5B45A",
    story:
      "A sunrise drink. Mango purée at the bottom so the first sip is bright and the last one is grassy and calm.",
  },
  {
    id: "blueberry-latte",
    name: "Blueberry Latte",
    tagline: "Coffee, but fruit-forward",
    notes: "Blueberry compote · milk · espresso",
    img: blueberryLatte.url,
    temp: "Cold",
    glow: "#9A7BC8",
    story:
      "Someone asked for the blueberry compote in a coffee instead. We said no once, then tried it and changed the menu.",
  },
  {
    id: "salted-caramel-banana",
    name: "Salted Caramel Banana",
    tagline: "Caramel down the glass",
    notes: "Salted caramel · banana · espresso",
    img: saltedCaramelBanana.url,
    temp: "Cold",
    glow: "#D9A85C",
    story:
      "Made from a late-shift snack: banana, salt, and the caramel we drizzle down the inside of the glass on purpose.",
  },
  {
    id: "salted-caramel-banana-matcha",
    name: "Salted Caramel Banana Matcha",
    tagline: "The one people come back for",
    notes: "Salted caramel · banana · matcha",
    img: saltedCaramelBananaMatcha.url,
    temp: "Whisked",
    glow: "#BFC96E",
    story:
      "The accident that stuck. A caramel banana poured over matcha by mistake — now the one regulars order by name.",
  },
  {
    id: "mango-shake",
    name: "Mango Shake",
    tagline: "Blended thick, no coffee",
    notes: "Ripe mango · milk · a little ice",
    img: mangoShake.url,
    temp: "Blended",
    glow: "#F7C55E",
    story:
      "Holiday drink energy, no coffee at all. Ripe mango, milk, barely any ice, blended thick enough to hold a straw.",
  },
  {
    id: "kids-matcha",
    name: "Kids Matcha",
    tagline: "Caffeine-light, small glass",
    notes: "Mild matcha · lots of milk · fruit",
    img: kidsMatcha.url,
    temp: "Whisked",
    glow: "#9AD3A8",
    story:
      "For the smallest guests on Kirchgasse. Mild matcha, mostly milk, a little fruit — so they get their own cloud too.",
  },
];


/** The warm side of the counter — espresso classics and hot matcha. */
export const hotDrinks: Drink[] = [
  { id: "hot-matcha-latte", name: "Hot Matcha Latte", tagline: "Whisked, then steamed", notes: "Ceremonial matcha · steamed milk", img: hotMatchaLatte.url, temp: "Hot", glow: "#7FC08A" },
  { id: "cappuccino", name: "Cappuccino", tagline: "Dense, velvet foam", notes: "Double espresso · steamed milk", img: cappuccino.url, temp: "Hot", glow: "#C08A5A" },
  { id: "flat-white", name: "Flat White", tagline: "Coffee-forward, silky", notes: "Double ristretto · microfoam", img: flatWhite.url, temp: "Hot", glow: "#B98052" },
  { id: "caffe-latte", name: "Caffè Latte", tagline: "The gentle one", notes: "Espresso · lots of steamed milk", img: caffeLatte.url, temp: "Hot", glow: "#CFA277" },
  { id: "latte-macchiato", name: "Latte Macchiato", tagline: "Three clean layers", notes: "Milk · espresso · foam", img: latteMacchiato.url, temp: "Hot", glow: "#D8B189" },
  { id: "mocha", name: "Mocha", tagline: "Chocolate, not syrup", notes: "Espresso · cocoa · steamed milk", img: mocha.url, temp: "Hot", glow: "#8E5C3E" },
  { id: "filter-coffee", name: "Filter Coffee", tagline: "Single origin, brewed clear", notes: "Hand-brewed · no milk", img: filterCoffee.url, temp: "Hot", glow: "#A9713F" },
  { id: "espresso", name: "Espresso", tagline: "One short shot", notes: "Single origin · 25 ml", img: espresso.url, temp: "Hot", glow: "#8A5533" },
  { id: "espresso-doppio", name: "Espresso Doppio", tagline: "Twice, for the day", notes: "Double shot · 50 ml", img: espressoDoppio.url, temp: "Hot", glow: "#7A4A2C" },
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

export const reviews = [
  {
    name: "Madeleine Mattli",
    initial: "M",
    rating: 5,
    text: "Super Takeaway Kaffee! Würde sofort wieder gehen. Fand die Getränkeauswahl mega und der Kuchen (Matcha/Strawberry) hat super geschmeckt. Was sehr stark aufgefallen ist wie schön alles aussah, Packaging und Branding super nice, geschmacklich war es definitiv auch auf dem Niveau.",
  },
  {
    name: "Nici N.",
    initial: "N",
    rating: 5,
    text: "Sehr cuter Laden. Leckere Drinks. Ich hatte das letzte Mal Mango-Matcha und diesmal caramel-coffee. Beide 10/10!!! Auf jeden Fall mein Lieblingscafé in Zürich.",
  },
  {
    name: "Saskia K.",
    initial: "S",
    rating: 5,
    text: "Super süsses Café mit leckeren Matchas in einer fancy Dose. Sehr zuvorkommendes Personal und der Schmuck ist auch super hübsch!",
  },
];

export const site = {
  street: "Kirchgasse 3",
  city: "8001 Zürich",
  area: "Altstadt · 2 min vom Bellevue",
  email: "info@nubeworldwide.com",
  phone: "+41 79 952 50 55",
  phoneHref: "https://wa.me/41799525055",
  tiktok: "https://www.tiktok.com/@nubeworldwide",
  instagramHandle: "@nubeworldwide",
  mapsEmbed: "https://www.google.com/maps?q=Kirchgasse+3,+8001+Z%C3%BCrich&hl=de&z=17&output=embed",
  directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Kirchgasse+3,+8001+Z%C3%BCrich",
  reviewsLink: "https://www.google.com/maps/search/?api=1&query=nube+Kirchgasse+3+Z%C3%BCrich",
  rating: 4.8,
  reviewCount: "350+",
  instagram: "https://www.instagram.com/nubeworldwide/",
  hours: [
    { d: "Mon — Sat", h: "12:00 — 18:00" },
    { d: "Sunday", h: "Closed" },
  ],
};
