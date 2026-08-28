import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Knowledge & Guidance",
      src: "/images/ABout-us(life-between-bell)/knowledge.jpeg",
    },
    {
      title: "Classroom Learning",
      src: "/images/banners/home-hero-classroom.jpeg",
    },
    {
      title: "Student Life",
      src: "/images/ABout-us(life-between-bell)/student life.jpeg",
    },
    {
      title: "Achievements",
      src: "/images/branding/school-achievements.jpeg",
    },
    {
      title: "Our Pride",
      src: "/images/ABout-us(life-between-bell)/our-pride.jpeg",
    },
    {
      title: "Community Spirit",
      src: "/images/students/student-group.jpeg",
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
