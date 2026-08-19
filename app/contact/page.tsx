"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import EnquiryForm from "@/components/enquiry-form";

const contactDetails = [
  {
    icon: IconMapPin,
    label: "Address",
    body: (
      <>
        Baramohanpur High School
        <br />
        Baramohanpur, West Bengal
      </>
    ),
  },
  {
    icon: IconPhone,
    label: "Phone",
    body: (
      <a href="tel:+910000000000" className="hover:underline">
        +91 XXXXX XXXXX
      </a>
    ),
  },
  {
    icon: IconMail,
    label: "Email",
    body: (
      <a
        href="mailto:office@baramohanpurhs.edu.in"
        className="hover:underline"
      >
        office@baramohanpurhs.edu.in
      </a>
    ),
  },
  {
    icon: IconClock,
    label: "Office hours",
    body: (
      <>
        Mon – Sat · 10:00 AM – 4:00 PM
        <br />
        Closed on Sundays & holidays
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative section-navy overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgb(201_162_39/22%),transparent_55%),linear-gradient(180deg,transparent,rgb(11_18_32/40%))]"
        />
        <div className="relative page-shell py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
              Contact Us
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              The office is{" "}
              <span className="text-[var(--brand-gold)]">open</span> to you
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Come in person, write to us, or send an enquiry. Admissions,
              certificates, and everyday questions all begin at the same desk.
            </p>
            <Link
              href="#enquiry"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[var(--brand-gold)] px-5 py-2.5 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d4af37]"
            >
              Go to enquiry form →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-light">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
              Reach us
            </p>
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)] md:text-3xl">
              School office details
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border-t border-[var(--brand-navy)]/15 pt-5"
                >
                  <Icon className="mb-3 h-5 w-5 text-[var(--brand-gold)]" />
                  <p className="text-xs font-semibold tracking-[0.15em] text-[var(--brand-navy)]/50 uppercase">
                    {item.label}
                  </p>
                  <div className="mt-2 text-sm leading-relaxed text-[var(--foreground)]">
                    {item.body}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-soft border-t border-[var(--border)]">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
              Prefer a focused form?
            </p>
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)] md:text-3xl">
              Start with an admission enquiry
            </h2>
            <p className="mt-4 max-w-md text-[var(--muted-foreground)]">
              Looking to join Baramohanpur High School? Use the enquiry form
              here, or open the dedicated enquiry page.
            </p>
            <Link
              href="/enquiry"
              className="mt-6 inline-flex text-sm font-semibold text-[var(--brand-navy)] underline-offset-4 hover:underline"
            >
              Open Enquire Now page →
            </Link>
          </motion.div>

          <EnquiryForm
            title="Send us a message"
            description="Share your details and we will respond from the school office."
            className="rounded-2xl border border-[var(--border)] bg-white/90 p-6 shadow-[0_20px_50px_-30px_rgb(27_42_74/35%)] md:p-8"
          />
        </div>
      </section>
    </main>
  );
}
