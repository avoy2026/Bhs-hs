"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconChevronDown, IconMail, IconPhone, IconClock } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Category = "All" | "Admissions" | "Academics" | "Student Life" | "General";

type FAQItem = {
  q: string;
  a: string;
  category: Exclude<Category, "All">;
};

const faqs: FAQItem[] = [
  {
    category: "Admissions",
    q: "What is the admission process at Baramohanpur High School?",
    a: "[PLACEHOLDER — Please confirm the official process with the school.] Generally, parents begin by submitting an enquiry or visiting the school office to collect information. Application forms are issued during the admission season, and required documents are reviewed. Depending on the class being applied to, a meeting with school administration or a simple interaction may be arranged before a seat is confirmed.",
  },
  {
    category: "Admissions",
    q: "What documents are required for a new admission?",
    a: "[PLACEHOLDER — Confirm exact list from school records.] Commonly asked documents include: (a) Birth certificate of the student, (b) Transfer Certificate / School Leaving Certificate from the previous school (for higher classes), (c) Previous year's progress report / mark sheet, (d) Recent passport-sized photographs of the child and guardian, (e) Proof of residence / guardian identification. Please call the office for the latest official list.",
  },
  {
    category: "Admissions",
    q: "What is the eligibility or age for admission?",
    a: "[PLACEHOLDER — Confirm age criteria.] Admissions are open to eligible students depending on the class. Generally, age-appropriate admissions are offered for classes beginning at the primary level, and admission to upper classes depends on availability of seats and readiness of the student for the class.",
  },
  {
    category: "Admissions",
    q: "How and when do we apply? Is there a last date?",
    a: "[PLACEHOLDER — Confirm admission window.] Parents are advised to contact the school office or submit an online enquiry before the start of the new academic session. Admission timelines vary by class, so the best first step is to send an enquiry through the website or call the school office directly.",
  },
  {
    category: "Academics",
    q: "Which board or curriculum does the school follow?",
    a: "[PLACEHOLDER — Confirm board/affiliation.] The school follows the curriculum and examination pattern prescribed by [Board Name / West Bengal Board of Secondary Education / appropriate authority]. Teaching is delivered in a balance of Bengali and English, with attention to all core subjects and co-curricular areas.",
  },
  {
    category: "Academics",
    q: "How is a child's progress assessed?",
    a: "Progress is measured through regular classroom work, assignments, periodical tests or formative assessments, and term-end / final examinations. Report cards are issued with both grades and comments where helpful, so parents understand strengths as well as areas that need more work.",
  },
  {
    category: "Academics",
    q: "What kind of academic support is available for students who need extra help?",
    a: "[PLACEHOLDER — Support programmes.] Teachers pay individual attention within the classroom, and extra help or remedial attention is given where needed — before class, after class, or during school hours. Parents are always notified early if a child is struggling, so we can work together.",
  },
  {
    category: "Student Life",
    q: "What co-curricular and extra-curricular activities are offered?",
    a: "Co-curricular life includes cultural programmes, Annual Day, Rabindra Jayanti and other observances, sports and athletics, inter-house competitions, student prefect duties, assemblies, art, music and various student-led activities. Physical education and games are part of the regular school timetable.",
  },
  {
    category: "Student Life",
    q: "What kinds of sports and physical education are available?",
    a: "[PLACEHOLDER — Exact sports offered.] Sports include group games on the school grounds, athletics, running, relays, and traditional team games played during PE periods and during the annual Sports Day. The emphasis is on participation, discipline and teamwork as much as winning.",
  },
  {
    category: "Student Life",
    q: "Are there cultural programmes, clubs or competitions for students?",
    a: "Yes — Annual Day, Rabindra Jayanti, recitals, house competitions, quiz, essay, debate, art and music events are part of the school calendar. Cultural and sports activities are spread across the academic year so that every child has a chance to join.",
  },
  {
    category: "General",
    q: "What are the normal school and office hours?",
    a: "[PLACEHOLDER — Confirm exact timing.] Classes are typically held during standard school hours on weekdays, Monday to Saturday. The school office is generally open Monday to Saturday, 10:00 AM – 4:00 PM, and closed on Sundays and public holidays.",
  },
  {
    category: "General",
    q: "How can parents contact the school or meet the teachers?",
    a: "Parents may call the office, send an enquiry through the website, or visit during office hours. Parent-Teacher meetings are scheduled each term, and additional meetings with teachers or the Principal can be arranged by prior appointment when required.",
  },
  {
    category: "General",
    q: "Is it possible to arrange a campus visit?",
    a: "Yes. If you are considering admission for your child and would like to see the campus, please call or write to the school office in advance to fix a suitable day and time. A brief visit is usually possible during working hours.",
  },
  {
    category: "General",
    q: "How are notices and important updates shared with parents?",
    a: "[PLACEHOLDER — Confirm mode of notices.] Notices are issued in writing through students, the school office, the official Notices page on this website, and by direct communication where necessary. Parents are requested to check the school diary and the Notices page regularly.",
  },
];

