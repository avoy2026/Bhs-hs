"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        At{" "}
        <LinkPreview
          url="/"
          isStatic
          imageSrc="/images/bhs-logo.jpeg"
          className="font-bold"
        >
          Boromohonpur High School
        </LinkPreview>
        , students grow through{" "}
        <LinkPreview
          url="/about"
          isStatic
          imageSrc="/images/img-slider-1.jpeg"
          className="font-bold"
        >
          dedicated teaching
        </LinkPreview>{" "}
        and a respectful learning culture.
      </div>
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Discover our{" "}
        <LinkPreview
          url="/events"
          isStatic
          imageSrc="/images/img-slider-2.jpeg"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#1B2A4A] to-[#C9A227]"
        >
          campus events
        </LinkPreview>{" "}
        and read important{" "}
        <LinkPreview
          url="/notices"
          isStatic
          imageSrc="/images/img-slider-3.jpeg"
          className="font-bold"
        >
          school notices
        </LinkPreview>
        .
      </div>
    </div>
  );
}
