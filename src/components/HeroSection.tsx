import { Sparkles } from "lucide-react";
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
      {/* Subtle top gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/8 via-purple-500/5 to-transparent blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Eyebrow text */}
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-primary/80" />
            <span className="text-sm font-medium tracking-[0.3em] text-primary/90 uppercase">
              AI Automation Expert
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary/50 to-primary/80" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight animate-fade-in-up">
            <span className="text-foreground">AI Automation Systems</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-foreground">That </span>
            <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% 200%' }}>
              Run Your Business
            </span>
            <span className="text-foreground"> on </span>
            <span className="italic font-light text-foreground/80">Autopilot</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            n8n Automation Expert ✦ AI Agent ✦ n8n Workflow ✦ Business Automation ✦
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in-up animation-delay-150">
            <Button
              size="lg"
              className="group h-12 px-7 text-base font-semibold bg-gradient-to-r from-primary via-purple-500 to-blue-500 hover:opacity-90 text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-primary/50 hover:scale-[1.02]"
              onClick={scrollToContact}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              Get Free Automation Audit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base font-semibold border-border/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
              onClick={scrollToProjects}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative side lines */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden xl:block" />
      <div className="absolute right-10 top-1/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent hidden xl:block" />
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
