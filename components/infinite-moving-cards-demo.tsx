"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <section className="relative flex h-full min-h-[32rem] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--brand-fog)] via-white to-[var(--brand-fog)] py-16 antialiased md:min-h-[40rem] md:py-20">
      {/* Decorative gradient overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_-10%,rgb(201_162_39/8%),transparent_60%)]"
      />
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-emerald)] uppercase">
        Voices from the campus
      </p>
      <h2 className="mb-8 px-4 text-center text-3xl font-semibold text-[var(--brand-navy)] md:text-4xl">
        People who know{" "}
        <span className="bg-gradient-to-r from-[var(--brand-gold)] to-[#f0d78c] bg-clip-text text-transparent">this school</span>
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        variant="light"
      />
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Teachers here do not rush a child past confusion. The guidance my son received changed both his marks and his manners.",
    name: "A Parent",
    title: "Guardian, Class X",
  },
  {
    quote:
      "From the first assembly to the last cultural night, this campus gives a student a complete life — not just a report card.",
    name: "Student Leader",
    title: "Senior Section",
  },
  {
    quote:
      "Respect is expected in the corridor as much as in the exam hall. That is why students here learn to aim higher without becoming unkind.",
    name: "Alumni",
    title: "Former Student",
  },
  {
    quote:
      "The campus feels like a second home. When notices go up and events are shared, parents stay inside the story of school life.",
    name: "Guardian",
    title: "Parent Community",
  },
  {
    quote:
      "At Baramohanpur, a medal and a kind word carry the same weight. Academics, sport, and culture are all given a proper stage.",
    name: "Teacher",
    title: "Faculty Member",
  },
];
