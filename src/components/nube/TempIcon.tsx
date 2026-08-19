import type { Drink } from "@/data/nube";

const COLORS: Record<Drink["temp"], string> = {
  Cold: "#C2E9FF",
  Whisked: "#FFD1E0",
  Blended: "#C2E9FF",
  Hot: "#FFD1E0",
};

/** Tiny hand-drawn glyphs for each preparation style — ice cube, whisk, swirl, steam. */
function Glyph({ temp }: { temp: Drink["temp"] }) {
  const c = COLORS[temp];
  const common = { stroke: c, strokeWidth: 1.2, fill: "none", strokeLinecap: "round" as const };
  if (temp === "Cold")
    return (
      <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden>
        <path {...common} d="M3 5.2 8 2.5l5 2.7v5.6L8 13.5 3 10.8z" />
        <path {...common} d="M3 5.2 8 8m0 0 5-2.8M8 8v5.5" />
      </svg>
    );
  if (temp === "Whisked")
    return (
      <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden>
        <path {...common} d="M8 2v4" />
        <path {...common} d="M5 6.4c0 3 1 5.4 3 7.1 2-1.7 3-4.1 3-7.1" />
        <path {...common} d="M8 6.4v7.1M6.3 8.6h3.4" />
      </svg>
    );
  if (temp === "Blended")
    return (
      <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden>
        <path {...common} d="M13 8a5 5 0 1 1-2.6-4.4M8 8a2.4 2.4 0 1 0 2.4 2.4" />
      </svg>
    );
  return (
    <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden>
      <path {...common} d="M5.5 8c1.4-1.2-1.4-2.6 0-4M8 8c1.4-1.2-1.4-2.6 0-4M10.5 8c1.4-1.2-1.4-2.6 0-4" />
      <path {...common} d="M4 10.2h8v1.2a2.6 2.6 0 0 1-2.6 2.6H6.6A2.6 2.6 0 0 1 4 11.4z" />
    </svg>
  );
}

export default function TempIcon({ temp }: { temp: Drink["temp"] }) {
  return (
    <span
      className="label-caps inline-flex items-center gap-1.5"
      style={{ color: COLORS[temp] }}
    >
      <Glyph temp={temp} />
      {temp}
    </span>
  );
}
