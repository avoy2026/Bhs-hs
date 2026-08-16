import HeroParallaxDemo from "@/components/hero-parallax-demo";
import FocusCardsDemo from "@/components/focus-cards-demo";
import Cards from "@/blocks/interface-crafts-cards";

export default function EventsPage() {
  return (
    <main className="section-light overflow-hidden">
      <HeroParallaxDemo />
      <FocusCardsDemo />
      <Cards />
    </main>
  );
}
