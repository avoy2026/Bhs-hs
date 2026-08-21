"use client";

import Link from "next/link";
import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function FinalHomeCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative w-full bg-[var(--brand-navy)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 10%, rgb(43 75 136 / 65%), transparent 60%), radial-gradient(ellipse 50% 60% at 90% 100%, rgb(182 141 34 / 22%), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-[0.7rem] md:text-xs font-semibold tracking-[0.28em] text-[var(--brand-gold)] uppercase">
              The next chapter
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-5xl tracking-tight leading-[1.1]">
              Begin Your Journey With{" "}
              <span className="bg-gradient-to-r from-[var(--brand-gold)] to-[#f1d68c] bg-clip-text text-transparent">
                Baramohanpur High School
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
              Whether you are enquiring about admission, arranging a campus visit, or simply wanting to understand who we are — we are happy to hear from you. A good school conversation begins with a simple, honest question.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/enquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-gold)] px-7 py-3.5 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cfaa33]"
              >
                Enquire Now
                <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/18"
              >
                <IconMail className="h-4 w-4" />
                Contact Us
              </Link>
            </div>

            <p className="mt-8 text-xs text-white/50 tracking-wide">
              Office hours · Mon – Sat · 10:00 AM – 4:00 PM
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
