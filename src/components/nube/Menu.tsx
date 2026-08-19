import { motion } from "framer-motion";
import { drinks } from "@/data/nube";
import TiltCard from "@/components/nube/TiltCard";
import Logo from "@/components/nube/Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Menu() {
  return (
    <section id="menu" className="section-ice px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-end">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <Logo aria-hidden className="h-[30px] opacity-75" />
              <p className="label-caps text-[#C2E9FF]">The pour list</p>
            </div>
            <h2 className="mt-4 text-[#F2F7FA]">Ten ways to stay cold</h2>
          </div>
          <p className="max-w-[42ch] text-[15px] text-[#AECDDD] lg:col-span-2 lg:pb-4">
            Nothing is pre-batched into a syrup. Every glass is layered when you order it at the
            counter. No app, no queue online — just come by.
          </p>
        </div>

        <div className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink, i) => (
            <TiltCard key={drink.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: EASE, delay: (i % 4) * 0.07 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[22px] border border-[#C2E9FF]/15 bg-[#1a4150]">
                  <img
                    src={drink.img}
                    alt={`${drink.name} — ${drink.notes}`}
                    loading={i < 4 ? "eager" : "lazy"}
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="label-caps absolute left-4 top-4 rounded-full border border-[#C2E9FF]/25 bg-[#0b2330]/70 px-3 py-1.5 text-[#C2E9FF] backdrop-blur-sm">
                    {drink.temp}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[#F2F7FA]">{drink.name}</h3>
                    <p className="mt-1.5 text-[13px] text-[#AECDDD]">{drink.tagline}</p>
                  </div>
                  <span
                    className="font-display text-[24px] leading-none tabular-nums"
                    style={{ color: i % 2 === 0 ? "#C2E9FF" : "#FFD1E0" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 border-t border-[#C2E9FF]/10 pt-3 text-[13px] text-[#9BBACB]">
                  {drink.notes}
                </p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
