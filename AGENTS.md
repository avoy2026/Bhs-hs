# MASTER RULE FOR ALL 6 PROMPTS

You are modifying an **existing Next.js 16 + App Router + TypeScript + Tailwind CSS v4 school website** for **Baramohanpur High School**.

The existing project already has working:

* Pages
* Components
* Aceternity UI components
* Framer Motion
* GSAP
* Lenis
* Responsive navigation
* Preloader
* Footer
* Forms
* Animation infrastructure
* Image assets

## NON-NEGOTIABLE RULES

1. **Do NOT rebuild the project from scratch.**
2. **Do NOT change the overall information architecture unnecessarily.**
3. Preserve existing working routes and functionality.
4. Preserve existing dependencies unless there is a real technical reason to change something.
5. Improve the existing implementation instead of replacing everything with a new template.
6. Reuse existing components whenever possible.
7. Refactor only when it improves consistency or solves a real problem.
8. Do not remove existing animations simply because you prefer a different library.
9. Do not introduce unnecessary libraries.
10. Do not create duplicate components for things that can be reused.
11. Keep the website fully responsive.
12. Every phase must be tested with:

* `npm run lint`
* `npm run build`

13. Fix errors caused by your changes before finishing each phase.
14. Do not leave placeholder/demo content such as `"Gippity AI"`, `"House in the woods"`, random Unsplash houses, or generic Aceternity demo copy.
15. Use the actual school identity and the provided assets.
16. Do not invent official school facts where they are not available.
17. Use `[PLACEHOLDER]` where real school-specific information is still required.
18. Do not change the overall route structure unless the current request explicitly asks for a new page.
19. Keep accessibility and reduced-motion support.
20. Keep Server Components as the default and use `"use client"` only when interaction requires it.

---

# PROMPT 1 — DESIGN AUDIT + GLOBAL VISUAL REDESIGN

## OBJECTIVE

First, audit the complete existing website and establish a **professional, consistent school-brand design system** without changing the site's overall structure.

Do NOT start redesigning every page separately yet.

This phase establishes the foundation that all later phases will use.

---

## STEP 1 — AUDIT THE EXISTING PROJECT

Before making changes, inspect:

* `app/`
* `components/`
* `components/ui/`
* `blocks/`
* `public/images/`
* `app/globals.css`
* `app/layout.tsx`
* `app/navbar.tsx`
* all current pages
* current animation system
* current image references
* all placeholder/demo content

Identify:

* duplicated styles
* inconsistent colors
* inconsistent typography
* excessive effects
* poor spacing
* weak visual hierarchy
* placeholder content
* broken image references
* components that can be reused
* sections that currently feel like Aceternity demos instead of a real school site

Do not rewrite the project during the audit.

---

# STEP 2 — CREATE A REAL SCHOOL BRAND SYSTEM

The website should visually communicate:

**Knowledge · Character · Community**

It should feel:

* Established
* Academic
* Warm
* Trustworthy
* Professional
* Modern
* Indian school oriented
* Human
* Family friendly

The site must NOT feel like a SaaS website.

---

# STEP 3 — COLOR SYSTEM

Create a refined school palette using:

### Primary

Deep Navy

### Secondary

Royal/Professional Blue

### Accent

Academic Gold / Warm Yellow

### Supporting

White
Warm Ivory
Very Soft Blue
Light Grey

The exact shades should be selected professionally by you.

Requirements:

* excellent contrast
* restrained use of gold
* no neon colors
* no excessive gradients
* no random colors
* no dark website overload

Use CSS variables/tokens in `globals.css`.

Example concept:

```css
--brand-navy
--brand-blue
--brand-gold
--brand-cream
--brand-mist
--brand-white
--brand-ink
```

Do not simply add colors individually throughout components.

---

# STEP 4 — TYPOGRAPHY

Choose a professional typography pairing specifically for a school.

The typography should communicate:

**Academic prestige + modern clarity**

Use a display font for:

* large headings
* page titles
* important statements

Use a clean sans-serif for:

* navigation
* body
* buttons
* metadata
* forms

Do NOT use handwritten typography for long content.

Create a consistent responsive scale:

