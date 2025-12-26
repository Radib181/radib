import heroPcSetup from "@/assets/hero-pc-setup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Soft glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse-slow animation-delay-1000" />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Horizontal flowing lines */}
          <g className="animate-flow-lines">
            <line x1="0" y1="200" x2="1920" y2="200" stroke="url(#lineGrad1)" strokeWidth="1" />
            <line x1="0" y1="400" x2="1920" y2="400" stroke="url(#lineGrad1)" strokeWidth="0.5" />
            <line x1="0" y1="600" x2="1920" y2="600" stroke="url(#lineGrad1)" strokeWidth="1" />
            <line x1="0" y1="800" x2="1920" y2="800" stroke="url(#lineGrad1)" strokeWidth="0.5" />
          </g>
        </svg>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

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

          {/* PC Setup Image - Right Side */}
          <div className="relative animate-fade-in-up animation-delay-200">
            {/* Glow effect behind PC */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl scale-125 animate-pulse-slow" />
            
            {/* Main PC image with floating animation */}
            <div className="relative animate-float-smooth">
              <img
                src={heroPcSetup}
                alt="Professional development workstation setup"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Reflection glow under the setup */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/20 blur-2xl rounded-full animate-pulse-slow" />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-float-delayed opacity-60" />
            <div className="absolute bottom-20 left-10 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-40" />
            <div className="absolute top-1/3 left-5 w-4 h-4 border border-primary/30 rounded-full animate-float-delayed" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
