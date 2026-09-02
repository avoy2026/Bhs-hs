"use client";

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src + card.title} card={card} index={index} />
  ));

  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[var(--brand-cream)] via-white to-[var(--brand-fog)] py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_20%,rgb(201_162_39/8%),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 mb-10">
        <p className="eyebrow block mb-3 text-center">Rooms & moments</p>
        <h2 className="mx-auto max-w-3xl text-center font-display font-semibold section-heading-title text-[var(--brand-navy)]">
          <span className="heading-underline">A closer look at our school</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-[var(--brand-navy)]/60 md:text-base">
          Slide through the rooms, fields, and gatherings that make Baramohanpur
          feel like home.
        </p>
      </div>
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
      <div className="relative mx-auto mt-8 h-48 w-full overflow-hidden rounded-2xl md:h-72 md:w-2/3">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

const data = [
  {
    category: "Campus",
    title: "Mornings that begin with assembly.",
    src: "/images/02-HOMEPAGE/carousel/cursoal-1.jpeg",
    content: (
      <Story
        lead="The bell still means something here."
        body="Students gather, the flag is raised, and a new school day starts with order, song, and a shared sense of belonging."
        image="/images/02-HOMEPAGE/carousel/cursoal-1.jpeg"
        alt="Campus morning"
      />
    ),
  },
  {
    category: "Classrooms",
    title: "Lessons that stay with you.",
    src: "/images/02-HOMEPAGE/carousel/c-2.webp",
    content: (
      <Story
        lead="Teaching at Baramohanpur is patient work."
        body="From first letters to board exams, our teachers walk beside every learner — explaining again, encouraging often, and expecting the best."
        image="/images/02-HOMEPAGE/carousel/c-2.webp"
        alt="Classroom learning"
      />
    ),
  },
  {
    category: "Student Life",
    title: "Friends, houses, and house pride.",
    src: "/images/02-HOMEPAGE/carousel/c-3.webp",
    content: (
      <Story
        lead="School is more than a timetable."
        body="It is the walk between classes, the house cheer on sports day, and the quiet confidence of a student who finally understands."
        image="/images/02-HOMEPAGE/carousel/c-3.webp"
        alt="Student life"
      />
    ),
  },
  {
    category: "Education & Growth",
    title: "Learning that shapes the mind.",
    src: "/images/02-HOMEPAGE/values/support.webp",
    content: (
      <Story
        lead="Every lesson builds character."
        body="Academic study, cultural education, and practical knowledge develop responsible, capable young minds ready for the world."
        image="/images/02-HOMEPAGE/values/support.webp"
        alt="Education and growth"
      />
    ),
  },
  {
    category: "Community",
    title: "Parents, teachers, one family.",
    src: "/images/02-HOMEPAGE/values/value-3.webp",
    content: (
      <Story
        lead="A school thrives when families stand with it."
        body="Meetings, notices, and open doors keep guardians close to classroom life — because a child's progress is a shared journey."
        image="/images/02-HOMEPAGE/values/value-3.webp"
        alt="Community and family"
      />
    ),
  },
  {
    category: "Values",
    title: "Knowledge, character, community.",
    src: "/images/02-HOMEPAGE/values/values.webp",
    content: (
      <Story
        lead="We measure success in more than marks."
        body="Courtesy in the corridor, honesty in the exam hall, and kindness on the playground — that is the Baramohanpur way."
        image="/images/02-HOMEPAGE/values/values.webp"
        alt="School values"
      />
    ),
  },
];