* eyebrow
* H1
* H2
* H3
* body
* small text
* buttons

Use `clamp()` where appropriate.

---

# STEP 5 — PAGE HEADING STYLE

The heading style should be inspired by the uploaded visual reference:

A clean title such as:

**About Us**

with a subtle **hand-drawn/paint-like underline accent** beneath or beside it.

Important:

Do NOT literally copy the uploaded sample.

Create a reusable heading component such as:

```text
PageSectionHeading
```

Possible API:

```tsx
<PageSectionHeading
  eyebrow="Our Story"
  title="About Us"
  description="..."
/>
```

The underline/accent should be subtle, elegant and consistent across the site.

Use it for:

* page titles
* section titles
* About
* Academics
* Admissions
* Gallery
* Events
* Contact
* FAQ

Do not put the underline on every tiny heading.

---

# STEP 6 — GLOBAL SPACING

Create consistent vertical rhythm.

Sections should breathe.

Avoid:

* crowded sections
* giant empty areas
* inconsistent padding
* random card spacing

Use a consistent max-width container.

All pages should feel like they belong to one system.

---

# STEP 7 — NAVBAR IMPROVEMENT

Keep the existing navbar behavior but make the final design more professional.

Existing structure:

Home
About Us
Events
Notices
Contact Us
Enquire Now

Prepare the navbar architecture so future phases can add:

* Gallery

and About Us submenu.

Desktop:

* elegant
* clean
* active indicator
* clear CTA
* subtle glass/blur only if appropriate

Mobile:

* proper menu
* smooth animation
* accessible
* no overflow

Do not overdecorate.

---

# STEP 8 — FOOTER IMPROVEMENT

Keep the footer structure but improve:

* hierarchy
* spacing
* typography
* link grouping
* social icons
* CTA
* contact information
* mobile behavior

It should feel like a real institutional footer.

---

# STEP 9 — GLOBAL MOTION SYSTEM

Keep the existing Lenis/Framer/GSAP system.

Refine animations so they are:

* smoother
* shorter
* more purposeful

Use:

* fade-up
* subtle slide
* image reveal
* staggered cards
* hover movement
* page transitions

Avoid over-animation.

Respect:

`prefers-reduced-motion`.

---

# STEP 10 — IMAGE SYSTEM

Use the actual assets in:

```text
/public/images/
```

Inspect:

```text
/public/images/classroom/
/public/images/poster/
/public/images/school/
/public/images/teachers/
```

and the root assets.

Replace obvious demo imagery such as:

* Unsplash house images
* random demo landscapes
* generic Aceternity assets
* irrelevant placeholder images

Keep the school's own photos central to the design.

---

# STEP 11 — IMAGE TEXT PROBLEM

Some of the school images/posters may contain text embedded inside the image.

For images used behind interface text:

Do NOT allow embedded image text to compete with website content.

Use one or more of:

* better `object-position`
* cropping
* controlled dark/soft overlay
* blur in the specific text area
* gradient overlay
* lower image opacity
* image masking

The objective is:

**the website's HTML text must remain readable and dominant.**

Do not destroy image quality unnecessarily.

---

# STEP 12 — FINAL TASK FOR PHASE 1

Implement only the global design-system improvements.

Do not redesign every page yet.

Then run:

```bash
npm run lint
npm run build
```

Fix all issues.

Finish only when the global system is stable.

---

# PROMPT 2 — HOMEPAGE PROFESSIONAL REDESIGN

## OBJECTIVE

Now improve the existing Homepage while preserving its current section order and storytelling architecture.

The Homepage should feel like the official website of a respected school.

Do NOT remove the important existing sections just to create a simpler landing page.

---

# 1. HERO IMAGE SLIDER

Use the actual school images from:

```text
/public/images/
```

Especially:

* school images
* school building images
* campus images
* classroom/student posters where appropriate

Create a polished image slider at the top.

Keep the current slider concept, but improve:

* cropping
* image positioning
* readability
* transitions
* typography
* controls
* mobile behavior

Use slow premium motion.

---

# 2. EMBEDDED IMAGE TEXT

Some existing school photos/posters contain text.

When they appear as hero backgrounds:

