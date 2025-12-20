import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Ready to Transform?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            Let's Build Your{" "}
            <span className="text-gradient">AI-Powered</span>{" "}
            Business
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Stop wasting time on repetitive tasks. Start scaling with intelligent automation that works 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild className="group">
              <a href="#contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#projects">See My Work</a>
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-10 text-sm text-muted-foreground animate-fade-in-up animation-delay-400">
            No commitment required • Free initial consultation • 100% satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
