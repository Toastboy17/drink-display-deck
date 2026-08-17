import { useI18n } from "@/i18n";
import { menu } from "@/data/menu";
import icedMatcha from "@/assets/iced-matcha-latte.jpg.asset.json";
import cappuccino from "@/assets/cappuccino.png.asset.json";
import icedLatte from "@/assets/iced-latte.jpg.asset.json";
import mangoShake from "@/assets/mango-shake.jpg.asset.json";

const art: Record<string, string> = {
  matcha: icedMatcha.url,
  hot: cappuccino.url,
  coffee: icedLatte.url,
  shakes: mangoShake.url,
};

/** Expanding editorial panels — one per menu category. */
export function CategoryPanels() {
  const { tl } = useI18n();

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:flex lg:h-[26rem] lg:gap-3">
      {menu.map((category, i) => (
        <a
          key={category.id}
          href="#menu"
          className="group relative isolate flex h-56 items-end overflow-hidden rounded-[1.75rem] border border-border bg-ink transition-all duration-500 ease-out lg:h-full lg:flex-1 lg:hover:flex-[1.9]"
        >
          <img
            src={art[category.id] ?? icedMatcha.url}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent"
          />

          <div className="relative w-full p-5">
            <p className="rule-label text-cloud/80">0{i + 1}</p>
            <h3 className="mt-2 display-lg text-cream">{tl(category.label)}</h3>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-cream/0 transition-colors duration-500 group-hover:text-cream/70 lg:text-cream/60">
              {tl(category.note)}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="absolute top-5 right-5 h-px w-8 origin-right scale-x-0 bg-rose transition-transform duration-500 group-hover:scale-x-100"
          />
        </a>
      ))}
    </div>
  );
}