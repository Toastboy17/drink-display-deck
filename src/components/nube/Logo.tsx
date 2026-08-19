import { media } from "@/data/nube";

/**
 * The nube brand mark: pale ice-blue cloud wordmark over "ZURICH".
 * The source PNG is already cut out (628x251), so it sits directly on the dark theme.
 */
export default function Logo({
  height,
  className = "",
  priority = false,
}: {
  /** Rendered height in px. Width follows the mark's natural 628:251 ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={media.logo}
      alt="nube Zürich"
      width={628}
      height={251}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      style={height ? { height, width: "auto" } : undefined}
      className={`select-none object-contain ${className}`}
    />
  );
}