* hide or visually suppress the embedded text
* use cropping/object-position
* use gradient overlays
* use controlled haze
* use image positioning

Do not allow the original image's typography to compete with:

**Baramohanpur High School**

and the hero message.

The actual website copy must remain HTML content.

---

# 3. HERO COPY

Use school-specific copy around:

**Where Knowledge Finds Character**

Supporting idea:

Education should develop:

* knowledge
* confidence
* discipline
* character
* community

Keep the copy concise.

Do not create huge paragraphs in the hero.

---

# 4. HERO CTA

Primary:

**Enquire Now**

Secondary:

**Explore Our School**

Make CTA styles professional and consistent with Prompt 1.

---

# 5. PRINCIPAL FEATURE SECTION

Add a visually strong section using:

```text
/public/images/teachers/principal.png
```

This should be one of the most important sections on the homepage.

Use:

### Layout

Image on one side
Message on the other

Desktop:

50/50 or approximately 45/55.

Mobile:

image → text

Use a strong heading:

**A Message from the Principal**

Add a short English message.

Optionally provide Bengali underneath if appropriate.

Add:

**[Principal Name]**
Principal

Use quotation marks or a subtle editorial quotation treatment.

Do not turn this into a generic testimonial card.

It should feel like an institutional leadership statement.

---

# 6. SCHOOL INTRODUCTION

Improve the existing school introduction.

Use:

* school image
* short paragraph
* important facts
* CTA

Use left-image/right-text or right-image/left-text.

Avoid excessive cards.

---

# 7. SCHOOL GLORIES

Improve the current four-feature section.

Use school-specific themes:

* Student Life
* Academic Excellence
* Student Achievements
* Admissions

Use actual school content and imagery.

Remove generic Aceternity-demo language.

---

# 8. ACADEMIC / CAMPUS STORYTELLING

Use alternating layouts:

```text
Image → Text
Text → Image
Image → Text
```

Suggested content:

### Learning Spaces

Use classroom asset.

### Campus Life

Use campus/school asset.

### Student Growth

Use student poster asset.

### Activities

Use sports/cultural poster assets.

This will make the page feel like an actual school brochure.

---

# 9. STUDENT ACHIEVEMENTS

Use:

```text
/public/images/poster/events-1.png
```

Create a strong achievement section.

Include:

* awards
* academic performance
* sports
* cultural success
* student participation

Do not invent numerical achievements.

Use placeholders if exact figures are unavailable.

---

# 10. STUDENT VOICES

Use the existing:

```text
/public/images/poster/student-voice.png
/public/images/poster/student-voice-2.png
```

Create a student testimonial section.

It should be separate from the principal section.

Show:

* Student name
* Class
* Quote
* Photo/poster

Make it reusable.

---

# 11. PARENT REVIEWS + TEACHER TESTIMONIALS

Do not mix all testimonials together.

Create reusable data-driven structures for:

```text
Student Testimonials
Parent Reviews
Teacher Testimonials
Alumni Voices
```

Use a clean carousel or card system.

---

# 12. CULTURAL + SPORTS SECTION

Use:

```text
/public/images/poster/cultural.png
/public/images/poster/sports.png
```

Create a visually attractive two-column feature:

### Cultural Life

Image + short text + Explore

### Sports & Physical Development

Image + short text + Explore

This section should be image-led, not text-heavy.

---

# 13. HISTORY / HERITAGE

Keep the existing timeline concept.

Improve the timeline using actual school history.

Use the logo/history assets where appropriate.

Do not invent dates beyond information already available.

---

# 14. FINAL HOMEPAGE CTA

End with a strong but simple CTA:

**Begin Your Journey With Baramohanpur High School**

Buttons:

**Enquire Now**

**Contact Us**

---

# 15. REMOVE DEMO CONTENT

Remove or replace:

* Gippity AI
* generic houses
* generic rivers
* irrelevant placeholder imagery
* generic Aceternity storytelling copy

Everything on the homepage should clearly belong to Baramohanpur High School.

---

# 16. FINAL HOMEPAGE TEST

Check:

* desktop
* tablet
* mobile
* image loading
* slider
* CTA links
* animations
* accessibility

