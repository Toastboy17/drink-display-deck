type Props = {
  items: string[];
  className?: string;
};

/** Endless editorial ticker. Renders the item list twice for a seamless loop. */
export function Marquee({ items, className }: Props) {
  const row = [...items, ...items];
  return (
    <div className={className}>
      <div className="flex w-max marquee-track">
        {row.map((item, i) => (
          <span key={i} className="flex items-center rule-label whitespace-nowrap">
            <span className="px-5 opacity-80">{item}</span>
            <span aria-hidden="true" className="opacity-40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}