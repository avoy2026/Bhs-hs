"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import { IconQuote, IconMail } from "@tabler/icons-react";
import { motion } from "motion/react";

type Teacher = {
  name: string;
  designation: string;
  subject: string;
  message: string;
  image: string;
  category: "leadership" | "teacher";
};

const teachers: Teacher[] = [
  {
    name: "[PLACEHOLDER — Principal Name]",
    designation: "Principal",
    subject: "School Leadership",
    message:
      "Every child who walks through our gate is capable of more than they have yet imagined. Our job, each day, is to help them believe that too.",
    image: "/images/teachers/principal.png",
    category: "leadership",
  },
  {
    name: "[PLACEHOLDER — Asst. Headmistress / Vice Principal]",
    designation: "[TITLE — Asst. Head / VP]",
    subject: "Administration & [SUBJECT]",
    message:
      "A school runs not on rules alone, but on a thousand small kindnesses — noticing the quiet child, the tired teacher, the parent who is worried.",
    image: "/images/teachers/teacher.png",
    category: "leadership",
  },
  {
    name: "[Teacher Name 1]",
    designation: "Senior Teacher",
    subject: "Bengali / Literature",
    message:
      "A poem read aloud can change how a child hears language forever. I try to give them that moment at least once a week.",
    image: "/images/teachers/teacher.png",
    category: "teacher",
  },
  {
    name: "[Teacher Name 2]",
    designation: "Teacher",
    subject: "Mathematics",
    message:
      "Mathematics is not speed. It is sitting with a problem until the moment it makes sense — and then that sense belongs to you.",
    image: "/images/teachers/teacher.png",
    category: "teacher",
  },
  {
    name: "[Teacher Name 3]",
    designation: "Teacher",
    subject: "Science",
    message:
      "The lab is where textbooks come alive. An experiment that works — or even one that doesn't — teaches children more than any paragraph.",
    image: "/images/teachers/teacher.png",
    category: "teacher",
  },
  {
    name: "[Teacher Name 4]",
    designation: "Teacher",
    subject: "English",
    message:
      "Grammar is a roof, not a cage. Once you know it well, you can say exactly what you mean, and that is one of life's great freedoms.",
    image: "/images/teachers/teacher.png",
    category: "teacher",
  },
  {
    name: "[Teacher Name 5]",
    designation: "Teacher",
    subject: "History & Social Studies",
    message:
      "History is not dates. It is the story of people who once stood where we stand, wondering about many of the same things.",
    image: "/images/teachers/teacher.png",
    category: "teacher",
  },
  {
    name: "[Teacher Name 6]",
    designation: "Teacher",
    subject: "Physical Education",
    message:
      "The ground does not lie. A child learns quickly that if you do not practise, you do not improve — and that lesson travels well beyond sports.",
    image: "/images/teachers/teacher.png",
    category: "teacher",
  },
];

function TeacherCard({ t, idx }: { t: Teacher; idx: number }) {
  const isPrincipal = t.designation === "Principal";
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: idx * 0.04 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        isPrincipal ? "lg:col-span-2 lg:flex-row ring-1 ring-[var(--brand-gold)]/20" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          isPrincipal
            ? "w-full lg:w-[45%] aspect-[4/3] lg:aspect-auto"
            : "aspect-[5/4] w-full"
        }`}
      >
        <Image
          src={t.image}
          alt={`${t.name}, ${t.designation}`}
          fill
          sizes={isPrincipal ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 25vw"}
          className="object-cover transition duration-[900ms] group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/65 via-transparent to-transparent" />
        {isPrincipal && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-3 py-1 text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[var(--brand-ink)] shadow-sm">
            Principal
          </div>
        )}
      </div>
      <div className={`flex flex-col justify-between p-6 ${isPrincipal ? "lg:p-8 lg:w-[55%]" : ""}`}>
        <div>
          <p className="eyebrow-navy block mb-1">{t.subject}</p>
          <h3 className={`font-display font-semibold text-[var(--brand-navy)] ${isPrincipal ? "text-2xl" : "text-lg"}`}>
            {t.name}
          </h3>
          <p className={`text-sm text-[var(--muted-foreground)] ${isPrincipal ? "mt-1" : "mt-0.5"}`}>
            {t.designation}
          </p>
          <blockquote className={`relative mt-4 leading-relaxed text-[var(--muted-foreground)] ${isPrincipal ? "text-base" : "text-sm"}`}>
            <IconQuote className="absolute -left-0.5 -top-1 h-4 w-4 text-[var(--brand-gold)]/60" />
            <span className="pl-5">{t.message}</span>
          </blockquote>
        </div>
        <div className={`mt-6 flex items-center justify-between ${isPrincipal ? "border-t border-[var(--border)] pt-5" : ""}`}>
          <div className="h-9 w-9 rounded-full bg-[var(--brand-navy)]/8 inline-flex items-center justify-center">
            <IconMail className="h-4 w-4 text-[var(--brand-navy)]/70" />
          </div>
          <span className="text-xs font-medium tracking-wide uppercase text-[var(--muted-foreground)]">
            Baramohanpur HS
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function TeamPage() {
  const leaders = teachers.filter((t) => t.category === "leadership");
  const staff = teachers.filter((t) => t.category === "teacher");

  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate overflow-hidden section-navy">
        <div className="relative w-full section-pad">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgb(43 75 136 / 65%), transparent 60%), radial-gradient(ellipse 50% 60% at 90% 100%, rgb(182 141 34 / 18%), transparent 55%)",
            }}
          />
          <div className="page-shell !py-0 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[0.72rem] md:text-xs font-semibold tracking-[0.3em] text-[var(--brand-gold)] uppercase mb-4">
                About · Our Team
              </p>
              <h1 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[1.05] text-white max-w-3xl">
                <span className="heading-underline-stroke">Our Team</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
                The teachers of Baramohanpur High School do more than teach subjects. They notice,
                they encourage, they stay a little late — and they remember the child behind every mark.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-soft section-pad">
        <div className="page-shell !py-0">
          <PageSectionHeading
            eyebrow="Leadership"
            title="Principal & School Leadership"
            description="The people who guide the school, day after day, keeping every class and every student in mind."
            align="left"
            size="md"
            accent="stroke"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {leaders.map((t, idx) => (
              <TeacherCard key={t.name} t={t} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-blue section-pad">
        <div className="page-shell !py-0">
          <PageSectionHeading
            eyebrow="Teachers"
            title="Our Teaching Staff"
            description="Patient teachers of every subject — patient because they still remember what it was like to learn something for the first time."
            size="md"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((t, idx) => (
              <TeacherCard key={t.name + idx} t={t} idx={idx} />
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-[var(--muted-foreground)]">
            * Teacher names, subjects and photographs will be updated as official school records are shared.
          </p>
        </div>
      </section>
    </main>
  );
}
