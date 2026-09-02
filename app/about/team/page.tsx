"use client";

import Image from "next/image";
import PageSectionHeading from "@/components/page-section-heading";
import PrincipalMessage from "@/components/principal-message";
import {
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
  emoji?: string;
  category: "leadership" | "teacher" | "non-teaching";
};

const teachers: Teacher[] = [
  // Leadership
  {
    name: "Sanjoy Modak",
    designation: "Headmaster",
    subject: "M.A. (English), B.Ed.",
    image: "/images/03-ABOUT/staff/leadership/principal.jpeg",
    category: "leadership",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  // Teaching
  {
    name: "Mrs. Bina Das",
    designation: "Assistant Teacher",
    subject: "B.A. (English), M.A. (Political Science), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/bina-das.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Manoj Mahapatra",
    designation: "Assistant Teacher",
    subject: "M.A. (Economics), B.Ed.",
    image: "/images/03-ABOUT/staff/non-teaching/manoj-mahapatra.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mrs. Falguni Misra Nanda",
    designation: "Assistant Teacher",
    subject: "M.A. (English), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/falguni-misra-nanda.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Binod Behari Murmu",
    designation: "Assistant Teacher",
    subject: "B.A., B.P.Ed.",
    image: "/images/03-ABOUT/staff/non-teaching/binod-bihari-murmu.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mrs. Mahua Maity",
    designation: "Assistant Teacher",
    subject: "M.Sc. (Physiology), Lady Braborn Trained, B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/mahua-maity.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Niranjan Kumar Baram",
    designation: "Assistant Teacher",
    subject: "M.A. (Philosophy), B.Ed.",
    image: "/images/03-ABOUT/staff/non-teaching/niranjan-kumar-baram.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Gitesh Biswas",
    designation: "Assistant Teacher",
    subject: "M.A. (Political Science)",
    image: "",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Kedar Dhal",
    designation: "Assistant Teacher",
    subject: "M.Sc. (Mathematics), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/kedar-dhal.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Aranyamoy Bar",
    designation: "Assistant Teacher",
    subject: "B.A. (Honours) (Bengali), B.P.Ed.",
    image: "/images/03-ABOUT/staff/teachers/aranyamoy-bar.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mrs. Swapnasree Das",
    designation: "Assistant Teacher",
    subject: "B.Sc. (Honours) (Nutrition)",
    image: "/images/03-ABOUT/staff/teachers/swapnasree-das.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Asis Dandapat",
    designation: "Assistant Teacher",
    subject: "M.A. (English), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/asis-dandapat.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Smt. Khukumoni Mandal Barman",
    designation: "Assistant Teacher",
    subject: "M.A. (Bengali), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/khukumoni-mandal-barman.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Surajit Dingal",
    designation: "Assistant Teacher",
    subject: "M.A. (English), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/surojit-dingal.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Uttam Sahoo",
    designation: "Assistant Teacher",
    subject: "M.A. (Bengali), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/uttam-saho.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Totan Bharasa",
    designation: "Assistant Teacher",
    subject: "M.Sc., M.Tech. (Computer Science), B.Ed.",
    image: "/images/03-ABOUT/staff/non-teaching/totan-bharasa.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Kousik Giri",
    designation: "Assistant Teacher",
    subject: "M.AC. (Chemistry), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/koushik-giri.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Smt. Mahasweta Tripathi",
    designation: "Assistant Teacher",
    subject: "M.Sc. (Home Management), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/mahaseta-tripati.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Jayanta Kumar Patra",
    designation: "Assistant Teacher",
    subject: "M.A. (Geography), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/jayanta-kumar-patra.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Smt. Chhanda Mandal",
    designation: "Assistant Teacher",
    subject: "M.A. (Sanskrit), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/chandana-mondal.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Ujjwal Sardar",
    designation: "Assistant Teacher",
    subject: "M.Sc. (Mathematics), B.Ed.",
    image: "",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Anupam Mandal",
    designation: "Assistant Teacher",
    subject: "M.A. (English), B.Ed.",
    image: "/images/03-ABOUT/staff/non-teaching/anupam-mandal.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Ashis Mishra",
    designation: "Assistant Teacher",
    subject: "M.Sc. (Physics), B.Ed.",
    image: "/images/03-ABOUT/staff/non-teaching/asis-mishra.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Manas Kumar Dey",
    designation: "Assistant Teacher",
    subject: "M.Sc. (Biology), B.Ed.",
    image: "/images/03-ABOUT/staff/teachers/manas-kumar-dey.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Goutam Makur",
    designation: "Assistant Teacher",
    subject: "M.Lib., M.A. (Bengali), B.Ed., A.N.O. (NCC)",
    image: "/images/03-ABOUT/staff/non-teaching/gautam-makur.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Miss 0ampa Shit",
    designation: "Assistant Teacher",
    subject: "M.A. (Bengali), B.Ed., Computer Diploma",
    image: "/images/03-ABOUT/staff/teachers/miss-oampa-shit.jpeg",
    category: "teacher",
    social: { facebook: "", instagram: "", linkedin: "" }
  },

  // Non-Teaching
  {
    name: "Mr. Ajoy Kumar Mahapatra",
    designation: "Clerk",
    subject: "M.A. (History)",
    image: "/images/03-ABOUT/staff/non-teaching/ajoy-kumar-mahapatra.jpeg",
    category: "non-teaching",
    social: { facebook: "", instagram: "", linkedin: "" }
  },
  {
    name: "Mr. Tanmoy Dutta",
    designation: "Group-D",
    subject: "H.S.",
    image: "/images/03-ABOUT/staff/non-teaching/tanmay-duatta.jpeg",
    category: "non-teaching",
    social: { facebook: "", instagram: "", linkedin: "" }
  }
];

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
  ];

  if (!social) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href || "#"}
          onClick={(e) => {
            if (!href) e.preventDefault();
          }}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          aria-label={`${label} profile`}
          className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 ${href
            ? "hover:scale-110 hover:bg-white hover:text-[var(--brand-navy)]"
            : "opacity-50 cursor-default"
            }`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function TeacherCard({ t, idx }: { t: Teacher; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.55,
        delay: Math.min(idx * 0.04, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col h-full overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
    >
      {/* IMAGE AREA */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--brand-fog)]">
        {t.image ? (
          <Image
            src={t.image}
            alt={`${t.name}, ${t.designation}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-full items-center justify-center bg-[var(--brand-fog)]">
            {t.emoji ? (
              <span className="text-7xl">{t.emoji}</span>
            ) : (
              <>
                <Image
                  src="/images/01-BRANDING/school-logo.png"
                  alt="Baramohanpur High School emblem"
                  fill
                  className="object-contain p-16 opacity-20"
                />
                <IconUser className="relative z-10 h-12 w-12 text-[var(--brand-navy)]/25" />
              </>
            )}
          </div>
        )}

        {/* Image shade */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Social links — appear on hover */}
        {t.social && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
          >
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
              Connect
            </span>
            <SocialLinks social={t.social} />
          </motion.div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Subject / Qualification */}
          <p className="eyebrow-navy mb-1.5 block text-xs">
            {t.subject}
          </p>

          {/* Name */}
          <h3 className="font-display font-semibold leading-tight tracking-tight text-[var(--brand-navy)] text-xl">
            {t.name}
          </h3>

          {/* Designation */}
          <p className="mt-1 text-xs font-medium text-[var(--muted-foreground)]">
            {t.designation}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-navy)]/7">
              <IconMail className="h-3.5 w-3.5 text-[var(--brand-navy)]/70" />
            </div>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
              Baramohanpur HS
            </span>
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--brand-navy)]/10 text-[var(--brand-navy)]/40 transition-all duration-300 group-hover:border-[var(--brand-gold)] group-hover:text-[var(--brand-gold)]">
            <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function TeamPage() {
  const staff = teachers.filter((t) => t.category === "teacher");
  const nonTeachingStaff = teachers.filter((t) => t.category === "non-teaching");

  return (
    <main className="overflow-x-hidden">
      {/* HERO / BACKGROUND BANNER */}
      <section className="relative pt-24 md:pt-32 pb-8 bg-[var(--brand-fog)] overflow-hidden">
        <div className="page-shell !py-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[24/9] max-h-[360px] min-h-[180px] rounded-3xl overflow-hidden shadow-md border border-[var(--border)] bg-white flex items-center justify-center">
            <Image
              src="/images/03-ABOUT/team-banner.webp"
              alt="Our Team — Baramohanpur High School"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain p-4 md:p-8"
            />
          </div>
        </div>
      </section>

      {/* HEADMASTER / LEADERSHIP */}
      <PrincipalMessage />

      {/* TEACHING STAFF */}
      <section className="section-blue section-pad">
        <div className="page-shell !py-0">
          <PageSectionHeading
            eyebrow="Teaching Faculty"
            title="Our Teaching Staff"
            description="Dedicated educators who bring knowledge, patience and experience into every classroom across Classes V to XII."
            size="md"
            accent="stroke"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {staff.map((t, idx) => (
              <TeacherCard key={t.name + idx} t={t} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* NON-TEACHING STAFF */}
      <section className="section-soft section-pad">
        <div className="page-shell !py-0">
          <PageSectionHeading
            eyebrow="Support Team"
            title="Non-Teaching & Administrative Staff"
            description="From office administration and technical laboratories to campus management, our support staff keeps the school running seamlessly every day."
            align="left"
            size="md"
            accent="stroke"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nonTeachingStaff.map((t, idx) => (
              <TeacherCard key={t.name + idx} t={t} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY TOGETHER (ALL FACULTY GROUP POSTER) */}
      <section className="section-warm section-pad border-t border-[var(--border)]">
        <div className="page-shell !py-0">
          <PageSectionHeading
            eyebrow="United in Purpose"
            title="Our Faculty Together"
            description="The complete faculty and staff of Baramohanpur High School — working hand in hand for the academic excellence and moral growth of our students."
            align="center"
            size="md"
            accent="underline"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] bg-white"
          >
            <Image
              src="/images/02-HOMEPAGE/hero/hero-2.webp"
              alt="All Baramohanpur High School Faculty Together"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
