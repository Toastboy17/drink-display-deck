import { useState } from "react";
import { motion } from "framer-motion";
import { drinks, hotDrinks, type Drink } from "@/data/nube";
import TempIcon from "@/components/nube/TempIcon";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * One drink, floating free on the dark room: no card, just a colour bloom that
 * matches the liquid, a CSS-only tilt on hover and ingredients that slide in.
 */
function DrinkItem({ drink, index }: { drink: Drink; index: number }) {
  /** Every third item sits larger and lower so the row never reads as a spreadsheet. */
  const feature = index % 3 === 2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: EASE, delay: (index % 4) * 0.06 }}
      data-cursor="hover"
      className={`group relative ${feature ? "sm:pt-10" : ""}`}
    >
      <div
        className={`relative mx-auto ${feature ? "w-[92%] sm:w-full" : "w-[80%] sm:w-[88%]"}`}
      >
        {/* Tight colour bloom bedded behind the can — slow pulse for the liquid feel. */}
        <div
          aria-hidden
          className="animate-bloom pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "78%",
            height: "78%",
            background: `radial-gradient(circle, ${drink.glow}66 0%, ${drink.glow}22 48%, transparent 74%)`,
            filter: "blur(26px)",
          }}
        />
        <img
          src={drink.img}
          alt={`${drink.name} — ${drink.notes}`}
          loading={index < 4 ? "eager" : "lazy"}
          className="relative aspect-square w-full object-contain transition-transform duration-500 ease-out group-hover:-rotate-[4deg] group-hover:scale-[1.03]"
          style={{
            filter: `drop-shadow(0 18px 28px ${drink.glow}33)`,
            mixBlendMode: "normal",
          }}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className={`text-[#F2F7FA] ${feature ? "text-[30px] sm:text-[34px]" : ""}`}>
          {drink.name}
        </h3>
        <span
          className="label-caps rounded-full border border-[#C2E9FF]/25 bg-[#C2E9FF]/10 px-2.5 py-1 tabular-nums text-[#C2E9FF]"
          aria-label={`Item ${index + 1}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-1.5 text-[13px] text-[#AECDDD]">{drink.tagline}</p>

      {/* Ingredients stay hidden at rest and slide in on hover / focus. */}
      <p className="mt-2 max-h-0 translate-y-1 overflow-hidden text-[13px] text-[#9BBACB] opacity-0 transition-all duration-400 ease-out group-hover:max-h-16 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:max-h-16 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {drink.notes}
      </p>

      <div className="mt-3 border-t border-[#C2E9FF]/10 pt-3">
        <TempIcon temp={drink.temp} />
      </div>
    </motion.article>
  );
}

const all = [...drinks, ...hotDrinks];
const byId = (ids: string[]) => ids.map((id) => all.find((d) => d.id === id)!).filter(Boolean);

const categories = [
  {
    id: "matcha",
    label: "Matcha",
    blurb: "Ceremonial grade, whisked to order — layered over fruit or poured hot.",
    items: byId([
      "matcha-latte",
      "strawberry-matcha",
      "blueberry-matcha",
      "mango-matcha",
      "salted-caramel-banana-matcha",
      "hot-matcha-latte",
    ]),
  },
  {
    id: "lattes",
    label: "Lattes",
    blurb: "Cold, layered and sealed in the can — espresso the long way round.",
    items: byId(["iced-latte", "blueberry-latte", "salted-caramel-banana"]),
  },
  {
    id: "coffee",
    label: "Coffee",
    blurb: "The warm side of the counter, served in the cup.",
    items: byId([
      "cappuccino",
      "flat-white",
      "caffe-latte",
      "latte-macchiato",
      "mocha",
      "filter-coffee",
      "espresso",
      "espresso-doppio",
    ]),
  },
  {
    id: "shakes",
    label: "Shakes",
    blurb: "Blended thick, caffeine-light — the easy end of the menu.",
    items: byId(["mango-shake", "kids-matcha"]),
  },
];

export default function Menu() {
  const [activeId, setActiveId] = useState(categories[0]!.id);
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <section id="menu" className="section-ice px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-end">
          <div className="lg:col-span-3">
            <p className="label-caps text-[#C2E9FF]">The pour list</p>
            <h2 className="mt-4 text-[#F2F7FA]">Your way into cloud nine</h2>
          </div>
          <p className="max-w-[42ch] text-[15px] text-[#AECDDD] lg:col-span-2 lg:pb-4">
            Nothing is pre-batched into a syrup. Every glass is layered when you order it at the
            counter. No app, no queue online — just come by.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2.5 border-y border-[#C2E9FF]/12 py-5">
          {categories.map((c) => {
            const on = c.id === activeId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                data-cursor="hover"
                aria-pressed={on}
                className={`label-caps rounded-full border px-4 py-2 transition-colors duration-300 ${
                  on
                    ? "border-[#C2E9FF]/60 bg-[#C2E9FF]/15 text-[#F2F7FA]"
                    : "border-[#C2E9FF]/20 text-[#AECDDD] hover:border-[#C2E9FF]/40 hover:text-[#F2F7FA]"
                }`}
              >
                {c.label}
                <span className="ml-2 tabular-nums text-[#C2E9FF]/70">{c.items.length}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 max-w-[52ch] text-[15px] text-[#AECDDD]">{active.blurb}</p>

        <div
          key={active.id}
          className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {active.items.map((drink, i) => (
            <DrinkItem key={drink.id} drink={drink} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
