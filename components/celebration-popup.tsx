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
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-label="150 years celebration"
          className="fixed bottom-5 right-4 z-[80] w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[var(--brand-gold)]/35 bg-white shadow-[0_18px_55px_rgba(20,35,63,0.2)] sm:bottom-6 sm:right-6"
        >
          <div className="relative h-28 w-full overflow-hidden bg-[var(--brand-navy)]">
            <Image
              src="/images/branding/school-achievements.jpeg"
              alt="Baramohanpur High School celebration"
              fill
              sizes="304px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[var(--brand-navy)]/35" />
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close celebration message"
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <IconX className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
              A proud milestone
            </p>
            <h2 className="mt-1 font-display text-lg font-semibold leading-tight text-[var(--brand-navy)]">
              150 years of Baramohanpur High School
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
              Join us in celebrating 150 years of learning, character, and community.
            </p>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
