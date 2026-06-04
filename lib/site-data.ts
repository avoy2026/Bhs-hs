export const SITE_NAME = "Hunter Protocol";

export const NAV_ITEMS = [
  { title: "Home", href: "#home", isActive: true },
  { title: "Hunter Profile", href: "#home" },
  { title: "Shadow Archive", href: "#hunter-journey" },
] as const;

export const HERO = {
  eyebrow: "The Awakening · System Interface",
  title: "Rise Beyond",
  titleAccent: "Every Limit",
  description:
    "From the weakest hunter to an unstoppable force — a cinematic journey through awakening, growth, and legacy forged in shadow.",
  cta: "ARISE",
  ctaHref: "#home",
  scrollHint: "Begin Hunter Journey ↓",
  status: "S-Rank Hunter · 48 Missions Cleared",
} as const;

export const COMPARISON = {
  before: "Before Awakening",
  after: "After Awakening",
} as const;

export const JOURNEY_MARQUEE = {
  label: "Abilities Acquired · Hunter Journey",
  tags: [
    "The Awakening",
    "Hunter Journey",
    "Shadow Extraction",
    "Abilities Acquired",
    "Legacy Beyond Limits",
    "Monarch Protocol",
    "Dungeon Break",
    "System Quest",
  ],
} as const;

export const FOOTER = {
  copyright: "Legacy Beyond Limits",
} as const;
