import Logo from "@/components/nube/Logo";
import { site } from "@/data/nube";

const phrases = [
  "Sip slower, made effortless",
  "Hand-poured to order",
  "No syrup shortcuts",
  "Liquid Ice",
  `Zürich · ${site.street}`,
  "Matcha whisked to order",
];

export default function Marquee() {
  const strip = [...phrases, ...phrases];

  return (
    <section className="section-blush relative overflow-hidden border-y border-[#C2E9FF]/20 py-7">
      <div className="flex w-max animate-marquee items-center">
        {strip.map((phrase, i) => (
          <span key={`${phrase}-${i}`} className="flex items-center whitespace-nowrap">
            <span className="font-display text-[clamp(28px,4vw,54px)] leading-none tracking-[0.06em] text-[#F2F7FA]/85">
              {phrase}
            </span>
            {/* Every third gap carries the brand mark instead of a plain dot. */}
            {i % 3 === 2 ? (
              <Logo aria-hidden className="mx-7 h-[34px] opacity-70 sm:mx-11 sm:h-[42px]" />
            ) : (
              <span
                className="mx-8 inline-block h-[7px] w-[7px] rounded-full sm:mx-12"
                style={{ background: i % 2 === 0 ? "#C2E9FF" : "#FFD1E0" }}
              />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
