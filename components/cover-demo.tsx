import React from "react";
import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[var(--brand-fog)] to-white px-4 py-28 md:py-36">
      {/* Decorative radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgb(201_162_39/6%),transparent)]"
      />
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--brand-emerald)] uppercase">
        Our promise
      </p>
      <h1 className="relative z-20 mx-auto max-w-7xl py-6 text-center text-5xl font-semibold text-[var(--brand-navy)] md:text-6xl lg:text-7xl">
        Every child who walks in <br /> leaves as a{" "}
        <Cover>Baramohanpur student</Cover>
      </h1>
      <p className="relative z-20 mt-2 max-w-2xl text-center text-base text-[var(--brand-navy)]/70 md:text-lg">
        We teach the syllabus. We also teach courage, courtesy, and the habit of
        finishing what you start.
      </p>
    </section>
  );
}
