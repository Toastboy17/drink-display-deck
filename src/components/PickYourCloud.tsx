import { useRef, useState, useEffect } from "react";
import { useI18n } from "@/i18n";
import { menu } from "@/data/menu";

export function PickYourCloud() {
  const { tl } = useI18n();
  const [active, setActive] = useState(menu[0]?.id ?? "");
  const [tappedId, setTappedId] = useState<string | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeCategory = menu.find((c) => c.id === active) ?? menu[0]!;

  useEffect(() => {
    return () => {
      if (tapTimer.current) clearTimeout(tapTimer.current);
    };
  }, []);

  const handleCardMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const max = 9; // degrees
    const rx = ((y - cy) / cy) * -max;
    const ry = ((x - cx) / cx) * max;
    e.currentTarget.style.setProperty("--rx", `${rx}deg`);
    e.currentTarget.style.setProperty("--ry", `${ry}deg`);
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

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

  const handleCardClick = (id: string) => {
    setActive(id);
    setTappedId(id);
    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => setTappedId(null), 2500);
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
          const isTapped = category.id === tappedId;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCardClick(category.id)}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              aria-pressed={isActive}
              style={{
                transform:
                  "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
              }}
              className={`group relative isolate w-[70vw] max-w-[20rem] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border bg-ink text-left transition-[transform,colors] duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] sm:w-[22rem] ${
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

                {/* Default card info */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-5 transition-opacity duration-300 ${
                    isTapped ? "opacity-0" : "group-hover:opacity-0"
                  }`}
                >
                  <p className="rule-label text-cloud/80">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-3xl uppercase text-cream">
                    {tl(category.label)}
                  </h3>
                  <p className="mt-1 text-xs text-cream/70">
                    {category.drinks.length} ×
                  </p>
                </div>

                {/* Hover / tap title + description */}
                <div
                  className={`pointer-events-none absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/70 to-ink/10 p-5 opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 ${
                    isTapped ? "opacity-100 translate-y-0" : ""
                  }`}
                >
                  <h3 className="font-display text-3xl uppercase text-cream">
                    {hero.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-cream/80">
                    {tl(hero.blurb)}
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
