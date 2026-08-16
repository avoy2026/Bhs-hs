"use client";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function ImagesSliderDemo() {
  const images = [
    "/images/img-slider-1.jpeg",
    "/images/img-slider-2.jpeg",
    "/images/img-slider-3.jpeg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Boromohonpur High School <br /> Knowledge, character, and community
        </motion.p>
        <Link
          href="/enquiry"
          className="px-4 py-2 backdrop-blur-sm border bg-[var(--brand-gold)]/15 border-[var(--brand-gold)]/35 text-white mx-auto text-center rounded-full relative mt-4 transition hover:bg-[var(--brand-gold)]/25"
        >
          <span>Enquire Now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[var(--brand-gold)] to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
