"use client";

import Image from "next/image";
import Link from "next/link";
import PageSectionHeading from "@/components/page-section-heading";
import { IconQuote, IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function PrincipalMessage() {
  return (
    <section className="section-soft section-pad relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_10%,rgb(182_141_34/8%),transparent),radial-gradient(ellipse_60%_50%_at_90%_90%,rgb(20_35_63/4%),transparent)]"
      />
      <div className="page-shell !py-0 relative">
        <PageSectionHeading
          eyebrow="From the desk of the Principal"
          title="A Message from the Principal"
          description="Every child is a promise. The work of our school is to help each one find the path and the courage to keep it."
          align="left"
          size="md"
          accent="stroke"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm md:max-w-md aspect-[4/5]">
              <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] bg-gradient-to-br from-[var(--brand-navy)]/90 to-[var(--brand-blue)]/60 -z-10 translate-x-3 translate-y-3" />
              <div className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] bg-[var(--brand-gold)]/25 -z-10 -translate-x-3 -translate-y-3" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-[var(--brand-gold)]/30 -z-[5] translate-x-0.5 translate-y-0.5" />
              <Image
                src="/images/teachers/principal.png"
                alt="Principal of Baramohanpur High School"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="rounded-[1.75rem] object-cover shadow-[0_30px_80px_-30px_rgb(10_17_32/55%)]"
                priority
              />
              <div className="absolute -top-4 -left-4 z-10 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-cream)] shadow-md ring-1 ring-[var(--brand-gold)]/30">
                <IconQuote className="h-9 w-9 text-[var(--brand-gold)] rotate-6" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative"
          >
            <blockquote className="relative">
              <p className="font-display text-[1.4rem] md:text-[1.8rem] leading-[1.35] text-[var(--brand-ink)]">
                Education at Baramohanpur High School begins with a single belief:
                that every child who walks through our gate is capable of more than
                they have yet imagined.
              </p>
              <div className="mt-6 h-px w-16 bg-[var(--brand-gold)]/60" />
              <p className="mt-6 text-base md:text-lg font-normal leading-relaxed text-[var(--muted-foreground)]">
                In our classrooms, on our grounds, and in the quiet moments
                between bells, we do our best to teach not only the subject but
                also the way a young person ought to carry themselves in the
                world — with honesty, with curiosity, with respect for others
                and themselves, and a steady care for those around them.
              </p>
              <p className="mt-5 text-base md:text-lg font-normal leading-relaxed text-[var(--muted-foreground)]">
                If you are a parent reading this: your child is in trusted
                hands. If you are a former student: you still belong here.
              </p>
            </blockquote>

            <div className="mt-10 flex items-center gap-4 border-t border-[var(--border)] pt-6">
              <div className="h-14 w-14 rounded-full ring-2 ring-[var(--brand-gold)]/45 ring-offset-2 ring-offset-[var(--brand-fog)] overflow-hidden relative shrink-0">
                <Image
                  src="/images/teachers/principal.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-lg text-[var(--brand-navy)]">
                  [PLACEHOLDER — Principal Name]
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Principal, Baramohanpur High School
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about/team" className="btn-primary">
                Meet Our Team
                <IconArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/about/vision" className="btn-outline">
                Our Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
