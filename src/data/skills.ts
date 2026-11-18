export interface Skill {
  icon: string;
  name: string;
  description: string;
  tags: string[];
  accent: string;
}

export const skills: Skill[] = [
  {
    icon: "⚛️",
    name: "Frontend Development",
    description:
      "Building clean, practical, and user-friendly applications for the web.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    accent: "var(--accent2)",
  },
  {
    icon: "🎨",
    name: "UI/UX Design",
    description:
      "Focusing on clean, intuitive, and user-focused digital experiences.",
    tags: ["Creative Web Design", "Usability", "User-focused"],
    accent: "var(--accent3)",
  },
  {
    icon: "🛠️",
    name: "Full-Stack Development",
    description:
      "Working across frontend and full-stack technologies to build practical applications.",
    tags: ["PHP", "Laravel", "Firebase", "MySQL"],
    accent: "var(--accent4)",
  },
];
