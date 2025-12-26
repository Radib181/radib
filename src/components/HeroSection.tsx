import HeroSphere from "./HeroSphere";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/6 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Automation Expert</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in-up">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Radib</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50 rounded-full" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up animation-delay-100">
              Crafting intelligent{" "}
              <span className="text-foreground font-medium">AI automation systems</span>{" "}
              and premium web experiences with{" "}
              <span className="text-foreground font-medium">n8n, OpenAI, Make</span>{" "}
              & <span className="text-foreground font-medium">React</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
              <Button 
                size="lg" 
                className="group px-8"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 border-primary/20 hover:bg-primary/5"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4 animate-fade-in-up animation-delay-300">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient">40+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* 3D Animated Sphere - Right Side */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in animation-delay-200">
            <div className="relative">
              {/* Glow behind sphere */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-2xl scale-150" />
              <HeroSphere />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
