
"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import {
  IconQuote,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconArrowUpRight,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "motion/react";

type SocialLinks = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
};

type Teacher = {
  name: string;
  designation: string;
  subject: string;
  message?: string;
  image?: string;
  email?: string;
  social?: SocialLinks;
  category: "leadership" | "teacher" | "non-teaching";
};

const teachers: Teacher[] = [
  {
    name: "Sanjoy Modak",
    designation: "Headmaster",
    subject: "M.A. (English), B.Ed.",
    image: "/images/teachers/leadership/principal.jpeg",
    category: "leadership",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Lokesh Mishra",
    designation: "Teacher",
    subject: "B.Sc. (Hons) (Chemistry), B.Ed.",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Joydeb Bhunia",
    designation: "Teacher",
    subject: "M.Sc. (Geography), B.Ed.",
    image: "/images/teachers/teaching/joydeb-bhunia.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Debasis Ray",
    designation: "Teacher",
    subject: "B.Sc. (Hons.) (Physics), B.Ed.",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Bina Das",
    designation: "Teacher",
    subject: "B.A. (English), M.A. (Political Science), B.Ed.",
    image: "/images/teachers/teaching/bina-das.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Manoj Mahapatra",
    designation: "Teacher",
    subject: "M.A. (Economics), B.Ed.",
    image: "/images/teachers/teaching/manoj-mahapatra.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Falguni Misra Nanda",
    designation: "Teacher",
    subject: "M.A. (English), B.Ed.",
    image: "/images/teachers/teaching/falguni-misra-nanda.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Binod Behari Murmu",
    designation: "Teacher",
    subject: "B.A., B.P.Ed.",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Mahua Maity",
    designation: "Teacher",
    subject: "M.Sc. (Physiology), Lady Brabourne Trained, B.Ed.",
    image: "/images/teachers/teaching/mahua-maity.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Niranjan Kumar Baram",
    designation: "Teacher",
    subject: "M.A. (Philosophy), B.Ed.",
    image: "/images/teachers/teaching/niranjan-kumar-baram.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Gitesh Biswas",
    designation: "Teacher",
    subject: "M.A. (Political Science)",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Kedar Dhal",
    designation: "Teacher",
    subject: "M.Sc. (Mathematics), B.Ed.",
    image: "/images/teachers/teaching/kedar-dhal.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Aranyamoy Bar",
    designation: "Teacher",
    subject: "B.A. (Honours) (Bengali), B.P.Ed.",
    image: "/images/teachers/teaching/aranyamoy-bar.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Swapnasree Das",
    designation: "Teacher",
    subject: "B.Sc. (Honours) (Nutrition)",
    image: "/images/teachers/teaching/swapnasree-das.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Asis Dandapat",
    designation: "Teacher",
    subject: "M.A. (English), B.Ed.",
    image: "/images/teachers/teaching/asis-dandapat.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  {
    name: "Khukumoni Mandal Barman",
    designation: "Teacher",
    subject: "M.A. (Bengali), B.Ed.",
    image: "/images/teachers/teaching/khukumoni-mandal-barman.jpeg",
    category: "teacher",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },
];

/*
|--------------------------------------------------------------------------
| Social Links
|--------------------------------------------------------------------------
*/

