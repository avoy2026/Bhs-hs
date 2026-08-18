import CanvasTextDemo from "@/components/canvas-text-demo";
import FocusCardsDemo from "@/components/focus-cards-demo";
import TimelineDemo from "@/components/timeline-demo";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <CanvasTextDemo />
      <TimelineDemo />
      <AppleCardsCarouselDemo />
      <FocusCardsDemo />
    </main>
  );
}
