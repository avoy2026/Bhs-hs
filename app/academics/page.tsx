import type { Metadata } from "next";
import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import StoryBlock from "@/components/story-block";
import {
  AcademicStats,
  ClassInformation,
  LaboratoryInformation,
  StreamInformation,
  StudentDevelopmentInformation,
  SubjectInformation,
} from "@/components/academic-information";

export const metadata: Metadata = {
  title: "Academics | Baramohanpur High School (H.S.)",
  description:
    "Explore Classes V–XII, Higher Secondary Arts, Science and Commerce streams, subjects, practical learning, and student development at Baramohanpur High School.",
};

export default function AcademicsPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-8 bg-[var(--brand-fog)] overflow-hidden">
        <div className="page-shell !py-0">
          <div className="relative w-full aspect-[21/8] md:aspect-[24/7] max-h-[380px] min-h-[160px] rounded-3xl overflow-hidden shadow-md border border-[var(--border)] bg-[#d5e9f6] flex items-center justify-center">
            <Image
              src="/images/05-ACADEMICS/academics-banner.webp"
              alt="Academics — Baramohanpur High School"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="section-soft section-pad">
        <div className="page-shell py-0!">
          <PageSectionHeading
            eyebrow="At a glance"
            title="A school journey from V to XII"
            description="These figures are the verified academic facts currently available for the website. Class-wise student strength, classroom count, and section details can be added later from official records."
            align="left"
            size="md"
            accent="stroke"
          />
          <div className="mt-12">
            <AcademicStats />
          </div>
        </div>
      </section>

      <StoryBlock
        eyebrow="Learning spaces"
        title="Classrooms that support curiosity."
        body="Academic learning at Baramohanpur High School begins in the classroom, where students from Classes V to XII build understanding, ask questions, and develop the confidence to keep learning."
        image="/images/05-ACADEMICS/classrooms/classroom-learning.webp"
        imageAlt="Classroom learning at Baramohanpur High School"
        href="#classes"
        hrefLabel="Explore our classes"
        accent="navy"
        facts={[
          { value: "V–XII", label: "Classes" },
          { value: "25", label: "Subjects" },
          { value: "3", label: "HS streams" },
        ]}
      />

      <StoryBlock
        eyebrow="Practical learning"
        title="Learning that reaches beyond the textbook."
        body="Science and Computer Application are part of the school's academic offering. This practical-learning section is ready to grow with verified laboratory details, equipment information, class schedules, and additional photographs."
        image="/images/03-ABOUT/timeline/science-education.webp"
        imageAlt="Science laboratory at Baramohanpur High School"
        href="#subjects"
        hrefLabel="See confirmed subjects"
        accent="gold"
        reverse
      />

      <div id="classes"><ClassInformation /></div>
      <div id="streams"><StreamInformation /></div>
      <div id="subjects"><SubjectInformation /></div>
      <LaboratoryInformation />
      <div id="student-development"><StudentDevelopmentInformation /></div>
    </main>
  );
}
