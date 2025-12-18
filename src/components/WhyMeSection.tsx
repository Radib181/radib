import { MessageSquare, Briefcase, Target, FileText, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "No jargon, no confusion. I explain everything in plain language and keep you informed at every step."
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Every solution I build is grounded in practical experience solving actual business problems."
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description: "I don't just automate for the sake of it. Every workflow is designed to drive measurable business results."
  },
  {
    icon: FileText,
    title: "Clean Documentation",
    description: "Every automation comes with clear documentation so you understand exactly how it works."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description: "I build relationships, not just systems. I'm here to help your automation evolve as your business grows."
  }
];

const WhyMeSection = () => {
  return (
    <section id="why-me" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Makes Me <span className="text-gradient">Different</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More than just technical skills—a partner invested in your success
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover ${
                  index === reasons.length - 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
