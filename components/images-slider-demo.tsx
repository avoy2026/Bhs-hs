"use client";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

// Splits a string into words, each wrapped so it reveals individually
function AnimatedWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function ImagesSliderDemo() {
  const images = [
    "/images/02-HOMEPAGE/hero/hero1.webp",
    "/images/02-HOMEPAGE/hero/hero-2.webp",
    "/images/02-HOMEPAGE/hero/hero-3.webp",
  ];
  return (
    <ImagesSlider
      className="min-h-[480px] h-[78vh] max-h-[720px] md:h-[82vh]"
      images={images}
      overlayClassName="hero-scrim"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-[60] flex flex-col justify-center items-center px-4 text-center"
      >
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl tracking-[-0.02em] text-center leading-[1.08]">
          <AnimatedWords
            text="Baramohanpur High School"
            className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
            delay={0.1}
            stagger={0.09}
          />
          <span className="mt-3 block text-xl sm:text-2xl md:text-3xl">
            <AnimatedWords
              text="Shaping Young Minds for a"
              className="text-white/90"
              delay={0.55}
              stagger={0.08}
            />{" "}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block bg-gradient-to-r from-[var(--brand-gold)] to-[#f1d68c] bg-clip-text text-transparent font-semibold"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.78 }}
              >
                 Brighter Tomorrow.
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-6 mb-8 max-w-xl text-center text-sm leading-relaxed text-white/80 md:text-base"
        >
          Building minds. Shaping futures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/enquiry"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cfaa33]"
          >
            Enquire Now
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
          >
            Explore Our School
          </Link>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}