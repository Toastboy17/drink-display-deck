import { useRef, useState } from "react";
import { useI18n } from "@/i18n";
import { menu } from "@/data/menu";

export function PickYourCloud() {
  const { tl } = useI18n();
  const [active, setActive] = useState(menu[0]?.id ?? "");
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  const activeCategory = menu.find((c) => c.id === active) ?? menu[0]!;

  const onPointerDown = (e: React.PointerEvent) => {
    const el = track.current;
    if (!el) return;
    drag.current = { x: e.clientX, left: el.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = track.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const endDrag = () => {
    drag.current = null;
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-8">
        <div>
          <p className="rule-label text-rose-deep">01 — Pick your cloud</p>
          <h2 className="mt-4 display-lg">Pick your cloud</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {tl(activeCategory.note)}
        </p>
      </div>

      {/* Drag / scroll carousel — one hero product per sub-category */}
      <div
        ref={track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {menu.map((category, i) => {
          const hero = category.drinks[0]!;
          const isActive = category.id === active;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              aria-pressed={isActive}
              className={`group relative isolate w-[70vw] max-w-[20rem] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border bg-ink text-left transition-colors duration-300 sm:w-[22rem] ${
                isActive ? "border-cloud" : "border-border"
              }`}
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={hero.image}
                  alt={hero.name}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="rule-label text-cloud/80">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-3xl uppercase text-cream">
                    {tl(category.label)}
                  </h3>
                  <p className="mt-1 text-xs text-cream/70">
                    {category.drinks.length} ×
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Menu-style listing for the selected sub-category */}
      <div className="mt-10 border-t border-border pt-8">
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-display text-3xl uppercase">{tl(activeCategory.label)}</h3>
          <p className="rule-label text-muted-foreground">
            {activeCategory.drinks.length} items
          </p>
        </div>
        <ul className="mt-6 divide-y divide-border">
          {activeCategory.drinks.map((d, i) => (
            <li key={d.id} className="flex items-center gap-4 py-4">
              <span className="rule-label w-8 shrink-0 text-rose-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                className="size-14 shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0">
                <p className="font-display text-xl uppercase leading-none">{d.name}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {tl(d.blurb)}
                </p>
              </div>
              <span className="ml-auto shrink-0 text-xs text-muted-foreground">{d.size}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
