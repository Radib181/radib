import { Bot, Zap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image/Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden shadow-card">
                <div className="absolute inset-0 bg-gradient-glow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-secondary border border-border flex items-center justify-center">
                      <Bot className="w-20 h-20 sm:w-28 sm:h-28 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-pulse-glow">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-pulse-glow animation-delay-200">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Hi, I'm <span className="text-gradient">Radib</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm an AI Automation Expert passionate about transforming how businesses operate. 
                  My mission is simple: help you work smarter, not harder.
                </p>
                <p>
                  With hands-on experience building real-world automation systems, I've helped 
                  businesses across industries eliminate repetitive tasks, reduce human error, 
                  and unlock unprecedented efficiency.
                </p>
                <p>
                  I don't just implement tools—I solve business problems. Every automation I 
                  build is designed with your specific workflow, goals, and growth in mind. 
                  From AI-powered customer service to complex data pipelines, I create systems 
                  that work reliably around the clock.
                </p>
                <p className="text-foreground font-medium">
                  Let's build something that transforms your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
