"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <section className="section-soft relative isolate overflow-hidden section-pad">
      {/* Section Header */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 mb-10">
        <p className="eyebrow block mb-3 text-center">
          Campus introduction
        </p>

        <h2 className="mx-auto max-w-3xl text-center font-display font-semibold section-heading-title text-[var(--brand-navy)]">
          <span className="heading-underline">
            A campus that has grown with its village
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base text-[var(--muted-foreground)]">
          A familiar place of learning, growth and belonging for generations
          of students.
        </p>
      </div>

      {/* Campus Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full px-4 md:px-8">
        
        {/* LARGE CAMPUS CARD */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 overflow-hidden rounded-3xl bg-transparent shadow-none"
          className="p-0"
        >
          <div className="flex h-full min-h-[430px] flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            
            {/* Image */}
            <div className="relative h-[260px] w-full overflow-hidden md:h-[300px]">
              <img
                src="/images/campus/campus-wide-view.jpeg"
                alt="Baramohanpur High School campus"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />

              {/* Subtle image gradient at bottom - no text */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center px-6 py-7 md:px-8 md:py-8">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                The campus
              </span>

              <h2 className="mt-2 max-w-xl text-left text-balance text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em] text-[var(--brand-navy)]">
                A school that has grown with its village.
              </h2>

              <p className="mt-3 max-w-2xl text-left text-sm md:text-base leading-relaxed text-[var(--muted-foreground)]">
                Baramohanpur High School has stood at the centre of learning
                in Baramohanpur for generations — a familiar and trusted
                place for families in the community.
              </p>
            </div>
          </div>
        </WobbleCard>

        {/* CLASSROOM CARD */}
        <WobbleCard
          containerClassName="col-span-1 overflow-hidden rounded-3xl bg-transparent shadow-none"
          className="p-0"
        >
          <div className="flex h-full min-h-[430px] flex-col overflow-hidden rounded-3xl bg-[var(--brand-navy)] shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
            
            {/* Image-only area */}
            <div className="relative h-[220px] w-full overflow-hidden bg-slate-200">
              <img
                src="/images/campus/classroom.jpeg"
                alt="Classroom at Baramohanpur High School"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center px-6 py-7 md:px-7">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                In classrooms
              </span>

              <h2 className="mt-2 text-left text-balance text-2xl md:text-3xl font-display font-semibold tracking-[-0.02em] text-white">
                Learning spaces designed for curiosity.
              </h2>

              <p className="mt-3 text-left text-sm md:text-base leading-relaxed text-white/70">
                Spaces where students learn, explore ideas and develop
                practical habits that stay with them for a lifetime.
              </p>
            </div>
          </div>
        </WobbleCard>

        {/* SCHOOL GROUND CARD */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 overflow-hidden rounded-3xl bg-transparent shadow-none"
          className="p-0"
        >
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:flex-row">
            
            {/* Image */}
            <div className="relative min-h-[300px] w-full overflow-hidden md:min-h-[360px] md:w-[55%]">
              <img
                src="/images/campus/school-ground.jpeg"
                alt="Baramohanpur High School school ground"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />

              <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white/20 to-transparent md:block" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center px-6 py-8 md:px-10 lg:px-12">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                The promise
              </span>

              <h2 className="mt-2 max-w-2xl text-left text-balance text-2xl md:text-3xl lg:text-4xl font-display font-semibold tracking-[-0.02em] text-[var(--brand-navy)]">
                Knowledge, confidence, discipline, character — and a place to
                belong.
              </h2>

              <p className="mt-4 max-w-2xl text-left text-sm md:text-base leading-relaxed text-[var(--muted-foreground)]">
                Education at Baramohanpur High School is about more than books
                and examinations. It is about preparing each student for the
                world waiting outside the campus gate.
              </p>
            </div>
          </div>
        </WobbleCard>
      </div>
    </section>
  );
}