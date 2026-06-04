import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/motion-primitives/image-comparison";
import { COMPARISON } from "@/lib/site-data";

/** Shared crop anchor so both comparison layers line up on the face */
const FACE_OBJECT_POSITION = "50% 38%";

export function ImageComparisonBasic() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-xs md:max-w-sm lg:max-w-md">
      <ImageComparison className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
        <ImageComparisonImage
          src="/ImageComparisioBasics/img1.png"
          alt={COMPARISON.before}
          position="left"
          objectPosition={FACE_OBJECT_POSITION}
        />
        <ImageComparisonImage
          src="/ImageComparisioBasics/img2.png"
          alt={COMPARISON.after}
          position="right"
          objectPosition={FACE_OBJECT_POSITION}
        />
        <ImageComparisonSlider className="z-10 w-px bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]">
          <div className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-zinc-900/90 shadow-lg backdrop-blur-sm" />
        </ImageComparisonSlider>
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm sm:text-xs">
          {COMPARISON.before}
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm sm:text-xs">
          {COMPARISON.after}
        </span>
      </ImageComparison>
    </div>
  );
}
