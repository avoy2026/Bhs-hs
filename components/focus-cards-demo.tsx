import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Our Campus",
      src: "/images/school/school-3.png",
    },
    {
      title: "Classroom Learning",
      src: "/images/classroom/classroom-2.png",
    },
    {
      title: "Student Life",
      src: "/images/poster/events-1.png",
    },
    {
      title: "Achievements",
      src: "/images/school/school-2.png",
    },
    {
      title: "School Pride",
      src: "/images/bhs-logo.jpeg",
    },
    {
      title: "Community Spirit",
      src: "/images/school/school-3.png",
    },
  ];

  return (
    <section className="section-light section-pad">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]/60 uppercase">
          About Us
        </p>
        <h2 className="text-3xl font-semibold text-[var(--brand-navy)] md:text-4xl">
          Life between the{" "}
          <span className="text-[var(--brand-gold)]">bells</span>
        </h2>
        <p className="mt-3 text-[var(--muted-foreground)]">
          Classrooms, courtyards, and the small hours that turn a building into
          a school.
        </p>
      </div>
      <FocusCards cards={cards} />
    </section>
  );
}
