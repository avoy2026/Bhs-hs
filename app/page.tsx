import CoverDemo from "@/components/cover-demo";
import ImagesSliderDemo from "@/components/images-slider-demo";
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
      {/* Cinematic hero */}
      <ImagesSliderDemo />
      <AppleCardsCarouselDemo/>
      <div className="flex flex-col md:flex-row w-full min-h-screen border-2 border-gray-800">
  <div className="w-full md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-gray-800 flex items-center justify-center">
    <TimelineDemo />
  </div>

  <div className="w-full md:w-1/2 flex items-center justify-center">
  <MacbookScrollDemo />
  </div>
</div>     
     <CoverDemo />
      {/* Light reading band */}
      <LinkPreviewDemo />
      <div className="flex flex-col md:flex-row w-full min-h-screen border-2 border-gray-800">
  <div className="w-full md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-gray-800 flex items-center justify-center">
    <AnimatedTestimonialsDemo/>
  </div>

  <div className="w-full md:w-1/2 flex items-center justify-center">
  <InfiniteMovingCardsDemo />
  </div>
</div>
      {/* Dark showcase band */}
      {/* Dark showcase band */}
 <CanvasTextDemo/>
    </main>
  );
}
