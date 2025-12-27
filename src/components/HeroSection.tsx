import { ArrowRight, Zap, Bot, Workflow } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Premium layered gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora gradient overlay */}
        <div className="absolute inset-0 bg-gradient-aurora opacity-10" />
        
        {/* Morphing gradient blobs - subtle */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] animate-morph animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[120px] animate-morph animate-pulse-slow animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Eyebrow text with premium styling */}
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-sm font-medium tracking-[0.2em] text-gradient uppercase">
              AI Automation Expert
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Main Headline with premium typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in-up">
            <span className="block text-foreground">We Build Systems</span>
            <span className="block mt-2 text-foreground/90">
              That Make Business
            </span>
            <span className="block mt-2 text-gradient animate-gradient" style={{ backgroundSize: '200% 200%' }}>
              Run on Autopilot
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Transform your operations with intelligent automation. 
            From AI agents to workflow systems—we engineer solutions 
            that work while you sleep.
          </p>

          {/* Feature pills with hover effects */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-150">
            {[
              { icon: Bot, label: "AI Agents" },
              { icon: Workflow, label: "n8n & Make" },
              { icon: Zap, label: "OpenAI" },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 border border-border/50 backdrop-blur-md hover-lift hover-border-glow cursor-default"
              >
                <item.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium group-hover:text-gradient transition-all duration-300">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with premium styling */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in-up animation-delay-200">
            <Button
              size="lg"
              variant="hero"
              className="group h-13 px-8 text-base font-semibold shadow-button hover:shadow-button-hover"
              onClick={scrollToProjects}
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="h-13 px-8 text-base font-semibold hover-glow"
              onClick={scrollToContact}
            >
              Start a Project
            </Button>
          </div>

          {/* Social proof with premium styling */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up animation-delay-300">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-black flex items-center justify-center shadow-lg hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="text-xs font-bold text-gradient">
                    {["A", "B", "C", "D"][i - 1]}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">40+ Happy Clients</div>
              <div className="text-xs text-muted-foreground">Trusted worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative side elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block animate-pulse-slow" />
      <div className="absolute right-8 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block animate-pulse-slow animation-delay-500" />
    </section>
  );
};

export default HeroSection;
