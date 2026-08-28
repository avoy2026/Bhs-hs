"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <section className="section-soft relative isolate overflow-hidden section-pad">
      {/* Section Heading */}
      <div className="relative mx-auto mb-10 max-w-7xl px-4 md:px-8">
        <p className="eyebrow mb-3 block text-center">
          Campus introduction
        </p>

        <h2 className="mx-auto max-w-3xl text-center font-display font-semibold section-heading-title text-brand-navy">
          <span className="heading-underline">
            A campus that has grown with its village
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base text-muted-foreground">
          A glimpse into the spaces, grounds and surroundings that make
          Baramohanpur High School feel like home.
        </p>
      </div>

      {/* Image Grid */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 md:px-8 lg:grid-cols-3">

        {/* Large Campus Image */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full min-h-[320px] md:min-h-[400px] lg:min-h-[420px]"
          className="group overflow-hidden p-0"
        >
          <div
            className="
              absolute inset-0 z-0
              bg-cover bg-center bg-no-repeat
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
            style={{
              backgroundImage:
                "url('/images/campus/campus-wide-view.jpeg')",
            }}
          />

          {/* subtle image treatment */}
          <div className="absolute inset-0 z-1 bg-black/3 transition-colors duration-500 group-hover:bg-black/0" />
        </WobbleCard>

        {/* Classroom Image */}
        <WobbleCard
          containerClassName="col-span-1 min-h-[320px] md:min-h-[400px] lg:min-h-[420px]"
          className="group overflow-hidden p-0"
        >
          <div
            className="
              absolute inset-0 z-0
              bg-cover bg-center bg-no-repeat
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
            style={{
              backgroundImage:
                "url('/images/campus/classroom.jpeg')",
            }}
          />

          <div className="absolute inset-0 z-1 bg-black/3 transition-colors duration-500 group-hover:bg-black/0" />
        </WobbleCard>

        {/* School Ground Image */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 min-h-[320px] md:min-h-[400px] lg:min-h-[420px]"
          className="group overflow-hidden p-0"
        >
          <div
            className="
              absolute inset-0 z-0
              bg-cover bg-center bg-no-repeat
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
            style={{
              backgroundImage:
                "url('/images/campus/school-ground.jpeg')",
            }}
          />

          <div className="absolute inset-0 z-1 bg-black/3 transition-colors duration-500 group-hover:bg-black/0" />
        </WobbleCard>

      </div>
    </section>
  );
}