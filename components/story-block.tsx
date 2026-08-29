import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export type StoryBlockProps = {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  href?: string;
  hrefLabel?: string;
  accent?: "navy" | "gold";
  facts?: { value: string; label: string }[];
};

export default function StoryBlock({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse = false,
  href,
  hrefLabel = "Read more",
  accent = "navy",
  facts,
}: StoryBlockProps) {
  return (
    <section
      className={cn(
        "relative",
        accent === "navy" ? "section-blue section-pad" : "section-warm section-pad",
      )}
    >
      <div className="page-shell !py-0">
        <div
          className={cn(
            "grid gap-10 md:gap-14 items-center lg:grid-cols-2",
            reverse ? "lg:[&>*:first-child]:order-2" : "",
          )}
        >
          <div className="relative w-full">
            <div
              className={cn(
                "aspect-[5/4] md:aspect-[4/3] w-full relative rounded-3xl overflow-hidden shadow-md",
                accent === "gold" ? "ring-1 ring-[var(--brand-gold)]/30" : "ring-1 ring-[var(--brand-navy)]/10",
              )}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>
            <div
              className={cn(
                "hidden md:block absolute -z-10 h-full w-full rounded-3xl",
                accent === "gold"
                  ? "-right-3 -top-3 bg-[var(--brand-gold)]/15"
                  : "-left-3 -bottom-3 bg-[var(--brand-navy)]/10",
              )}
            />
          </div>

          <div>
            {eyebrow && (
              <span className="eyebrow block mb-3">{eyebrow}</span>
            )}
            <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)] mb-5">
              {title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[var(--muted-foreground)] max-w-xl">
              {body}
            </p>

            {facts && facts.length > 0 && (
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                {facts.map((f) => (
                  <div key={f.label} className="border-l-2 border-[var(--brand-gold)]/60 pl-4">
                    <p className="font-display font-bold text-2xl md:text-3xl text-[var(--brand-navy)]">
                      {f.value}
                    </p>
                    <p className="mt-1 text-[0.7rem] md:text-xs font-medium tracking-wide uppercase text-[var(--muted-foreground)]">
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {href && (
              <div className="mt-8">
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-md border border-[var(--brand-navy)]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--brand-navy)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-navy)]"
                >
                  {hrefLabel}
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
