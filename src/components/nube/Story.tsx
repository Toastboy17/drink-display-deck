import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

const principles = [
  { k: "01", tKey: "story.p1t", dKey: "story.p1d" },
  { k: "02", tKey: "story.p2t", dKey: "story.p2d" },
  { k: "03", tKey: "story.p3t", dKey: "story.p3d" },
];

export default function Story() {
  const { t } = useI18n();
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
            <p className="label-caps text-[#FFD1E0]">{t("story.eyebrow")}</p>
            <h2 className="mt-4 max-w-[18ch] text-[#F2F7FA]">
              {t("story.titleA")} <span className="text-[#C2E9FF]">{t("hero.titleB")}</span>
            </h2>
            <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-[#DCEDF7]">
              {t("story.p1")}
            </p>
            <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-[#AECDDD]">
              {t("story.p2")}
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.k}>
                  <span className="font-display text-[30px] leading-none text-[#C2E9FF]/45">
                    {p.k}
                  </span>
                  <h3 className="mt-3 text-[22px] text-[#F2F7FA]">{t(p.tKey)}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[#AECDDD]">{t(p.dKey)}</p>
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
