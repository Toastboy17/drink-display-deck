import { createFileRoute } from "@tanstack/react-router";
import heroCan from "@/assets/hero-can.jpg";
import { MenuBoard } from "@/components/MenuBoard";

const title = "nube — Specialty Coffee & Matcha in Zürich";
const description =
  "Step into cloud 9. Premium matcha, specialty coffee and refreshers, freshly sealed in transparent cans. Explore the interactive menu with nutrition for every drink.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "About" },
  { href: "#visit", label: "Visit" },
  { href: "#faq", label: "FAQ" },
];

const pillars = [
  {
    title: "Sealed transparent cans",
    body: "Every cold drink is prepared and sealed to order — take-away ready, still beautiful.",
  },
  {
    title: "Premium matcha",
    body: "Sourced for exceptional taste and colour. The heart of everything we make.",
  },
  {
    title: "Specialty coffee",
    body: "Carefully selected beans, pulled into classics and signature creations.",
  },
  {
    title: "Japanese-inspired",
    body: "Drinks and desserts shaped by modern Tokyo café culture.",
  },
];

const faqs = [
  { q: "Are you takeaway only?", a: "Yes. nube is currently a takeaway-only concept." },
  { q: "Do you offer vegan options?", a: "Every drink on the board is available as a vegan version." },
  { q: "Are your drinks freshly prepared?", a: "Always. Each one is made and sealed to order." },
  {
    q: "Why cans?",
    a: "Our transparent cans keep drinks fresh, easy to carry, and show off every layer.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-2xl leading-none">
            nube
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#visit"
            className="rounded-full bg-primary px-4 py-2 text-xs tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Visit us
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="bg-sky-wash">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="eyebrow">Specialty coffee &amp; matcha — Zürich</p>
              <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
                Step into
                <br />
                <em className="italic">cloud 9.</em>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Premium matcha, specialty coffee and handcrafted refreshers — freshly prepared and
                sealed to order in our signature transparent cans.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Explore the menu
                </a>
                <a
                  href="#visit"
                  className="rounded-full border border-foreground/15 px-6 py-3 text-sm transition-colors hover:bg-card"
                >
                  Kirchgasse 3, 8001
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroCan}
                alt="Transparent nube can filled with layered iced matcha latte floating in the clouds"
                width={1408}
                height={1408}
                className="mx-auto w-full max-w-md rounded-4xl object-cover shadow-lift"
              />
            </div>
          </div>
        </section>

        {/* Interactive menu */}
        <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:py-28">
          <div className="max-w-xl">
            <p className="eyebrow">Our menu</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Four ways into cloud 9</h2>
            <p className="mt-4 text-muted-foreground">
              Move across the board — each drink reveals its portrait and full nutrition. Seasonal
              specials rotate throughout the year.
            </p>
          </div>
          <div className="mt-12">
            <MenuBoard />
          </div>
        </section>

        {/* Story */}
        <section id="story" className="scroll-mt-20 border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-4 text-4xl md:text-5xl">
                Ordinary drinks deserve extraordinary attention.
              </h2>
              <p className="mt-5 text-muted-foreground">
                We elevate everyday moments by combining premium ingredients, thoughtful
                craftsmanship and beautiful presentation. We don&apos;t just serve drinks — we make
                small experiences you can carry through the city.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-border bg-background p-6 transition-shadow hover:shadow-soft"
                >
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:py-24">
          <p className="eyebrow">Visit us</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Come say hello</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-accent/40 p-6">
              <p className="eyebrow">Location</p>
              <p className="mt-3 text-lg">Kirchgasse 3</p>
              <p className="text-muted-foreground">8001 Zürich, Switzerland</p>
            </div>
            <div className="rounded-3xl bg-accent/40 p-6">
              <p className="eyebrow">Opening hours</p>
              <p className="mt-3 text-lg">Mon – Sat, 12:00 – 18:00</p>
              <p className="text-muted-foreground">Sunday closed</p>
            </div>
            <div className="rounded-3xl bg-accent/40 p-6">
              <p className="eyebrow">Say hi</p>
              <a href="https://wa.me/41799525055" className="mt-3 block text-lg underline-offset-4 hover:underline">
                +41 79 952 50 55
              </a>
              <a
                href="mailto:info@nubeworldwide.com"
                className="text-muted-foreground underline-offset-4 hover:underline"
              >
                info@nubeworldwide.com
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 pb-24">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-4xl">Good to know</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-5 py-10 text-sm text-muted-foreground">
          <span className="font-display text-2xl text-foreground">nube</span>
          <span>Instagram &amp; TikTok — @nubeworldwide</span>
          <span>© nube worldwide</span>
        </div>
      </footer>
    </div>
  );
}
