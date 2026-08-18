"use client";
import { cn } from "@/lib/utils";
import { CanvasText } from "@/components/ui/canvas-text";
import { motion } from "motion/react";

export default function CanvasTextDemo() {
  return (
    <section className="relative isolate flex h-full min-h-[22rem] items-center justify-center overflow-hidden bg-[var(--brand-navy)] px-6 py-16 md:min-h-[36rem] md:px-8">
      {/* Animated gold radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgb(201_162_39/14%),transparent_70%)]" />
      </motion.div>

      {/* Decorative floating dots */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-[18%] left-[12%] h-2 w-2 rounded-full bg-[var(--brand-gold)]/40"
        animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-[15%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]/30"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-[35%] right-[8%] h-1 w-1 rounded-full bg-white/20"
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Subtle corner lines */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-6 left-6 h-12 w-12 border-t border-l border-[var(--brand-gold)]/20 md:top-10 md:left-10 md:h-16 md:w-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-6 bottom-6 h-12 w-12 border-r border-b border-[var(--brand-gold)]/20 md:right-10 md:bottom-10 md:h-16 md:w-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        {/* Small label */}
        <motion.p
          className="text-[0.65rem] font-semibold tracking-[0.3em] text-[var(--brand-gold)]/70 uppercase md:text-xs"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our philosophy
        </motion.p>

        {/* Main heading with CanvasText */}
        <motion.h2
          className={cn(
            "group relative mx-auto mt-2 max-w-xl text-center text-3xl font-bold leading-tight tracking-tight text-balance text-white sm:text-4xl md:text-5xl md:leading-tight",
          )}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Raise children who learn with{" "}
          <CanvasText
            text="quiet pride"
            backgroundClassName="bg-[var(--brand-navy)]"
            colors={[
              "rgba(201, 162, 39, 1)",
              "rgba(201, 162, 39, 0.9)",
              "rgba(201, 162, 39, 0.8)",
              "rgba(201, 162, 39, 0.7)",
              "rgba(201, 162, 39, 0.6)",
              "rgba(201, 162, 39, 0.5)",
              "rgba(201, 162, 39, 0.4)",
              "rgba(201, 162, 39, 0.3)",
              "rgba(201, 162, 39, 0.2)",
              "rgba(201, 162, 39, 0.1)",
            ]}
            lineGap={4}
            animationDuration={20}
          />
        </motion.h2>

        {/* Animated divider line */}
        <motion.div
          className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[var(--brand-gold)]/60 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Subtitle */}
        <motion.p
          className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          A place where knowledge meets character, and every student finds their voice.
        </motion.p>
      </div>
    </section>
  );
}
