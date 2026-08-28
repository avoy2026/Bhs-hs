import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import PageSectionHeading from "@/components/page-section-heading";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "My daughter is not only scoring better — she stands a little taller. Teachers here notice the quiet children, and that has changed our home.",
      name: "Rina Banerjee",
      designation: "Guardian, Class VIII",
      src: "/images/testimonials/parents/parents.jpeg",
    },
    {
      quote:
        "I learned that discipline is not fear. It is showing up prepared, greeting a teacher, and finishing the work you promised yourself.",
      name: "Arjun Dey",
      designation: "Class X, Head Boy",
      src: "/images/testimonials/students/student-2.jpg",
    },
    {
      quote:
        "Annual Day still feels like the heartbeat of this school. When the lights come up, you remember why we teach — for that look of pride on a child's face.",
      name: "Bina Das",
      designation: "Assistant Teacher",
      src: "/images/teachers/teaching/bina-das.jpeg",
    },
    {
      quote:
        "Years later I still remember the assembly ground. Baramohanpur gave me friends, a voice, and the habit of trying once more when things do not work out the first time.",
      name: "Priya Ghosh",
      designation: "Alumna",
      src: "/images/testimonials/alumni/alumni-1.jpg",
    },
    {
      quote:
        "Notices, meetings, and an open office — we never feel like strangers at the gate. The school treats parents as part of the story.",
      name: "Amit Roy",
      designation: "Parent Community",
      src: "/images/testimonials/parents/parents-3.jpeg",
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
