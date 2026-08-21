"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function SchoolVisionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[var(--brand-fog)] to-white py-20 md:py-28">
      {/* Subtle decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgb(201_162_39/5%),transparent)]"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 lg:gap-20">
        {/* Left — Text content */}
        <motion.div
          className="flex flex-1 flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
            Our Heritage
          </p>
          <h2 className="mb-5 text-3xl font-semibold leading-tight text-[var(--brand-navy)] md:text-4xl lg:text-5xl">
            Where tradition meets{" "}
            <span className="bg-gradient-to-r from-[var(--brand-gold)] to-[#d8ae3c] bg-clip-text text-transparent">
              tomorrow
            </span>
          </h2>
          <p className="mb-6 max-w-lg text-base leading-relaxed text-[var(--foreground)]/70 md:text-lg">
            For generations, Baramohanpur High School has shaped young minds with
            a balance of academic rigour and human values. Our campus is more than
            a building — it is a community where every student finds their voice,
            every teacher leaves a lasting mark, and every achievement is celebrated
            as a shared victory.
          </p>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold text-[var(--brand-navy)] md:text-3xl">[YRS+]</p>
              <p className="text-sm text-[var(--muted-foreground)]">Years of Service</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--brand-gold)] md:text-3xl">[GEN+]</p>
              <p className="text-sm text-[var(--muted-foreground)]">Generations Taught</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--brand-blue)] md:text-3xl">100%</p>
              <p className="text-sm text-[var(--muted-foreground)]">Whole-Child Care</p>
            </div>
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgb(27_42_74/25%)]">
            <Image
              src="/images/classroom/classroom-2.png"
              alt="Baramohanpur High School campus life"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle overlay for premium feel */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/10 to-transparent"
            />
          </div>
          {/* Floating accent bar */}
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-gradient-to-br from-[var(--brand-gold)]/15 to-transparent -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
