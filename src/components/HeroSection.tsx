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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-primary/5 via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px] animate-pulse-slow animation-delay-1000" />
        
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Eyebrow text */}
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              AI Automation Expert
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in-up">
            <span className="block text-foreground">We Build Systems</span>
            <span className="block mt-2">
              That Make Business
            </span>
            <span className="block mt-2 text-gradient">
              Run on Autopilot
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Transform your operations with intelligent automation. 
            From AI agents to workflow systems—we engineer solutions 
            that work while you sleep.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-150">
            {[
              { icon: Bot, label: "AI Agents" },
              { icon: Workflow, label: "n8n & Make" },
              { icon: Zap, label: "OpenAI" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in-up animation-delay-200">
            <Button
              size="lg"
              className="group h-12 px-8 text-base font-semibold"
              onClick={scrollToProjects}
            >
              Explore Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-8 text-base font-semibold hover:bg-primary/5"
              onClick={scrollToContact}
            >
              Start a Project
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-up animation-delay-300">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-primary">
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Side decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute right-0 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />
    </section>
  );
};

export default HeroSection;