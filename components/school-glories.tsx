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
    accent: "from-blue-500/20 to-indigo-500/10",
    iconBg: "bg-blue-500/15 text-blue-600",
  },
  {
    icon: IconTrophy,
    title: "Achievements",
    text: "Medals, ranks, and the glories our students bring home.",
    href: "/events",
    accent: "from-amber-500/20 to-orange-500/10",
    iconBg: "bg-amber-500/15 text-amber-600",
  },
  {
    icon: IconBook2,
    title: "Academics",
    text: "Patient teaching from first letters to board exams.",
    href: "/about",
    accent: "from-emerald-500/20 to-teal-500/10",
    iconBg: "bg-emerald-500/15 text-emerald-600",
  },
  {
    icon: IconSchool,
    title: "Admissions",
    text: "Begin a new chapter at Baramohanpur High School.",
    href: "/enquiry",
    accent: "from-[var(--brand-gold)]/20 to-yellow-500/10",
    iconBg: "bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]",
  },
];

export default function SchoolGlories() {
  return (
    <section className="section-warm relative isolate overflow-hidden">
      {/* Decorative gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgb(201_162_39/12%),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.22em] text-[var(--brand-gold)] uppercase">
          Why families choose us
        </p>
        <h2 className="mb-3 text-center text-2xl font-semibold text-[var(--brand-navy)] md:text-4xl">
          Four doors into school life
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-sm text-[var(--brand-navy)]/60">
          Every corner of our campus has a story — discover the paths that shape a Baramohanpur student.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--brand-navy)]/8 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--brand-navy)]/8"
                >
                  {/* Card top gradient accent */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                  />
                  <span className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}>
                    <Icon className="h-6 w-6" stroke={1.6} />
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--brand-navy)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--brand-navy)]/65">
                    {item.text}
                  </p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-[var(--brand-gold)] opacity-0 transition group-hover:opacity-100">
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
