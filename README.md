# Baramohanpur High School — Official Website

> **"Where knowledge finds character"**
>
> A modern, animated, responsive school website built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and premium Aceternity UI components.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Navigation & Routing](#4-navigation--routing)
5. [Pages — Detailed Design & Content](#5-pages--detailed-design--content)
6. [Design System & Branding](#6-design-system--branding)
7. [Image Assets — Complete Inventory](#7-image-assets--complete-inventory)
8. [Reusable Components](#8-reusable-components)
9. [Aceternity UI Components Used](#9-aceternity-ui-components-used)
10. [Setup & Development](#10-setup--development)
11. [Scripts & Commands](#11-scripts--commands)
12. [Configuration Files](#12-configuration-files)
13. [Known Notes for Developers](#13-known-notes-for-developers)

---

## 1. Project Overview

This is the **official website** of **Baramohanpur High School** (Baramohanpur, West Bengal). It is a narrative-driven, visually rich single-school site showcasing campus life, history, events, notices, admissions enquiry, and contact details.

**Site motto / tagline:**
- Knowledge · Character · Community
- "Where knowledge finds character"
- "Every child who walks in leaves as a Baramohanpur student"

**Key UX features:**
- Full-screen animated **preloader** with multilingual welcome words (English, Bengali, French, Japanese)
- **Smooth Lenis scroll** with custom easing
- **IntersectionObserver reveal animations** on every section
- **Page transition fades** between routes (AnimatePresence)
- Resizable **floating pill navbar** (shrinks on scroll)
- Premium **Aceternity UI** hero effects, carousels, cards, and 3D scroll visuals
- Fully responsive: mobile-first layout, dedicated mobile nav menu

---

## 2. Tech Stack

| Category | Package | Version |
|----------|---------|---------|
| **Framework** | Next.js (App Router, RSC) | `16.2.7` |
| **Language** | TypeScript | `^5` |
| **UI Library** | React | `19.2.4` |
| **Styling** | Tailwind CSS | `^4` |
| **Tailwind CSS Plugin** | `@tailwindcss/postcss` | `^4` |
| **Animations** | Framer Motion (`motion/react`) | `^12.40.0` |
| **GSAP** | `gsap`, `@gsap/react` | `^3.15.0` / `^2.1.2` |
| **Smooth Scroll** | Lenis | `^1.3.23` |
| **Particles** | `@tsparticles/react` + engine + slim | `^4.3.2` |
| **Icons** | `@tabler/icons-react`, `@iconify/react`, `lucide-react` | multiple |
| **Radix Primitives** | `@radix-ui/react-tabs`, `@radix-ui/react-hover-card` | latest |
| **UI Primitives** | `radix-ui` | `^1.4.3` |
| **Component Libraries** | `shadcn` (via components.json) | `^4.10.0` |
| **Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority`, `qss` | latest |
| **Font** | Geist + Geist Mono (via `next/font/google`) | built-in |
| **Lint** | ESLint + eslint-config-next | `^9` |

---

## 3. Project Structure

```
bhs/
├── app/                              # Next.js App Router routes
│   ├── about/page.tsx                # About Us page
│   ├── contact/page.tsx              # Contact Us page (client-side)
│   ├── enquiry/page.tsx              # Enquiry Now page (client-side)
│   ├── events/page.tsx               # School Events page
│   ├── notices/page.tsx              # Notices page
│   ├── page.tsx                      # Homepage
│   ├── layout.tsx                    # Root layout (Geist fonts, metadata)
│   ├── navbar.tsx                    # Navbar wrapper (navItems definition)
│   ├── globals.css                   # Tailwind v4 + design tokens + theme
│   └── favicon.ico
│
├── blocks/
│   └── interface-crafts-cards.tsx    # Animated spring-stacked event cards
│
├── components/
│   ├── ui/                           # Aceternity UI base components
│   │   ├── animated-testimonials.tsx
│   │   ├── apple-cards-carousel.tsx
│   │   ├── canvas-text.tsx
│   │   ├── cover.tsx
│   │   ├── focus-cards.tsx
│   │   ├── hero-parallax.tsx
│   │   ├── images-slider.tsx
│   │   ├── infinite-moving-cards.tsx
│   │   ├── lamp.tsx
│   │   ├── layout-grid.tsx
│   │   ├── link-preview.tsx
│   │   ├── macbook-scroll.tsx
│   │   ├── resizable-navbar.tsx      # Navbar base (scroll-reactive)
│   │   ├── sparkles.tsx
│   │   ├── tabs.tsx
│   │   ├── timeline.tsx
│   │   └── wobble-card.tsx
│   │
│   ├── animated-testimonials-demo.tsx
│   ├── apple-cards-carousel-demo.tsx
│   ├── canvas-text-demo.tsx
│   ├── cover-demo.tsx
│   ├── enquiry-form.tsx              # Reusable enquiry / contact form
│   ├── focus-cards-demo.tsx
│   ├── hero-parallax-demo.tsx        # Events parallax grid
│   ├── images-slider-demo.tsx        # Homepage hero slider
│   ├── infinite-moving-cards-demo.tsx
│   ├── lamp-demo.tsx
│   ├── layout-grid-demo.tsx
│   ├── link-preview-demo.tsx
│   ├── macbook-scroll-demo.tsx
│   ├── preloader.tsx                 # Animated preloader screen
│   ├── resizable-navbar-demo.tsx
│   ├── school-glories.tsx            # 4-tile feature cards (homepage)
│   ├── school-vision-section.tsx     # Heritage stats + image section
│   ├── site-footer.tsx               # Footer (4-column, dark navy)
│   ├── tabs-demo.tsx                 # Notices tabs (Admissions/Exams/Holidays/Results/General)
│   ├── timeline-demo.tsx             # School history timeline
│   └── wobble-card-demo.tsx
│
├── hooks/
│   └── use-outside-click.tsx
│
├── lib/
│   └── utils.ts                       # cn() class merge helper
│
├── public/
│   └── images/                        # All site image assets
│       ├── classroom/
│       ├── poster/
│       ├── school/
│       ├── teachers/
│       └── bhs-logo.jpeg
│
├── components.json                    # shadcn config (aceternity registry)
├── next.config.ts                     # Next.js config (Turbopack, remote images)
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── AGENTS.md / CLAUDE.md              # Dev agent instructions
```

---

## 4. Navigation & Routing

### 4.1 Navbar Items (Desktop + Mobile)
Defined in: [app/navbar.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/navbar.tsx#L16-L22)

| # | Name | Route | Description |
|---|------|-------|-------------|
| 1 | Home | `/` | Landing page |
| 2 | About Us | `/about` | School story, history, campus life |
| 3 | School Events | `/events` | Events showcase + parallax gallery |
| 4 | Notices | `/notices` | Tabbed notice board (Admissions, Exams, Holidays, Results, General) |
| 5 | Contact Us | `/contact` | Office info + embedded enquiry form |
| — | **Enquire Now (CTA Button)** | `/enquiry` | Dark variant pill button in navbar; same link in mobile menu |

### 4.2 Navbar Behavior
- **Fixed top navbar** — transparent/blurred overlay with white text at page top
- **Shrinks into a floating pill** (70% width, white/glass, shadow) once user scrolls past 100px
- **Mobile (< lg)** — hamburger → slide-down white panel with all links + CTA
- Hover pill indicator (brand-navy background) on desktop nav items

### 4.3 Footer Quick Links
Defined in: [components/site-footer.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/components/site-footer.tsx#L15-L28)

**Quick Links column:** Home · About Us · School Events · Notices · Contact Us
**Explore column:** Enquire Now · Admission enquiry · Notices & updates · Campus life

---

## 5. Pages — Detailed Design & Content

---

### 5.1 HOME — `/` (Landing Page)
**File:** [app/page.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/page.tsx)

Composed of 13 stacked sections in this order:

| # | Section / Component | Design Details |
|---|---------------------|---------------|
| 1 | `ImagesSliderDemo` | Full-height (h-40rem) auto-rotating 3-image hero with Ken Burns / parallax. Centered tagline: **"Baramohanpur High School · Where knowledge finds character"** + "Begin an enquiry" CTA. |
| 2 | `WobbleCardDemo` | 3-tile 3D wobble grid (lg:col-span variants). Pink-800 + neutral + blue-900 cards. Note: contains placeholder "Gippity AI" copy + `/linear.webp` image — needs school-specific replacement. |
| 3 | `SchoolGlories` | Warm cream section. **"Why families choose us"**. 4 feature cards (2×2 on sm, 1×4 on lg): Student Life, Achievements, Academics, Admissions. Each has gradient top accent bar, Tabler icon, + "Explore →" hover reveal. |
| 4 | `AppleCardsCarouselDemo` | Apple-style horizontal scroll card carousel (6 cards). Click any card → expands full-screen with **Story component** (narrative copy + image). Cards: Campus / Classrooms / Student life / Achievements / Community / Values. |
| 5 | `TimelineDemo` | Vertical 3-chapter school history timeline — **Today / Growth / Highlights**. Each section has 2×2 image grid + prose. Highlight list with colored dot indicators. |
| 6 | `InfiniteMovingCardsDemo` | Horizontally auto-scrolling testimonial strip (5 voice-of-campus quotes, direction: right, speed: slow, light variant). |
| 7 | `MacbookScrollDemo` | Laptop mockup scroll reveal. Title: "Open a window into school life · Scroll, and the campus comes into view." |
| 8 | `CoverDemo` | Large centered typographic promise section: **"Every child who walks in leaves as a Baramohanpur student"** — the word "Baramohanpur student" uses the animated `Cover` (magnetic text spotlight) effect. |
| 9 | `SchoolVisionSection` | Two-column (md+) heritage section. Left: copy + stats (50+ Years · 10K+ Alumni · 100% Dedication). Right: 4:3 rounded campus image with shadow + gold accent bar. |
| 10 | `LinkPreviewDemo` | Interactive hover-preview prose block on warm gold background. Keywords with image-pop hover: "Baramohanpur High School" → logo, "carry themselves with grace" → campus, "campus events" → classroom, "official notices" → students. |
| 11 | `LayoutGridDemo` | Bento-style expandable image grid. **4 cards** (md:col-span variants: 2+1+1+2). Note: currently placeholder Unsplash house photos + skeleton "House in the woods" copy — needs school-specific imagery/content. |
| 12 | `AnimatedTestimonialsDemo` | Auto-play rotating testimonial carousel (5 quotes: Guardian · Head Boy · Teacher · Alumna · Parent). Portrait image + quote + name/role. |
| 13 | `Cards` (blocks) | Spring-stacked 3D fanned event cards (5): Annual Day · Sports Meet · Cultural Fest · Science Fair · Prize Night. Click any card → springs to center, reveals description. Click outside → collapses back. |

---

### 5.2 ABOUT US — `/about`
**File:** [app/about/page.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/about/page.tsx)

5 stacked sections:

| # | Section | Design |
|---|---------|--------|
| 1 | `LampDemo` | Centered spotlight-lamp hero effect. Headline: **"Where every event becomes a memory"**. Gradient brand text (navy → slate → gold). |
| 2 | `TimelineDemo` | Same school-history timeline as homepage (Today · Growth · Highlights with image grids). |
| 3 | `AppleCardsCarouselDemo` | Same 6-card Apple carousel (Campus / Classrooms / Student life / Achievements / Community / Values). |
| 4 | `FocusCardsDemo` | Hover-focus 6-card row: **"Life between the bells"** — Our Campus, Classroom Learning, Student Life, Achievements, School Pride, Community Spirit. Hover expands focused card, dims neighbors. |
| 5 | `LayoutGridDemo` | Same 4-tile bento grid (placeholder content, see notes). |

---

### 5.3 SCHOOL EVENTS — `/events`
**File:** [app/events/page.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/events/page.tsx)

3 sections, white background:

| # | Section | Design |
|---|---------|--------|
| 1 | `LampDemo` | Same lamp spotlight hero: "Where every event becomes a memory". |
| 2 | `HeroParallaxDemo` | Multi-row deep-parallax thumbnail grid — **15 event tiles** (Annual Day, Sports Meet, Cultural Fest, Independence Day, Teachers' Day, Science Fair, Republic Day, Art Exhibition, Debate Competition, Prize Distribution, Parent Meet, Foundation Day, Music Night, Community Service, Farewell Ceremony). All link to `/events`. |
| 3 | `Cards` (blocks) | Heading: **"Pick a moment · Tap a card. Watch the year unfold."** Same 5-card spring fan stack as homepage. |

---

### 5.4 NOTICES — `/notices`
**File:** [app/notices/page.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/notices/page.tsx)

Background: `brand-fog` (light blue-grey)

| # | Section | Design |
|---|---------|--------|
| 1 | **Notices header + Tabs** | Centered hero text: **"What the school is saying today"**. Then `TabsDemo` — 5 interactive radial-shine 3D tabs: |
| | • **Admissions** tab | Navy gradient panel + "Open for the new session" + campus image |
| | • **Exams** tab | "How the year is examined" + classroom image |
| | • **Holidays** tab | "When the campus rests" + student image |
| | • **Results** tab | "When results are ready" + achievements image |
| | • **General** tab | "The everyday school" + logo image |
| 2 | `LinkPreviewDemo` | Same hover-preview prose section on white background (see Home §5.1 #10). |

---

### 5.5 CONTACT US — `/contact`
**File:** [app/contact/page.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/contact/page.tsx)
Client-side component (`"use client"`).

| # | Section | Design |
|---|---------|--------|
| 1 | **Hero (navy)** | Dark navy radial-gold hero. Title: **"The office is open to you"**. Subcopy: admissions, certificates, everyday questions. CTA "Go to enquiry form" → jumps to #enquiry anchor. |
| 2 | **School office details (4-up)** | Light section. 4 cards (sm:2-col, lg:4-col) with Tabler icons: <br>• **Address** — Baramohanpur, West Bengal <br>• **Phone** — +91 XXXXX XXXXX (tel: link) <br>• **Email** — office@baramohanpurhs.edu.in (mailto: link) <br>• **Office hours** — Mon–Sat 10AM–4PM, closed Sundays/holidays |
| 3 | **Enquiry form (2-col)** | Soft section. Left sticky sub-heading: "Start with an admission enquiry" + link to `/enquiry`. Right: embedded `EnquiryForm` component (full-width card, rounded-2xl, shadow, padded). |

---

### 5.6 ENQUIRE NOW — `/enquiry`
**File:** [app/enquiry/page.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/enquiry/page.tsx)
Client-side component (`"use client"`).

| # | Section | Design |
|---|---------|--------|
| 1 | **Hero (navy)** | Dark navy with radial gold glow. Title: **"Write the first line of your story"**. Subcopy about admission process. Link to `/contact` for directions. |
| 2 | **EnquiryForm** | Centered max-w-3xl card on light background. Title: "Admission & general enquiry". See §8.2 for full form fields. |

---

## 6. Design System & Branding

### 6.1 Brand Colors (CSS Custom Properties)
Defined in: [app/globals.css](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/globals.css#L70-L145)

| Token | HEX | Usage |
|-------|-----|-------|
| `--brand-navy` | `#1b2a4a` | Primary dark brand, CTAs, headings, navbar pill |
| `--brand-ink` | `#0b1220` | Footer background, darkest navy |
| `--brand-gold` | `#c9a227` | Accent, CTA buttons, highlights, logo ring |
| `--brand-emerald` | `#2d7a5f` | Secondary green accent (promise section, vision) |
| `--brand-warm` | `#fdf8ef` | Warm cream section background (school-glories) |
| `--brand-mist` | `#eef2f7` | Soft blue-grey mist |
| `--brand-fog` | `#f5f7fb` | Default page canvas fog (lightest) |
| `--radius` | `0.625rem` (~10px) | Base corner radius; auto-scaled for sm → 4xl |

### 6.2 Typography
- **Sans / Heading:** `Geist` (from `next/font/google`) → `--font-geist-sans`
- **Mono:** `Geist Mono` → `--font-geist-mono`
- **Micro labels:** `text-xs font-semibold tracking-[0.2em–0.28em] uppercase` — used across every section eyebrow (e.g. "EST. IN BARAMOHANPUR", "CONTACT US")
- **Hero:** text-3xl → 5xl / 7xl, `font-semibold tracking-tight`
- **Body:** `text-sm` → `lg`, Geist sans, relaxed line-height

### 6.3 Reusable Section Utility Classes
From [app/globals.css](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/app/globals.css#L172-L205):

```css
.section-light    /* brand-fog bg */
.section-soft     /* white/70 soft bg */
.section-warm     /* warm cream gradient bg */
.section-dark     /* brand-ink (near black) bg */
.section-navy     /* brand-navy dark bg */
.section-pad      /* py-16/24, px-4/8 padding preset */
.page-shell       /* max-w-7xl centered, page padding */
.field-input      /* form input styling (focus: navy ring) */
```

### 6.4 Reveal-on-Scroll Animation System
- `AppShell` (in `components/app-shell.tsx`) adds `.will-reveal` class to every `main > *` child + footer via IntersectionObserver (50ms delay after preloader finish)
- Each element fades + translates up 36px on reveal (0.85s cubic-bezier)
- Respects `prefers-reduced-motion: reduce`
- Preloader shown only **once per session** (sessionStorage flag: `bhs_preloader_done`)

---

## 7. Image Assets — Complete Inventory

### 7.1 Folder Structure
All images live under: `/public/images/`

### 7.2 Core Images (directly in `/public/images/`)
These are referenced most frequently across components:

| File | Dimensions / Format | Used In |
|------|---------------------|---------|
| `bhs-logo.jpeg` | Logo image, rounded logo | Preloader, Navbar, Footer, AppleCardsCarousel (Community), Timeline, FocusCards, AnimatedTestimonials, LinkPreview, Tabs (General) |
| `school/` and `poster/` assets | School, student activity and event imagery | Achievements, Timeline, FocusCards, HeroParallax, AnimatedTestimonials, Tabs |
| `img-slider-1.jpeg` | Campus / building / assembly | Hero slider, AppleCardsCarousel (Campus, Values), Timeline, FocusCards (Campus), HeroParallax, AnimatedTestimonials, LinkPreview, MacbookScroll, Tabs (Admissions), SchoolVisionSection |
| `img-slider-2.jpeg` | Classroom / teaching | Hero slider, AppleCardsCarousel (Classrooms), Timeline, FocusCards, HeroParallax, AnimatedTestimonials, LinkPreview, Tabs (Exams), SchoolVisionSection |
| `img-slider-3.jpeg` | Students / campus life | Hero slider, AppleCardsCarousel (Student life), Timeline, FocusCards, HeroParallax, AnimatedTestimonials, LinkPreview, Tabs (Holidays) |

> **Note:** `img-slider-1.jpeg`, `img-slider-2.jpeg`, `img-slider-3.jpeg` are referenced in code but are **currently NOT present in the `/public/images/` folder on disk** — only the subfolder assets exist. **These 3 files must be added** for the hero slider, carousels, and timeline to render images.

### 7.3 Classroom Subfolder
Path: `/public/images/classroom/`

| File | Format |
|------|--------|
| `classroom-2.png` | PNG |
| `computers.webp` | WebP — computer lab |
| `labs.jpeg` | JPEG — science lab |
| `noraml class room.jpg` | JPG — regular classroom |

### 7.4 Poster / Events Subfolder
Path: `/public/images/poster/`

| File | Format |
|------|--------|
| `cultural.png` | PNG — cultural event poster |
| `events-1.png` | PNG — general events poster |
| `sports.png` | PNG — sports event poster |
| `student-voice-2.png` | PNG — student voice |
| `student-voice.png` | PNG — student voice |

### 7.5 School Subfolder
Path: `/public/images/school/`

| File | Format |
|------|--------|
| `school-1.png` | PNG — school building 1 |
| `school-2.png` | PNG — school building 2 |
| `school-3.png` | PNG — school building 3 |

### 7.6 Teachers Subfolder
Path: `/public/images/teachers/`

| File | Format |
|------|--------|
| `principal.png` | PNG — principal photo |
| `teacher.png` | PNG — teacher photo |

### 7.7 Remote Images Allowed (next.config)
Configured in [next.config.ts](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/next.config.ts#L8-L35):
- `assets.aceternity.com` — Aceternity demo assets
- `www.aceternity.com` — Aceternity assets
- `api.microlink.io` — Link preview thumbnails (not used; static previews used instead)
- `res.cloudinary.com` — Cloudinary CDN
- `images.unsplash.com` — Unsplash (currently used by `LayoutGridDemo` for placeholder bento images)

### 7.8 Placeholder Content — Images to Replace
| Component | Current placeholder | Action needed |
|-----------|--------------------|---------------|
| `WobbleCardDemo` | `/linear.webp` (2 cards) | Replace with school graphics |
| `LayoutGridDemo` | 4 Unsplash URLs (houses/rivers) | Replace with school campus photos |
| `img-slider-1/2/3.jpeg` | Missing files | **Must be added** to `/public/images/` |

---

## 8. Reusable Components

### 8.1 `<Preloader />` — [components/preloader.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/components/preloader.tsx)
- Fixed full-screen overlay, cream radial gradient background
- **BHS logo** (bhs-logo.jpeg) with ring + shadow
- Micro-label: "BARAMOHANPUR HIGH SCHOOL" (uppercase, gold, tracking 0.38em)
- **Cycling multilingual welcome word:** English → Bengali ("স্বাগতম") → French ("Bienvenue") → Japanese ("ようこそ") — cycles every 320ms
- Bottom gradient divider line animation
- Auto-dismisses after ~2.8s (upward slide exit)
- Session-storage: skips on subsequent page loads within same tab session

### 8.2 `<EnquiryForm />` — [components/enquiry-form.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/components/enquiry-form.tsx)
Props: `{ title?, description?, className? }`, has CSS `#enquiry` anchor id.

**Form Fields:**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Full name | `text` | ✅ | `autoComplete="name"` |
| Phone number | `tel` | ✅ | `autoComplete="tel"` |
| Email | `email` | ✅ | `autoComplete="email"` |
| Enquiry type | `select` | ✅ | Options: Admission (default), General enquiry, Events & programmes, Certificates & documents, Other |
| Student name | `text` | ❌ | Optional |
| Message | `textarea` (rows=5) | ✅ | min-h-[120px] |

**States:**
- `idle` → shows form, submit button: navy bg
- `submitting` (700ms timeout) → button: disabled "Sending…"
- `success` → animated swap: navy checkmark circle + "Enquiry received" confirmation + "Send another enquiry" reset link
- **Frontend-only currently** — code comment says: *"Front-end only for now — wire to email/API later"*

### 8.3 `<SchoolGlories />` — [components/school-glories.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/components/school-glories.tsx)
Warm cream section with radial gold glow. **4 feature cards** (grid responsive):
1. **Student Life** → `/about` (blue accent)
2. **Achievements** → `/events` (amber accent)
3. **Academics** → `/about` (emerald accent)
4. **Admissions** → `/enquiry` (gold accent)

Each card: top gradient bar → rounded icon badge → h3 → p → "Explore →" hover reveal.

### 8.4 `<SchoolVisionSection />` — [components/school-vision-section.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/components/school-vision-section.tsx)
Two-column flex (row on md+), with left/right motion slide-in:
- **Left:** "Our Heritage" eyebrow → h2 "Where tradition meets tomorrow" → 3 stats (50+ Years · 10K+ Alumni · 100% Dedication) each with colored large number + caption
- **Right:** 4:3 rounded Next.js `Image` fill (`/images/img-slider-2.jpeg`) + gradient overlay + floating gold accent bar behind

### 8.5 `<SiteFooter />` — [components/site-footer.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/components/site-footer.tsx)
Dark ink (`#0b1220`) background with navy + gold radial gradients. **4-column grid (lg+):**

| Column | Content |
|--------|---------|
| 1 — Brand | Logo + school name, 1-line mission, 3 social icons (Facebook / Instagram / YouTube — `href="#"`), **gold "Enquire Now →" CTA button** |
| 2 — Quick links | Home, About Us, School Events, Notices, Contact Us |
| 3 — Explore | Enquire Now, Admission enquiry, Notices & updates, Campus life |
| 4 — Visit & reach us | Address (MapPin), Phone (tel: link), Email (mailto: link) — each with gold icons |

Bottom bar: © year auto-updates + "Knowledge · Character · Community" tagline.

### 8.6 `<AppShell />` — [components/app-shell.tsx](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/components/app-shell.tsx)
The layout engine. Wraps every page (`layout.tsx`):
1. **Lenis smooth scroll** — `duration: 1.2`, `smoothWheel: true`
2. **Preloader** — AnimatePresence-controlled, session-storage aware
3. **Navbar** — imported from `app/navbar.tsx`
4. **AnimatePresence route transitions** — keyed by pathname, 0.55s fade
5. **IntersectionObserver reveal** — adds `.is-revealed` class to main sections on entry (see §6.4)
6. **`<SiteFooter />`** — always appended

---

## 9. Aceternity UI Components Used

All base components in `/components/ui/` with `-demo.tsx` wrappers providing school-specific data.

| UI Component | Demo Wrapper | Key Props / Data |
|-------------|--------------|-------------------|
| `ImagesSlider` | `images-slider-demo.tsx` | 3 images, Ken Burns, centered CTA |
| `WobbleCard` | `wobble-card-demo.tsx` | 3 cards, various col-spans & colors |
| `AppleCardsCarousel` + `Card` | `apple-cards-carousel-demo.tsx` | 6 cards with `Story` inner content |
| `Timeline` | `timeline-demo.tsx` | 3 chapters (Today/Growth/Highlights), with 2×2 image grids each |
| `InfiniteMovingCards` | `infinite-moving-cards-demo.tsx` | direction="right", speed="slow", variant="light", 5 testimonials |
| `MacbookScroll` | `macbook-scroll-demo.tsx` | Laptop scroll-mockup, gradient title |
| `Cover` | `cover-demo.tsx` | Text spotlight effect on "Baramohanpur student" |
| `LinkPreview` | `link-preview-demo.tsx` | `isStatic` mode with local `imageSrc` previews (4 links) |
| `LayoutGrid` | `layout-grid-demo.tsx` | 4 bento cards (currently placeholder content) |
| `AnimatedTestimonials` | `animated-testimonials-demo.tsx` | 5 testimonials, `autoplay` |
| `FocusCards` | `focus-cards-demo.tsx` | 6 hover-focus gallery cards |
| `LampContainer` (Lamp) | `lamp-demo.tsx` | Spotlight-down hero effect on About & Events pages |
| `HeroParallax` | `hero-parallax-demo.tsx` | 15 parallax event tiles (multi-row, deep parallax) |
| `Tabs` (Radix based) | `tabs-demo.tsx` | 5 notice tabs (Admissions/Exams/Holidays/Results/General) |
| `resizable-navbar` suite | `app/navbar.tsx` | `Navbar`, `NavBody`, `NavItems`, `NavbarLogo`, `NavbarButton`, `MobileNav`, `MobileNavHeader`, `MobileNavToggle`, `MobileNavMenu` |
| `Cards` (stacked spring) | `blocks/interface-crafts-cards.tsx` | 5 fanned event cards with spring config |

---

## 10. Setup & Development

### Prerequisites
- Node.js 18.17+ (Next.js 16 requirement)
- npm (or pnpm / yarn / bun — npm lockfile present)

### Installation

```bash
cd "C:\Users\avoys\Desktop\Freelance Project\bhs"
npm install
```

### Running the Dev Server

```bash
npm run dev
```

Then open: **http://localhost:3000**

Uses **Turbopack** (enabled in [next.config.ts](file:///c:/Users/avoys/Desktop/Freelance%20Project/bhs/next.config.ts#L5-L7)) for fast HMR.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 11. Scripts & Commands

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js dev server (Turbopack) on port 3000 |
| `npm run build` | Production build to `.next/` |
| `npm run start` | Serve the built app in production mode |
| `npm run lint` | Run ESLint (next/core-web-vitals config) |

---

## 12. Configuration Files

| File | Role |
|------|------|
| `next.config.ts` | Next.js + Turbopack root + remote image hostnames |
| `tsconfig.json` | TypeScript config (path alias: `@/*` → `./*`) |
| `postcss.config.mjs` | PostCSS (Tailwind v4 plugin) |
| `components.json` | shadcn config: `style: radix-nova`, aliases, Aceternity + shadcnspace + tailark registries |
| `eslint.config.mjs` | Flat ESLint config (Next.js 16 pattern) |
| `package.json` | Dependencies + scripts (§2 + §11) |
| `AGENTS.md` | Contains dev-agent rule about Next.js version differences |

---

## 13. Known Notes for Developers

### ⚠️ Missing Required Images
The following files are **referenced throughout the code** but are **NOT present on disk** in `/public/images/`. **You must supply them:**

1. `/public/images/img-slider-1.jpeg` — Campus / assembly
2. `/public/images/img-slider-2.jpeg` — Classroom / teaching
3. `/public/images/img-slider-3.jpeg` — Student life / activities

Without these, the hero slider, Apple cards carousel, timeline, focus cards, hero parallax, testimonials, tabs content, school-vision section, macbook scroll, and link previews will all show **broken images**.

### ⚠️ Placeholder Content to Replace
| Component | Current placeholder | Suggested replacement |
|-----------|--------------------|----------------------|
| `WobbleCardDemo` | "Gippity AI" marketing copy + `/linear.webp` | School-specific wobble cards (e.g. Admissions / Campus life / Results) |
| `LayoutGridDemo` | "House in the woods" / "rivers" Unsplash content | 4 school campus bento items (e.g. Building, Classroom, Playground, Library) |
| `linear.webp` | Missing from `/public/` | Delete references or replace with real school imagery |

### ⚠️ Contact Placeholder Data
| Field | Current Value | Replace With |
|-------|---------------|---------------|
| Phone (navbar + footer + contact) | `+91 XXXXX XXXXX` | Real school phone |
| Email | `office@baramohanpurhs.edu.in` | Verify real address |
| Address | "Baramohanpur, West Bengal" | Full postal address |
| Social icon links | `href="#"` (×3) | Real Facebook / Instagram / YouTube URLs |

### ⚠️ Enquiry Form — Frontend Only
The form in `enquiry-form.tsx` uses `setTimeout(700ms)` for a fake submit. To make it real:
- Wire the `handleSubmit` to an API route (e.g. `app/api/enquiry/route.ts`)
- Or integrate with an email service (Resend, Nodemailer, Formspree, etc.)
- Add server-side validation + honeypot / rate-limiting

### ⚠️ Next.js 16 Breaking Changes
The project contains a rule in `AGENTS.md`:
> "This is NOT the Next.js you know. Read relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices."

Review those docs before adding APIs, server actions, or middleware.

### Good to Know
- **Path aliases:** `@/components`, `@/lib`, `@/hooks`, `@/app` → map to the project root
- **All pages use `<main className="overflow-x-hidden">`** as wrapper convention
- Images slider uses `<img>` tags (not Next.js Image) for the 3 sliding hero photos — consider swapping to `next/image` for optimization if you add explicit `width/height`
- Preloader triggers **body overflow: hidden** while active to prevent scroll
- The `cn()` utility in `lib/utils.ts` uses `clsx` + `tailwind-merge` for className composition

---

**© Baramohanpur High School — Knowledge · Character · Community**
