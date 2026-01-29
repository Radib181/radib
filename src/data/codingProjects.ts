export interface CodingProject {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
}

export const codingProjects: CodingProject[] = [
  {
    id: "portfolio-website",
    title: "AI Automation Portfolio",
    shortDescription: "Modern portfolio website built with React, TypeScript, and Tailwind CSS featuring 3D animations",
    thumbnail: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    liveUrl: "https://radib.lovable.app",
    badge: "Live"
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    shortDescription: "Real-time analytics dashboard with charts, data visualization, and dark mode support",
    thumbnail: "/placeholder.svg",
    techStack: ["React", "Recharts", "Supabase", "Tailwind CSS"],
    badge: "Vibe Coded"
  },
  {
    id: "ai-chat-interface",
    title: "AI Chat Interface",
    shortDescription: "Modern chat UI with streaming responses, markdown support, and conversation history",
    thumbnail: "/placeholder.svg",
    techStack: ["React", "OpenAI API", "TypeScript", "Tailwind CSS"],
    badge: "Vibe Coded"
  },
  {
    id: "task-automation-tool",
    title: "Task Automation Tool",
    shortDescription: "Web app for managing and automating repetitive tasks with visual workflow builder",
    thumbnail: "/placeholder.svg",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    badge: "In Progress"
  }
];