function SocialLinks({ social }: { social?: SocialLinks }) {
  const links = [
    {
      href: social?.facebook,
      label: "Facebook",
      icon: IconBrandFacebook,
    },
    {
      href: social?.instagram,
      label: "Instagram",
      icon: IconBrandInstagram,
    },
    {
      href: social?.linkedin,
      label: "LinkedIn",
      icon: IconBrandLinkedin,
    },
  ].filter((item) => item.href);

  if (!links.length) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} profile`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-brand-navy"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Teacher Card
|--------------------------------------------------------------------------
*/

function TeacherCard({
  t,
  idx,
}: {
  t: Teacher;
  idx: number;
}) {
  const isPrincipal = t.designation === "Headmaster";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.55,
        delay: Math.min(idx * 0.045, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex h-full overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] ${
        isPrincipal
          ? "lg:col-span-2 lg:flex-row ring-1 ring-(--brand-gold)/25"
          : "flex-col"
      }`}
    >
      {/* IMAGE AREA */}
      <div
        className={`relative overflow-hidden ${
          isPrincipal
            ? "aspect-4/3 w-full lg:aspect-auto lg:w-[45%]"
            : "aspect-4/3 w-full"
        }`}
      >
        {t.image ? (
          <Image
            src={t.image}
            alt={`${t.name}, ${t.designation}`}
            fill
            sizes={
              isPrincipal
                ? "(max-width: 1024px) 100vw, 45vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-full items-center justify-center bg-brand-mist">
            <Image
              src="/images/branding/school-logo.png.jpeg"
              alt="Baramohanpur High School emblem"
              fill
              className="object-contain p-16 opacity-20"
            />

            <IconUser className="relative z-10 h-12 w-12 text-(--brand-navy)/25" />
          </div>
        )}

        {/* Image shade */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--brand-navy)/80 via-(--brand-navy)/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Leadership badge */}
        {isPrincipal && (
          <div className="absolute left-5 top-5 rounded-full bg-brand-gold px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-ink shadow-lg">
            Headmaster
          </div>
        )}

        {/* Social links — appear on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1 }}
          className="absolute bottom-5 left-5 right-5 flex items-center justify-between"
        >
          <span className="translate-y-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Connect
          </span>

          <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <SocialLinks social={t.social} />
          </div>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div
        className={`flex flex-1 flex-col justify-between ${
          isPrincipal ? "p-6 lg:w-[55%] lg:p-8" : "p-6"
        }`}
      >
        <div>
          {/* Subject / Qualification */}
          <p className="eyebrow-navy mb-2 block">
            {t.subject}
          </p>

          {/* Name */}
          <h3
            className={`font-display font-semibold leading-tight tracking-tight text-brand-navy ${
              isPrincipal ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
          >
            {t.name}
          </h3>

          {/* Designation */}
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {t.designation}
          </p>

          {/* Message */}
          {t.message && (
            <blockquote
              className={`relative mt-5 leading-relaxed text-muted-foreground ${
                isPrincipal ? "text-base" : "text-sm"
              }`}
            >
              <IconQuote className="absolute -left-0.5 -top-1 h-4 w-4 text-(--brand-gold)/60" />

              <span className="pl-6">
                {t.message}
              </span>
            </blockquote>
          )}
        </div>

        {/* Bottom */}
        <div
          className={`mt-7 flex items-center justify-between ${
            isPrincipal
              ? "border-t border-border pt-5"
              : "pt-2"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-(--brand-navy)/7">
              <IconMail className="h-4 w-4 text-(--brand-navy)/70" />
            </div>

            <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Baramohanpur HS
            </span>
          </div>

          {/* Small profile indicator */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-(--brand-navy)/10 text-(--brand-navy)/40 transition-all duration-300 group-hover:border-brand-gold group-hover:text-brand-gold">
            <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/*
|--------------------------------------------------------------------------
| Team Page
|--------------------------------------------------------------------------
*/

export default function TeamPage() {
  const leaders = teachers.filter(
    (t) => t.category === "leadership"
  );

  const staff = teachers.filter(
    (t) => t.category === "teacher"
  );

  const nonTeachingStaff = teachers.filter(
    (t) => t.category === "non-teaching"
  );

  return (
    <main className="overflow-x-hidden">

      {/* ================================================================
          HERO / BACKGROUND BANNER
      ================================================================= */}

      <section className="relative isolate min-h-130 overflow-hidden bg-brand-navy md:min-h-145">

        {/* Background image */}
        <Image
          src="/images/campus/campus-wide-view.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-(--brand-navy)/75" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-(--brand-navy)/30 via-(--brand-navy)/65 to-brand-navy" />

        {/* Decorative glow */}
        <div
          aria-hidden
          className="absolute -right-40 top-20 h-125 w-125 rounded-full bg-(--brand-gold)/10 blur-3xl"
        />

        <div className="relative z-10 flex min-h-130 items-end md:min-h-145">
          <div className="page-shell w-full py-0! pb-16 md:pb-20">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl"
            >
              <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brand-gold md:text-xs">
                About · Our Team
              </p>

              <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                The people
                <br />
                behind the
                <br />
                <span className="text-brand-gold">
                  journey.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                The teachers and staff of Baramohanpur High School
                are at the heart of every lesson, every achievement and
                every generation that passes through our gates.
              </p>
            </motion.div>

            {/* Bottom stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6"
            >
              <div>
                <p className="text-2xl font-semibold text-white">
                  {teachers.length}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                  Profiles
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  3
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                  Staff Areas
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  1878
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                  Established
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          LEADERSHIP
      ================================================================= */}

      <section className="section-soft section-pad">
        <div className="page-shell py-0!">

          <PageSectionHeading
            eyebrow="Leadership"
            title="Headmaster & School Leadership"
            description="The people who guide the school, day after day, keeping every class and every student in mind."
            align="left"
            size="md"
            accent="stroke"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {leaders.map((t, idx) => (
              <TeacherCard
                key={t.name}
                t={t}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TEACHING STAFF
      ================================================================= */}

      <section className="section-blue section-pad">
        <div className="page-shell py-0!">

          <PageSectionHeading
            eyebrow="Teaching Staff"
            title="Our Teaching Staff"
            description="Dedicated educators who bring knowledge, patience and experience into every classroom."
            size="md"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((t, idx) => (
              <TeacherCard
                key={t.name + idx}
                t={t}
                idx={idx}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            * Staff photographs and profile information can be updated
            after official confirmation.
          </p>
        </div>
      </section>

      {/* ================================================================
          NON-TEACHING STAFF
      ================================================================= */}

      <section className="section-soft section-pad">
        <div className="page-shell py-0!">

          <PageSectionHeading
            eyebrow="Non-Teaching Staff"
            title="The Team Behind the School"
            description="From administration and office support to the people who keep the campus running every day, every member plays an important role."
            align="left"
            size="md"
            accent="stroke"
          />

          {nonTeachingStaff.length > 0 ? (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {nonTeachingStaff.map((t, idx) => (
                <TeacherCard
                  key={t.name + idx}
                  t={t}
                  idx={idx}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-(--brand-navy)/15 bg-white/60 px-6 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-(--brand-navy)/5">
                <IconUser className="h-6 w-6 text-(--brand-navy)/45" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-brand-navy">
                Staff profiles coming soon
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Non-teaching staff profiles will be added after the
                official information and photographs are confirmed.
              </p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

