"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import { IconQuote, IconMail } from "@tabler/icons-react";
import { motion } from "motion/react";

type Teacher = {
  name: string;
  designation: string;
  subject: string;
  message?: string;
  image?: string;
  category: "leadership" | "teacher";
};

const teachers: Teacher[] = [
  {
    name: "Sanjoy Modak",
    designation: "Headmaster",
    subject: "M.A. (English), B.Ed.",
    image: "/images/teachers/leadership/principal.jpeg",
    category: "leadership",
  },
  {
    name: "Lokesh Mishra", designation: "Teacher", subject: "B.Sc. (Hons) (Chemistry), B.Ed.", category: "teacher",
  },
  {
    name: "Joydeb Bhunia", designation: "Teacher", subject: "M.Sc. (Geography), B.Ed.", image: "/images/teachers/teaching/joydeb-bhunia.jpeg", category: "teacher",
  },
  {
    name: "Debasis Ray", designation: "Teacher", subject: "B.Sc. (Hons.) (Physics), B.Ed.", category: "teacher",
  },
  {
    name: "Bina Das", designation: "Teacher", subject: "B.A. (English), M.A. (Political Science), B.Ed.", image: "/images/teachers/teaching/bina-das.jpeg", category: "teacher",
  },
  {
    name: "Manoj Mahapatra", designation: "Teacher", subject: "M.A. (Economics), B.Ed.", image: "/images/teachers/teaching/manoj-mahapatra.jpeg", category: "teacher",
  },
  {
    name: "Falguni Misra Nanda", designation: "Teacher", subject: "M.A. (English), B.Ed.", image: "/images/teachers/teaching/falguni-misra-nanda.jpeg", category: "teacher",
  },
  {
    name: "Binod Behari Murmu", designation: "Teacher", subject: "B.A., B.P.Ed.", category: "teacher",
  },
  {
    name: "Mahua Maity", designation: "Teacher", subject: "M.Sc. (Physiology), Lady Brabourne Trained, B.Ed.", image: "/images/teachers/teaching/mahua-maity.jpeg", category: "teacher",
  },
  {
    name: "Niranjan Kumar Baram", designation: "Teacher", subject: "M.A. (Philosophy), B.Ed.", image: "/images/teachers/teaching/niranjan-kumar-baram.jpeg", category: "teacher",
  },
  {
    name: "Gitesh Biswas", designation: "Teacher", subject: "M.A. (Political Science)", category: "teacher",
  },
  {
    name: "Kedar Dhal", designation: "Teacher", subject: "M.Sc. (Mathematics), B.Ed.", image: "/images/teachers/teaching/kedar-dhal.jpeg", category: "teacher",
  },
  {
    name: "Aranyamoy Bar", designation: "Teacher", subject: "B.A. (Honours) (Bengali), B.P.Ed.", image: "/images/teachers/teaching/aranyamoy-bar.jpeg", category: "teacher",
  },
  {
    name: "Swapnasree Das", designation: "Teacher", subject: "B.Sc. (Honours) (Nutrition)", image: "/images/teachers/teaching/swapnasree-das.jpeg", category: "teacher",
  },
  {
    name: "Asis Dandapat", designation: "Teacher", subject: "M.A. (English), B.Ed.", image: "/images/teachers/teaching/asis-dandapat.jpeg", category: "teacher",
  },
  {
    name: "Khukumoni Mandal Barman", designation: "Teacher", subject: "M.A. (Bengali), B.Ed.", image: "/images/teachers/teaching/khukumoni-mandal-barman.jpeg", category: "teacher",
  },
];

function TeacherCard({ t, idx }: { t: Teacher; idx: number }) {
  const isPrincipal = t.designation === "Headmaster";
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
        {t.image ? (
          <Image
            src={t.image}
            alt={`${t.name}, ${t.designation}`}
            fill
            sizes={isPrincipal ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 768px) 100vw, 25vw"}
            className="object-cover transition duration-[900ms] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="relative flex h-full items-center justify-center bg-[var(--brand-mist)] px-6 text-center">
            <Image
              src="/images/branding/school-logo.png.jpeg"
              alt="Baramohanpur High School emblem"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-contain p-12 opacity-35"
            />
            <span className="relative z-10 rounded-md bg-white/80 px-3 py-2 text-sm font-medium text-[var(--brand-navy)]/70">
              Staff photograph to be added
            </span>
          </div>
        )}
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
          {t.message && (
            <blockquote className={`relative mt-4 leading-relaxed text-[var(--muted-foreground)] ${isPrincipal ? "text-base" : "text-sm"}`}>
              <IconQuote className="absolute -left-0.5 -top-1 h-4 w-4 text-[var(--brand-gold)]/60" />
              <span className="pl-5">{t.message}</span>
            </blockquote>
          )}
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
            title="Headmaster & School Leadership"
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
            * Four staff photographs and profile messages remain to be added after official confirmation.
          </p>
        </div>
      </section>
    </main>
  );
}
