"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <section className="section-soft flex h-[36rem] flex-col items-center justify-center px-4 md:h-[40rem]">
      <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
        Explore the School
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
        , students grow through{" "}
        <LinkPreview
          url="/about"
          isStatic
          imageSrc="/images/img-slider-1.jpeg"
          className="font-bold text-[var(--brand-navy)]"
        >
          dedicated teaching
        </LinkPreview>{" "}
        and a respectful learning culture.
      </div>
      <div className="mx-auto max-w-3xl text-center text-xl text-[var(--muted-foreground)] md:text-3xl">
        Discover our{" "}
        <LinkPreview
          url="/events"
          isStatic
          imageSrc="/images/img-slider-2.jpeg"
          className="bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-gold)] bg-clip-text font-bold text-transparent"
        >
          campus events
        </LinkPreview>{" "}
        and read important{" "}
        <LinkPreview
          url="/notices"
          isStatic
          imageSrc="/images/img-slider-3.jpeg"
          className="font-bold text-[var(--brand-navy)]"
        >
          school notices
        </LinkPreview>
        .
      </div>
    </section>
  );
}
