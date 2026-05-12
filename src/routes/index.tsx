import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Bubbles } from "@/components/site/Bubbles";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PergoClean — Premium Pergola Temizliği ve Restorasyonu | Ankara · Antalya" },
      { name: "description", content: "PergoClean: pergola, BioClimatic, RollingRoof, Wintent ve dış mekan sistemlerinde 19+ yıl tecrübeyle profesyonel temizlik, bakım ve restorasyon hizmeti. Ankara ve Antalya." },
      { property: "og:title", content: "PergoClean — Profesyonel Pergola Restorasyonu" },
      { property: "og:description", content: "Temizlik değil, profesyonel restorasyon. Kumaşı değiştirmeden ilk günkü premium görünüm." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Bubbles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <PriceCalculator />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <BlogPreview />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
