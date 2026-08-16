"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// -----------------------------------------------------------------------------
// Nav data — edit hrefs to match your actual route structure
// -----------------------------------------------------------------------------
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "School Events", href: "/events" },
  { label: "Notices", href: "/notices" },
  { label: "Contact Us", href: "/contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the mobile menu on route-size change (resize to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B2A4A] text-sm font-semibold text-[#C9A227]">
            BHS
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-[#1B2A4A]">
            Boromohonpur High School
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex md:items-center md:gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-[#1B2A4A]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A227] transition-all duration-200 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/enquiry"
            className="rounded-full bg-[#1B2A4A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#13203a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1B2A4A] md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-3 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1B2A4A]"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 px-2 pb-2">
            <Link
              href="/enquiry"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full bg-[#1B2A4A] px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#13203a]"
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}