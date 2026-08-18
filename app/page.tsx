import CoverDemo from "@/components/cover-demo";
import ImagesSliderDemo from "@/components/images-slider-demo";
import SchoolGlories from "@/components/school-glories";
import CanvasTextDemo from "@/components/canvas-text-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import LinkPreviewDemo from "@/components/link-preview-demo";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import TimelineDemo from "@/components/timeline-demo";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <ImagesSliderDemo />
      <SchoolGlories />
      <AppleCardsCarouselDemo />
      <TimelineDemo />
      <MacbookScrollDemo />
      <CoverDemo />
      <LinkPreviewDemo />
      <section className="relative isolate overflow-hidden bg-[var(--brand-fog)]">
        <AnimatedTestimonialsDemo />
      </section>
      <InfiniteMovingCardsDemo />
      <CanvasTextDemo />
    </main>
  );
}
