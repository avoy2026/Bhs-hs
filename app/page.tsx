import CoverDemo from "@/components/cover-demo";
import ImagesSliderDemo from "@/components/images-slider-demo";
import CanvasTextDemo from "@/components/canvas-text-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import LinkPreviewDemo from "@/components/link-preview-demo";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Cinematic hero */}
      <ImagesSliderDemo />
      <CanvasTextDemo/>
      <MacbookScrollDemo />
      {/* Light reading band */}
      <LinkPreviewDemo />
      {/* Dark showcase band */}
      <InfiniteMovingCardsDemo />
      <AppleCardsCarouselDemo/>
      {/* Dark showcase band */}
      <CoverDemo />
    </main>
  );
}
