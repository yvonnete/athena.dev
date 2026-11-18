export interface ProjectLink {
  title: string;
  href: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  emoji: string;
  thumbnailGradient: "p1" | "p2" | "p3";
  thumbnailImage?: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Biometric Integrated Timekeeping System",
    description:
      "Full-stack attendance management platform with biometric device integration, role-based access control, and automated attendance tracking.",
    emoji: "⏱️",
    thumbnailGradient: "p1",
    thumbnailImage: "/bits-login.png",
    links: [{ title: "GitHub", href: "https://github.com/yvonnete/bits", icon: "⌥" }],
  },
  {
    title: "UNITrack",
    description:
      "Uniform tracking for Cebu Technological University - Danao Campus.",
    emoji: "🎓",
    thumbnailGradient: "p2",
    links: [],
  },
  {
    title: "Personal Task Manager",
    description: "Task management application for organizing daily tasks.",
    emoji: "✅",
    thumbnailGradient: "p3",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/yvonnete/PersonalTaskManager",
        icon: "⌥",
      },
    ],
  },
];
