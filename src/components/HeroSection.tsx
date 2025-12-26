import HeroSphere from "./HeroSphere";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              Hi, I'm{" "}
              <span className="text-gradient relative">
                Radib
                <span className="absolute -inset-1 bg-primary/20 blur-xl -z-10 animate-pulse-slow" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up animation-delay-100">
              Building modern AI automation systems & web applications with{" "}
              <span className="text-foreground">n8n, OpenAI, Make,</span> and{" "}
              <span className="text-foreground">React</span>
            </p>

            {/* Scroll indicator inline */}
            <div className="flex items-center gap-3 text-muted-foreground animate-fade-in-up animation-delay-200">
              <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-indicator" />
              </div>
              <span className="text-sm">Scroll to explore</span>
            </div>
          </div>

          {/* 3D Animated Sphere - Right Side */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <HeroSphere />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
