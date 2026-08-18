import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "My daughter is not only scoring better — she stands a little taller. Teachers here notice the quiet children, and that has changed our home.",
      name: "Rina Banerjee",
      designation: "Guardian, Class VIII",
      src: "/images/img-slider-1.jpeg",
    },
    {
      quote:
        "I learned that discipline is not fear. It is showing up prepared, greeting a teacher, and finishing the work you promised yourself.",
      name: "Arjun Dey",
      designation: "Class X, Head Boy",
      src: "/images/img-slider-2.jpeg",
    },
    {
      quote:
        "Annual Day still feels like the heartbeat of this school. When the lights come up, you remember why we teach — for that look of pride.",
      name: "S. Mukherjee",
      designation: "Senior Teacher",
      src: "/images/img-slider-3.jpeg",
    },
    {
      quote:
        "Years later I still remember the assembly ground. Boromohonpur gave me friends, a voice, and the habit of trying once more.",
      name: "Priya Ghosh",
      designation: "Alumna",
      src: "/images/achievemenets.jpeg",
    },
    {
      quote:
        "Notices, meetings, and an open office — we never feel like strangers at the gate. The school treats parents as part of the story.",
      name: "Amit Roy",
      designation: "Parent Community",
      src: "/images/bhs-logo.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
