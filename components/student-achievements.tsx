"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import { IconMedal, IconBook, IconRun, IconMusic, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";

const categories = [
  {
    icon: IconBook,
    title: "Academic Excellence",
    description:
      "Board exam results, subject toppers, and students who carry our name into higher study with distinction.",
    accent: "from-[var(--brand-navy)]/12 to-[var(--brand-blue)]/8",
    iconBg: "bg-[var(--brand-navy)]/12 text-[var(--brand-navy)]",
  },
  {
    icon: IconMedal,
    title: "Awards & Distinctions",
    description:
      "Scholarships, essay prizes, quiz trophies, and honours earned in inter-school competitions.",
    accent: "from-[var(--brand-gold)]/20 to-amber-400/10",
    iconBg: "bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]",
  },
  {
    icon: IconRun,
    title: "Sports & Athletics",
    description:
      "Inter-house meets, district-level victories, and the discipline that comes from playing together.",
    accent: "from-emerald-500/15 to-teal-400/8",
    iconBg: "bg-emerald-500/15 text-emerald-700",
  },
  {
    icon: IconMusic,
    title: "Cultural & Creative",
    description:
      "Annual Day, Rabindra Jayanti, recitals, art exhibits and every performance where a student finds their stage.",
    accent: "from-rose-500/14 to-pink-400/8",
    iconBg: "bg-rose-500/14 text-rose-700",
  },
  {
    icon: IconUsers,
    title: "Student Participation",
    description:
      "Prefects, house captains, classroom monitors, and the hundreds of small duties that build character.",
    accent: "from-blue-500/14 to-indigo-400/8",
    iconBg: "bg-blue-500/14 text-blue-700",
  },
];

export default function StudentAchievements() {
  return (
    <section className="section-soft section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="Pride of our campus"
          title="Student Achievements"
          description="Every cup, every certificate, every mark — and the quiet effort behind each one. These are the moments Baramohanpur remembers."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/35%)]">
              <Image
                src="/images/poster/events-1.png"
                alt="Student achievements at Baramohanpur High School"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/65 via-[var(--brand-navy)]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="eyebrow text-white/85">Since the earliest days</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-white leading-tight max-w-md">
                  Honours that belong to the whole school family.
                </h3>
              </div>
            </div>
            <div
              aria-hidden
              className="hidden md:block absolute -right-4 -top-4 h-full w-full rounded-3xl bg-gradient-to-br from-[var(--brand-gold)]/25 to-transparent -z-10 -translate-y-3 translate-x-3"
            />
          </motion.div>

          <div className="grid gap-4">
            {categories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgb(20_35_63/30%)]"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                  />
                  <div className="flex items-start gap-4">
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                    >
                      <Icon className="h-5 w-5" stroke={1.7} />
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-[var(--brand-navy)] text-lg">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
