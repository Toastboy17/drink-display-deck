import { useEffect, useMemo, useRef, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { useFrame } from "@react-three/fiber";
import ProceduralDrink from "@/components/three/ProceduralDrink";
import { DrinkStage } from "@/components/three/DrinkStage";
import { drinkCategories, drinks } from "@/data/drinks";
import type { DrinkSpec } from "@/components/three/ProceduralDrink";
import { cn } from "@/lib/utils";

const GAP = 2.6;

function Shelf({ list, active }: { list: DrinkSpec[]; active: number }) {
  const ref = useRef<import("three").Group>(null);
  useFrame(() => {
    if (!ref.current) return;
    const target = -active * GAP;
    ref.current.position.x += (target - ref.current.position.x) * 0.08;
  });
  return (
    <group ref={ref}>
      {list.map((drink, i) => (
        <group key={drink.id} position={[i * GAP, 0, i === active ? 0.3 : -0.4]}>
          <ProceduralDrink drink={drink} focused={i === active} />
        </group>
      ))}
    </group>
  );
}

export function DrinkShelf() {
  const [category, setCategory] = useState<string>("All");
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const list = useMemo(
    () => (category === "All" ? drinks : drinks.filter((d) => d.category === category)),
    [category],
  );

  useEffect(() => setActive(0), [category]);

  // Scroll-scrubbed focus: progress through the tall track selects the drink.
  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setActive(Math.min(list.length - 1, Math.round(p * (list.length - 1))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [list.length]);

  const current = list[active] ?? list[0]!;

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {drinkCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={c === category}
            className={cn(
              "rounded-full border px-4 py-2 font-display text-sm uppercase tracking-[0.12em] transition-all duration-300",
              c === category
                ? "border-transparent bg-ink text-cream"
                : "border-border bg-card text-muted-foreground hover:border-cloud",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Tall track — sticky canvas scrubs through the drinks */}
      <div ref={trackRef} className="relative mt-6" style={{ height: `${list.length * 60}vh` }}>
        <div className="sticky top-16 h-[70vh] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-b from-cloud/25 via-background to-rose/20">
          <ClientOnly fallback={<div className="h-full w-full" />}>
            <DrinkStage className="h-full w-full" cameraZ={8}>
              <Shelf list={list} active={active} />
            </DrinkStage>
          </ClientOnly>

          {/* Focus label */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 bg-gradient-to-t from-background/90 to-transparent p-6 text-center">
            <p className="rule-label text-rose-deep">{current.category}</p>
            <h3 className="display-lg text-3xl">{current.name}</h3>
            <p className="rule-label text-muted-foreground">
              {active + 1} / {list.length}
            </p>
          </div>

          {/* Dots */}
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">
            {list.map((d, i) => (
              <button
                key={d.id}
                type="button"
                aria-label={d.name}
                onClick={() => setActive(i)}
                className={cn(
                  "size-2.5 rounded-full transition-all duration-300",
                  i === active ? "scale-125 bg-ink" : "bg-ink/25",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}