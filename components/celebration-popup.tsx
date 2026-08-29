"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";

const popupStorageKey = "bhs_150_years_popup_dismissed";

export default function CelebrationPopup({ visible }: { visible: boolean }) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDismissed(sessionStorage.getItem(popupStorageKey) === "1");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setDismissed(true);
    sessionStorage.setItem(popupStorageKey, "1");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.aside
          initial={{ opacity: 0, x: 28, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 28, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-label="150 years celebration"
          className="fixed bottom-5 right-4 z-[80] w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[var(--brand-gold)]/40 bg-white shadow-[0_20px_60px_rgba(20,35,63,0.25)] sm:bottom-6 sm:right-6"
        >
          <div className="relative h-36 w-full overflow-hidden bg-white flex items-center justify-center p-2 border-b border-[var(--border)]">
            <Image
              src="/images/01-BRANDING/school-achievements.jpeg"
              alt="150 Years of Excellence — Baramohanpur High School"
              fill
              sizes="320px"
              className="object-contain p-1"
              priority
            />
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close celebration message"
              className="absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <IconX className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
                ESTD 1878 · Historic Milestone
              </span>
            </div>
            <h2 className="font-display text-lg font-bold leading-tight text-[var(--brand-navy)]">
              150 Years Celebration
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted-foreground)]">
              Join us in celebrating 150 glorious years of education, character building, and alumni pride at Baramohanpur High School.
            </p>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
