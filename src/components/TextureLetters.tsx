import matcha from "@/assets/gen-texture-matcha.jpg";
import coffee from "@/assets/gen-texture-coffee.jpg";
import rose from "@/assets/gen-texture-rose.jpg";
import cream from "@/assets/gen-texture-cream.jpg";

const panels = [
  { letter: "N", label: "MATCHA", image: matcha },
  { letter: "U", label: "COFFEE", image: coffee },
  { letter: "B", label: "BERRY", image: rose },
  { letter: "E", label: "CREAM", image: cream },
];

/** Four liquid-texture panels spelling NUBE. */
export function TextureLetters() {
  return (
    <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
      {panels.map((p) => (
        <div key={p.letter} className="group relative isolate h-64 overflow-hidden md:h-[24rem]">
          <img
            src={p.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-ink/35 transition-colors duration-500 group-hover:bg-ink/20"
          />
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-[7rem] leading-none text-cream drop-shadow-[0_10px_30px_rgba(10,20,40,0.55)] md:text-[11rem]">
              {p.letter}
            </span>
          </div>
          <p className="absolute bottom-4 left-0 w-full text-center rule-label text-cream">
            {p.label}
          </p>
        </div>
      ))}
    </div>
  );
}
