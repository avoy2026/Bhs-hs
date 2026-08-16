import CanvasTextDemo from "@/components/canvas-text-demo";
import FocusCardsDemo from "@/components/focus-cards-demo";
import TimelineDemo from "@/components/timeline-demo";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <CanvasTextDemo/>
      <FocusCardsDemo />
      <TimelineDemo />
    </main>
  );
}
