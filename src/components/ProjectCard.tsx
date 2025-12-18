import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
  // Generate a gradient based on index for visual variety
  const gradients = [
    "from-primary/20 to-blue-500/20",
    "from-emerald-500/20 to-primary/20",
    "from-primary/20 to-cyan-500/20",
    "from-violet-500/20 to-primary/20",
    "from-primary/20 to-teal-500/20",
  ];

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-card-hover"
    >
      {/* Thumbnail */}
      <div className={`aspect-video bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ArrowUpRight className="w-6 h-6 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {project.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
