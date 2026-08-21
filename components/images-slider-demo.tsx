"use client";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function ImagesSliderDemo() {
  const images = [
    "/images/school/school-3.png",
    "/images/classroom/classroom-2.png",
    "/images/poster/events-1.png",
  ];
  return (
    <ImagesSlider
      className="h-[42rem] md:h-[46rem]"
      images={images}
      overlayClassName="hero-scrim"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="relative z-[60] flex flex-col justify-center items-center px-4 text-center"
      >
        <p className="mb-4 text-[0.72rem] md:text-xs font-semibold tracking-[0.3em] text-[var(--brand-gold)] uppercase">
          Est. in Baramohanpur
        </p>
        <motion.h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl tracking-[-0.02em] text-center leading-[1.08]">
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Baramohanpur High School
          </span>
          <span className="mt-3 block text-xl sm:text-2xl md:text-3xl">
            <span className="text-white/90">Where knowledge finds</span>{" "}
            <span className="bg-gradient-to-r from-[var(--brand-gold)] to-[#f1d68c] bg-clip-text text-transparent font-semibold">
              character
            </span>
          </span>
        </motion.h1>
        <p className="mt-6 mb-8 max-w-2xl text-center text-sm leading-relaxed text-white/80 md:text-base">
          A neighbourhood school with a long memory — classrooms that still
          echo with first lessons, and a campus that grows a little prouder
          every year.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
