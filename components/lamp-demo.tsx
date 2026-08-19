"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mb-4 text-xs font-semibold tracking-[0.28em] text-[var(--brand-gold)] uppercase"
      >
        A year of celebration
      </motion.p>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gradient-to-br from-[var(--brand-navy)] via-[#3d5270] to-[var(--brand-gold)] bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Where every event <br /> becomes a memory
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-2 max-w-xl text-center text-sm text-[var(--muted-foreground)] md:text-base"
      >
        From the first assembly of the year to the farewell applause — this is
        how Baramohanpur gathers, learns, and shines.
      </motion.p>
    </LampContainer>
  );
}
