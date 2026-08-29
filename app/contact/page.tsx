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
          Baramohanpur High School (H.S.)
        </span>
        State Highway 5, Khakurda, Belda
        <br />
        Paschim Medinipur, West Bengal â€” 721445
      </>
    ),
  },
  {
    icon: IconPhone,
    label: "Phone",
    body: (
      <a href="tel:+910000000000" className="transition hover:text-brand-navy">
        +91 [PLACEHOLDER â€” PHONE]
      </a>
    ),
  },
  {
    icon: IconMail,
    label: "Email",
    body: (
      <a
        href="mailto:[PLACEHOLDER â€” EMAIL]"
        className="transition hover:text-brand-navy"
      >
        [PLACEHOLDER â€” EMAIL]
      </a>
    ),
  },
  {
    icon: IconClock,
    label: "Office hours",
    body: (
      <>
        <span className="font-medium text-brand-navy">Mon â€“ Sat</span> Â· 10:00 AM â€“ 4:00 PM
        <br />
        <span className="text-muted-foreground">Closed on Sundays &amp; holidays</span>
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-24 md:pt-32 pb-8 bg-[var(--brand-fog)] overflow-hidden">
        <div className="page-shell !py-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[24/9] max-h-[360px] min-h-[180px] rounded-3xl overflow-hidden shadow-md border border-[var(--border)] bg-[#4a86c6]">
            <Image
              src="/images/08-CONTACT-FAQ/contact/contact-Us banner.webp"
              alt="Contact Us â€” Baramohanpur High School"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>
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

      {/* GOOGLE MAP LOCATION */}
      <section className="section-soft section-pad border-t border-[var(--border)]">
        <div className="page-shell !py-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-(--brand-navy)/60 uppercase">
              Location & Campus Map
            </p>
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
              Visit Baramohanpur High School
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              State Highway 5, Khakurda, Belda, Paschim Medinipur, West Bengal (PIN: 721445)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[380px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-border bg-white"
          >
            <iframe
              title="Baramohanpur High School Google Map Location"
              src="https://maps.google.com/maps?q=State%20Highway%205%2C%20Khakurda%2C%20Belda%2C%20Paschim%20Medinipur%2C%20West%20Bengal%20721445&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
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
              Open Enquire Now page â†’
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
