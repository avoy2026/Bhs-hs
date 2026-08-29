"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import { Timeline } from "@/components/ui/timeline";

const wrapClass =
  "relative h-20 w-full overflow-hidden rounded-lg shadow-sm md:h-44 lg:h-60 ring-1 ring-black/5";

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

const data = [
  {
    title: "1878 Â· Foundation & Legacy",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Baramohanpur High School was established in 1878 under the inspiration
          of Pandit Ishwar Chandra Vidyasagar and the initiative of the educationist
          Shri Nityananda Dey.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Families from the surrounding villages contributed land, money, labour
          and blessings to make the school a reality. For 150 years, this shared effort
          has helped generations of students find the light of knowledge.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <GridImg src="/images/03-ABOUT/timeline/iswar-chandra-vidyasagar.webp" alt="Pandit Ishwar Chandra Vidyasagar" />
          <GridImg src="/images/03-ABOUT/timeline/nityananda-dey.webp" alt="Shri Nityananda Dey" />
          <GridImg src="/images/03-ABOUT/heritage/heritage-building.webp" alt="Heritage building" />
          <GridImg src="/images/03-ABOUT/timeline/school-entrance.webp" alt="School entrance" />
        </div>
      </div>
    ),
  },
  {
    title: "2021â€“2025 Â· Modern Growth",
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
          <GridImg src="/images/03-ABOUT/staff/teachers/leadership/principal.jpeg" alt="Headmaster Sanjoy Modak" />
          <GridImg src="/images/03-ABOUT/timeline/academic-growth.webp" alt="Academic growth and achievements" />
          <GridImg src="/images/05-ACADEMICS/classrooms/classroom-main.jpeg" alt="Classroom learning" />
          <GridImg src="/images/07-GALLERY/students/assembly.jpeg" alt="Student assembly" />
        </div>
      </div>
    ),
  },
  {
    title: "2026 â€“ 2027 Â· 150th Anniversary",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          Baramohanpur High School observes its 150th Anniversary (2027â€“2028) as a historic year-long festival of education, culture, and alumni reunion.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm leading-relaxed">
          <span className="font-semibold text-[var(--brand-navy)]">
            150 years of light. 150 years of pride. 150 years of Baramohanpur High School.
          </span>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <GridImg src="/images/03-ABOUT/timeline/science-education.webp" alt="Modern science education" />
          <GridImg src="/images/01-BRANDING/school-logo.png" alt="150th Anniversary Emblem" />
          <GridImg src="/images/01-BRANDING/school-achievements.jpeg" alt="150 Years of Excellence" />
          <GridImg src="/images/06-EVENTS/academic/educational-events.webp" alt="Educational events and celebrations" />
        </div>
      </div>
    ),
  },
];

export default function TimelinePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Header Banner */}
      <section className="relative pt-24 md:pt-32 pb-8 bg-[var(--brand-fog)] overflow-hidden">
        <div className="page-shell !py-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[24/9] max-h-[360px] min-h-[180px] rounded-3xl overflow-hidden shadow-md border border-[var(--border)] bg-white flex items-center justify-center">
            <Image
              src="/images/03-ABOUT/about-banner.webp"
              alt="School History & Timeline â€” Baramohanpur High School"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain p-4 md:p-8"
            />
          </div>
        </div>
      </section>

      <section className="section-soft py-16 md:py-20">
        <div className="page-shell py-0! mb-12">
          <PageSectionHeading
            eyebrow="Milestones"
            title="School History & Heritage"
            description="Scroll through the moments that still define us â€” from our founding in 1878 through 150 years of academic light."
            size="md"
            accent="stroke"
          />
        </div>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
        <div className="page-shell py-0! mt-16">
          <p className="text-center text-xs text-muted-foreground">
            * Historical milestones and records are preserved from verified school archives.
          </p>
        </div>
      </section>
    </main>
  );
}
