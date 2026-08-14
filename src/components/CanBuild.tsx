import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Cinematic hero sequence: mango pours in, ice drops, milk swirls,
 * matcha pours over, the can seals and the logo stamps on.
 */
export function CanBuild({ photo, alt }: { photo: string; alt: string }) {
  const [step, setStep] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const steps = [400, 1200, 2000, 2800, 3500, 4200];
    timers.current = steps.map((ms, i) =>
      window.setTimeout(() => setStep(i + 1), ms),
    );
    return () => timers.current.forEach(window.clearTimeout);
  }, []);

  return (
    <div className="relative mx-auto aspect-4/5 w-full max-w-md">
      {/* can body */}
      <div className="absolute inset-x-[18%] top-[6%] bottom-[4%] overflow-hidden rounded-[2.2rem] border border-border bg-card/40 backdrop-blur-[2px] shadow-lift">
        {/* mango */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 bg-[oklch(0.86_0.16_85)] transition-all duration-[900ms] ease-out",
            step >= 1 ? "h-[34%]" : "h-0",
          )}
        />
        {/* ice */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-[30%] flex flex-wrap gap-2 transition-all duration-700",
            step >= 2 ? "translate-y-0 opacity-90" : "-translate-y-8 opacity-0",
          )}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="size-7 rounded-lg bg-cloud/70 shadow-[0_2px_10px_oklch(0.9_0.05_232/0.6)]"
            />
          ))}
        </div>
        {/* milk */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-[32%] bg-[oklch(0.985_0.008_95)] transition-all duration-[900ms] ease-out",
            step >= 3 ? "h-[36%]" : "h-0",
          )}
        />
        {/* matcha */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 bg-[oklch(0.68_0.13_140)] transition-all duration-[900ms] ease-out",
            step >= 4 ? "h-[32%]" : "h-0",
          )}
        />
        {/* seal */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-4 bg-cloud transition-transform duration-500",
            step >= 5 ? "translate-y-0" : "-translate-y-6",
          )}
        />
        {/* logo stamp */}
        <span
          className={cn(
            "font-display absolute inset-x-0 top-[48%] text-center text-4xl text-background transition-all duration-700",
            step >= 6 ? "scale-100 opacity-100" : "scale-125 opacity-0",
          )}
        >
          nube
        </span>
      </div>

      {/* real photo crossfades in at the end */}
      <img
        src={photo}
        alt={alt}
        width={1408}
        height={1408}
        className={cn(
          "absolute inset-0 h-full w-full rounded-4xl object-cover shadow-lift transition-opacity duration-[1200ms]",
          step >= 6 ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
