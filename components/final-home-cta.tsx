"use client";

import Link from "next/link";
import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function FinalHomeCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative w-full bg-[var(--brand-navy)] text-white">
        {/* Ambient glow layers */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 15% 10%, rgb(43 75 136 / 65%), transparent 60%), radial-gradient(ellipse 50% 60% at 90% 100%, rgb(182 141 34 / 22%), transparent 55%)",
          }}
        />

        {/* Subtle animated grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 80%)",
          }}
        />

        {/* Drifting gold particles */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[var(--brand-gold)]/50"
              style={{
                left: `${(i * 47 + 10) % 100}%`,
                top: `${(i * 31 + 15) % 100}%`,
              }}
              animate={{ opacity: [0, 0.7, 0], y: [-8, -28] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-[0.7rem] md:text-xs font-semibold tracking-[0.28em] text-[var(--brand-gold)] uppercase"
            >
              The next chapter
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="mt-4 font-display font-semibold text-3xl md:text-5xl tracking-tight leading-[1.1] text-white"
            >
              Begin Your Journey With{" "}
              <span className="bg-gradient-to-r from-[var(--brand-gold)] to-[#f1d68c] bg-clip-text text-transparent">
                Baramohanpur High School
              </span>
            </motion.h2>

            {/* Glowing accent divider */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent"
            />

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/75"
            >
              Whether you are enquiring about admission, arranging a campus visit, or simply wanting to understand who we are — we are happy to hear from you. A good school conversation begins with a simple, honest question.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href="/enquiry"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-[var(--brand-gold)] px-7 py-3.5 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cfaa33] hover:shadow-[0_8px_24px_rgba(201,162,39,0.35)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Enquire Now</span>
                <IconArrowUpRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/18"
              >
                <IconMail className="h-4 w-4" />
                Contact Us
              </Link>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-xs text-white/50 tracking-wide"
            >
              Office hours · Mon – Sat · 10:00 AM – 4:00 PM
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}