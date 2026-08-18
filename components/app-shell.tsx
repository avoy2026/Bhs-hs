"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Preloader from "@/components/preloader";
import SiteFooter from "@/components/site-footer";
import Navbar from "@/app/navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);

  const finishPreloader = useCallback(() => {
    setShowPreloader(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPreloader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPreloader]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (showPreloader) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let observer: IntersectionObserver | null = null;
    const timer = window.setTimeout(() => {
      const targets = [
        ...document.querySelectorAll("main > *"),
        ...document.querySelectorAll("footer"),
      ];

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
      );

      targets.forEach((el) => {
        el.classList.add("will-reveal");
        observer?.observe(el);
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname, showPreloader]);

  return (
    <>
      <AnimatePresence>
        {showPreloader && (
          <Preloader key="preloader" onComplete={finishPreloader} />
        )}
      </AnimatePresence>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPreloader ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
