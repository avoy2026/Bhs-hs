"use client";

import Image from "next/image";
import TestimonialCard, { type Testimonial, type TestimonialCategory } from "@/components/testimonial-card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";

const categories: Array<{ key: TestimonialCategory; label: string; eyebrow: string }> = [
  { key: "student", label: "Students", eyebrow: "Student Voices" },
  { key: "parent", label: "Parents", eyebrow: "Parent Reviews" },
  { key: "teacher", label: "Teachers", eyebrow: "Teachers of BHS" },
  { key: "alumni", label: "Alumni", eyebrow: "Alumni Memories" },
];

const testimonials: Testimonial[] = [
  {
    name: "Arjun Dey",
    role: "Class X · Head Boy",
    category: "student",
    quote:
      "I learned that discipline is not fear. It is showing up prepared, greeting a teacher, and finishing the work you promised yourself you would finish. That habit has changed me.",
    image: "/images/testimonials/students/student-2.jpg",
    highlight: true,
  },
  {
    name: "[STUDENT NAME 2]",
    role: "Class VIII",
    category: "student",
    quote:
      "At first I was afraid to raise my hand in English class. But when I finally did, my teacher did not laugh — she said 'very well said' and asked me to say it again. That day mattered.",
    image: "/images/testimonials/students/student-1.jpg",
  },
  {
    name: "[STUDENT NAME 3]",
    role: "Class VI",
    category: "student",
    quote:
      "Sports day is my favourite day in the whole year. Even when I did not win, my house cheered for me anyway. That is what I will remember most.",
    image: "/images/events/sports/sports-day.png",
  },
  {
    name: "[STUDENT NAME 4]",
    role: "Class IX",
    category: "student",
    quote:
      "Annual Day was the first time I stood on a stage in front of so many people. My voice shook — but after the last line, the clap felt like a door had opened in me.",
    image: "/images/events/cultural/cultural-programme.png",
  },

  {
    name: "Rina Banerjee",
    role: "Guardian · Class VIII",
    category: "parent",
    quote:
      "My daughter is not only scoring better — she stands a little taller. Teachers here notice the quiet children, and that has changed our home.",
    image: "/images/testimonials/parents/parents.jpeg",
    highlight: true,
  },
  {
    name: "Amit Roy",
    role: "Parent · Class V",
    category: "parent",
    quote:
      "Notices, meetings, and an open office — we never feel like strangers at the gate. The school treats parents as part of the story, not as outsiders.",
    image: "/images/testimonials/parents/parents-3.jpeg",
  },
  {
    name: "[PARENT NAME 3]",
    role: "Guardian · Class III",
    category: "parent",
    quote:
      "What matters most to us is that our son is happy to come to school every morning. The rest — marks, prizes, everything — follows from that one simple thing.",
    image: "/images/testimonials/parents/parents.jpeg",
  },
  {
    name: "[PARENT NAME 4]",
    role: "Parent · Class X",
    category: "parent",
    quote:
      "We were worried before the boards. His teachers stayed after classes, cleared his doubts, and gave us honest feedback about what he still needed. That kind of care is rare.",
    image: "/images/testimonials/parents/parents-3.jpeg",
  },

  {
    name: "Falguni Misra Nanda",
    role: "Assistant Teacher",
    category: "teacher",
    quote:
      "Annual Day still feels like the heartbeat of this school. When the lights come up, you remember why we teach — for that look of pride on a child's face.",
    image: "/images/teachers/teaching/falguni-misra-nanda.jpeg",
    highlight: true,
  },
  {
    name: "Bina Das",
    role: "Assistant Teacher",
    category: "teacher",
    quote:
      "Teaching is not about rush. It is sitting with a problem until the moment it makes sense — and then that sense belongs to you for life. I try to teach that patience.",
    image: "/images/teachers/teaching/bina-das.jpeg",
  },
  {
    name: "Kedar Dhal",
    role: "Assistant Teacher",
    category: "teacher",
    quote:
      "A lesson read aloud can change how a child understands language and thoughts. I try to give them that moment in every single class.",
    image: "/images/teachers/teaching/kedar-dhal.jpeg",
  },
  {
    name: "Gautam Makur",
    role: "Assistant Teacher",
    category: "teacher",
    quote:
      "Physical and mental endurance go hand in hand. A student learns that with practice and discipline, any difficulty can be overcome.",
    image: "/images/teachers/teaching/gautam-makur.jpeg",
  },

  {
    name: "Priya Ghosh",
    role: "Alumna · Class of [YEAR]",
    category: "alumni",
    quote:
      "Years later I still remember the assembly ground. Baramohanpur gave me friends, a voice, and the habit of trying once more when things do not work out the first time.",
    image: "/images/testimonials/alumni/alumni-1.jpg",
    highlight: true,
  },
  {
    name: "[ALUMNI NAME 2]",
    role: "Alumnus · Class of [YEAR]",
    category: "alumni",
    quote:
      "I have studied at bigger colleges since, but I still measure myself by what my teachers at Baramohanpur expected of me. Those expectations were kind and they were real.",
    image: "/images/campus/main-school-building.jpeg",
  },
  {
    name: "[ALUMNI NAME 3]",
    role: "Alumna · Class of [YEAR]",
    category: "alumni",
    quote:
      "There is a particular kind of confidence that comes from being noticed at this school. Once you have been seen by a patient teacher, you begin to see yourself differently.",
    image: "/images/students/student-group.jpeg",
  },
];

