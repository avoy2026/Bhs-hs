"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import HeroParallaxDemo from "@/components/hero-parallax-demo";

type Category =
  | "All"
  | "Campus"
  | "Classrooms"
  | "Students"
  | "Cultural"
  | "Sports"
  | "Achievements"
  | "Teachers";

type GalleryItem = {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
  span:
    | "sm"
    | "md"
    | "lg"
    | "tall"
    | "wide";
  alt: string;
};

const items: GalleryItem[] = [
  { src: "/images/campus/campus-wide-view.jpeg", title: "Main campus view", category: "Campus", span: "wide", alt: "Baramohanpur High School main campus" },
  { src: "/images/campus/main-school-building.jpeg", title: "School building", category: "Campus", span: "tall", alt: "School building exterior" },
  { src: "/images/campus/school-ground.jpeg", title: "Campus grounds", category: "Campus", span: "md", alt: "School campus grounds" },

  { src: "/images/banners/home-hero-classroom.jpeg", title: "Inside our classrooms", category: "Classrooms", span: "lg", alt: "Baramohanpur High School classroom" },
  { src: "/images/banners/home-hero-students.png", title: "Learning together", category: "Classrooms", span: "md", alt: "Students learning together" },
  { src: "/images/events/academic/educational-events.png", title: "Academic activities", category: "Classrooms", span: "md", alt: "School academic activities" },
  { src: "/images/campus/campus-wide-view.jpeg", title: "School life", category: "Classrooms", span: "sm", alt: "Baramohanpur High School campus" },

  { src: "/images/students/student-group.jpeg", title: "Student voices", category: "Students", span: "lg", alt: "Students at Baramohanpur High School" },
  { src: "/images/students/student-group.jpeg", title: "Everyday campus life", category: "Students", span: "tall", alt: "Students on campus" },
  { src: "/images/events/academic/educational-events.png", title: "Gathering & assembly", category: "Students", span: "md", alt: "School student event" },

  { src: "/images/events/cultural/cultural-programme.png", title: "Cultural programmes", category: "Cultural", span: "wide", alt: "School cultural programme" },
  { src: "/images/events/cultural/cultural-audience.png", title: "Cultural audience", category: "Cultural", span: "tall", alt: "Audience at a school cultural programme" },

  { src: "/images/events/sports/sports-day.png", title: "Sports Day", category: "Sports", span: "wide", alt: "Annual sports meet" },
  { src: "/images/campus/school-ground.jpeg", title: "On the field", category: "Sports", span: "sm", alt: "School sports ground" },

  { src: "/images/branding/school-achievements.jpeg", title: "Student activities", category: "Achievements", span: "lg", alt: "Student achievements" },
  { src: "/images/events/academic/educational-events.png", title: "School activities", category: "Achievements", span: "sm", alt: "School achievement event" },

  { src: "/images/teachers/leadership/principal.jpeg", title: "The Headmaster", category: "Teachers", span: "tall", alt: "Headmaster of Baramohanpur High School" },
  { src: "/images/teachers/teaching/bina-das.jpeg", title: "Teaching staff", category: "Teachers", span: "md", alt: "School teacher" },

  { src: "/images/branding/school-logo.png.jpeg", title: "School emblem", category: "Campus", span: "sm", alt: "BHS school logo" },
];

const categories: Category[] = [
  "All",
  "Campus",
  "Classrooms",
  "Students",
  "Cultural",
  "Sports",
  "Achievements",
  "Teachers",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + filtered.length) % filtered.length
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i === null ? i : (i + 1) % filtered.length
    );

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative isolate overflow-hidden section-navy">
        <div className="relative w-full section-pad">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgb(43 75 136 / 65%), transparent 60%), radial-gradient(ellipse 50% 60% at 90% 100%, rgb(182 141 34 / 18%), transparent 55%)",
            }}
          />
          <div className="page-shell !py-0 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[0.72rem] md:text-xs font-semibold tracking-[0.3em] text-[var(--brand-gold)] uppercase mb-4">
                Explore · Visual Story
              </p>
              <h1 className="font-display font-semibold text-4xl md:text-6xl tracking-tight leading-[1.05] text-white max-w-4xl">
                <span className="heading-underline-stroke">School Gallery</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
                The classrooms, the grounds, the assemblies, the sports day, and the
                faces that make Baramohanpur High School feel like home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

            {/* Scrollable visual story */}
      <section className="section-warm overflow-hidden">
        <div className="page-shell !pb-0">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">Events in motion</p>
            <h2 className="font-display text-3xl font-semibold text-[var(--brand-navy)] md:text-5xl">
              A school year told through shared moments.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
              Scroll through a moving wall of campus gatherings, classroom life, and celebrations.
            </p>
          </div>
        </div>
        <HeroParallaxDemo />
      </section>

      {/* Filter bar */}
      <section className="sticky top-0 z-30 -mt-1 border-b border-black/5 bg-[var(--brand-fog)]/90 backdrop-blur">
        <div className="page-shell !py-0">
          <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {categories.map((c) => {
              const active = activeCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition duration-200",
                    active
                      ? "bg-[var(--brand-navy)] text-white shadow-sm"
                      : "bg-white text-[var(--muted-foreground)] border border-black/5 hover:bg-[var(--brand-mist)] hover:text-[var(--brand-navy)]"
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="section-soft !pt-10 section-pad">
        <div className="page-shell !py-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              layout
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]"
            >
              {filtered.map((item, i) => (
                <motion.button
                  layout
                  key={activeCategory + item.src + i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  onClick={() => openLightbox(i)}
                  className={cn(
                    "group relative mb-4 block w-full overflow-hidden rounded-2xl ring-1 ring-black/5 bg-[var(--brand-mist)] text-left break-inside-avoid hover:shadow-[0_20px_60px_-25px_rgb(20_35_63/40%)] transition duration-300"
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden",
                      item.span === "tall"
                        ? "aspect-[3/4]"
                        : item.span === "lg"
                          ? "aspect-[4/5]"
                          : item.span === "wide"
                            ? "aspect-[16/10]"
                            : item.span === "md"
                              ? "aspect-[5/4]"
                              : "aspect-square"
                    )}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition duration-[900ms] group-hover:scale-[1.05]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                      <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--brand-gold)]">
                        {item.category}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-white leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-[var(--muted-foreground)] text-sm">
              No photos in this category yet.
            </div>
          )}
          <p className="mt-14 text-center text-xs text-[var(--muted-foreground)]">
            * Official school photographs will be added over time. Current images showcase available campus visuals.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur border border-white/15 hover:bg-white/20 transition"
              aria-label="Close preview"
            >
              <IconX className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur border border-white/15 hover:bg-white/20 transition"
              aria-label="Previous image"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur border border-white/15 hover:bg-white/20 transition"
              aria-label="Next image"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <div className="relative w-full aspect-[16/10] md:aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain bg-black"
                />
              </div>
              <div className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 px-1">
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--brand-gold)]">
                    {filtered[lightboxIndex].category}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    {filtered[lightboxIndex].title}
                  </p>
                </div>
                <p className="text-xs text-white/60 tracking-wide">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
