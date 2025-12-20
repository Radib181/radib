import { MessageSquare, Briefcase, Target, FileText, HeartHandshake, Shield, Rocket } from "lucide-react";

const reasons = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "No jargon, no confusion. I explain everything in plain language and keep you informed at every step of the process."
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Every solution I build is grounded in practical experience solving actual business problems across multiple industries."
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description: "I don't just automate for the sake of it. Every workflow is designed to drive measurable business results and ROI."
  },
  {
    icon: FileText,
    title: "Clean Documentation",
    description: "Every automation comes with clear documentation so you understand exactly how it works and can maintain it."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description: "I build relationships, not just systems. I'm here to help your automation evolve as your business grows and changes."
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Security and reliability are built-in from day one. Your data and workflows are protected and monitored 24/7."
  },
];

const WhyMeSection = () => {
  return (
    <section id="why-me" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in-up">
              Why Choose Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              What Makes Me <span className="text-gradient">Different</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              More than just technical skills—a partner invested in your success
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 cursor-default overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="relative font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Corner decorations */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/30 rounded-br-lg transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary animate-fade-in-up">
              <Rocket className="w-5 h-5" />
              <span className="font-medium">Ready to work with a dedicated automation partner?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
