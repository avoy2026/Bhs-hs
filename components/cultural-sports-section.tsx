"use client";

import Image from "next/image";
import Link from "next/link";
import PageSectionHeading from "@/components/page-section-heading";
import { IconArrowUpRight, IconBrush, IconBallFootball } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function CulturalSportsSection() {
  return (
    <section className="section-blue section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="Beyond the classroom"
          title="Cultural Life & Sports"
          description="Songs in the hall, cheers on the ground, paint on paper â€” the parts of school that students remember longest."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Cultural Life â€” image left */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_20px_60px_-30px_rgb(20_35_63/35%)]"
          >
            <div className="relative grid gap-0 md:grid-cols-[1.1fr_1fr] min-h-[440px]">
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <Image
                  src="/images/06-EVENTS/rabindranath-tagore.webp"
                  alt="Kabiguru Rabindranath Tagore â€” Rabindra Jayanti at Baramohanpur High School"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-[900ms] group-hover:scale-[1.04]"
                />
                <div className="absolute left-5 top-5 md:left-6 md:top-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--brand-navy)] shadow-sm">
                  <IconBrush className="h-3.5 w-3.5 text-[var(--brand-gold)]" stroke={2} />
                  Cultural Life
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="eyebrow-navy block mb-2">Annual Day Â· Festivals Â· Recitals</p>
                  <h3 className="font-display font-semibold text-2xl md:text-[1.7rem] leading-tight text-[var(--brand-navy)]">
                    Where voices find a song, and stories find a stage.
                  </h3>
                  <p className="mt-4 text-sm md:text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]">
                    From the first rehearsal to the last curtain call, our cultural programmes are about courage, creativity, and learning to share something of yourself with a room full of people. Rabindra Jayanti, Annual Day, classroom assemblies â€” every performance builds a little more confidence.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/events"
                    className="group/btn inline-flex items-center gap-2 rounded-md bg-[var(--brand-navy)] px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
                  >
                    Explore Cultural Events
                    <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sports â€” image right */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_20px_60px_-30px_rgb(20_35_63/35%)]"
          >
            <div className="relative grid gap-0 md:grid-cols-[1fr_1.1fr] min-h-[440px]">
              <div className="flex flex-col justify-between p-6 md:p-8 order-2 md:order-1">
                <div>
                  <p className="eyebrow-navy block mb-2">Inter-House Â· District Meets Â· Daily Play</p>
                  <h3 className="font-display font-semibold text-2xl md:text-[1.7rem] leading-tight text-[var(--brand-navy)]">
                    Running together, winning together, losing together.
                  </h3>
                  <p className="mt-4 text-sm md:text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]">
                    The sports ground at Baramohanpur High School is where children learn endurance, humility, and the difference between losing badly and losing well. Victory is celebrated â€” but giving your best is respected even more.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/events"
                    className="group/btn inline-flex items-center gap-2 rounded-md bg-[var(--brand-gold)] px-4 py-2.5 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cfaa33]"
                  >
                    Explore Sports
                    <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/06-EVENTS/sports/sports-day.webp"
                  alt="Sports and physical development at Baramohanpur High School"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-[900ms] group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl md:bg-gradient-to-l from-[var(--brand-navy)]/60 via-[var(--brand-navy)]/15 to-transparent" />
                <div className="absolute right-5 top-5 md:right-6 md:top-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--brand-navy)] shadow-sm">
                  <IconBallFootball className="h-3.5 w-3.5 text-[var(--brand-gold)]" stroke={2} />
                  Sports &amp; PE
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
