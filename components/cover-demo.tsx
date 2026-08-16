import React from "react";
import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <section className="section-dark relative flex w-full flex-col items-center justify-center px-4 py-24 md:py-32">
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
        Our Promise
      </p>
      <h1 className="relative z-20 mx-auto max-w-7xl py-6 text-center text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 md:text-5xl lg:text-6xl">
        Excellence in learning <br /> at <Cover>Boromohonpur</Cover>
      </h1>
      <p className="relative z-20 mt-2 max-w-2xl text-center text-sm text-slate-400 md:text-base">
        Building character, curiosity, and confidence — one student at a time.
      </p>
    </section>
  );
}
