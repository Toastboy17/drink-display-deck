import { createFileRoute } from "@tanstack/react-router";
import CustomCursor from "@/components/nube/CustomCursor";
import Navbar from "@/components/nube/Navbar";
import Hero from "@/components/nube/Hero";
import ScrollScrubReveal from "@/components/nube/ScrollScrubReveal";
import Marquee from "@/components/nube/Marquee";
import Menu from "@/components/nube/Menu";
import Story from "@/components/nube/Story";
import DriftGallery from "@/components/nube/DriftGallery";
import Reviews from "@/components/nube/Reviews";
import Footer from "@/components/nube/Footer";

const title = "nube Zürich — Your Way Into Cloud Nine · Coffee & Matcha";
const description =
  "nube is a specialty coffee bar in Zürich: iced lattes, matcha whisked to order and layered fruit matchas, hand-poured at Kirchgasse 3. Mon–Sat 12–18.";

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

function Index() {
  return (
    <div className="min-h-screen w-full bg-[#10303d]">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <ScrollScrubReveal />
        <Marquee />
        <Menu />
        <Story />
        <DriftGallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
