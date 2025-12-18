import { Project } from "@/data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Lightbulb, Wrench, GitBranch, TrendingUp } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const sections = [
    {
      icon: AlertCircle,
      title: "The Problem",
      content: project.problem,
      iconColor: "text-red-400"
    },
    {
      icon: Lightbulb,
      title: "The Solution",
      content: project.solution,
      iconColor: "text-yellow-400"
    },
    {
      icon: GitBranch,
      title: "Automation Flow",
      content: project.automationFlow,
      iconColor: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      content: project.impact,
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <p className="text-muted-foreground">{project.shortDescription}</p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Tools Used */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-secondary/80">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Detail Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                <section.icon className={`w-5 h-5 ${section.iconColor}`} />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
