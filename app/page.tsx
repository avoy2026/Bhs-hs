import CoverDemo from "@/components/cover-demo";
import ImagesSliderDemo from "@/components/images-slider-demo";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import LampDemo from "@/components/lamp-demo";
import LinkPreviewDemo from "@/components/link-preview-demo";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Cinematic hero */}
      <ImagesSliderDemo />
      {/* Dark showcase */}
      <CoverDemo />
      {/* Light reading / campus */}
      <MacbookScrollDemo />
      <LinkPreviewDemo />
      {/* Dark showcase */}
      <LampDemo />
      <InfiniteMovingCardsDemo />
    </main>
  );
}
