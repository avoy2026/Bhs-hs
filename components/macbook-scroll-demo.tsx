import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="section-light w-full overflow-hidden">
      <MacbookScroll
        title={
          <span className="text-[var(--brand-navy)]">
            A proud tradition of learning at Boromohonpur. <br /> Scroll to see
            our campus life.
          </span>
        }
        badge={
          <a href="/">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/images/achievemenets.jpeg`}
        showGradient={false}
      />
    </div>
  );
}

const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#1B2A4A"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#13203a"
      ></path>
      <text
        x="28"
        y="34"
        textAnchor="middle"
        fill="#C9A227"
        fontSize="12"
        fontWeight="700"
        fontFamily="serif"
      >
        BHS
      </text>
    </svg>
  );
};
