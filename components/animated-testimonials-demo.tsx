import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import PageSectionHeading from "@/components/page-section-heading";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "My daughter is not only scoring better — she stands a little taller. Teachers here notice the quiet children, and that has changed our home.",
      name: "Rina Banerjee",
      designation: "Guardian, Class VIII",
      src: "/images/school/school-3.png",
    },
    {
      quote:
        "I learned that discipline is not fear. It is showing up prepared, greeting a teacher, and finishing the work you promised yourself.",
      name: "Arjun Dey",
      designation: "Class X, Head Boy",
      src: "/images/classroom/classroom-2.png",
    },
    {
      quote:
        "Annual Day still feels like the heartbeat of this school. When the lights come up, you remember why we teach — for that look of pride.",
      name: "S. Mukherjee",
      designation: "Senior Teacher",
      src: "/images/poster/events-1.png",
    },
    {
      quote:
        "Years later I still remember the assembly ground. Baramohanpur gave me friends, a voice, and the habit of trying once more.",
      name: "Priya Ghosh",
      designation: "Alumna",
      src: "/images/school/school-2.png",
    },
    {
      quote:
        "Notices, meetings, and an open office — we never feel like strangers at the gate. The school treats parents as part of the story.",
      name: "Amit Roy",
      designation: "Parent Community",
      src: "/images/bhs-logo.jpeg",
    },
  ];
  return (
    <section className="section-soft section-pad">
      <div className="page-shell !py-0">
        <PageSectionHeading
          eyebrow="Voices of BHS"
          title="What the school family says"
          description="Students, parents, teachers and alumni — each voice adds to the quiet story of this campus."
          size="md"
          className="!mb-12"
        />
        <div className="relative">
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </section>
  );
}
