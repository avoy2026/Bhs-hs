import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <MacbookScroll
        title={
          <span>
            Open a window into{" "}
            <span className="text-[var(--brand-gold)]">school life</span>
            <br />
            Scroll, and the campus comes into view.
          </span>
        }
        src="/images/img-slider-1.jpeg"
        showGradient={false}
      />
    </div>
  );
}
