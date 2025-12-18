import { Project } from "@/data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Lightbulb, Wrench, GitBranch, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const hasRealThumbnail = project.thumbnail && !project.thumbnail.startsWith('/projects/');

  const sections = [
    {
      icon: AlertCircle,
      title: "The Problem",
      content: project.problem,
      iconColor: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Lightbulb,
      title: "The Solution",
      content: project.solution,
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: GitBranch,
      title: "Automation Flow",
      content: project.automationFlow,
      iconColor: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      content: project.impact,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        {/* Header Image */}
        {hasRealThumbnail && (
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            {project.badge && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {project.badge}
                </Badge>
              </div>
            )}
          </div>
        )}

        <div className="p-6 sm:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl sm:text-3xl font-bold">{project.title}</DialogTitle>
            <p className="text-muted-foreground text-lg mt-2">{project.shortDescription}</p>
          </DialogHeader>

          <div className="space-y-6">
            {/* Tools Used */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-background border border-border">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Features List */}
            {project.features && project.features.length > 0 && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detail Sections */}
            {sections.map((section, idx) => (
              <div 
                key={section.title} 
                className="flex items-start gap-4 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${section.bgColor} border border-border flex items-center justify-center shrink-0`}>
                  <section.icon className={`w-5 h-5 ${section.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">{section.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
