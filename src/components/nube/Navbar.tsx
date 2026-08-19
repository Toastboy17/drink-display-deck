import { motion } from "framer-motion";
import { useEffect, useState, type Ref } from "react";
import { MapPin } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import Logo from "@/components/nube/Logo";
import LanguageSwitcher from "@/components/nube/LanguageSwitcher";
import { useI18n } from "@/i18n";

const links = [
  { key: "nav.menu", href: "#menu" },
  { key: "nav.story", href: "#story" },
  { key: "nav.visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const magnet = useMagnetic(0.3);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-120 transition-colors duration-500"
      style={{
        background: scrolled ? "rgba(16,48,61,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(194,233,255,0.09)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex h-[76px] max-w-screen-2xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          data-cursor="hover"
          aria-label="nube Zürich — back to top"
          className="transition-opacity duration-300 hover:opacity-75"
        >
          <Logo height={42} priority className="h-[38px] sm:h-[44px]" />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="hover"
              className="label-caps text-[#AECDDD] transition-colors duration-200 hover:text-[#C2E9FF]"
            >
              {t(l.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageSwitcher />
          <motion.a
          ref={magnet.ref as Ref<HTMLAnchorElement>}
          href="#visit"
          onMouseMove={magnet.onMouseMove}
          onMouseLeave={magnet.onMouseLeave}
          data-cursor="hover"
          style={{ x: magnet.x, y: magnet.y }}
          className="label-caps flex items-center gap-2.5 rounded-full bg-[#C2E9FF] px-5 py-2.5 text-[#0b2330] transition-colors duration-200 hover:bg-[#FFD1E0]"
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
          <span>{t("nav.findUs")}</span>
          </motion.a>
        </div>
      </nav>
    </header>
  );
}
