
import FocusCardsDemo from "@/components/focus-cards-demo";
import TimelineDemo from "@/components/timeline-demo";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import LampDemo from "@/components/lamp-demo";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
       <LampDemo />
      <TimelineDemo />
      <AppleCardsCarouselDemo />
      <FocusCardsDemo />
    </main>
  );
}