Then run:

```bash
npm run lint
npm run build
```

---

# PROMPT 3 — ABOUT US + SUBNAVIGATION SYSTEM

## OBJECTIVE

Improve `/about` without changing the overall About page concept.

Additionally, introduce a **professional About Us sub-navigation system**.

---

# 1. ABOUT MAIN NAVIGATION

When the user hovers/clicks **About Us**, provide a submenu containing:

### About Us

Main overview

### Our Team

Leadership and teachers

Route:

`/about/team`

### Timeline

School history

Route:

`/about/timeline`

### Collaboration

School partnerships/community collaboration

Route:

`/about/collaboration`

### Vision

School vision and philosophy

Route:

`/about/vision`

The submenu must work on:

* desktop
* mobile

Desktop:

Elegant dropdown/mega-menu style.

Mobile:

Expandable accordion-style submenu.

---

# 2. ABOUT HERO

Replace the current overly technical Aceternity-style hero feeling with a more institutional design.

Heading:

**About Us**

Subheading:

A short sentence about the school's identity.

Use the reusable heading style created in Prompt 1.

---

# 3. OUR STORY

Use:

* school building image
* actual history
* short institutional story

Layout:

image + text

Add a small highlighted fact.

---

# 4. OUR VISION

Create a dedicated visual section.

Use:

* student image
* school image
* elegant typography
* short vision statement

Do not make it a giant wall of text.

---

# 5. OUR VALUES

Use a refined visual list:

* Knowledge
* Character
* Discipline
* Community
* Curiosity
* Responsibility

Do not make 10 generic cards.

Use 4–6 strong principles.

---

# 6. OUR TEAM PAGE

Create:

`/about/team`

Show:

### Principal

Use:

```text
/public/images/teachers/principal.png
```

### Teachers

Use:

```text
/public/images/teachers/teacher.png
```

Keep structure ready for future teacher photos.

Each teacher card should support:

* name
* designation
* subject
* short message
* optional quote

Make the component reusable.

---

# 7. TIMELINE PAGE

Create:

`/about/timeline`

Use the existing timeline component but improve its visual hierarchy.

Show school milestones only from verified/project-provided information.

Use images from:

* school
* achievements
* campus

Do not invent historical claims.

---

# 8. COLLABORATION PAGE

Create:

`/about/collaboration`

Explain the school's relationship with:

* parents
* community
* alumni
* educational initiatives
* local activities

Do not invent named external partnerships.

Use generic headings with `[DETAILS TO BE ADDED]` where necessary.

---

# 9. VISION PAGE

Create:

`/about/vision`

Make this visually stronger.

Use a hero image plus:

**Our Vision**

Then:

* educational excellence
* character building
* holistic development
* responsible citizenship
* future readiness

Also include:

**Our Mission**

with 4–5 concise points.

Use visual storytelling rather than a giant text block.

---

# 10. ABOUT PAGE NAVIGATION EXPERIENCE

The user should immediately understand:

```text
About Us
├── Overview
├── Our Team
├── Timeline
├── Collaboration
└── Vision
```

Do not create confusing nested navigation.

---

# 11. FINAL TEST

Verify all About routes.

Run:

```bash
npm run lint
npm run build
```

Fix broken navigation and layout problems.

---

# PROMPT 4 — GALLERY + EVENTS + VISUAL STORYTELLING

## OBJECTIVE

Expand the website's visual storytelling while maintaining the existing design language.

---

# 1. ADD GALLERY TO MAIN NAVBAR

Add:

**Gallery**

Route:

`/gallery`

Main navbar becomes:

```text
Home
About Us
Events
Notices
Gallery
Contact Us
Enquire Now
```

Keep the existing navbar behavior.

---

# 2. GALLERY PAGE

Create `/gallery`.

The page should include categories:

* Campus
* Classrooms
* Students
* Cultural Events
* Sports
* Achievements
* Teachers

Use actual assets.

Asset sources:

```text
/public/images/school/
/public/images/classroom/
/public/images/poster/
/public/images/teachers/
/public/images/poster/events-1.png
```

---

# 3. GALLERY UI

