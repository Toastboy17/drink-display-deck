import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { langLabels, langShort, langs, useI18n, type Lang } from "@/i18n";

/** Small globe dropdown that switches the whole site between the five languages. */
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("nav.language")}
        aria-expanded={open}
        className="label-caps flex items-center gap-2 rounded-full border border-[#C2E9FF]/30 px-3.5 py-2 text-[#AECDDD] transition-colors duration-200 hover:border-[#C2E9FF]/60 hover:text-[#C2E9FF]"
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={2} />
        <span>{langShort[lang]}</span>
      </button>

      {open && (
        <ul className="absolute right-0 top-[calc(100%+8px)] z-50 w-[150px] overflow-hidden rounded-2xl border border-[#C2E9FF]/20 bg-[#10303d]/95 py-1.5 backdrop-blur-xl">
          {langs.map((l: Lang) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2 text-[13px] transition-colors ${
                  l === lang ? "text-[#C2E9FF]" : "text-[#AECDDD] hover:text-[#F2F7FA]"
                }`}
              >
                {langLabels[l]}
                <span className="label-caps text-[10px] opacity-60">{langShort[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
