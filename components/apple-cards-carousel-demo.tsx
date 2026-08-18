"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src + card.title} card={card} index={index} />
  ));

  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[var(--brand-warm)] via-white to-[var(--brand-fog)] py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgb(201_162_39/8%),transparent)]"
      />
      <h2 className="relative mx-auto max-w-7xl px-4 font-sans text-xl font-bold text-[var(--brand-navy)] md:text-5xl">
        A closer look at{" "}
        <span className="bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-emerald)] bg-clip-text text-transparent">our school</span>
      </h2>
      <p className="relative mx-auto mt-3 max-w-7xl px-4 text-sm text-[var(--brand-navy)]/55 md:text-base">
        Slide through the rooms, fields, and gatherings that make Boromohonpur
        feel like home.
      </p>
      <Carousel items={cards} />
    </section>
  );
}

function Story({
  lead,
  body,
  image,
  alt,
}: {
  lead: string;
  body: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14">
      <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl">
        <span className="font-bold text-[var(--brand-navy)]">{lead}</span> {body}
      </p>
      <img
        src={image}
        alt={alt}
        height="500"
        width="500"
        className="mx-auto mt-8 h-48 w-full rounded-2xl object-cover md:h-72 md:w-2/3"
      />
    </div>
  );
}

const data = [
  {
    category: "Campus",
    title: "Mornings that begin with assembly.",
    src: "/images/img-slider-1.jpeg",
    content: (
      <Story
        lead="The bell still means something here."
        body="Students gather, the flag is raised, and a new school day starts with order, song, and a shared sense of belonging."
        image="/images/img-slider-1.jpeg"
        alt="Campus morning"
      />
    ),
  },
  {
    category: "Classrooms",
    title: "Lessons that stay with you.",
    src: "/images/img-slider-2.jpeg",
    content: (
      <Story
        lead="Teaching at Boromohonpur is patient work."
        body="From first letters to board exams, our teachers walk beside every learner — explaining again, encouraging often, and expecting the best."
        image="/images/img-slider-2.jpeg"
        alt="Classroom learning"
      />
    ),
  },
  {
    category: "Student life",
    title: "Friends, houses, and house pride.",
    src: "/images/img-slider-3.jpeg",
    content: (
      <Story
        lead="School is more than a timetable."
        body="It is the walk between classes, the house cheer on sports day, and the quiet confidence of a student who finally understands."
        image="/images/img-slider-3.jpeg"
        alt="Student life"
      />
    ),
  },
  {
    category: "Achievements",
    title: "Glories earned, not given.",
    src: "/images/achievemenets.jpeg",
    content: (
      <Story
        lead="Every certificate on our wall has a story."
        body="Academic ranks, cultural prizes, and sports medals — they remind us that hard work at Boromohonpur is seen and celebrated."
        image="/images/achievemenets.jpeg"
        alt="School achievements"
      />
    ),
  },
  {
    category: "Community",
    title: "Parents, teachers, one school.",
    src: "/images/bhs-logo.jpeg",
    content: (
      <Story
        lead="A school is strongest when families stand with it."
        body="Meetings, notices, and open doors keep guardians close to classroom life — because a child's progress is a shared responsibility."
        image="/images/bhs-logo.jpeg"
        alt="School emblem"
      />
    ),
  },
  {
    category: "Values",
    title: "Knowledge, character, community.",
    src: "/images/img-slider-1.jpeg",
    content: (
      <Story
        lead="We measure success in more than marks."
        body="Courtesy in the corridor, honesty in the exam hall, and kindness on the playground — that is the Boromohonpur way."
        image="/images/img-slider-1.jpeg"
        alt="School values"
      />
    ),
  },
];
