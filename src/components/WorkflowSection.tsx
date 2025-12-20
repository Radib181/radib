import { ArrowRight, CircleDot, CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your business processes, pain points, and automation goals",
    details: ["Deep-dive into your workflow", "Identify bottlenecks", "Define success metrics"]
  },
  {
    step: "02",
    title: "Design",
    description: "Mapping the optimal workflow with clear logic, triggers, and outcomes",
    details: ["Create workflow diagrams", "Plan integrations", "Design error handling"]
  },
  {
    step: "03",
    title: "Build",
    description: "Implementing robust automation with error handling and monitoring",
    details: ["Develop automation logic", "Connect all systems", "Build test scenarios"]
  },
  {
    step: "04",
    title: "Deploy",
    description: "Testing, launching, and documenting for long-term reliability",
    details: ["Thorough QA testing", "Go-live support", "Complete documentation"]
  }
];

const WorkflowSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in-up">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              How I <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              A proven approach to building automation that actually works
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {workflowSteps.map((item, index) => (
              <div key={item.step} className="relative group">
                {/* Connector Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent z-0" />
                )}
                
                <div className="relative z-10 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 h-full">
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <CircleDot className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-300">{item.step}</span>
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Details list */}
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary/50" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Flow Diagram */}
          <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500">
            <h3 className="text-center font-semibold text-xl mb-8">Example Automation Flow</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {["Trigger Event", "Data Collection", "AI Processing", "Decision Logic", "Action Execution", "Notification", "Logging"].map((step, index, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="group px-5 py-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default hover:scale-105">
                    {step}
                  </span>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary hidden sm:block animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
