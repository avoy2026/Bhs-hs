import HeroParallaxDemo from "@/components/hero-parallax-demo";
import Cards from "@/blocks/interface-crafts-cards";
import LampDemo from "@/components/lamp-demo";

export default function EventsPage() {
  return (
    <main className="section-light overflow-hidden">
      <HeroParallaxDemo />
      <Cards />
      <LampDemo/>
    </main>
  );
}
