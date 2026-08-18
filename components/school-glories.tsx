"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  IconBook2,
  IconTrophy,
  IconUsers,
  IconSchool,
} from "@tabler/icons-react";

const highlights = [
  {
    icon: IconUsers,
    title: "Student Life",
    text: "Houses, friendships, and the everyday rhythm of campus.",
    href: "/about",
  },
  {
    icon: IconTrophy,
    title: "Achievements",
    text: "Medals, ranks, and the glories our students bring home.",
    href: "/events",
  },
  {
    icon: IconBook2,
    title: "Academics",
    text: "Patient teaching from first letters to board exams.",
    href: "/about",
  },
  {
    icon: IconSchool,
    title: "Admissions",
    text: "Begin a new chapter at Boromohonpur High School.",
    href: "/enquiry",
  },
];

export default function SchoolGlories() {
  return (
    <section className="section-navy relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgb(201_162_39/18%),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.22em] text-[var(--brand-gold)] uppercase">
          Why families choose us
        </p>
        <h2 className="mb-10 text-center text-2xl font-semibold text-white md:text-4xl">
          Four doors into school life
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)]/40 hover:bg-white/10"
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]">
                    <Icon className="h-6 w-6" stroke={1.6} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.text}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-[var(--brand-gold)] opacity-0 transition group-hover:opacity-100">
                    Explore →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
