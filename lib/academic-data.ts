export const academicStats = [
  { value: "1,175+", label: "Students" },
  { value: "V–XII", label: "Classes" },
  { value: "3", label: "Higher Secondary streams" },
  { value: "25", label: "Subjects" },
] as const;

export const secondaryClasses = ["Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X"] as const;

export const higherSecondaryStreams = [
  {
    name: "Science",
    classes: "Classes XI–XII",
    description: "Higher Secondary Science education for students pursuing scientific and technical study.",
    image: "/images/05-ACADEMICS/science-stream.png",
    imageAlt: "Science Stream — Baramohanpur High School",
  },
  {
    name: "Arts",
    classes: "Classes XI–XII",
    description: "Higher Secondary Arts education with a foundation for humanities and social science study.",
    image: "/images/05-ACADEMICS/arts-stream.png",
    imageAlt: "Arts Stream — Baramohanpur High School",
  },
  {
    name: "Commerce",
    classes: "Classes XI–XII",
    description: "Higher Secondary Commerce education, reopened at Baramohanpur High School in 2026.",
    image: "/images/05-ACADEMICS/commerce-stream.png",
    imageAlt: "Commerce Stream — Baramohanpur High School",
  },
] as const;

export const confirmedSubjects = [
  {
    name: "Artificial Intelligence",
    category: "Career-oriented",
    availability: "Applicable classes and stream to be confirmed",
  },
  {
    name: "Agriculture",
    category: "Career-oriented",
    availability: "Applicable classes and stream to be confirmed",
  },
  {
    name: "Computer Application",
    category: "Technology",
    availability: "Applicable classes and stream to be confirmed",
  },
  {
    name: "Education",
    category: "Humanities",
    availability: "Applicable classes and stream to be confirmed",
  },
] as const;

export const laboratories = [
  {
    name: "Laboratory facilities",
    description: "The school offers Science and Computer Application subjects. Laboratory names, equipment, photographs, and practical schedules are awaiting official confirmation.",
    subjects: "Science and Computer Application",
    status: "Details to be added",
  },
] as const;

export const studentDevelopment = [
  {
    title: "Academic development",
    description: "Meaningful learning, understanding concepts, questioning, critical thinking, and knowledge development.",
  },
  {
    title: "Physical development",
    description: "Sports, games, and physical activities that help students develop discipline and teamwork.",
  },
  {
    title: "Cultural development",
    description: "Cultural activities, music, arts, literary activities, and school programmes.",
  },
  {
    title: "Co-curricular development",
    description: "Competitions, educational activities, creative activities, and other opportunities as confirmed by the school.",
  },
] as const;
