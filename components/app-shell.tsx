"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Preloader from "@/components/preloader";
import CelebrationPopup from "@/components/celebration-popup";
import SiteFooter from "@/components/site-footer";
import Navbar from "@/app/navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("bhs_preloader_done")) return;

    const timer = window.setTimeout(() => setShowPreloader(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  const finishPreloader = useCallback(() => {
    setShowPreloader(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bhs_preloader_done", "1");
    }
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

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Section reveal observer with viewport check and fallback guarantee
  useEffect(() => {
    if (showPreloader) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      document.querySelectorAll(".will-reveal").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    let observer: IntersectionObserver | null = null;
    let fallbackTimer: number | null = null;

    const setupTimer = window.setTimeout(() => {
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
        { threshold: 0.05, rootMargin: "0px 0px 50px 0px" },
      );

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport, reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          el.classList.add("will-reveal");
          observer?.observe(el);
        }
      });

      // Failsafe: Guarantee all sections become visible within 500ms
      fallbackTimer = window.setTimeout(() => {
        targets.forEach((el) => {
          el.classList.add("is-revealed");
        });
      }, 500);
    }, 60);

    return () => {
      window.clearTimeout(setupTimer);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
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
      <motion.div
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: showPreloader ? 0 : 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <SiteFooter />
      <CelebrationPopup visible={!showPreloader} />
    </>
  );
}
