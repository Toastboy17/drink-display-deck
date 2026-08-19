import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const principles = [
  {
    k: "01",
    t: "No syrup shortcuts",
    d: "Sweetness comes from the bean and the milk, never from a pump bottle behind the counter.",
  },
  {
    k: "02",
    t: "Poured to order",
    d: "Nothing sits in a batch jug. Matcha is whisked, cold brew is drawn, cream is poured in front of you.",
  },
  {
    k: "03",
    t: "Unhurried by design",
    d: "Forty seconds slower than the café next door. That difference is the entire point.",
  },
];

export default function Story() {
  return (
    <section id="story" className="section-blush px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className=""
          >
            <p className="label-caps text-[#FFD1E0]">Our story</p>
            <h2 className="mt-4 max-w-[18ch] text-[#F2F7FA]">
              Taking you to <span className="text-[#C2E9FF]">cloud nine</span>
            </h2>
            <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-[#DCEDF7]">
              nube is a specialty coffee bar in Zürich built around one idea: cold, clean, unhurried
              coffee. From single-origin cold brew to matcha whisked to order, every drink is
              hand-poured in a space lit by soft ice-blue and blush-pink light.
            </p>
            <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-[#AECDDD]">
              We are not loud about it. Confident type, a lot of negative space, and every gesture
              behind the bar deliberate rather than fast. You will wait a little longer here — and
              you will taste it.
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.k}>
                  <span className="font-display text-[30px] leading-none text-[#C2E9FF]/45">
                    {p.k}
                  </span>
                  <h3 className="mt-3 text-[22px] text-[#F2F7FA]">{p.t}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[#AECDDD]">{p.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-[#C2E9FF]/15 pt-6">
              <span className="label-caps text-[#AECDDD]">Zürich · Altstadt</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
