import { ChevronDown } from "lucide-react";
import heroPcSetup from "@/assets/hero-pc-setup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave SVG Pattern - Animated */}
        <svg
          className="absolute w-[200%] h-full opacity-30"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          style={{ left: '-50%' }}
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 - Slower, larger */}
          <path
            className="animate-wave-slow"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            d="M0,400 Q180,300 360,400 T720,400 T1080,400 T1440,400 T1800,400 T2160,400 T2520,400 T2880,400"
          />
          
          {/* Wave 2 - Medium speed */}
          <path
            className="animate-wave-medium"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1.5"
            d="M0,450 Q180,350 360,450 T720,450 T1080,450 T1440,450 T1800,450 T2160,450 T2520,450 T2880,450"
          />
          
          {/* Wave 3 - Faster, smaller */}
          <path
            className="animate-wave-fast"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="1"
            d="M0,500 Q180,420 360,500 T720,500 T1080,500 T1440,500 T1800,500 T2160,500 T2520,500 T2880,500"
          />
        </svg>

        {/* Concentric wave circles on the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-primary/10 rounded-full animate-pulse-slow"
              style={{
                transform: `scale(${0.3 + i * 0.1})`,
                animationDelay: `${i * 0.3}s`,
                opacity: 1 - i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Flowing lines from left */}
        <svg className="absolute left-0 top-0 h-full w-32 opacity-40">
          <path
            className="animate-flow"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            d="M20,0 Q40,200 20,400 T20,800"
          />
          <path
            className="animate-flow animation-delay-200"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            d="M40,0 Q60,200 40,400 T40,800"
          />
        </svg>
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
                <div className="w-1.5 h-3 bg-muted-foreground rounded-full animate-bounce" />
              </div>
              <span className="text-sm">Scroll to explore</span>
            </div>
          </div>

          {/* PC Setup Image - Right Side */}
          <div className="relative animate-fade-in-up animation-delay-200">
            {/* Glow effect behind PC */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 blur-3xl scale-110" />
            
            <img
              src={heroPcSetup}
              alt="Professional development workstation setup"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float"
            />
            
            {/* Reflection/glow under the setup */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/30 blur-xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
