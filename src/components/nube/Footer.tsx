import { Link } from "@tanstack/react-router";
import Logo from "@/components/nube/Logo";
import { site } from "@/data/nube";
import { useI18n } from "@/i18n";
import artHeart from "@/assets/nube/art-heart.png.asset.json";
import artCloudNine from "@/assets/nube/art-cloud-nine.png.asset.json";
import artCanWalk from "@/assets/nube/art-can-walk.png.asset.json";

/** Hand-drawn studio pieces that sit beside the wordmark as a closing signature. */
const artworks = [
  { src: artHeart.url, alt: "nube worldwide hand-lettered heart", tilt: -5 },
  { src: artCloudNine.url, alt: "Step into cloud nine — meditating nube cloud character", tilt: 3 },
  { src: artCanWalk.url, alt: "Walking nube can character line drawing", tilt: -3 },
];

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer
      id="visit"
      className="section-ice border-t border-[#C2E9FF]/20 px-5 pb-10 pt-14 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="w-full max-w-[300px] sm:max-w-[360px]" />
            <p className="mt-5 max-w-[38ch] text-[15px] text-[#AECDDD]">
              {t("footer.tagline")}
            </p>

            {/* Studio artwork: three hand-drawn pieces floating beside the wordmark. */}
            <div className="mt-8">
              <p className="label-caps text-[#FFD1E0]/80">{t("footer.art")}</p>
              <div className="mt-4 flex flex-wrap items-end gap-5 sm:gap-7">
                {artworks.map((art, i) => (
                  <div
                    key={art.src}
                    data-cursor="hover"
                    className="group relative"
                    style={{ animationDelay: `${i * 1.4}s` }}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                      style={{
                        background:
                          i === 1
                            ? "radial-gradient(circle, rgba(255,209,224,0.45) 0%, transparent 70%)"
                            : "radial-gradient(circle, rgba(194,233,255,0.4) 0%, transparent 70%)",
                      }}
                    />
                    <img
                      src={art.src}
                      alt={art.alt}
                      loading="lazy"
                      style={{ rotate: `${art.tilt}deg` }}
                      className="animate-drift relative h-[86px] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-0 sm:h-[112px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="label-caps text-[#C2E9FF]">{t("footer.visit")}</p>
            <address className="mt-5 text-[15px] not-italic leading-relaxed text-[#DCEDF7]">
              {site.street}
              <br />
              {site.city}
              <br />
              {t("footer.area")}
            </address>
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="mt-4 inline-block text-[15px] text-[#AECDDD] transition-colors duration-200 hover:text-[#FFD1E0]"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="mt-2 block text-[15px] text-[#AECDDD] transition-colors duration-200 hover:text-[#FFD1E0]"
            >
              {site.phone}
            </a>
          </div>

          <div className="lg:col-span-4">
            <p className="label-caps text-[#FFD1E0]">{t("footer.hours")}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                { d: t("footer.weekdays"), h: "12:00 — 18:00" },
                { d: t("footer.sunday"), h: t("footer.closed") },
              ].map((row) => (
                <li
                  key={row.d}
                  className="flex items-baseline justify-between border-b border-[#C2E9FF]/10 pb-3 text-[15px]"
                >
                  <span className="text-[#DCEDF7]">{row.d}</span>
                  <span className="tabular-nums text-[#AECDDD]">{row.h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-[18px] border border-[#C2E9FF]/15">
              <iframe
                title="nube Zürich on the map"
                src="https://www.google.com/maps?q=Kirchgasse%203,%208001%20Z%C3%BCrich&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[190px] w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#C2E9FF]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-caps text-[#9BBACB]">© {new Date().getFullYear()} nube Zürich</p>
          <div className="label-caps flex flex-wrap gap-6 text-[#9BBACB]">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="transition-colors hover:text-[#C2E9FF]"
            >
              Instagram
            </a>
            <Link to="/impressum" data-cursor="hover" className="transition-colors hover:text-[#C2E9FF]">
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              data-cursor="hover"
              className="transition-colors hover:text-[#C2E9FF]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
