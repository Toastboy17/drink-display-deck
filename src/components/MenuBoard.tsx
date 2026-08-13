import { useState } from "react";
import { menu, allDrinks, type Drink } from "@/data/menu";
import { cn } from "@/lib/utils";

function NutrientBar({ label, value, unit, max }: { label: string; value: number; unit: string; max: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium tabular-nums">
          {value}
          <span className="text-muted-foreground text-xs"> {unit}</span>
        </span>
      </div>
      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-matcha transition-[width] duration-500 ease-out"
          style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
        />
      </div>
    </div>
  );
}

function DrinkPreview({ drink }: { drink: Drink }) {
  return (
    <div key={drink.id} className="animate-in fade-in duration-500">
      <div className="relative overflow-hidden rounded-3xl bg-sky-wash">
        <img
          src={drink.image}
          alt={`${drink.name} in a nube transparent can`}
          loading="lazy"
          width={900}
          height={1100}
          className="mx-auto h-64 w-auto object-contain drop-shadow-xl sm:h-72"
        />
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="text-3xl leading-none">{drink.name}</h3>
        <span className="text-sm text-muted-foreground tabular-nums">{drink.price}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{drink.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {[drink.size, ...drink.tags].map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 text-xs text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <NutrientBar label="Calories" value={drink.nutrition.calories} unit="kcal" max={400} />
        <NutrientBar label="Caffeine" value={drink.nutrition.caffeine} unit="mg" max={200} />
        <NutrientBar label="Protein" value={drink.nutrition.protein} unit="g" max={12} />
        <NutrientBar label="Carbs" value={drink.nutrition.carbs} unit="g" max={45} />
        <NutrientBar label="Sugar" value={drink.nutrition.sugar} unit="g" max={35} />
        <NutrientBar label="Fat" value={drink.nutrition.fat} unit="g" max={20} />
      </div>
      <p className="mt-5 text-xs text-muted-foreground">
        Values are per serving as prepared with oat milk. Vegan versions available for every drink.
      </p>
    </div>
  );
}

export function MenuBoard() {
  const first = allDrinks[0] as Drink;
  const [activeId, setActiveId] = useState<string>(first.id);
  const active: Drink = allDrinks.find((d) => d.id === activeId) ?? first;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
      {/* Menu board */}
      <div className="rounded-4xl border border-border bg-board p-6 shadow-soft sm:p-9">
        <div className="flex items-baseline justify-between border-b border-border pb-5">
          <p className="eyebrow">nube menu board</p>
          <p className="text-xs text-muted-foreground">Hover a drink</p>
        </div>

        <div className="mt-6 space-y-8">
          {menu.map((category) => (
            <div key={category.id}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl leading-none">{category.label}</h3>
                <span className="text-xs text-muted-foreground">{category.note}</span>
              </div>

              <ul className="mt-3">
                {category.drinks.map((drink) => {
                  const isActive = drink.id === active.id;
                  return (
                    <li key={drink.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveId(drink.id)}
                        onFocus={() => setActiveId(drink.id)}
                        onClick={() => setActiveId(drink.id)}
                        aria-pressed={isActive}
                        className={cn(
                          "group flex w-full items-baseline gap-3 rounded-xl px-3 py-3 text-left transition-all",
                          "duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive
                            ? "bg-accent/60 translate-x-1"
                            : "hover:bg-accent/40 hover:translate-x-1",
                        )}
                      >
                        <span className="text-base font-medium">{drink.name}</span>
                        <span className="hidden text-xs text-muted-foreground sm:inline">
                          {drink.jp}
                        </span>
                        <span
                          className={cn(
                            "mx-1 h-px flex-1 self-center border-b border-dashed border-border transition-opacity",
                            isActive ? "opacity-100" : "opacity-60",
                          )}
                        />
                        <span className="text-sm text-muted-foreground tabular-nums">
                          {drink.price}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Preview card */}
      <div className="rounded-4xl border border-border bg-card p-6 shadow-lift lg:sticky lg:top-24 sm:p-8">
        <DrinkPreview drink={active} />
      </div>
    </div>
  );
}