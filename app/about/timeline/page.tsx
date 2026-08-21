"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import { Timeline } from "@/components/ui/timeline";

const wrapClass =
  "relative h-20 w-full overflow-hidden rounded-lg shadow-sm md:h-44 lg:h-60 ring-1 ring-black/5";
const imgClass = "h-20 w-full rounded-lg object-cover md:h-44 lg:h-60";

const GridImg = ({ src, alt }: { src: string; alt: string }) => (
  <div className={wrapClass}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 45vw, 22vw"
      className="object-cover"
    />
  </div>
);

const TimelineImg = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={640}
    height={400}
    className={imgClass}
  />
);

const data = [
  {
    title: "Today",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Today, Baramohanpur High School is still what it has always been —
          a place where a child is known by name, taught with patience, and
          sent into the world with{" "}
          <span className="font-semibold text-[var(--brand-navy)]">
            backbone and courtesy
          </span>
          . Classrooms run, bells ring, parents wait at the gate, and another generation learns under our roof.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <TimelineImg src="/images/school/school-3.png" alt="Campus today" />
          <TimelineImg src="/images/classroom/classroom-2.png" alt="Classrooms" />
          <TimelineImg src="/images/poster/events-1.png" alt="Student activities" />
          <TimelineImg src="/images/school/school-2.png" alt="School grounds" />
        </div>
      </div>
    ),
  },
  {
    title: "Recent Years",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Year after year we have widened the classroom — stronger teaching,
          richer cultural life, better laboratories, a computer centre, and a
          campus that feels safer and prouder for every learner. Sports and
          annual programmes continue to be the heartbeat of student life.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          From first-period mathematics to the last cheer on sports day,
          students here grow in{" "}
          <span className="font-semibold text-[var(--brand-gold)]">
            confidence and purpose
          </span>
          .
        </p>
        <div className="grid grid-cols-2 gap-4">
          <GridImg src="/images/bhs-logo.jpeg" alt="School emblem" />
          <GridImg src="/images/school/school-2.png" alt="Campus" />
          <GridImg src="/images/classroom/computers.webp" alt="Computer centre" />
          <GridImg src="/images/school/school-2.png" alt="School grounds" />
        </div>
      </div>
    ),
  },
  {
    title: "Growing Years",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          As the village grew, so did the school. New classrooms opened, the first batch of
          board-exam students passed out with credit, and former pupils began returning as
          parents — and in some cases, as teachers. A campus that had started small became
          the centre of the community it still serves today.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <GridImg src="/images/school/school-1.png" alt="Older campus" />
          <GridImg src="/images/classroom/labs.jpeg" alt="Science teaching" />
          <GridImg src="/images/poster/cultural.png" alt="Cultural programmes" />
          <GridImg src="/images/poster/sports.png" alt="Sports day" />
        </div>
      </div>
    ),
  },
  {
    title: "Early Beginnings",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          The founding chapters of Baramohanpur High School are still remembered
          in the stories shared by older families in the village — of small classrooms,
          committed teachers, and children who walked long distances to attend because
          the school was worth the walk.
        </p>
        <div className="mb-8">
          {[
            "Founded with a small number of classes and a determined staff",
            "Supported by families who believed a local school was a local treasure",
            "Grew gradually — with care, never too quickly",
            "Built on the idea that a school must belong to its village",
            "Still honours the founders' commitment to character and learning",
          ].map((item, idx) => (
            <div
              key={item}
              className="flex items-start gap-2 text-xs text-neutral-700 md:text-sm py-1"
            >
              <span
                className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${[
                  "bg-[var(--brand-navy)]",
                  "bg-[var(--brand-blue)]",
                  "bg-[var(--brand-gold)]",
                  "bg-[var(--brand-blue)]",
                  "bg-[var(--brand-navy)]",
                ][idx]}`}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TimelineImg src="/images/school/school-3.png" alt="Campus roots" />
          <TimelineImg src="/images/bhs-logo.jpeg" alt="Emblem" />
          <TimelineImg src="/images/classroom/classroom-2.png" alt="Learning" />
          <TimelineImg src="/images/poster/events-1.png" alt="School life" />
        </div>
      </div>
    ),
  },
];

export default function TimelinePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate overflow-hidden">
        <div className="relative w-full h-[28rem] md:h-[36rem]">
          <Image
            src="/images/school/school-1.png"
            alt="Baramohanpur High School history"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 px-4 md:px-8">
            <div className="mx-auto w-full max-w-5xl">
              <p className="text-[0.72rem] md:text-xs font-semibold tracking-[0.3em] text-[var(--brand-gold)] uppercase mb-4">
                About · History
              </p>
              <h1 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[1.05] text-white max-w-3xl">
                <span className="heading-underline-stroke">Timeline</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/80">
                The chapters of Baramohanpur High School — from a small village school to the trusted
                institution it is today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft py-16 md:py-20">
        <div className="page-shell !py-0 mb-12">
          <PageSectionHeading
            eyebrow="Milestones"
            title="School History & Heritage"
            description="Scroll through the moments that still define us. Official dates and milestones will be added as records are confirmed."
            size="md"
          />
        </div>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
        <div className="page-shell !py-0 mt-16">
          <p className="text-center text-xs text-[var(--muted-foreground)]">
            * Dates and exact historical records are to be verified from official school documents.
          </p>
        </div>
      </section>
    </main>
  );
}
