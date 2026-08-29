"use client";

import Image from "next/image";
import Link from "next/link";
import PageSectionHeading from "@/components/page-section-heading";
import { IconQuote, IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function PrincipalMessage() {
  return (
    <section className="section-soft section-pad relative isolate overflow-hidden pt-8 md:pt-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_10%,rgb(182_141_34/8%),transparent),radial-gradient(ellipse_60%_50%_at_90%_90%,rgb(20_35_63/4%),transparent)]"
      />
      <div className="page-shell !py-0 relative">
        <PageSectionHeading
          eyebrow="From the Headmaster's Desk"
          title="From the Headmaster's Desk"
          description="Joining Baramohanpur High School means joining a 150-year-old history of learning, service and community."
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
              <div className="relative mx-auto w-full max-w-sm md:max-w-md aspect-[4/5] bg-[var(--brand-fog)] rounded-[1.75rem] overflow-hidden">
                <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] bg-gradient-to-br from-[var(--brand-navy)]/90 to-[var(--brand-blue)]/60 -z-10 translate-x-3 translate-y-3" />
                <div className="absolute -right-4 -bottom-4 h-full w-full rounded-[2rem] bg-[var(--brand-gold)]/25 -z-10 -translate-x-3 -translate-y-3" />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-[var(--brand-gold)]/30 -z-[5] translate-x-0.5 translate-y-0.5" />
                <Image
                  src="/images/03-ABOUT/staff/teachers/leadership/principal.jpeg"
                  alt="Headmaster Sanjoy Modak — Baramohanpur High School"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="rounded-[1.75rem] object-cover object-[center_20%] shadow-[0_30px_80px_-30px_rgb(10_17_32/55%)]"
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
                  I did not merely join a school; I joined history itself.
                </p>
                <div className="mt-6 h-px w-16 bg-[var(--brand-gold)]/60" />
                <p className="mt-6 text-base md:text-lg font-normal leading-relaxed text-[var(--muted-foreground)]">
                  I took charge as Headmaster on 11th May, 2021, during the difficult
                  days of the Covid-19 pandemic, when classrooms were locked and the
                  world was uncertain. I stepped into an institution founded in 1878
                  through the inspiration of Ishwar Chandra Vidyasagar and the vision
                  of Shri Nityananda Dey, built and sustained by generations of
                  teachers, students, guardians, well-wishers and villagers.
                </p>
                <p className="mt-5 text-base md:text-lg font-normal leading-relaxed text-[var(--muted-foreground)]">
                  When I joined, student strength from Classes V to XII was 950. With
                  the collective effort of our teaching and non-teaching staff,
                  students, guardians and well-wishers, it has grown to 1,175. We
                  continue to value meaningful learning, academic progress, sports,
                  cultural activities and the all-round development of every child.
                  Today, our Higher Secondary section offers Arts, Science and
                  Commerce, with 25 subjects including Artificial Intelligence,
                  Agriculture, Computer Application and Education.
                </p>
              </blockquote>

              <div className="mt-10 flex items-center gap-4 border-t border-[var(--border)] pt-6">
                <div className="h-14 w-14 rounded-full ring-2 ring-[var(--brand-gold)]/45 ring-offset-2 ring-offset-[var(--brand-fog)] overflow-hidden relative shrink-0 bg-[var(--brand-fog)]">
                  <Image
                    src="/images/03-ABOUT/staff/teachers/leadership/principal.jpeg"
                    alt="Sanjoy Modak, Headmaster"
                    fill
                    sizes="56px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-lg text-[var(--brand-navy)]">
                  Sanjoy Modak
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Headmaster, Baramohanpur High School (H.S.)
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
