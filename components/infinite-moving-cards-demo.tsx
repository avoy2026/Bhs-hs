"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <section className="section-dark relative flex h-[40rem] flex-col items-center justify-center overflow-hidden antialiased">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
        Community Voices
      </p>
      <h2 className="mb-8 px-4 text-center text-2xl font-semibold text-white md:text-3xl">
        Voices from Boromohonpur High School
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Our teachers care deeply about every student. The guidance I received at Boromohonpur High School helped me grow in confidence and academics.",
    name: "A Parent",
    title: "Guardian, Class X",
  },
  {
    quote:
      "From classroom learning to cultural programs, this school gives students a complete experience. I am proud to be part of Boromohonpur High School.",
    name: "Student Leader",
    title: "Senior Section",
  },
  {
    quote:
      "Discipline, respect, and hard work are valued here. The school environment encourages students to aim higher every day.",
    name: "Alumni",
    title: "Former Student",
  },
  {
    quote:
      "The teachers explain with patience and the campus feels like a second home. Events and notices keep parents connected with school life.",
    name: "Guardian",
    title: "Parent Community",
  },
  {
    quote:
      "Boromohonpur High School builds character along with knowledge. Sports, academics, and cultural activities all get equal importance.",
    name: "Teacher",
    title: "Faculty Member",
  },
];
