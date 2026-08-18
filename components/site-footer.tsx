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
} from "@tabler/icons-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "School Events", href: "/events" },
  { name: "Notices", href: "/notices" },
  { name: "Contact Us", href: "/contact" },
];

const exploreLinks = [
  { name: "Enquire Now", href: "/enquiry" },
  { name: "Admission enquiry", href: "/contact#enquiry" },
  { name: "Notices & updates", href: "/notices" },
  { name: "Campus life", href: "/about" },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-0 mt-auto overflow-hidden bg-[var(--brand-ink)] text-slate-200">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgb(201_162_39/18%),transparent_55%),radial-gradient(ellipse_60%_40%_at_90%_100%,rgb(27_42_74/80%),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 md:px-8 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]"
        >
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/images/bhs-logo.jpeg"
                alt="Boromohonpur High School"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-[var(--brand-gold)]/40"
              />
              <span className="text-lg font-semibold tracking-tight text-white">
                Boromohonpur High School
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A neighbourhood school with a long memory — teaching children to
              think clearly, stand honestly, and belong to something larger than
              themselves.
            </p>
            <div className="mt-6 flex items-center gap-3">
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
          </div>

          <FooterColumn title="Quick links">
            {quickLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Explore">
            {exploreLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
              Visit & reach us
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <span>
                  Boromohonpur High School
                  <br />
                  Boromohonpur, West Bengal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <a
                  href="tel:+910000000000"
                  className="transition hover:text-white"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                <a
                  href="mailto:office@boromohonpurhs.edu.in"
                  className="transition hover:text-white"
                >
                  office@boromohonpurhs.edu.in
                </a>
              </li>
            </ul>

            <Link
              href="/enquiry"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[var(--brand-gold)] px-5 py-2.5 text-sm font-bold text-[var(--brand-ink)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d4af37]"
            >
              Enquire Now →
            </Link>
          </div>
        </motion.div>

        <div className="relative mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Boromohonpur High School. All rights
            reserved.
          </p>
          <p className="tracking-wide">
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
      <h3 className="mb-5 text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase">
        {title}
      </h3>
      <ul className="space-y-3">{children}</ul>
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
        className="text-sm text-slate-400 transition hover:text-white"
      >
        {children}
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-[var(--brand-gold)]/50 hover:text-[var(--brand-gold)]"
    >
      {icon}
    </a>
  );
}
