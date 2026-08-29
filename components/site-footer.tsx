"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
  IconClock,
  IconArrowUpRight,
} from "@tabler/icons-react";

const aboutLinks = [
  { name: "Overview", href: "/about" },
  { name: "Our Team", href: "/about/team" },
  { name: "Timeline", href: "/about/timeline" },
  { name: "Collaboration", href: "/about/collaboration" },
  { name: "Vision", href: "/about/vision" },
];

const exploreLinks = [
  { name: "Academics", href: "/academics" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Notices", href: "/notices" },
  { name: "FAQ", href: "/faq" },
  { name: "Testimonials", href: "/testimonials" },
];

const connectLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Enquire Now", href: "/enquiry" },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-0 mt-auto overflow-hidden bg-[var(--brand-ink)] text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 15% 0%,rgb(182 141 34/14%),transparent 60%),radial-gradient(ellipse 50% 40% at 90% 90%,rgb(20 35 63/80%),transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-10 md:px-8 md:pt-24 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.25fr]"
        >
          {/* Brand & identity column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/images/01-BRANDING/school-logo.png"
                alt="Baramohanpur High School"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--brand-gold)]/45"
              />
              <div>
                <span className="block font-display text-lg font-semibold tracking-tight text-white">
                  Baramohanpur High School
                </span>
                <span className="mt-0.5 block text-[0.68rem] font-medium tracking-[0.18em] text-[var(--brand-gold)] uppercase">
                  Est. Baramohanpur
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              A neighbourhood school with a long memory — teaching children to
              think clearly, stand honestly, and belong to something larger than
              themselves.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <SocialIcon
                href="#"
                label="Facebook"
                icon={<IconBrandFacebook className="h-4 w-4" />}
              />
              <SocialIcon
                href="#"
                label="Instagram"
                icon={<IconBrandInstagram className="h-4 w-4" />}
              />
              <SocialIcon
                href="#"
                label="YouTube"
                icon={<IconBrandYoutube className="h-4 w-4" />}
              />
            </div>
            <div className="mt-7">
              <Link
                href="/enquiry"
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--brand-gold)] px-5 py-2.5 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cfaa33]"
              >
                Enquire Now
                <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* About column */}
          <FooterColumn title="About">
            {aboutLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Explore column */}
          <FooterColumn title="Explore">
            {exploreLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
            <div className="mt-3 border-t border-white/10 pt-3">
              {connectLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </FooterColumn>

          {/* Contact column */}
          <div>
            <h3 className="mb-5 text-[0.7rem] font-semibold tracking-[0.22em] text-[var(--brand-gold)] uppercase">
              Connect
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <span className="leading-relaxed">
                  <span className="block font-medium text-white">
                    Baramohanpur High School
                  </span>
                  <span className="text-slate-400">
                    [PLACEHOLDER — Full Address]
                    <br />
                    Baramohanpur, West Bengal
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <a
                  href="tel:+910000000000"
                  className="transition hover:text-white"
                >
                  +91 [PLACEHOLDER — PHONE]
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <a
                  href="mailto:office@baramohanpurhs.edu.in"
                  className="transition hover:text-white"
                >
                  [PLACEHOLDER — EMAIL]
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <span className="leading-relaxed text-slate-400">
                  <span className="font-medium text-white">Office hours</span>
                  <br />
                  Mon – Sat · 10:00 AM – 4:00 PM
                  <br />
                  Closed Sundays &amp; holidays
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="relative mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Baramohanpur High School. All rights
            reserved.
          </p>
          <p className="tracking-[0.14em] uppercase text-slate-500/90">
            Knowledge · Character · Community
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-5 text-[0.7rem] font-semibold tracking-[0.22em] text-[var(--brand-gold)] uppercase">
        {title}
      </h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
      >
        <span className="relative transition-transform duration-200 group-hover:translate-x-0.5">
          {children}
        </span>
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-gold)]/50 hover:bg-[var(--brand-gold)]/10 hover:text-[var(--brand-gold)]"
    >
      {icon}
    </a>
  );
}
