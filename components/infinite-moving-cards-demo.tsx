"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <section className="relative flex h-full min-h-[28rem] w-full flex-col items-center justify-center overflow-hidden bg-white py-12 antialiased md:min-h-[36rem]">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
        Voices from the campus
      </p>
      <h2 className="mb-8 px-4 text-center text-2xl font-semibold text-[var(--brand-navy)] md:text-3xl">
        People who know{" "}
        <span className="text-[var(--brand-gold)]">this school</span>
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
      "At Boromohonpur, a medal and a kind word carry the same weight. Academics, sport, and culture are all given a proper stage.",
    name: "Teacher",
    title: "Faculty Member",
  },
];
