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
      <section className="relative isolate overflow-hidden section-navy">
        <div className="relative page-shell grid gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-brand-gold">Learning at BHS</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              <span className="heading-underline-stroke">Academics</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              A clear guide to the classes, Higher Secondary streams, subjects, practical learning, and student development available at Baramohanpur High School.
            </p>
          </div>
          <div className="relative aspect-5/4 overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/images/05-ACADEMICS/classrooms/classroom-main.jpeg"
              alt="Students learning in a Baramohanpur High School classroom"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-(--brand-ink)/60 via-transparent to-transparent" />
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
        image="/images/banners/home-hero-classroom.jpeg"
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
        body="Science and Computer Application are part of the school’s academic offering. This practical-learning section is ready to grow with verified laboratory details, equipment information, class schedules, and additional photographs."
        image="/images/classrooms/science-laboratory.jpeg"
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
