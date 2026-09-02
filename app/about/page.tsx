"use client";

import Image from "next/image";
import Link from "next/link";
import PageSectionHeading from "@/components/page-section-heading";
import StoryBlock from "@/components/story-block";
import PrincipalMessage from "@/components/principal-message";
import FocusCardsDemo from "@/components/focus-cards-demo";
import { IconFlame, IconBook2, IconHeartHandshake, IconUsersGroup, IconBulb, IconShieldCheck } from "@tabler/icons-react";
import { motion } from "motion/react";

const values = [
  {
    icon: IconBook2,
    title: "Knowledge",
    text: "Patient teaching that refuses to hurry a child â€” clear instruction, honest questions, and the slow pleasure of understanding.",
  },
  {
    icon: IconShieldCheck,
    title: "Character",
    text: "Honesty in the exam hall, courtesy in the corridor, and responsibility that goes beyond a written rulebook.",
  },
  {
    icon: IconHeartHandshake,
    title: "Discipline",
    text: "A self-discipline learned through routine â€” punctuality, neatness, finishing the work you started.",
  },
  {
    icon: IconUsersGroup,
    title: "Community",
    text: "Houses, prefects, assemblies, and friendships that cross classes because belonging here means belonging together.",
  },
  {
    icon: IconBulb,
    title: "Curiosity",
    text: "A teacher's patient answer, a lab experiment that finally works, and every 'but why?' that is worth asking.",
  },
  {
    icon: IconFlame,
    title: "Responsibility",
    text: "Keeping the classroom clean, helping a friend who is behind, carrying the school name with quiet pride.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-8 bg-[var(--brand-fog)] overflow-hidden">
        <div className="page-shell !py-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[24/9] max-h-[360px] min-h-[180px] rounded-3xl overflow-hidden shadow-md border border-[var(--border)] bg-white flex items-center justify-center">
            <Image
              src="/images/03-ABOUT/about-banner.webp"
              alt="About Us â€” Baramohanpur High School"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain p-4 md:p-8"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <StoryBlock
        eyebrow="Established in 1878"
        title="Our Story"
        body="Baramohanpur High School was established in 1878 under the inspiration of Pandit Ishwar Chandra Vidyasagar and through the initiative of the educationist Shri Nityananda Dey. Families from the surrounding villages contributed land, money, labour and blessings to make the school a reality. For 150 years, this shared effort has helped generations of students find the light of knowledge and carry the name of Baramohanpur into the world."
        image="/images/02-HOMEPAGE/campus/campus-3.webp"
        imageAlt="Baramohanpur High School building"
        href="/about/timeline"
        hrefLabel="Read the school timeline"
        accent="navy"
        facts={[
          { value: "150", label: "Years of light" },
          { value: "1878", label: "Year established" },
          { value: "BHS", label: "A shared legacy" },
        ]}
      />

      {/* Our Values */}
      <section className="section-warm section-pad">
        <div className="page-shell py-0!">
          <PageSectionHeading
            eyebrow="What we stand for"
            title="Our Values"
            description="Six quiet principles that shape the way we teach, the way we speak to students, and the way we keep this school running year after year."
            size="md"
            accent="stroke"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="group relative flex h-full flex-col rounded-2xl border border-(--brand-navy)/8 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-(--brand-navy)/10 text-brand-navy">
                    <Icon className="h-5 w-5" stroke={1.8} />
                  </span>
                  <h3 className="font-display font-semibold text-lg text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FocusCardsDemo />

      {/* Vision teaser */}
      <section className="section-blue section-pad">
        <div className="page-shell py-0!">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
            <div>
              <span className="eyebrow block mb-3">Our Vision & Mission</span>
              <h2 className="font-display font-semibold section-heading-title text-brand-navy mb-5">
                <span className="heading-underline">A school that looks forward, and remembers.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl">
                We want our students to leave Baramohanpur with the marks they need, and also with the character that lasts longer than marks. We believe in the whole child â€” in classrooms, on grounds, in music rooms, in assemblies.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about/vision" className="btn-primary">
                  Read Our Vision
                </Link>
                <Link href="/about/team" className="btn-outline">
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-5/4 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgb(20_35_63/35%)]">
              <Image
                src="/images/03-ABOUT/vision/our-vision.png"
                alt="Student life and vision"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--brand-navy)/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Headmaster message (reuse from homepage) */}
      <PrincipalMessage />

      {/* About sub-navigation cards */}
      <section className="section-soft section-pad">
        <div className="page-shell py-0!">
          <PageSectionHeading
            eyebrow="Explore"
            title="More about the school"
            description="Find the page you are looking for â€” from the teachers who lead us to the milestones that shaped us."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Our Team", desc: "Headmaster & Teachers", href: "/about/team" },
              { title: "Timeline", desc: "Our History & Milestones", href: "/about/timeline" },
              { title: "Collaboration", desc: "Community & Parents", href: "/about/collaboration" },
              { title: "Our Vision", desc: "Philosophy & Mission", href: "/about/vision" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group relative overflow-hidden rounded-2xl border border-(--brand-navy)/8 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-(--brand-navy)/20"
              >
                <h3 className="font-display font-semibold text-lg text-brand-navy">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.desc}
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-brand-gold opacity-80 transition group-hover:opacity-100">
                  Open â†’
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