Use a premium masonry/editorial layout.

Features:

* category filters
* hover
* lightbox
* full-screen preview
* keyboard support
* mobile swipe
* lazy loading

Do not make it look like a generic photo gallery.

Use variable image sizes.

---

# 4. EVENTS PAGE

Preserve the existing `/events` route and its conceptual purpose.

Improve it using actual school-related visuals.

Categories:

* Cultural
* Sports
* Academic
* Celebration
* Student Activities

Use:

```text
poster/cultural.png
poster/sports.png
poster/events-1.png
```

Use these as visual feature assets rather than burying them inside cards.

---

# 5. EVENTS HERO

Use a clean heading:

**School Events**

Subheading:

**Moments that become memories.**

Then use an image-led event layout.

---

# 6. CULTURAL EVENT FEATURE

Create a beautiful split section:

image left → content right

Image:

`poster/cultural.png`

Use very little text.

---

# 7. SPORTS FEATURE

Create the same structure:

content left → image right

Image:

`poster/sports.png`

Again, keep copy concise.

---

# 8. STUDENT ACHIEVEMENT VISUAL

Use:

Existing school and student activity imagery from `/public/images/`

Create a full-width achievement highlight.

Use:

* image
* achievement title
* category
* short description

No fake statistics.

---

# 9. TOP IMAGE SLIDER IMPROVEMENT

The school building images should be used intelligently across the website.

Do not duplicate the same image in every section.

Use them as:

* gallery images
* hero backgrounds
* section images
* timeline images
* hover previews

Choose images based on context.

---

# 10. MOBILE GALLERY

On mobile:

* 2-column or single-column layout
* touch-friendly filters
* full-screen image viewer
* no horizontal overflow

---

# 11. TEST

Run:

```bash
npm run lint
npm run build
```

Check every image path.

---

# PROMPT 5 — FAQ + TESTIMONIAL SYSTEM + ADMISSIONS / CONTACT POLISH

## OBJECTIVE

Make the website more useful for parents by improving informational and trust-building sections.

---

# 1. CREATE FAQ PAGE

Create:

`/faq`

Add it to the navigation or a clearly visible footer/explore area.

FAQ categories:

### Admissions

* admission process
* required documents
* eligibility
* application steps

### Academics

* curriculum
* assessment
* academic support

### Student Life

* activities
* sports
* cultural programmes
* clubs

### General

* office hours
* contact
* campus visit

Use an animated accordion.

Do NOT invent official policies.

Use generic placeholder answers where school-specific confirmation is needed.

---

# 2. FAQ HOMEPAGE PREVIEW

Also create a compact reusable:

```text
FAQPreview
```

component.

Place it near the end of:

* Homepage
* Admissions

Show 4–6 popular questions and:

**View All FAQs →**

---

# 3. STUDENT TESTIMONIAL PAGE

Create:

`/testimonials/students`

Use student voices.

Support:

* photo
* name
* class
* quote
* optional achievement

Use:

```text
poster/student-voice.png
poster/student-voice-2.png
```

when appropriate.

---

# 4. PARENT TESTIMONIAL PAGE

Create:

`/testimonials/parents`

Support:

* parent name
* relationship
* child's class
* review
* photo/avatar

Do not invent real names.

Use placeholders where necessary.

---

# 5. TEACHER TESTIMONIAL PAGE

Create:

`/testimonials/teachers`

Use:

```text
teachers/teacher.png
```

and future teacher assets.

Support:

* teacher name
* designation
* subject
* quote

---

# 6. COMMON TESTIMONIAL COMPONENT

Create one reusable base component:

```text
TestimonialCard
```

Data-driven.

It should work for:

```text
student
parent
teacher
alumni
```

Possible model:

```ts
type Testimonial = {
  name: string
  role: string
  category: "student" | "parent" | "teacher" | "alumni"
  quote: string
  image?: string
  className?: string
}
```

Do not create four separate testimonial card implementations.

---

# 7. TESTIMONIAL HUB

Optional main route:

`/testimonials`

with tabs:

**Students**
**Parents**
**Teachers**
**Alumni**

This is preferred over four visually disconnected pages if the design remains simple.

---

