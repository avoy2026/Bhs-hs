import ImagesSliderDemo from "@/components/images-slider-demo";
import WobbleCardDemo from "@/components/wobble-card-demo";
import SchoolGlories from "@/components/school-glories";
import StoryBlock from "@/components/story-block";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import LayoutGridDemo from "@/components/layout-grid-demo";
import PrincipalMessage from "@/components/principal-message";
import StudentAchievements from "@/components/student-achievements";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import CulturalSportsSection from "@/components/cultural-sports-section";
import TimelineDemo from "@/components/timeline-demo";
import FAQPreview from "@/components/faq-preview";
import FinalHomeCta from "@/components/final-home-cta";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import AcademicOverviewCards from "@/components/academic-overview-cards";

export const metadata = {
  title: "Baramohanpur High School | Knowledge Â· Character Â· Community",
  description:
    "Baramohanpur High School â€” an established neighbourhood school where every child is known by name, taught with patience, and prepared for a life of purpose.",
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <ImagesSliderDemo />
      <WobbleCardDemo />
      <SchoolGlories />
      <PrincipalMessage />
      <StoryBlock
        eyebrow="Learning spaces"
        title="Classrooms built for curiosity and calm."
        body="From Classes V to XII, our students learn across Arts, Science and Commerce, with 25 subjects including Artificial Intelligence, Agriculture, Computer Application and Education. We want every lesson to build understanding, confidence and the habit of asking meaningful questions."
        image="/images/05-ACADEMICS/classrooms/classroom-learning.webp"
        imageAlt="Classrooms at Baramohanpur High School"
        href="/about"
        hrefLabel="About our campus"
        accent="navy"
        facts={[
          { value: "V-XII", label: "Classes" },
          { value: "25", label: "Subjects" },
          { value: "3", label: "HS Streams" },
        ]}
      />
      <StoryBlock
        eyebrow="Campus life"
        title="A campus that feels familiar because it is lived in."
        body="Between first bell and last, Baramohanpur is full of small rituals that quietly shape a child. The walk between classrooms with friends, the rush of water during tiffin, the hand raised tentatively in a maths class â€” these are the moments that make a school."
        image="/images/02-HOMEPAGE/campus/campus-1.webp"
        imageAlt="Campus of Baramohanpur High School"
        href="/gallery"
        hrefLabel="See our gallery"
        accent="gold"
        reverse
      />
      <section className="overflow-hidden bg-[var(--brand-fog)]">
        <div className="page-shell pb-0 text-center">
          <p className="eyebrow mb-3">Our vision</p>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold text-[var(--brand-navy)] md:text-5xl">
            Growing learners who are ready for tomorrow.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
            We bring knowledge, character, confidence, and community together so
            every student can find their direction and contribute with purpose.
          </p>
        </div>
        <HeroParallaxDemo />
      </section>
      <AppleCardsCarouselDemo />
      <AcademicOverviewCards />
      <LayoutGridDemo />
      <StudentAchievements />
      <CulturalSportsSection />
      <TimelineDemo />
      <AnimatedTestimonialsDemo />
      <FAQPreview limit={6} />
      <FinalHomeCta />
    </main>
  );
}
