"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import Cards from "@/blocks/interface-crafts-cards";
import LampDemo from "@/components/lamp-demo";
import { IconCalendar, IconBrush, IconBallFootball, IconBook, IconSparkles, IconAward } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

const eventCategories = [
  {
    icon: IconBrush,
    title: "Cultural",
    count: "[X]+ events",
    desc: "Annual Day, Rabindra Jayanti, music, dance and drama.",
    tint: "from-rose-500/18 to-pink-400/8",
    iconTint: "bg-rose-500/15 text-rose-700",
  },
  {
    icon: IconBallFootball,
    title: "Sports",
    count: "[Y] meets",
    desc: "Inter-house sports, athletics, and games throughout the year.",
    tint: "from-emerald-500/18 to-teal-400/8",
    iconTint: "bg-emerald-500/15 text-emerald-700",
  },
  {
    icon: IconBook,
    title: "Academic",
    count: "[Z]+ sessions",
    desc: "Assemblies, exhibitions, quiz contests and subject days.",
    tint: "from-[var(--brand-navy)]/15 to-[var(--brand-blue)]/10",
    iconTint: "bg-[var(--brand-navy)]/12 text-[var(--brand-navy)]",
  },
  {
    icon: IconSparkles,
    title: "Celebration",
    count: "Annual",
    desc: "Festivals, prize distribution, and ceremonies shared with families.",
    tint: "from-[var(--brand-gold)]/22 to-amber-400/10",
    iconTint: "bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]",
  },
  {
    icon: IconCalendar,
    title: "Student Activities",
    count: "Term-wise",
    desc: "House events, prefect duties, clubs and class-led activities.",
    tint: "from-blue-500/15 to-indigo-400/10",
    iconTint: "bg-blue-500/15 text-blue-700",
  },
];

export default function EventsPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="relative w-full h-[28rem] md:h-[38rem]">
          <Image
            src="/images/poster/events-1.png"
            alt="School events and celebrations at Baramohanpur High School"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-8">
            <div className="mx-auto w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[0.72rem] md:text-xs font-semibold tracking-[0.3em] text-[var(--brand-gold)] uppercase mb-4">
                  School Life
                </p>
                <h1 className="font-display font-semibold text-4xl md:text-6xl tracking-tight leading-[1.05] text-white max-w-3xl">
                  <span className="heading-underline-stroke">School Events</span>
                </h1>
                <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/80">
                  Moments that become memories — the lights, the cheers, the rehearsals,
                  the speeches, and every student who has ever stood on a Baramohanpur stage.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-soft section-pad">
        <div className="page-shell !py-0">
          <PageSectionHeading
            eyebrow="Kinds of events"
            title="Categories of school life"
            description="Every year, Baramohanpur gathers for more than classes. These are the traditions students remember long after they leave."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {eventCategories.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.tint}`}
                  />
                  <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.iconTint}`}>
                    <Icon className="h-5 w-5" stroke={1.8} />
                  </span>
                  <h3 className="font-display font-semibold text-lg text-[var(--brand-navy)]">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold tracking-wide uppercase text-[var(--brand-gold)]">
                    {c.count}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {c.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural split section */}
      <section className="section-blue section-pad">
        <div className="page-shell !py-0">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/35%)]"
            >
              <Image
                src="/images/poster/cultural.png"
                alt="Cultural programmes at Baramohanpur High School"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--brand-navy)]/30" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="eyebrow block mb-3">Cultural Life</span>
              <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)] mb-5">
                <span className="heading-underline">Where voices find a song, and stories find a stage.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[var(--muted-foreground)] max-w-xl">
                From the first nervous rehearsal to the final thunder of applause, our cultural
                programmes teach children something a textbook cannot — how to stand before people
                and give them something of yourself. Rabindra Jayanti, Annual Day, recitals and
                classroom assemblies are part of every student&apos;s life at Baramohanpur.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/gallery" className="btn-outline">
                  See more photos
                </Link>
                <Link href="/enquiry" className="btn-primary">
                  Enquire about admission
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports split section - reversed */}
      <section className="section-warm section-pad">
        <div className="page-shell !py-0">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="order-2 lg:order-1"
            >
              <span className="eyebrow block mb-3">Sports & Physical Development</span>
              <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)] mb-5">
                <span className="heading-underline">Running together. Losing together. Winning together.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[var(--muted-foreground)] max-w-xl">
                The ground is a great teacher. Victory is celebrated — but not worshipped. Defeat
                is borne — but not ignored. At Baramohanpur High School, inter-house sports,
                athletics, and daily playtime are not extras. They are how children learn endurance,
                humility, and the dignity of a team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/gallery" className="btn-outline">
                  Sports gallery
                </Link>
                <Link href="/contact" className="btn-gold">
                  Ask about sports
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/35%)]"
            >
              <Image
                src="/images/poster/sports.png"
                alt="Sports day at Baramohanpur High School"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--brand-gold)]/25" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement highlight */}
      <section className="relative isolate overflow-hidden">
        <div className="relative w-full h-[28rem] md:h-[36rem]">
          <Image
            src="/images/poster/events-1.png"
            alt="Student achievements and honours"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8">
            <div className="mx-auto w-full max-w-5xl">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)]/95 px-3 py-1 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--brand-ink)] shadow-sm mb-4">
                  <IconAward className="h-3.5 w-3.5" stroke={2.2} />
                  Achievement
                </div>
                <h2 className="font-display font-semibold text-3xl md:text-5xl leading-[1.08] text-white max-w-xl">
                  Honours that belong to the whole school family.
                </h2>
                <p className="mt-5 text-sm md:text-base leading-relaxed text-white/80 max-w-xl">
                  Academic toppers, inter-school trophies, medals, and certificates — each one
                  earned with effort, each one shared in assemblies, each one a reminder to the
                  next student: if you try, this school will notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lamp hero + interactive cards */}
      <LampDemo />
      <section className="relative isolate z-10 bg-white pb-24 pt-4 md:pb-32">
        <div className="mx-auto mb-8 max-w-3xl px-4 text-center md:mb-4">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
            Pick a moment
          </p>
          <h2 className="text-3xl font-semibold text-[var(--brand-navy)] md:text-5xl font-display">
            <span className="heading-underline">Annual events at a glance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted-foreground)] text-sm md:text-base">
            Tap a card to bring a chapter of campus life forward, then scroll when you are ready for the next story.
          </p>
        </div>
        <Cards />
      </section>
    </main>
  );
}