# 8. CONTACT PAGE POLISH

Keep `/contact`.

Improve:

* office information
* enquiry CTA
* form layout
* map placeholder
* mobile spacing
* accessibility

Do not create fake phone/email information.

Use current project placeholders.

---

# 9. ENQUIRY PAGE POLISH

Keep `/enquiry`.

Improve:

* form styling
* validation
* states
* success screen
* mobile usability
* visual hierarchy

Keep it clearly separate from the Contact page.

---

# 10. ADMISSIONS EXPERIENCE

Wherever admissions information appears:

use clear user paths:

```text
Learn about admissions
      ↓
FAQ
      ↓
Enquire Now
```

Avoid forcing users through multiple confusing pages.

---

# 11. FOOTER EXPANSION

Update footer links to include:

### Explore

* Gallery
* Events
* Notices
* FAQ
* Testimonials

### About

* Our Team
* Timeline
* Collaboration
* Vision

This makes the new content discoverable.

---

# 12. TEST

Run:

```bash
npm run lint
npm run build
```

Check every new route.

---

# PROMPT 6 — FINAL POLISH + MOTION + RESPONSIVENESS + PRODUCTION QUALITY

## OBJECTIVE

This is the final professional polish phase.

DO NOT redesign the website again.

Instead, make the complete website feel like **one finished institutional product**.

---

# 1. FULL SITE CONSISTENCY AUDIT

Review every route:

```text
/
/about
/about/team
/about/timeline
/about/collaboration
/about/vision
/events
/notices
/gallery
/faq
/testimonials
/testimonials/students
/testimonials/parents
/testimonials/teachers
/contact
/enquiry
```

Check that all pages share:

* typography
* colors
* spacing
* buttons
* headings
* cards
* forms
* navigation
* footer
* motion behavior

---

# 2. REMOVE ALL REMAINING TEMPLATE FEEL

Search the project for:

* Gippity
* House in the woods
* generic demo copy
* lorem ipsum
* random Unsplash content
* Aceternity demo titles
* placeholder event titles
* placeholder testimonials
* unnecessary gradients

Replace everything appropriate.

No page should look like a demo.

---

# 3. REFINE PAGE HEADINGS

Ensure every page uses the same professional heading language.

Example:

### About Us

Small eyebrow:

**OUR STORY**

Title:

**About Us**

Short description.

Then the subtle underline/accent introduced in Prompt 1.

Apply consistently to:

* Gallery
* Events
* FAQ
* Contact
* Admissions
* Testimonials
* Team
* Timeline
* Collaboration
* Vision

---

# 4. IMAGE + TEXT RHYTHM

Audit the entire site.

Use a mixture of:

```text
Image → Text
Text → Image
Image → Text
```

Avoid:

```text
Text → Text → Text → Text
```

Create breathing room between image-led and text-led sections.

The website should feel editorial and human.

---

# 5. PRINCIPAL SECTION FINAL POLISH

Ensure the homepage principal section is one of the visual highlights.

Use:

```text
teachers/principal.png
```

Create:

Image
+
Principal quote
+
Name
+
Designation

Use elegant quotation styling.

Make sure it does not look like a normal testimonial.

---

# 6. SLIDER FINAL POLISH

The top school image slider must:

* be visually clean
* hide distracting embedded image text where necessary
* have readable HTML overlay text
* use smooth Ken Burns/parallax movement
* have accessible controls
* work on mobile
* not create layout shift

Do not over-animate.

---

# 7. MOTION SYSTEM

Use a consistent motion language.

### Page transitions

Fade + slight vertical movement.

### Section entrance

Opacity + 20–30px movement.

### Images

Subtle scale on hover.

### Buttons

Small directional icon movement.

### Cards

Subtle elevation.

### Testimonials

Smooth slide/fade.

### Navigation

Smooth open/close.

No element should aggressively bounce or fly around.

---

# 8. SCROLL EXPERIENCE

Keep Lenis smooth scrolling.

Ensure:

* no double-scroll
* no scroll-lock bugs
* mobile remains native-feeling
* reduced motion works

---

# 9. RESPONSIVE AUDIT

Test manually at:

