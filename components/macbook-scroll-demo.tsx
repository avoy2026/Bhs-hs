import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[var(--brand-fog)] via-white to-[var(--brand-warm)]">
      <MacbookScroll
        title={
          <span>
            Open a window into{" "}
            <span className="bg-gradient-to-r from-[var(--brand-gold)] to-amber-500 bg-clip-text text-transparent">school life</span>
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
