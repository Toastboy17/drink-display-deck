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

function Tags({ drink }: { drink: Drink }) {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap gap-2">
      {[drink.size, ...drink.tags.map((tag) => t(tag))].map((label) => (
        <span
          key={label}
          className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-secondary-foreground transition-colors hover:bg-secondary"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function DrinkPreview({ drink }: { drink: Drink }) {
  const { tl } = useI18n();
  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl bg-sky-wash p-2">
        <img
          key={drink.id}
          src={drink.image}
          alt={`${drink.name} — nube`}
          loading="lazy"
          width={900}
          height={1100}
          className={cn(
            "animate-in fade-in zoom-in-95 float-slow mx-auto h-64 w-auto object-contain drop-shadow-2xl duration-700 sm:h-72",
            !drink.floating && "rounded-2xl",
          )}
        />
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="text-3xl leading-none">{drink.name}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tl(drink.blurb)}</p>

      <div className="mt-4">
        <Tags drink={drink} />
      </div>
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
                            ? "glow-cloud bg-accent/70 translate-x-1"
                            : "hover:bg-secondary/60 hover:translate-x-1",
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
            className="animate-in fade-in slide-in-from-bottom-2 w-[74vw] max-w-xs shrink-0 snap-center rounded-4xl border border-border bg-card p-4 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:glow-rose active:scale-[0.98] sm:w-[52vw]"
          >
            <div className="overflow-hidden rounded-3xl bg-sky-wash p-1">
              <img
                src={drink.image}
                alt={`${drink.name} — nube`}
                loading="lazy"
                width={900}
                height={1100}
                className={cn(
                  "mx-auto h-52 w-auto object-contain drop-shadow-xl",
                  !drink.floating && "rounded-2xl",
                )}
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
                <div className="overflow-hidden rounded-3xl bg-sky-wash p-1">
                  <img
                    src={openDrink.image}
                    alt={`${openDrink.name} — nube`}
                    width={900}
                    height={1100}
                    className={cn(
                      "animate-in fade-in zoom-in-95 mx-auto h-56 w-auto object-contain drop-shadow-2xl duration-500",
                      !openDrink.floating && "rounded-2xl",
                    )}
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