const categories: Category[] = ["All", "Admissions", "Academics", "Student Life", "General"];

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState<Category>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const shown = activeCat === "All" ? faqs : faqs.filter((f) => f.category === activeCat);

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
                Information for Parents
              </p>
              <h1 className="font-display font-semibold text-4xl md:text-6xl tracking-tight leading-[1.05] text-white max-w-4xl">
                <span className="heading-underline-stroke">Frequently Asked Questions</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
                Quick answers to the questions new and existing parents ask most often.
                If you do not find your answer here, please call or visit the school — we are happy to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-30 border-b border-black/5 bg-[var(--brand-fog)]/90 backdrop-blur">
        <div className="page-shell !py-0">
          <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {categories.map((c) => {
              const active = activeCat === c;
              return (
                <button
                  key={c}
                  onClick={() => {
                    setActiveCat(c);
                    setOpenIdx(0);
                  }}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition duration-200",
                    active
                      ? "bg-[var(--brand-navy)] text-white shadow-sm"
                      : "bg-white text-[var(--muted-foreground)] border border-black/5 hover:bg-[var(--brand-mist)] hover:text-[var(--brand-navy)]"
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-soft !pt-10 section-pad">
        <div className="page-shell !py-0">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-start">
            {/* Sidebar / Contact card */}
            <aside className="lg:sticky lg:top-28 space-y-5">
              <div className="relative overflow-hidden rounded-3xl bg-white border border-black/5 p-7 shadow-sm">
                <div className="relative aspect-[5/4] w-full rounded-2xl overflow-hidden mb-6 ring-1 ring-black/5">
                  <Image
                    src="/images/school/school-1.png"
                    alt="Baramohanpur High School campus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/55 via-transparent to-transparent" />
                </div>
                <p className="eyebrow block mb-3">Need a real conversation?</p>
                <h3 className="font-display font-semibold text-2xl text-[var(--brand-navy)] leading-tight">
                  Do not see your question here?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  Please call or visit the school office. The administration is happy to speak with
                  any parent or guardian — whether you are considering admission or already part of the school family.
                </p>
                <div className="mt-6 grid gap-3.5 text-sm">
                  <a href="tel:+910000000000" className="flex items-center gap-3 rounded-xl bg-[var(--brand-mist)] p-3 text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white transition duration-200">
                    <IconPhone className="h-4.5 w-4.5 shrink-0" stroke={1.8} />
                    <span className="font-medium">+91 [PLACEHOLDER — PHONE]</span>
                  </a>
                  <Link href="/contact" className="flex items-center gap-3 rounded-xl bg-[var(--brand-mist)] p-3 text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white transition duration-200">
                    <IconMail className="h-4.5 w-4.5 shrink-0" stroke={1.8} />
                    <span className="font-medium">Send a message</span>
                  </Link>
                  <div className="flex items-start gap-3 rounded-xl bg-[var(--brand-mist)] p-3 text-[var(--muted-foreground)]">
                    <IconClock className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[var(--brand-navy)]/70" stroke={1.8} />
                    <span className="text-sm">Mon – Sat · 10:00 AM – 4:00 PM · Closed Sundays</span>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/enquiry" className="btn-primary w-full justify-center">
                    Enquire Now
                  </Link>
                  <Link href="/contact" className="btn-outline w-full justify-center">
                    Visit Contact Page
                  </Link>
                </div>
              </div>
            </aside>

            {/* FAQ accordion */}
            <div className="grid gap-3">
              {shown.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={item.q}
                    className={cn(
                      "group rounded-2xl border bg-white transition-all duration-300",
                      isOpen
                        ? "border-[var(--brand-navy)]/20 shadow-[0_18px_40px_-24px_rgb(20_35_63/30%)]"
                        : "border-black/5 hover:border-black/10"
                    )}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                    >
                      <div className="min-w-0">
                        <p className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[var(--brand-gold)]">
                          {item.category}
                        </p>
                        <h4 className="mt-1 font-semibold text-[0.98rem] md:text-base text-[var(--brand-navy)] leading-snug">
                          {item.q}
                        </h4>
                      </div>
                      <span
                        className={cn(
                          "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full transition duration-300",
                          isOpen
                            ? "bg-[var(--brand-navy)] text-white rotate-180"
                            : "bg-[var(--brand-mist)] text-[var(--brand-navy)]"
                        )}
                      >
                        <IconChevronDown className="h-4 w-4" stroke={2} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 pt-0 text-sm md:text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              {shown.length === 0 && (
                <div className="py-10 text-center text-sm text-[var(--muted-foreground)]">
                  No questions in this section yet.
                </div>
              )}
              <p className="mt-10 text-xs text-[var(--muted-foreground)]">
                * Answers marked [PLACEHOLDER] are awaiting confirmation from official school records and will be replaced once provided.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
