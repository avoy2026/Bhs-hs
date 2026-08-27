"use client";

import PageSectionHeading from "@/components/page-section-heading";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconChevronDown, IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export type FAQItem = {
  q: string;
  a: string;
  category: "Admissions" | "Academics" | "Student Life" | "General";
};

export const popularFAQs: FAQItem[] = [
  {
    category: "Admissions",
    q: "What is the admission process at Baramohanpur High School?",
    a: "[PLACEHOLDER — Please confirm the official process.] Generally, parents begin by submitting an enquiry or visiting the school office. Admission criteria and required documents are shared during the process, and a meeting with school administration may be arranged before seats are confirmed.",
  },
  {
    category: "Admissions",
    q: "What documents are typically required for admission?",
    a: "[PLACEHOLDER — Confirm with school records.] Commonly required documents include a copy of the child's birth certificate, previous school records (if applicable), transfer certificate, recent photographs, and proof of residence or identity of parents/guardians.",
  },
  {
    category: "Academics",
    q: "What curriculum or board does the school follow?",
    a: "[PLACEHOLDER — Confirm board/affiliation.] The school follows the curriculum prescribed by [BOARD NAME / West Bengal Board / Council], with teaching support in Bengali, English and other subjects appropriate to each class.",
  },
  {
    category: "Academics",
    q: "How is a child's progress assessed and communicated?",
    a: "Progress is assessed through regular classwork, periodical tests or examinations, and written report cards. Parent-Teacher meetings are held each term to share progress in person, and teachers remain available for individual discussions when needed.",
  },
  {
    category: "Student Life",
    q: "What activities and programmes are available beyond classrooms?",
    a: "Students can take part in cultural programmes, annual day, sports and athletics, house competitions, assemblies, prefect duties, and various school celebrations. Physical education and co-curricular activities are part of the regular school calendar.",
  },
  {
    category: "General",
    q: "What are the school office hours, and how can we contact the school?",
    a: "The school office is generally open Monday to Saturday, 10:00 AM – 4:00 PM (closed on Sundays and public holidays). Parents may contact the school by phone, by visiting the office, or by submitting an enquiry through the website. [PLACEHOLDER — Confirm exact hours and contacts.]",
  },
];

export default function FAQPreview({ limit = 4, showLink: _showLink = true }: { limit?: number; showLink?: boolean }) {
  const items = popularFAQs.slice(0, limit);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-soft section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="FAQ"
          title="Questions parents often ask"
          description="Answers to the most common questions about admissions, academics, and school life. Still unsure? Please call or visit us — we are happy to talk."
          align="left"
          size="md"
          accent="stroke"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16 items-start">
          <div>
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-navy to-[var(--brand-blue)] text-white p-8 md:p-10 shadow-[0_30px_80px_-30px_rgb(20_35_63/50%)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 100% 0%, rgb(182 141 34 / 22%), transparent 60%)",
                }}
              />
              <p className="eyebrow text-brand-gold relative">Need more help?</p>
              <h3 className="relative mt-3 font-display font-semibold text-2xl md:text-3xl text-green leading-tight">
                A good conversation is worth ten forms.
              </h3>
              <p className="relative mt-4 text-sm md:text-base leading-relaxed text-white/80">
                If your question is not here — or if you would rather speak to a person — the school office is always happy to receive a parent or guardian with an honest question.
              </p>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <Link href="/faq" className="group inline-flex items-center gap-2 rounded-md bg-[var(--brand-gold)] px-5 py-2.5 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cfaa33]">
                  View All FAQs
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/18">
                  Contact the Office
                </Link>
              </div>
              <p className="relative mt-7 text-xs text-white/60 tracking-wide">
                Mon – Sat · 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {items.map((item, idx) => {
              const isOpen = open === idx;
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
                    onClick={() => setOpen(isOpen ? null : idx)}
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
          </div>
        </div>
      </div>
    </section>
  );
}
