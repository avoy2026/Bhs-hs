import PageSectionHeading from "@/components/page-section-heading";
import Image from "next/image";
import {
  academicStats,
  confirmedSubjects,
  higherSecondaryStreams,
  laboratories,
  secondaryClasses,
  studentDevelopment,
} from "@/lib/academic-data";

export function AcademicStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {academicStats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-[var(--brand-navy)]/10 bg-white p-5 shadow-sm">
          <p className="font-display text-3xl font-semibold text-[var(--brand-navy)]">{stat.value}</p>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ClassInformation() {
  return (
    <section className="section-soft section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="Classes V–X"
          title="Secondary Section"
          description="Baramohanpur High School provides secondary education from Class V through Class X. Class-specific subject combinations and section details can be added after official confirmation."
          align="left"
          size="md"
          accent="stroke"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryClasses.map((className) => (
            <article key={className} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="eyebrow-navy">Secondary education</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-[var(--brand-navy)]">{className}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                Subject details and learning focus for this class will be published after school records are confirmed.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StreamInformation() {
  return (
    <section className="section-warm section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="Classes XI–XII"
          title="Higher Secondary Streams"
          description="Students can continue into three Higher Secondary streams. Exact subject combinations should be confirmed with the school office before publication."
          align="left"
          size="md"
          accent="stroke"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {higherSecondaryStreams.map((stream) => (
            <article key={stream.name} className="rounded-2xl border border-[var(--brand-navy)]/10 bg-white p-6 shadow-sm">
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-white border border-[var(--border)] p-2">
                <Image
                  src={stream.image}
                  alt={stream.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-1 transition duration-700 hover:scale-105"
                />
              </div>
              <p className="eyebrow-navy">{stream.classes}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--brand-navy)]">{stream.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">{stream.description}</p>
              <p className="mt-5 border-t border-[var(--border)] pt-4 text-xs font-medium text-[var(--muted-foreground)]">
                Subject combination: details to be added
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SubjectInformation() {
  return (
    <section className="section-blue section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="25 subjects"
          title="Subjects & Curriculum"
          description="The school teaches 25 subjects. The four subjects below are specifically identified in the available school information; the remaining list and class or stream mapping can be added without changing this layout."
          align="left"
          size="md"
          accent="stroke"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {confirmedSubjects.map((subject) => (
            <article key={subject.name} className="rounded-2xl border border-[var(--brand-navy)]/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">{subject.category}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--brand-navy)]">{subject.name}</h3>
              <p className="mt-3 text-xs leading-relaxed text-[var(--muted-foreground)]">{subject.availability}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-[var(--muted-foreground)]">
          Remaining 21 subjects: official subject list to be added.
        </p>
      </div>
    </section>
  );
}

export function LaboratoryInformation() {
  return (
    <section className="section-soft section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="Practical learning"
          title="Laboratories & Practical Learning"
          description="This section is ready for confirmed laboratory information. No laboratory equipment, room count, or facility has been assumed."
          align="left"
          size="md"
          accent="stroke"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {laboratories.map((laboratory) => (
            <article key={laboratory.name} className="rounded-2xl border border-[var(--brand-navy)]/10 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-[var(--brand-navy)]">{laboratory.name}</h3>
                <span className="rounded-full bg-[var(--brand-mist)] px-3 py-1 text-xs font-semibold text-[var(--brand-navy)]">{laboratory.status}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">{laboratory.description}</p>
              <dl className="mt-6 grid gap-4 border-t border-[var(--border)] pt-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-navy)]/55">Associated subjects</dt>
                  <dd className="mt-1 text-sm text-[var(--foreground)]">{laboratory.subjects}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-navy)]/55">Facilities</dt>
                  <dd className="mt-1 text-sm text-[var(--foreground)]">To be confirmed</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudentDevelopmentInformation() {
  return (
    <section className="section-warm section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="Student life"
          title="Developing the whole student"
          description="Student development at Baramohanpur includes academic, physical, cultural, and co-curricular growth. Specific clubs and programmes can be added when officially confirmed."
          align="left"
          size="md"
          accent="stroke"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {studentDevelopment.map((area) => (
            <article key={area.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-[var(--brand-navy)]">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
