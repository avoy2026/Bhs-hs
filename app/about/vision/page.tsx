"use client";

import Image from "next/image";
import Link from "next/link";
import { IconCheck, IconTarget, IconEye } from "@tabler/icons-react";
import { motion } from "motion/react";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";

const visionPoints = [
  "Educational excellence — without rushing a child's pace",
  "Character building that lasts longer than any examination",
  "Holistic development — mind, body, heart, and voice",
  "Responsible citizenship rooted in our neighbourhood and our culture",
  "Future readiness that does not forget the lessons of the past",
];

const missionPoints = [
  {
    title: "Teach patiently",
    text:
      "Deliver clear, age-appropriate instruction — in language a child actually understands, and at a pace they can follow without shame.",
  },
  {
    title: "Notice every student",
    text:
      "See the quiet child, the restless child, the slow child, and the gifted child — and give each one what they need to grow.",
  },
  {
    title: "Hold to the routines",
    text:
      "Keep the school day orderly, the classrooms clean, the bells meaningful, and the rituals of assembly, tiffin, and games intact.",
  },
  {
    title: "Honour the community",
    text:
      "Work with parents as trusted partners, keep doors open, communicate clearly, and respect the family that sends their child to us.",
  },
];

export default function VisionPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-8 bg-[var(--brand-fog)] overflow-hidden">
        <div className="page-shell !py-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[24/9] max-h-[360px] min-h-[180px] rounded-3xl overflow-hidden shadow-md border border-[var(--border)] bg-white flex items-center justify-center">
            <Image
              src="/images/03-ABOUT/vision-banner.webp"
              alt="Our Vision — Baramohanpur High School"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain p-4 md:p-8"
            />
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-soft section-pad">
        <div className="page-shell !py-0">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-navy)] text-white mb-5">
                <IconEye className="h-6 w-6" stroke={1.8} />
              </span>
              <h2 className="font-display font-semibold section-heading-title-lg text-[var(--brand-navy)] mb-6">
                <span className="heading-underline">The vision that guides us.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">
                We see a school where every child — regardless of background, pace, or talent —
                can come in each morning and know they are safe, they are seen, and they are in a
                place that will not hurry them or forget them.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-[var(--muted-foreground)]">
                Academic results matter. They open doors. But a child&apos;s happiness, honesty, and
                habit of trying matter more — because those are the things that will stay with them
                after the last report card is forgotten.
              </p>
            </div>
            <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/40%)]">
              <Image
                src="/images/03-ABOUT/vision/our-vision.png"
                alt="Our Vision for Baramohanpur High School"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {visionPoints.map((v, idx) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group relative rounded-2xl border border-[var(--brand-navy)]/8 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]">
                    <IconCheck className="h-4 w-4" stroke={2.2} />
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--foreground)]/85">{v}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-warm section-pad">
        <div className="page-shell !py-0">
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-navy)] text-white mb-5">
              <IconTarget className="h-6 w-6" stroke={1.8} />
            </span>
            <p className="eyebrow block mb-3">The daily promise</p>
            <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)]">
              <span className="heading-underline">Our Mission</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm md:text-base text-[var(--muted-foreground)]">
              Four promises we make to every family that sends their child through our gate.
              These are not slogans — they are the standard our teachers and staff hold themselves to.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {missionPoints.map((m, idx) => (
              <motion.article
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group relative rounded-3xl bg-white p-6 md:p-8 border border-[var(--brand-navy)]/8 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-blue)] text-white text-sm font-bold shadow-sm">
                    {idx + 1}
                  </span>
                  <h3 className="font-display font-semibold text-xl text-[var(--brand-navy)]">
                    {m.title}
                  </h3>
                </div>
                <p className="text-sm md:text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]">
                  {m.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft overflow-hidden py-16 md:py-24">
        <div className="page-shell !py-0">
          <div className="mx-auto mb-2 max-w-3xl text-center">
            <p className="eyebrow mb-3">A living school</p>
            <h2 className="font-display text-3xl font-semibold text-[var(--brand-navy)] md:text-5xl">
              Learning that opens a window to the world.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
              Scroll through a small glimpse of the classrooms, campus, and shared moments that bring our vision to life.
            </p>
          </div>
        </div>
        <MacbookScrollDemo />
      </section>

      {/* CTA */}
      <section className="section-blue section-pad">
        <div className="page-shell !py-0">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
            <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/30%)]">
              <Image
                src="/images/02-HOMEPAGE/campus/campus-1.webp"
                alt="Baramohanpur High School campus view"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/55 via-transparent to-transparent" />
            </div>
            <div>
              <span className="eyebrow block mb-3">Join the journey</span>
              <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)] mb-5">
                Does this feel like the right school for your family?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[var(--muted-foreground)] max-w-xl">
                The best way to understand our school is to see it in action, or to simply ask us
                a question. We are happy to hear from prospective parents — and happy to answer
                honestly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/enquiry" className="btn-primary">
                  Enquire About Admission
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact the Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
