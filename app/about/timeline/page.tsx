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
    title: "2027–2028",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Baramohanpur High School will observe its 150th Anniversary as a
          year-long festival of education, culture and reunion from 2nd January
          2027 to 2nd January 2028. Present and former students, teachers,
          guardians, well-wishers and lovers of education are invited to join
          this historic celebration.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          <span className="font-semibold text-brand-navy">
            150 years of light. 150 years of pride. 150 years of Baramohanpur High School.
          </span>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <TimelineImg src="/images/campus/school-entrance.jpeg" alt="School entrance" />
          <TimelineImg src="/images/events/academic/educational-events.png" alt="Student activities" />
          <TimelineImg src="/images/events/sports/sports-day.png" alt="Sports and celebrations" />
          <TimelineImg src="/images/campus/school-greatimage-poster.jpeg" alt="150 years celebration" />
        </div>
      </div>
    ),
  },
  {
    title: "2021–2026",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          On 11th May, 2021, Sanjoy Modak took charge as Headmaster during the
          Covid-19 pandemic. Since then, the school community has worked together
          to strengthen learning and rebuild student confidence. Student strength
          from Classes V to XII grew from 950 to 1,175.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          The Higher Secondary section continues to offer Arts, Science and
          Commerce, alongside 25 subjects including Artificial Intelligence,
          Agriculture, Computer Application and Education. Commerce, which had
          remained closed for more than a decade, was reopened in 2026.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <GridImg src="/images/teachers/leadership/principal.jpeg" alt="Headmaster Sanjoy Modak" />
          <GridImg src="/images/classrooms/science-laboratory.jpeg" alt="Science laboratory" />
          <GridImg src="/images/banners/home-hero-classroom.jpeg" alt="Classroom learning" />
          <GridImg src="/images/branding/school-achievements.jpeg" alt="Academic achievements" />
        </div>
      </div>
    ),
  },
  {
    title: "150 Years of Legacy",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Across a century and a half, the school has helped remove the darkness
          of illiteracy and opened a path to a better life for thousands of
          students. Its alumni now serve in India and abroad as doctors,
          engineers, teachers, professors, administrators, scientists and
          successful citizens.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Among the notable former students are freedom fighter and Astra Guru
          Dronacharya Shri Hemchandra Kanungo and Dr. Surja Kanta Mishra, former
          Health Minister of the Government of West Bengal. Their journeys remain
          a source of pride and inspiration for the school community.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <GridImg src="/images/history/shi-hemanchandra-kanuga.jpeg" alt="Shri Hemchandra Kanungo" />
          <GridImg src="/images/history/our school-pride.jpeg" alt="School pride" />
          <GridImg src="/images/events/cultural/cultural-programme.png" alt="Cultural programmes" />
          <GridImg src="/images/events/sports/sports-day.png" alt="Sports activities" />
        </div>
      </div>
    ),
  },
  {
    title: "1878",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Baramohanpur High School was established in 1878, at a time when
          education was still a distant dream for many village families. Inspired
          by the ideals of Pandit Ishwar Chandra Vidyasagar, educationist Shri
          Nityananda Dey took the initiative to establish the school.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Families from the surrounding villages came forward with land, money,
          labour and blessings. Their collective effort made the school a living
          symbol of community spirit and a lasting temple of learning.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <TimelineImg src="/images/history/iswar-chandra.jpeg" alt="Pandit Ishwar Chandra Vidyasagar" />
          <TimelineImg src="/images/history/3-statue.jpeg" alt="Statues of founders and luminaries" />
          <TimelineImg src="/images/campus/main-school-building.jpeg" alt="Main school building" />
          <TimelineImg src="/images/branding/school-logo.png.jpeg" alt="School emblem" />
        </div>
      </div>
    ),
  },
/*
          a place where a child is known by name, taught with patience, and
          sent into the world with{" "}
          <span className="font-semibold text-[var(--brand-navy)]">
            backbone and courtesy
          </span>
          . Classrooms run, bells ring, parents wait at the gate, and another generation learns under our roof.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <TimelineImg src="/images/campus/campus-wide-view.jpeg" alt="Campus today" />
          <TimelineImg src="/images/banners/home-hero-classroom.jpeg" alt="Classrooms" />
          <TimelineImg src="/images/events/academic/educational-events.png" alt="Student activities" />
          <TimelineImg src="/images/campus/school-ground.jpeg" alt="School grounds" />
        </div>
      </div>
    ),
  },*/
  /*{
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
          <GridImg src="/images/branding/school-logo.png.jpeg" alt="School emblem" />
          <GridImg src="/images/campus/school-ground.jpeg" alt="Campus" />
          <GridImg src="/images/banners/home-hero-classroom.jpeg" alt="Classroom learning" />
          <GridImg src="/images/campus/school-ground.jpeg" alt="School grounds" />
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
          <GridImg src="/images/campus/main-school-building.jpeg" alt="Older campus" />
          <GridImg src="/images/banners/home-hero-classroom.jpeg" alt="Classroom teaching" />
          <GridImg src="/images/events/cultural/cultural-programme.png" alt="Cultural programmes" />
          <GridImg src="/images/events/sports/sports-day.png" alt="Sports day" />
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
          <TimelineImg src="/images/campus/campus-wide-view.jpeg" alt="Campus roots" />
          <TimelineImg src="/images/branding/school-logo.png.jpeg" alt="Emblem" />
          <TimelineImg src="/images/banners/home-hero-classroom.jpeg" alt="Learning" />
          <TimelineImg src="/images/events/academic/educational-events.png" alt="School life" />
        </div>
      </div>
    ),
  },*/
];

export default function TimelinePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate overflow-hidden">
        <div className="relative w-full h-52 md:h-72">
          <Image
            src="/images/campus/main-school-building.jpeg"
            alt="Baramohanpur High School history"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          {/* Banner image only — no text overlay */}
        </div>
      </section>

      <section className="section-soft py-16 md:py-20">
        <div className="page-shell py-0! mb-12">
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
        <div className="page-shell py-0! mt-16">
          <p className="text-center text-xs text-muted-foreground">
            * Dates and exact historical records are to be verified from official school documents.
          </p>
        </div>
      </section>
    </main>
  );
}
