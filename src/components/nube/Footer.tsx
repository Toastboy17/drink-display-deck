import { Link } from "@tanstack/react-router";
import Logo from "@/components/nube/Logo";
import { site } from "@/data/nube";

export default function Footer() {
  return (
    <footer
      id="visit"
      className="section-ice border-t border-[#C2E9FF]/20 px-5 pb-10 pt-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="w-full max-w-[300px] sm:max-w-[360px]" />
            <p className="mt-5 max-w-[38ch] text-[15px] text-[#AECDDD]">
              Cold, clean, unhurried coffee in Zürich. Sip slower, made effortless.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="label-caps text-[#C2E9FF]">Visit</p>
            <address className="mt-5 text-[15px] not-italic leading-relaxed text-[#DCEDF7]">
              {site.street}
              <br />
              {site.city}
              <br />
              {site.area}
            </address>
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="mt-4 inline-block text-[15px] text-[#AECDDD] transition-colors duration-200 hover:text-[#FFD1E0]"
            >
              {site.email}
            </a>
          </div>

          <div className="lg:col-span-4">
            <p className="label-caps text-[#FFD1E0]">Hours</p>
            <ul className="mt-5 flex flex-col gap-3">
              {site.hours.map((row) => (
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

        <div className="mt-16 flex flex-col gap-4 border-t border-[#C2E9FF]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
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
