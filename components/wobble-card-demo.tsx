"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <section className="section-soft relative isolate overflow-hidden section-pad">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 mb-10">
        <p className="eyebrow block mb-3 text-center">Campus introduction</p>
        <h2 className="mx-auto max-w-3xl text-center font-display font-semibold section-heading-title text-[var(--brand-navy)]">
          <span className="heading-underline">A campus that has grown with its village</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base text-[var(--muted-foreground)]">
          Hover each card to feel the gentle tilt of a small campus that still
          remembers every student who has walked through its gate.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 md:px-8">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[320px]"
        className=""
      >
        <div className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/images/campus/campus-wide-view.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-md">
          <span className="text-[0.7rem] md:text-xs font-semibold tracking-[0.24em] uppercase text-[var(--brand-gold)]">
            The campus
          </span>
          <h2 className="mt-3 text-left text-balance text-xl md:text-2xl lg:text-4xl font-display font-semibold tracking-[-0.015em] text-white">
            A school that has grown with its village.
          </h2>
          <p className="mt-4 text-left text-sm md:text-base leading-relaxed text-white/85">
            Baramohanpur High School has stood at the centre of learning in
            Baramohanpur for generations — a familiar, trusted place for
            families in the community.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[320px]">
        <span className="text-[0.7rem] md:text-xs font-semibold tracking-[0.24em] uppercase text-[var(--brand-gold)]">
          In classrooms
        </span>
        <h2 className="mt-3 max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-display font-semibold tracking-[-0.015em] text-white">
          Learning spaces designed for curiosity.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm md:text-base leading-relaxed text-white/85">
          Bright rooms, laboratories and a computer centre where students
          develop the practical habits that last a lifetime.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[340px] xl:min-h-[320px]">
        <div className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/images/campus/school-ground.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-2xl">
          <span className="text-[0.7rem] md:text-xs font-semibold tracking-[0.24em] uppercase text-[var(--brand-gold)]">
            The promise
          </span>
          <h2 className="mt-3 max-w-sm md:max-w-2xl text-left text-balance text-xl md:text-2xl lg:text-4xl font-display font-semibold tracking-[-0.015em] text-white">
            Knowledge, confidence, discipline, character — and a place to
            belong.
          </h2>
          <p className="mt-4 max-w-[38rem] text-left text-sm md:text-base leading-relaxed text-white/85">
            Education at Baramohanpur High School is about more than books and
            examinations. It is about preparing each student for the world
            waiting outside the campus gate.
          </p>
        </div>
      </WobbleCard>
    </div>
    </section>
  );
}
