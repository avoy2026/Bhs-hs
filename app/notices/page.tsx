import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "School Notices | Baramohanpur High School",
  description:
    "Official notices and announcements from Baramohanpur High School â€” admissions, exams, holidays, results, events and everyday reminders for students and parents.",
};

import TabsDemo from "@/components/tabs-demo";
import PageSectionHeading from "@/components/page-section-heading";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconCalendarClock,
  IconMessageCircle,
} from "@tabler/icons-react";

export default function NoticesPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-8 bg-[var(--brand-fog)] overflow-hidden">
        <div className="page-shell !py-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[24/9] max-h-[360px] min-h-[180px] rounded-3xl overflow-hidden shadow-md border border-[var(--border)] bg-white flex items-center justify-center">
            <Image
              src="/images/04-NOTICES/notice-banner.webp"
              alt="Announcements and Notices â€” Baramohanpur High School"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain p-4 md:p-8"
            />
          </div>
        </div>
      </section>

      {/* Quick meta strip */}
      <section className="bg-[var(--brand-cream)] border-b border-[var(--brand-gold)]/20">
        <div className="page-shell grid gap-5 py-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-navy)] text-[var(--brand-gold)]">
              <IconCalendarClock className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-navy)]/60">
                Updated on
              </p>
              <p className="text-sm font-medium text-[var(--brand-navy)]">
                School working days
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-navy)] text-[var(--brand-gold)]">
              <IconMessageCircle className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-navy)]/60">
                Clarifications
              </p>
              <p className="text-sm font-medium text-[var(--brand-navy)]">
                Contact office in writing or call
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-navy)] text-[var(--brand-gold)]">
              <IconArrowUpRight className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-navy)]/60">
                Urgent matters
              </p>
              <Link
                href="/contact"
                className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4 transition hover:text-[var(--brand-blue)]"
              >
                Reach us immediately
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs / Notice content */}
      <section className="relative bg-[var(--brand-fog)] pb-24 md:pb-32 pt-14 md:pt-16">
        <div className="page-shell">
          <PageSectionHeading
            eyebrow="CATEGORIES"
            title="Stay informed, every week"
            description="Browse notices by type. The school will keep adding updated circulars as the term progresses."
            align="left"
            size="md"
            accent="underline"
          />
        </div>
        <div className="mt-10">
          <TabsDemo />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="page-shell">
          <div className="rounded-3xl border border-[var(--brand-gold)]/20 bg-[var(--brand-cream)] p-8 md:p-12 text-center">
            <p className="mx-auto max-w-2xl text-lg font-display text-[var(--brand-navy)] md:text-xl">
              Cannot find the notice you are looking for? Our office can help
              you locate the right circular or explain what it means.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-blue)]"
              >
                Contact the office
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-navy)]/15 bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-navy)] transition hover:border-[var(--brand-navy)]/30"
              >
                Read common questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
