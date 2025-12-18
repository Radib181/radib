import { ArrowRight, CircleDot } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your business processes, pain points, and automation goals"
  },
  {
    step: "02",
    title: "Design",
    description: "Mapping the optimal workflow with clear logic, triggers, and outcomes"
  },
  {
    step: "03",
    title: "Build",
    description: "Implementing robust automation with error handling and monitoring"
  },
  {
    step: "04",
    title: "Deploy",
    description: "Testing, launching, and documenting for long-term reliability"
  }
];

const WorkflowSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How I <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven approach to building automation that actually works
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector Line (hidden on last item and mobile) */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <CircleDot className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-3xl font-bold text-muted-foreground/30">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Flow Diagram */}
          <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-center font-semibold mb-8">Example Automation Flow</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {["Trigger Event", "Data Collection", "AI Processing", "Decision Logic", "Action Execution", "Notification", "Logging"].map((step, index, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-lg bg-secondary border border-border text-muted-foreground">
                    {step}
                  </span>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary hidden sm:block" />
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
