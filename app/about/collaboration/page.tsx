"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import { IconUsers, IconHeartHandshake, IconSchool, IconBulb, IconMessageCircle, IconCalendarEvent } from "@tabler/icons-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: IconUsers,
    title: "Parents as Partners",
    body:
      "A child's progress is shared work. We keep parents close through regular meetings, notices, report cards, and an open office door — because a school is strongest when families stand with it.",
    details: [
      "Parent-Teacher meetings each term",
      "Written progress reports with honest feedback",
      "Notices and updates sent clearly and on time",
      "An open office for any guardian with a concern",
    ],
  },
  {
    icon: IconHeartHandshake,
    title: "Community Roots",
    body:
      "Baramohanpur High School belongs to the village it serves. Local families, former students, and residents have supported us for generations — and we continue to be a gathering place for the community.",
    details: [
      "Village events hosted on campus when appropriate",
      "Support from local families and well-wishers",
      "Former students returning as parents, teachers, and guests",
      "Shared ceremonies and annual celebrations",
    ],
  },
  {
    icon: IconSchool,
    title: "Alumni Voices",
    body:
      "Our alumni are spread across West Bengal and beyond. They still remember their classrooms, their teachers, and the gate they walked through — and many continue to care for the school that shaped them.",
    details: [
      "Former students invited back for special occasions",
      "Alumni stories shared with current batches",
      "Guidance and career conversations with former students",
      "[DETAILS TO BE ADDED — Alumni Association / Reunions]",
    ],
  },
  {
    icon: IconBulb,
    title: "Educational Initiatives",
    body:
      "We continue to improve the teaching and learning environment — building on what works, and opening our doors to thoughtful, age-appropriate educational support.",
    details: [
      "Teacher development and shared best practices",
      "Computer centre and practical science instruction",
      "Remedial attention for children who need a little more time",
      "[DETAILS TO BE ADDED — Specific programmes & initiatives]",
    ],
  },
  {
    icon: IconCalendarEvent,
    title: "Local Activities",
    body:
      "Festivals, sports meets, annual day, and cultural programmes are woven into the life of the school — and into the life of the surrounding community, because school events are family events.",
    details: [
      "Annual Day and Prize Distribution",
      "Rabindra Jayanti and other cultural observances",
      "Inter-house and inter-class competitions",
      "Sports Day and outdoor games",
    ],
  },
];

export default function CollaborationPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate overflow-hidden section-navy">
        <div className="relative w-full section-pad">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgb(43 75 136 / 65%), transparent 60%), radial-gradient(ellipse 50% 60% at 90% 100%, rgb(182 141 34 / 18%), transparent 55%)",
            }}
          />
          <div className="page-shell py-0! relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[0.72rem] md:text-xs font-semibold tracking-[0.3em] text-brand-gold uppercase mb-4">
                About · Community
              </p>
              <h1 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[1.05] text-white max-w-3xl">
                <span className="heading-underline-stroke">Collaboration</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/75">
                A school does not stand alone. It is parents, teachers, villagers, former
                students and local well-wishers — all caring for the same group of children.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-soft section-pad">
        <div className="page-shell py-0!">
          <PageSectionHeading
            eyebrow="Together"
            title="How we work with parents & community"
            description="Baramohanpur High School is built on ordinary people, ordinary meetings, and ordinary acts of care — added together over many years."
            align="left"
            size="md"
            accent="stroke"
          />
          <div className="mt-14 grid gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const reverse = idx % 2 === 1;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className={`relative grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14 items-center rounded-3xl border border-black/5 bg-white p-6 md:p-10 shadow-sm ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-16/10 w-full overflow-hidden rounded-2xl ring-1 ring-black/5`}
                  >
                    <Image
                      src={
                        idx % 3 === 0
                          ? "/images/events/academic/educational-events.png"
                          : idx % 3 === 1
                            ? "/images/campus/campus-wide-view.jpeg"
                            : "/images/students/student-group.jpeg"
                      }
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--brand-navy)/55 via-transparent to-transparent" />
                  </div>
                  <div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-(--brand-navy)/10 text-brand-navy mb-4">
                      <Icon className="h-5 w-5" stroke={1.8} />
                    </span>
                    <h3 className="font-display font-semibold text-2xl text-brand-navy">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                    <ul className="mt-5 grid gap-2">
                      {p.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-sm text-(--foreground)/80"
                        >
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <p className="mt-12 text-center text-xs text-muted-foreground">
            * Specific programme names and partnership details will be added once official school records are confirmed.
          </p>
        </div>
      </section>

      <section className="section-warm section-pad">
        <div className="page-shell py-0!">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
            <div>
              <span className="eyebrow block mb-3">A shared promise</span>
              <h2 className="font-display font-semibold section-heading-title text-brand-navy mb-5">
                <span className="heading-underline">Want to collaborate with the school?</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
                Whether you are a parent with a concern, a former student wishing to visit, a
                community member wanting to help, or someone with a question about our work —
                please reach out. A good school conversation begins with a simple, honest message.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="btn-primary">
                  <IconMessageCircle className="h-4 w-4" />
                  Contact Us
                </a>
                <a href="/enquiry" className="btn-gold">
                  Enquire Now
                </a>
              </div>
            </div>
            <div className="relative w-full aspect-5/4 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/35%)]">
              <Image
                src="/images/campus/school-ground.jpeg"
                alt="School community gathering"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--brand-ink)/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
