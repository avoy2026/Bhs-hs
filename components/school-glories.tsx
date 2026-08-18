"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";

const glories = [
  {
    title: "Student Life",
    subtitle: "Days on our campus",
    href: "/about",
  },
  {
    title: "Achievements",
    subtitle: "The school's glories",
    href: "/events",
  },
  {
    title: "Admissions",
    subtitle: "Begin your journey",
    href: "/enquiry",
  },
];

export default function SchoolGlories() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/img-slider-2.jpeg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-[2px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgb(11_18_32/62%),rgb(27_42_74/55%),rgb(11_18_32/70%))]"
      />

      <div className="relative mx-auto grid min-h-[18rem] max-w-7xl grid-cols-1 divide-y divide-white/20 md:min-h-[22rem] md:grid-cols-3 md:divide-x md:divide-y-0">
        {glories.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
          >
            <Link
              href={item.href}
              className="group flex h-full min-h-[10.5rem] flex-col items-center justify-center px-6 py-10 text-center md:min-h-[22rem]"
            >
              <span className="inline-flex items-center gap-2 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.6rem]">
                <span className="bg-gradient-to-b from-white to-white/75 bg-clip-text text-transparent transition duration-300 group-hover:from-[var(--brand-gold)] group-hover:to-[#f0d78c]">
                  {item.title}
                </span>
                <IconArrowUpRight className="h-5 w-5 shrink-0 text-white/80 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand-gold)] md:h-6 md:w-6" />
              </span>
              <span className="mt-3 text-sm tracking-wide text-white/75 md:text-base">
                {item.subtitle}
              </span>
              <span className="mt-5 h-px w-0 bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent transition-all duration-500 group-hover:w-24" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
