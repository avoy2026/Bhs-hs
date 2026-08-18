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
      <section className="flex min-h-0 w-full flex-col border-t border-[var(--border)] md:flex-row">
        <div className="w-full border-b border-[var(--border)] md:w-1/2 md:border-r md:border-b-0">
          <LinkPreviewDemo />
        </div>
        <div className="w-full md:w-1/2">
          <AnimatedTestimonialsDemo />
        </div>
      </section>
      <section className="flex min-h-0 w-full flex-col border-t border-[var(--border)] md:flex-row">
        <div className="w-full border-b border-[var(--border)] md:w-1/2 md:border-r md:border-b-0">
          <InfiniteMovingCardsDemo />
        </div>
        <div className="w-full md:w-1/2">
          <CanvasTextDemo />
        </div>
      </section>
    </main>
  );
}
