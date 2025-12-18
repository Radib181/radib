import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
  const gradients = [
    "from-primary/20 to-blue-500/20",
    "from-emerald-500/20 to-primary/20",
    "from-primary/20 to-cyan-500/20",
    "from-violet-500/20 to-primary/20",
    "from-primary/20 to-teal-500/20",
  ];

  const hasRealThumbnail = project.thumbnail && !project.thumbnail.startsWith('/projects/');

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-card-hover hover:-translate-y-2"
    >
      {/* Thumbnail */}
      <div className={`aspect-video relative overflow-hidden ${!hasRealThumbnail ? `bg-gradient-to-br ${gradients[index % gradients.length]}` : ''}`}>
        {hasRealThumbnail ? (
          <>
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-6 h-6 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </>
        )}
        
        {/* Badge */}
        {project.badge && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm shadow-lg">
              {project.badge}
            </Badge>
          </div>
        )}

        {/* Hover overlay with arrow */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.shortDescription}
        </p>
        
        {/* Tools preview */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tools.slice(0, 3).map((tool) => (
            <span 
              key={tool} 
              className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
