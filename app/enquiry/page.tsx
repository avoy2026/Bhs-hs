"use client";

import Link from "next/link";
import { motion } from "motion/react";
import EnquiryForm from "@/components/enquiry-form";

export default function EnquiryPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative section-navy overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_0%,rgb(201_162_39/20%),transparent_50%)]"
        />
        <div className="relative page-shell py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
              Enquire Now
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Start your journey with us
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Submit an admission or general enquiry. Our office will get back
              to you with the next steps.
            </p>
            <p className="mt-6 text-sm text-slate-400">
              Need office hours or directions?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[var(--brand-gold)] underline-offset-4 hover:underline"
              >
                Visit Contact Us
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-light">
        <div className="page-shell mx-auto max-w-3xl">
          <EnquiryForm
            title="Admission & general enquiry"
            description="Fill in the form below. Choose the enquiry type that best matches your request."
            className="rounded-2xl border border-[var(--border)] bg-white/90 p-6 shadow-[0_20px_50px_-30px_rgb(27_42_74/35%)] md:p-10"
          />
        </div>
      </section>
    </main>
  );
}
