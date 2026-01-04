import { ArrowRight, Star, Clock, Link2, Sparkles } from "lucide-react";
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
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow text */}
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="text-sm font-medium tracking-[0.25em] text-primary uppercase">
              AI Automation Expert
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in-up">
            <span className="text-foreground">AI Automation Systems</span>
            <br />
            <span className="text-foreground">That </span>
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Run Your Business
            </span>
            <span className="text-foreground"> on </span>
            <span className="italic font-light text-foreground/90">Autopilot</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Replace manual work with AI Agents & n8n workflows that handle leads,
            operations, and reporting— automatically
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2 animate-fade-in-up animation-delay-150">
            <Button
              size="lg"
              className="group h-12 px-6 text-base font-semibold bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg shadow-primary/25"
              onClick={scrollToContact}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              Get Free Automation Audit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 text-base font-semibold border-border/60 hover:bg-card/50"
              onClick={scrollToProjects}
            >
              View Case Studies
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="flex flex-col items-center gap-4 pt-8 animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span><span className="text-foreground font-semibold">40+</span> Clients Automated Worldwide</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Saved <span className="text-foreground font-semibold">1,000+</span> Hours Using AI Automation</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Link2 className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">n8n</span>
              <span>•</span>
              <span className="font-medium text-foreground">OpenAI</span>
              <span className="text-primary">●</span>
              <span className="font-medium text-foreground">Make</span>
              <span className="text-purple-400">◆</span>
              <span className="font-medium text-foreground">AI Agents</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-purple-500/15 to-transparent hidden lg:block" />
    </section>
  );
};

export default HeroSection;
