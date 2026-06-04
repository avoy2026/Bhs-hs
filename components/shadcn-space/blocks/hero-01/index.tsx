import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import BrandSlider from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import HunterScrollProfile from "@/components/HunterScrollProfile";
import { NAV_ITEMS, JOURNEY_MARQUEE } from "@/lib/site-data";

export default function AgencyHeroSection() {
  const navigationData: NavigationSection[] = NAV_ITEMS.map((item) => ({
    title: item.title,
    href: item.href,
    isActive: "isActive" in item ? item.isActive : false,
  }));

  return (
    <div className="relative">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection />
        <BrandSlider tags={JOURNEY_MARQUEE.tags} label={JOURNEY_MARQUEE.label} />
        <HunterScrollProfile />
      </main>
    </div>
  );
}

