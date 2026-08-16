import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Our Campus",
      src: "/images/img-slider-1.jpeg",
    },
    {
      title: "Classroom Learning",
      src: "/images/img-slider-2.jpeg",
    },
    {
      title: "Student Life",
      src: "/images/img-slider-3.jpeg",
    },
    {
      title: "Achievements",
      src: "/images/achievemenets.jpeg",
    },
    {
      title: "School Pride",
      src: "/images/bhs-logo.jpeg",
    },
    {
      title: "Community Spirit",
      src: "/images/img-slider-1.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
