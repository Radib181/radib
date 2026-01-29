import { codingProjects } from "@/data/codingProjects";
import CodingProjectCard from "./CodingProjectCard";

const CodingProjectsSection = () => {
  return (
    <section id="coding-projects" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Development
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Coding & <span className="text-gradient">Vibe Coding</span> Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Web applications and tools built with modern technologies and AI-assisted development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {codingProjects.map((project, index) => (
              <CodingProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProjectsSection;
