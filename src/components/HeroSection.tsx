import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8 animate-fade-in-up hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default group">
            <Sparkles className="w-4 h-4 text-primary group-hover:animate-pulse" />
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">AI Automation Expert</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            I build AI automation systems that{" "}
            <span className="text-gradient relative">
              run your business
              <span className="absolute -inset-1 bg-primary/20 blur-xl -z-10 animate-pulse-slow" />
            </span>{" "}
            while you sleep.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            AI Automation Expert helping businesses save time, reduce costs, and scale faster through intelligent workflow automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild className="group relative overflow-hidden">
              <a href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="group">
              <a href="#contact">
                <span className="group-hover:text-primary transition-colors duration-300">Book a Call</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30 animate-fade-in-up animation-delay-400">
            <p className="text-sm text-muted-foreground mb-4">Trusted automation solutions using</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/60">
              {["n8n", "OpenAI", "Make", "Zapier", "Google Workspace"].map((tool, i) => (
                <span 
                  key={tool} 
                  className="font-medium hover:text-primary transition-colors duration-300 cursor-default"
                  style={{ animationDelay: `${500 + i * 100}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
