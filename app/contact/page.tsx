"use client";

import Link from "next/link";
import Image from "next/image";
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
        <span className="block font-medium text-brand-navy">
          Baramohanpur High School
        </span>
        [PLACEHOLDER — Full Address]
        <br />
        Baramohanpur, West Bengal
      </>
    ),
  },
  {
    icon: IconPhone,
    label: "Phone",
    body: (
      <a href="tel:+910000000000" className="transition hover:text-brand-navy">
        +91 [PLACEHOLDER — PHONE]
      </a>
    ),
  },
  {
    icon: IconMail,
    label: "Email",
    body: (
      <a
        href="mailto:[PLACEHOLDER — EMAIL]"
        className="transition hover:text-brand-navy"
      >
        [PLACEHOLDER — EMAIL]
      </a>
    ),
  },
  {
    icon: IconClock,
    label: "Office hours",
    body: (
      <>
        <span className="font-medium text-brand-navy">Mon – Sat</span> · 10:00 AM – 4:00 PM
        <br />
        <span className="text-muted-foreground">Closed on Sundays &amp; holidays</span>
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative section-navy overflow-hidden">
        <Image
          src="/images/08-CONTACT-FAQ/faq/faq-banner.png"
          alt="Baramohanpur High School contact office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="hero-scrim absolute inset-0" />
        <div className="relative z-10 w-full h-52 md:h-72 lg:h-80" />
      </section>

      <section className="section-light">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-(--brand-navy)/60 uppercase">
              Reach us
            </p>
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
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
                  className="border-t border-(--brand-navy)/15 pt-5"
                >
                  <Icon className="mb-3 h-5 w-5 text-brand-gold" />
                  <p className="text-xs font-semibold tracking-[0.15em] text-(--brand-navy)/50 uppercase">
                    {item.label}
                  </p>
                  <div className="mt-2 text-sm leading-relaxed text-foreground">
                    {item.body}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-soft border-t border-border">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-(--brand-navy)/60 uppercase">
              Prefer a focused form?
            </p>
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              Start with an admission enquiry
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Looking to join Baramohanpur High School? Use the enquiry form
              here, or open the dedicated enquiry page.
            </p>
            <Link
              href="/enquiry"
              className="mt-6 inline-flex text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
            >
              Open Enquire Now page →
            </Link>
          </motion.div>

          <EnquiryForm
            title="Send us a message"
            description="Share your details and we will respond from the school office."
            className="rounded-2xl border border-border bg-white/90 p-6 shadow-[0_20px_50px_-30px_rgb(27_42_74/35%)] md:p-8"
          />
        </div>
      </section>
    </main>
  );
}
