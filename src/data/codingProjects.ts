import photographyStudio from "@/assets/projects/photography-studio.png";
import realestateDashboard from "@/assets/projects/realestate-dashboard.png";

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
    id: "photography-studio",
    title: "Smart Photography Studio",
    shortDescription: "Professional photography booking platform with elegant UI, service packages, and portfolio showcase",
    thumbnail: photographyStudio,
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://photography-studio.lovable.app",
    badge: "Live"
  },
  {
    id: "realestate-dashboard",
    title: "RealVista Dashboard",
    shortDescription: "Real estate analytics dashboard with property tracking, market trends, and team performance metrics",
    thumbnail: realestateDashboard,
    techStack: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    liveUrl: "https://realestae222.lovable.app",
    badge: "Live"
  },
  {
    id: "disasters-io",
    title: "Disasters I/O",
    shortDescription: "Real-time disaster monitoring and reporting platform with interactive maps and alerts",
    thumbnail: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Maps API", "Vercel"],
    liveUrl: "https://disasters-i-o.vercel.app/",
    badge: "Live"
  }
];
