import Link from "next/link";
import {
  IconArrowUpRight,
  IconBook2,
  IconFlask,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import { academicStats } from "@/lib/academic-data";

const overviewCards = [
  {
    icon: IconSchool,
    title: "Classes V–XII",
    text: "Explore the Secondary section and Higher Secondary pathway.",
    href: "/academics#classes",
  },
  {
    icon: IconBook2,
    title: "Arts, Science & Commerce",
    text: "Learn about the three Higher Secondary streams at BHS.",
    href: "/academics#streams",
  },
  {
    icon: IconFlask,
    title: "Subjects & practical learning",
    text: "See the confirmed subjects and the laboratory information awaiting update.",
    href: "/academics#subjects",
  },
  {
    icon: IconUsers,
    title: "Student development",
    text: "Academic, physical, cultural, and co-curricular growth beyond the classroom.",
    href: "/academics#student-development",
  },
] as const;

export default function AcademicOverviewCards() {
  return (
    <section className="section-soft section-pad">
      <div className="page-shell !py-0">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow block mb-3">Academic information</p>
            <h2 className="font-display font-semibold section-heading-title text-[var(--brand-navy)]">
              <span className="heading-underline">Find your academic path</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
              From Class V to Higher Secondary, discover the learning journey, subjects, streams, and student development opportunities at Baramohanpur.
            </p>
          </div>
          <Link href="/academics" className="btn-outline shrink-0 self-start md:self-auto">
            View all academics
            <IconArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overviewCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-[var(--brand-navy)]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-navy)]/10 text-[var(--brand-navy)]">
                  <Icon className="h-5 w-5" stroke={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--brand-navy)]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{card.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-gold)]">
                  Explore
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[var(--brand-navy)]/10 pt-6 sm:grid-cols-4">
          {academicStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-[var(--brand-navy)]">{stat.value}</p>
              <p className="mt-1 text-xs text-[var(--muted-foreground)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
