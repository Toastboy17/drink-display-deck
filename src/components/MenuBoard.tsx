import { useEffect, useRef, useState } from "react";
import { menu, allDrinks, type Drink } from "@/data/menu";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

function NutrientBar({
  label,
  value,
  unit,
  max,
}: {
  label: string;
  value: number;
  unit: string;
  max: number;
}) {
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

function NutritionGrid({ drink }: { drink: Drink }) {
  const { t } = useI18n();
  const n = drink.nutrition;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <NutrientBar label={t("nutrition.calories")} value={n.calories} unit="kcal" max={400} />
      <NutrientBar label={t("nutrition.caffeine")} value={n.caffeine} unit="mg" max={200} />
      <NutrientBar label={t("nutrition.protein")} value={n.protein} unit="g" max={16} />
      <NutrientBar label={t("nutrition.carbs")} value={n.carbs} unit="g" max={60} />
      <NutrientBar label={t("nutrition.sugar")} value={n.sugar} unit="g" max={35} />
      <NutrientBar label={t("nutrition.fat")} value={n.fat} unit="g" max={22} />
    </div>
  );
}

function Tags({ drink }: { drink: Drink }) {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap gap-2">
      {[drink.size, ...drink.tags.map((tag) => t(tag))].map((label) => (
        <span
          key={label}
          className="rounded-full border border-border px-3 py-1 text-xs text-secondary-foreground"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function DrinkPreview({ drink }: { drink: Drink }) {
  const { t, tl } = useI18n();
  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl bg-sky-wash">
        <img
          key={drink.id}
          src={drink.image}
          alt={`${drink.name} — nube`}
          loading="lazy"
          width={900}
          height={1100}
          className="animate-in fade-in zoom-in-95 mx-auto h-64 w-auto object-contain drop-shadow-xl duration-500 sm:h-72"
        />
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="text-3xl leading-none">{drink.name}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tl(drink.blurb)}</p>

      <div className="mt-4">
        <Tags drink={drink} />
      </div>

      <div className="mt-7">
        <NutritionGrid drink={drink} />
      </div>
      <p className="mt-5 text-xs text-muted-foreground">{t("menu.nutritionNote")}</p>
    </div>
  );
}

function DesktopBoard() {
  const { t, tl } = useI18n();
  const first = allDrinks[0] as Drink;
  const [activeId, setActiveId] = useState<string>(first.id);
  const active: Drink = allDrinks.find((d) => d.id === activeId) ?? first;

  return (
    <div className="hidden items-start gap-10 lg:grid lg:grid-cols-[1.1fr_1fr]">
      <div className="rounded-4xl border border-border bg-board p-9 shadow-soft">
        <div className="flex items-baseline justify-between border-b border-border pb-5">
          <p className="eyebrow">nube menu board</p>
          <p className="text-xs text-muted-foreground">{t("menu.hintDesktop")}</p>
        </div>

        <div className="mt-6 space-y-8">
          {menu.map((category) => (
            <div key={category.id}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl leading-none">{tl(category.label)}</h3>
                <span className="text-xs text-muted-foreground">{tl(category.note)}</span>
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
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-4xl border border-border bg-card p-8 shadow-lift lg:sticky lg:top-24">
        <DrinkPreview drink={active} />
      </div>
    </div>
  );
}

function MobileBoard() {
  const { t, tl } = useI18n();
  const [categoryId, setCategoryId] = useState(menu[0]!.id);
  const [openDrink, setOpenDrink] = useState<Drink | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const category = menu.find((c) => c.id === categoryId) ?? menu[0]!;

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [categoryId]);

  return (
    <div className="lg:hidden">
      <div className="flex items-baseline justify-between px-1">
        <p className="eyebrow">nube menu board</p>
        <p className="text-xs text-muted-foreground">{t("menu.hintMobile")}</p>
      </div>

      {/* Category chips */}
      <div className="-mx-5 mt-4 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2">
          {menu.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategoryId(c.id)}
              aria-pressed={c.id === categoryId}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all duration-300",
                c.id === categoryId
                  ? "border-transparent bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground",
              )}
            >
              {tl(c.label)}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-3 px-1 text-xs text-muted-foreground">{tl(category.note)}</p>

      {/* Swipeable drink cards */}
      <div
        ref={trackRef}
        className="-mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.drinks.map((drink) => (
          <button
            key={drink.id}
            type="button"
            onClick={() => setOpenDrink(drink)}
            className="animate-in fade-in slide-in-from-bottom-2 w-[74vw] max-w-xs shrink-0 snap-center rounded-4xl border border-border bg-card p-4 text-left shadow-soft transition-transform duration-300 active:scale-[0.98] sm:w-[52vw]"
          >
            <div className="overflow-hidden rounded-3xl bg-sky-wash">
              <img
                src={drink.image}
                alt={`${drink.name} — nube`}
                loading="lazy"
                width={900}
                height={1100}
                className="mx-auto h-52 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h3 className="text-2xl leading-none">{drink.name}</h3>
                  </div>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{tl(drink.blurb)}</p>
            <p className="mt-3 text-xs tracking-wide text-matcha uppercase">
              {t("menu.tapDetails")}
            </p>
          </button>
        ))}
      </div>

      <Drawer open={!!openDrink} onOpenChange={(open) => !open && setOpenDrink(null)}>
        <DrawerContent className="max-h-[92vh]">
          {openDrink && (
            <div className="overflow-y-auto px-5 pb-8">
              <DrawerHeader className="px-0 text-left">
                <div className="overflow-hidden rounded-3xl bg-sky-wash">
                  <img
                    src={openDrink.image}
                    alt={`${openDrink.name} — nube`}
                    width={900}
                    height={1100}
                    className="animate-in fade-in zoom-in-95 mx-auto h-56 w-auto object-contain drop-shadow-xl duration-500"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <DrawerTitle className="font-display text-3xl leading-none font-normal">
                    {openDrink.name}
                  </DrawerTitle>
                </div>
                <DrawerDescription className="text-left">{tl(openDrink.blurb)}</DrawerDescription>
              </DrawerHeader>

              <Tags drink={openDrink} />
              <div className="mt-6">
                <NutritionGrid drink={openDrink} />
              </div>
              <p className="mt-5 text-xs text-muted-foreground">{t("menu.nutritionNote")}</p>
              <DrawerClose className="mt-6 w-full rounded-full bg-primary py-3 text-sm text-primary-foreground">
                {t("cta.close")}
              </DrawerClose>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export function MenuBoard() {
  return (
    <>
      <DesktopBoard />
      <MobileBoard />
    </>
  );
}