export default function TestimonialsHub() {
  const [active, setActive] = useState<TestimonialCategory>("student");
  const activeCat = categories.find((c) => c.key === active)!;
  const shown = testimonials.filter((t) => t.category === active);

  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate overflow-hidden">
        <div className="relative w-full h-52 md:h-72">
          <Image
            src="/images/students/student-group.jpeg"
            alt="Student voices at Baramohanpur High School"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          {/* Banner image only — no text overlay */}
        </div>
      </section>

      <section className="sticky top-0 z-30 -mt-1 border-b border-black/5 bg-[var(--brand-fog)]/90 backdrop-blur">
        <div className="page-shell !py-0">
          <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={cn(
                    "shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition duration-200",
                    isActive
                      ? "bg-[var(--brand-navy)] text-white shadow-sm"
                      : "bg-white text-[var(--muted-foreground)] border border-black/5 hover:bg-[var(--brand-mist)] hover:text-[var(--brand-navy)]"
                  )}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-soft !pt-10 section-pad">
        <div className="page-shell !py-0">
          <div className="mb-12">
            <span className="eyebrow block mb-3">{activeCat.eyebrow}</span>
            <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)]">
              <span className="heading-underline">{activeCat.label} of Baramohanpur High School</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {shown.map((t, idx) => (
              <TestimonialCard
                key={t.name + idx}
                t={{ ...t, className: cn(t.highlight && "xl:col-span-2 xl:row-span-2") }}
                variant={t.highlight && idx === 0 ? "wide" : "card"}
              />
            ))}
          </div>

          <p className="mt-14 text-center text-xs text-[var(--muted-foreground)]">
            * Student, parent and teacher names will be updated with confirmed quotations and portraits in due course.
          </p>
        </div>
      </section>

      <InfiniteMovingCardsDemo />

      <section className="section-warm section-pad">
        <div className="page-shell !py-0">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
            <div>
              <span className="eyebrow block mb-3">Begin your journey</span>
              <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)] mb-5">
                <span className="heading-underline">Would you like to be part of this school family?</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[var(--muted-foreground)] max-w-xl">
                Read the FAQs, send an enquiry, or simply call the school office. We are happy to
                speak with every parent who is seriously considering Baramohanpur High School for their child.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/enquiry" className="btn-primary">
                  Enquire About Admission
                </Link>
                <Link href="/faq" className="btn-outline">
                  Read the FAQs
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/30%)]">
              <Image
                src="/images/campus/campus-wide-view.jpeg"
                alt="Baramohanpur High School"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
