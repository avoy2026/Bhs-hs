import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Our Campus",
      src: "/images/img-slider-1.jpeg",
    },
    {
      title: "Classroom Learning",
      src: "/images/img-slider-2.jpeg",
    },
    {
      title: "Student Life",
      src: "/images/img-slider-3.jpeg",
    },
    {
      title: "Achievements",
      src: "/images/achievemenets.jpeg",
    },
    {
      title: "School Pride",
      src: "/images/bhs-logo.jpeg",
    },
    {
      title: "Community Spirit",
      src: "/images/img-slider-1.jpeg",
    },
  ];

  return (
    <section className="section-light section-pad">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
          About Us
        </p>
        <h2 className="text-3xl font-semibold text-[var(--brand-navy)] md:text-4xl">
          Life at Boromohonpur High School
        </h2>
        <p className="mt-3 text-[var(--muted-foreground)]">
          A closer look at our campus, classrooms, and the spirit of our
          students.
        </p>
      </div>
      <FocusCards cards={cards} />
    </section>
  );
}
