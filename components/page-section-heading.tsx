import { cn } from "@/lib/utils";

type PageSectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  size?: "md" | "lg";
  accent?: "underline" | "stroke" | "none";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function PageSectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  size = "md",
  accent = "underline",
  className,
  titleClassName,
  descriptionClassName,
}: PageSectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  const sizeClass =
    size === "lg" ? "section-heading-title-lg" : "section-heading-title";

  const accentClass =
    accent === "underline"
      ? "heading-underline"
      : accent === "stroke"
        ? "heading-underline-stroke"
        : "";

  return (
    <div className={cn("relative z-10 flex max-w-3xl flex-col gap-4", alignClass, className)}>
      {eyebrow && (
        <span className="eyebrow block">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-semibold",
          sizeClass,
          align === "center" ? "mx-auto" : "",
          titleClassName,
        )}
      >
        <span className={accentClass}>{title}</span>
      </h2>
      {description && (
        <p
          className={cn(
            "text-[0.95rem] md:text-base leading-relaxed text-[var(--muted-foreground)]",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