```text
320
375
390
430
768
834
1024
1280
1440
1920
```

Check every page.

Fix:

* overflow
* clipped headings
* huge whitespace
* broken image crop
* oversized buttons
* mobile dropdown
* horizontal carousels
* footer stacking
* forms

---

# 10. ACCESSIBILITY

Check:

* color contrast
* alt attributes
* keyboard focus
* buttons
* forms
* mobile menu
* modal/lightbox
* accordions
* carousel controls

Respect:

`prefers-reduced-motion`

---

# 11. PERFORMANCE

Use Next.js best practices.

Where suitable:

* `next/image`
* lazy loading
* correct image sizes
* optimized assets
* Server Components
* client components only where necessary

Do not optimize by destroying visual quality.

---

# 12. SEO

Every page should have meaningful metadata.

Examples:

Home:

**Baramohanpur High School | Knowledge · Character · Community**

About:

**About Baramohanpur High School**

Gallery:

**School Gallery | Baramohanpur High School**

Events:

**School Events | Baramohanpur High School**

FAQ:

**Frequently Asked Questions | Baramohanpur High School**

Use meaningful descriptions.

---

# 13. FINAL NAVIGATION STRUCTURE

The final navigation should feel simple.

Desktop:

```text
Home

About Us ▼
  Overview
  Our Team
  Timeline
  Collaboration
  Vision

Events

Notices

Gallery

Contact Us

Enquire Now
```

Do NOT add too many top-level items.

---

# 14. FINAL FOOTER INFORMATION ARCHITECTURE

### About

Overview
Our Team
Timeline
Collaboration
Vision

### Explore

Events
Gallery
Notices
FAQ
Testimonials

### Connect

Contact
Enquire Now

This should be easy to scan.

---

# 15. FINAL HOMEPAGE STORY

The homepage should now tell the following story:

```text
School identity
      ↓
Campus / first impression
      ↓
About the school
      ↓
Why families choose us
      ↓
Academic & student experience
      ↓
Principal's message
      ↓
Student achievements
      ↓
Student / Parent / Teacher voices
      ↓
Cultural & Sports life
      ↓
Heritage / Timeline
      ↓
FAQ / Admissions support
      ↓
Enquire Now
```

Do not change this storytelling structure dramatically.

---

# 16. FINAL QUALITY STANDARD

The website should look like:

**An authentic established Indian school website designed by a professional web studio.**

It should NOT look like:

* a SaaS landing page
* an AI demo
* an Aceternity showcase
* a generic template
* a portfolio project

The final impression should be:

> **Established. Trustworthy. Warm. Academic. Professional. Modern.**

---

# 17. FINAL CLEANUP

Before finishing:

* remove unused imports
* remove unused components only if they are truly obsolete
* remove obvious demo assets
* fix broken image paths
* fix console warnings
* fix hydration issues
* fix accessibility warnings
* fix TypeScript errors
* fix ESLint errors
* make sure all routes load

Run:

```bash
npm run lint
npm run build
```

If either fails, fix it before completing the task.

---

# 18. DO NOT CHANGE FUNCTIONALITY WITHOUT REASON

Do not randomly modify:

* enquiry behavior
* preloader logic
* route architecture
* animation libraries
* Lenis implementation
* existing working forms

Only improve them when necessary.

---

# 19. FINAL PRINCIPLE

The website should be **clear first, beautiful second, animated third**.

Every design element must serve a purpose.

A parent should be able to quickly find:

* who the school is
* what it teaches
* what students achieve
* what campus life is like
* what parents/students/teachers say
* school history
* admissions information
* FAQs
* how to contact the school

At the same time, the website should feel visually premium and emotionally warm.

---

# FINAL INSTRUCTION

After all 6 phases are completed, do one final **visual consistency pass** across the entire application.

Do not rebuild the website.

Do not add unnecessary features.

Do not over-design it.

Take the existing Baramohanpur High School website and make it feel like a **real, trustworthy, well-established school institution with a modern digital presence**.

Use the actual school photography and posters from `/public/images/` wherever appropriate.

Make the website feel:

**Clear · Informative · Human · Academic · Premium · Responsive · Smooth · Authentic**
