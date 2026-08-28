"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  IconChevronDown,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export type AboutSubItem = {
  name: string;
  link: string;
  description: string;
};

export const aboutSubLinks: AboutSubItem[] = [
  {
    name: "Overview",
    link: "/about",
    description: "Our story and the school today",
  },
  {
    name: "Our Team",
    link: "/about/team",
    description: "Headmaster, teachers and leadership",
  },
  {
    name: "Timeline",
    link: "/about/timeline",
    description: "School history and milestones",
  },
  {
    name: "Collaboration",
    link: "/about/collaboration",
    description: "Community, parents and partners",
  },
  {
    name: "Vision",
    link: "/about/vision",
    description: "Our philosophy and mission",
  },
];

const navItems = [
  { name: "Home", link: "/" },
  {
    name: "About Us",
    link: "/about",
    hasSubmenu: true,
  },
  { name: "School Events", link: "/events" },
  { name: "Academics", link: "/academics" },
  { name: "Notices", link: "/notices" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact Us", link: "/contact" },
];

function isActive(pathname: string, link: string) {
  if (link === "/") return pathname === "/";
  if (link === "/about") return pathname === "/about";
  return pathname.startsWith(link);
}

export default function SiteNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [aboutHoverOpen, setAboutHoverOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />

        {/* Desktop nav with active indicator + About submenu */}
        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center lg:flex">
          <nav className="flex items-center gap-1 text-sm font-medium">
            {navItems.map((item, idx) => {
              const active = isActive(pathname, item.link);
              const isAbout = item.hasSubmenu;

              return (
                <div
                  key={`desk-nav-${idx}`}
                  className="relative"
                  onMouseEnter={() => isAbout && setAboutHoverOpen(true)}
                  onMouseLeave={() => isAbout && setAboutHoverOpen(false)}
                >
                  <Link
                    href={item.link}
                    className={cn(
                      "relative z-20 inline-flex items-center gap-1 rounded-full px-4 py-2 transition-colors duration-200",
                      active
                        ? "text-[var(--brand-white)]"
                        : "text-[inherit] hover:text-[var(--brand-white)]",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 z-0 rounded-full bg-[var(--brand-navy)] shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 26,
                          mass: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {isAbout && (
                      <IconChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          aboutHoverOpen ? "rotate-180" : "",
                        )}
                      />
                    )}
                  </Link>

                  {/* About Us desktop submenu */}
                  {isAbout && (
                    <AnimatePresence>
                      {aboutHoverOpen && (
                        <motion.div
                          key="about-submenu"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          onMouseEnter={() => setAboutHoverOpen(true)}
                          onMouseLeave={() => setAboutHoverOpen(false)}
                          className="absolute left-1/2 top-full z-50 mt-2 w-[360px] -translate-x-1/2 rounded-2xl border border-[var(--border)] bg-white/95 p-2 shadow-[0_20px_60px_-20px_rgb(20_35_63_/_30%)] backdrop-blur"
                        >
                          <div className="grid gap-1">
                            {aboutSubLinks.map((sub) => {
                              const subActive = isActive(pathname, sub.link);
                              return (
                                <Link
                                  key={sub.link}
                                  href={sub.link}
                                  onClick={() => setAboutHoverOpen(false)}
                                  className={cn(
                                    "group rounded-xl p-3 transition-colors",
                                    subActive
                                      ? "bg-[var(--brand-navy)] text-white"
                                      : "hover:bg-[var(--brand-mist)]",
                                  )}
                                >
                                  <p
                                    className={cn(
                                      "text-sm font-semibold",
                                      subActive
                                        ? "text-white"
                                        : "text-[var(--brand-navy)]",
                                    )}
                                  >
                                    {sub.name}
                                  </p>
                                  <p
                                    className={cn(
                                      "mt-0.5 text-xs",
                                      subActive
                                        ? "text-white/80"
                                        : "text-[var(--muted-foreground)]",
                                    )}
                                  >
                                    {sub.description}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <NavbarButton href="/enquiry" variant="dark">
            Enquire Now
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile nav with accordion-style About expansion + Gallery item */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => {
            const active = isActive(pathname, item.link);
            const isAbout = item.hasSubmenu;

            if (isAbout) {
              return (
                <div key={`mobile-link-${idx}`} className="w-full">
                  <button
                    type="button"
                    onClick={() => setAboutExpanded((v) => !v)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                      active
                        ? "bg-[var(--brand-navy)] text-white"
                        : "text-neutral-700 hover:bg-[var(--brand-mist)]",
                    )}
                  >
                    <span>{item.name}</span>
                    <IconChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        aboutExpanded ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {aboutExpanded && (
                      <motion.div
                        key="mobile-about-sub"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="ml-3 mt-1 overflow-hidden border-l border-[var(--border)] pl-3"
                      >
                        <div className="flex flex-col gap-0.5 py-1">
                          {aboutSubLinks.map((sub) => {
                            const subActive = isActive(pathname, sub.link);
                            return (
                              <Link
                                key={sub.link}
                                href={sub.link}
                                onClick={() => {
                                  setAboutExpanded(false);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={cn(
                                  "rounded-md px-3 py-2 text-sm transition-colors",
                                  subActive
                                    ? "bg-[var(--brand-navy)] text-white"
                                    : "text-neutral-600 hover:bg-[var(--brand-mist)]",
                                )}
                              >
                                <p className="font-medium">{sub.name}</p>
                                <p
                                  className={cn(
                                    "text-[0.72rem] mt-0.5",
                                    subActive
                                      ? "text-white/75"
                                      : "text-[var(--muted-foreground)]",
                                  )}
                                >
                                  {sub.description}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "relative w-full rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-[var(--brand-navy)] text-white"
                    : "text-neutral-700 hover:bg-[var(--brand-mist)]",
                )}
              >
                <span className="block">{item.name}</span>
              </Link>
            );
          })}
          <div className="mt-2 flex w-full flex-col gap-3 border-t border-[var(--border)] pt-3">
            <NavbarButton
              href="/enquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="dark"
              className="w-full"
            >
              Enquire Now
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
