"use client";

import Image from "next/image";
import { IconQuote, IconUser } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export type TestimonialCategory = "student" | "parent" | "teacher" | "alumni";

export type Testimonial = {
  name: string;
  role: string;
  category: TestimonialCategory;
  quote: string;
  image?: string;
  className?: string;
  highlight?: boolean;
};

const categoryLabels: Record<TestimonialCategory, string> = {
  student: "Student Voice",
  parent: "Parent Review",
  teacher: "Teacher",
  alumni: "Alumni",
};

const categoryTint: Record<TestimonialCategory, string> = {
  student: "bg-[var(--brand-navy)]/10 text-[var(--brand-navy)]",
  parent: "bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]",
  teacher: "bg-[var(--brand-blue)]/12 text-[var(--brand-blue)]",
  alumni: "bg-emerald-500/12 text-emerald-700",
};

export default function TestimonialCard({
  t,
  variant = "card",
  className,
}: {
  t: Testimonial;
  variant?: "card" | "compact" | "wide";
  className?: string;
}) {
  const { name, role, category, quote, image, highlight } = t;
  const label = categoryLabels[category];
  const tint = categoryTint[category];

  if (variant === "wide") {
    return (
      <article
        className={cn(
          "group relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center overflow-hidden rounded-3xl bg-white border border-black/5 p-6 md:p-8 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md",
          highlight && "ring-1 ring-(--brand-gold)/25",
          className
        )}
      >
        <div className="relative h-24 w-24 shrink-0 mx-auto lg:mx-0">
          {image ? (
            <Image
              src={image}
              alt={`${name}, ${role}`}
              fill
              className="object-cover rounded-2xl ring-2 ring-white shadow-sm"
            />
          ) : (
            <div className="h-full w-full rounded-2xl bg-brand-mist inline-flex items-center justify-center ring-2 ring-white shadow-sm">
              <IconUser className="h-10 w-10 text-(--brand-navy)/50" stroke={1.6} />
            </div>
          )}
        </div>
        <div>
          <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.18em] uppercase", tint)}>
            {label}
          </span>
          <blockquote className="relative mt-4 text-base md:text-lg leading-relaxed text-(--foreground)/85">
            <IconQuote className="absolute -left-0.5 -top-1 h-5 w-5 text-(--brand-gold)/50" stroke={1.8} />
            <span className="pl-6">{quote}</span>
          </blockquote>
          <div className="mt-6 pt-5 border-t border-border">
            <p className="font-display font-semibold text-lg text-brand-navy">{name}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article
        className={cn(
          "group relative flex h-full flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md",
          className
        )}
      >
        <span className={cn("self-start inline-flex items-center rounded-full px-2.5 py-1 text-[0.64rem] font-bold tracking-[0.18em] uppercase mb-4", tint)}>
          {label}
        </span>
        <blockquote className="relative flex-1 text-sm leading-relaxed text-(--foreground)/85">
          <IconQuote className="absolute -left-0.5 -top-1 h-4 w-4 text-(--brand-gold)/50" />
          <span className="pl-5">{quote}</span>
        </blockquote>
        <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden bg-brand-mist ring-1 ring-black/5">
            {image ? (
              <Image src={image} alt={`${name}`} fill className="object-cover" />
            ) : (
              <div className="h-full w-full inline-flex items-center justify-center">
                <IconUser className="h-5 w-5 text-(--brand-navy)/45" stroke={1.6} />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-[0.92rem] text-brand-navy truncate">{name}</p>
            <p className="text-[0.75rem] text-muted-foreground truncate">{role}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md",
        highlight && "ring-1 ring-(--brand-gold)/25",
        className
      )}
    >
      <IconQuote className="absolute right-6 top-6 h-10 w-10 text-(--brand-gold)/15" stroke={1.4} />
      <span className={cn("self-start inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.18em] uppercase mb-5", tint)}>
        {label}
      </span>
      <blockquote className="relative flex-1 text-[0.95rem] leading-relaxed text-(--foreground)/85">
        <span className="relative z-10">{quote}</span>
      </blockquote>
      <div className="mt-6 pt-5 border-t border-border flex items-center gap-3.5">
        <div className="relative h-12 w-12 shrink-0 rounded-2xl overflow-hidden bg-brand-mist ring-1 ring-black/5">
          {image ? (
            <Image src={image} alt={`${name}`} fill className="object-cover" />
          ) : (
            <div className="h-full w-full inline-flex items-center justify-center">
              <IconUser className="h-6 w-6 text-(--brand-navy)/45" stroke={1.6} />
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="font-display font-semibold text-[1.02rem] text-brand-navy">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </article>
  );
}
