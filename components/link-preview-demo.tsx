"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <section className="relative isolate flex h-full min-h-[32rem] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#fdf6e3] to-[#f5e6b8] px-4 py-16 md:min-h-[40rem] md:py-20">
      {/* Decorative warm gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_30%,rgb(201_162_39/14%),transparent)]"
      />
      {/* Subtle bottom-right accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_90%,rgb(201_162_39/10%),transparent)]"
      />
      <p className="relative mb-6 text-xs font-semibold tracking-[0.2em] text-[var(--brand-emerald)] uppercase">
        Walk the campus in words
      </p>
      <div className="relative mx-auto mb-8 max-w-xl text-center text-xl text-[var(--brand-navy)]/70 md:text-3xl">
        At{" "}
        <LinkPreview
          url="/"
          isStatic
          imageSrc="/images/branding/school-logo.png.jpeg"
          className="font-bold text-[var(--brand-navy)]"
        >
          Baramohanpur High School
        </LinkPreview>
        , a child learns to think clearly — and to{" "}
        <LinkPreview
          url="/about"
          isStatic
          imageSrc="/images/campus/campus-wide-view.jpeg"
          className="font-bold text-[var(--brand-gold)]"
        >
          carry themselves with grace
        </LinkPreview>
        .
      </div>
      <div className="relative mx-auto max-w-xl text-center text-xl text-[var(--brand-navy)]/70 md:text-3xl">
        Follow the year through our{" "}
        <LinkPreview
          url="/events"
          isStatic
          imageSrc="/images/banners/home-hero-classroom.jpeg"
          className="bg-gradient-to-r from-[var(--brand-gold)] to-amber-500 bg-clip-text font-bold text-transparent"
        >
          campus events
        </LinkPreview>{" "}
        and stay close through{" "}
        <LinkPreview
          url="/notices"
          isStatic
          imageSrc="/images/events/academic/educational-events.png"
          className="font-bold text-[var(--brand-emerald)]"
        >
          official notices
        </LinkPreview>
        .
      </div>
    </section>
  );
}
