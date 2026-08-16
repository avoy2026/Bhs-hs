import CoverDemo from "@/components/cover-demo";
import ImagesSliderDemo from "@/components/images-slider-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import LampDemo from "@/components/lamp-demo";
import LinkPreviewDemo from "@/components/link-preview-demo";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Cinematic hero */}
      <ImagesSliderDemo />
      {/* Dark showcase band */}
      <CoverDemo />
      <MacbookScrollDemo />
      {/* Light reading band */}
      <LinkPreviewDemo />
      {/* Dark showcase band */}
      <InfiniteMovingCardsDemo />
      <LampDemo/>
        <AppleCardsCarouselDemo/>
    </main>
  );
}
