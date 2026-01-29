import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { CodingProject } from "@/data/codingProjects";

interface CodingProjectCardProps {
  project: CodingProject;
  index: number;
}

const CodingProjectCard = ({ project, index }: CodingProjectCardProps) => {
  return (
    <div
      className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-muted/20">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Badge */}
        {project.badge && (
          <div className="absolute top-3 right-3">
            <Badge 
              variant="default" 
              className="bg-primary/90 text-primary-foreground text-xs font-medium"
            >
              {project.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-md">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingProjectCard;
