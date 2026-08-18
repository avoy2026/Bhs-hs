"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <section className="section-soft relative isolate flex min-h-[32rem] flex-col items-center justify-center overflow-hidden px-4 py-20 md:min-h-[36rem]">
      <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
        Walk the campus in words
      </p>
      <div className="mx-auto mb-10 max-w-3xl text-center text-xl text-[var(--muted-foreground)] md:text-3xl">
        At{" "}
        <LinkPreview
          url="/"
          isStatic
          imageSrc="/images/bhs-logo.jpeg"
          className="font-bold text-[var(--brand-navy)]"
        >
          Boromohonpur High School
        </LinkPreview>
        , a child learns to think clearly — and to{" "}
        <LinkPreview
          url="/about"
          isStatic
          imageSrc="/images/img-slider-1.jpeg"
          className="font-bold text-[var(--brand-gold)]"
        >
          carry themselves with grace
        </LinkPreview>
        .
      </div>
      <div className="mx-auto max-w-3xl text-center text-xl text-[var(--muted-foreground)] md:text-3xl">
        Follow the year through our{" "}
        <LinkPreview
          url="/events"
          isStatic
          imageSrc="/images/img-slider-2.jpeg"
          className="bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-gold)] bg-clip-text font-bold text-transparent"
        >
          campus events
        </LinkPreview>{" "}
        and stay close through{" "}
        <LinkPreview
          url="/notices"
          isStatic
          imageSrc="/images/img-slider-3.jpeg"
          className="font-bold text-[var(--brand-navy)]"
        >
          official notices
        </LinkPreview>
        .
      </div>
    </section>
  );
}
