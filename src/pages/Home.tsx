import { Hero } from "../components/Hero";
import { TrustIndicators } from "../components/TrustIndicators";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { AboutBrand } from "../components/AboutBrand";
import { B2BSection } from "../components/B2BSection";
import { FAQ } from "../components/FAQ";
import { BottomHero } from "../components/BottomHero";

export function Home() {
  return (
    <div className="pt-20"> {/* Offset for fixed navbar */}
      <Hero />
      <TrustIndicators />
      <FeaturedProducts />
      <AboutBrand />
      <B2BSection />
      <FAQ />
      <BottomHero />
    </div>
  );
}
