import radibProfile from "@/assets/radib-profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Profile Image */}
            <div className="relative animate-fade-in-up">
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-slow" />
                
                {/* Main image container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500 shadow-card group-hover:shadow-glow">
                  <img 
                    src={radibProfile} 
                    alt="Radib Bhuyian - AI Automation Expert"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary font-medium text-sm uppercase tracking-wider mb-1">
                      AI Automation Expert
                    </p>
                    <h3 className="text-2xl font-bold text-foreground">
                      Radib Bhuyian
                    </h3>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border border-primary/30 rounded-xl rotate-12 animate-float" />
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-primary/10 rounded-lg -rotate-6 animate-float animation-delay-500" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="animate-fade-in-up animation-delay-200">
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-px bg-primary" />
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Hi, I'm <span className="text-gradient">Radib</span>
              </h2>
              <p className="text-xl text-foreground/90 mb-2">
                AI Automation Expert & Vibe Coder
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Senior Developer at <span className="text-primary font-medium">Business Accelerator AI</span>
              </p>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I help businesses save time, reduce manual work, and grow faster by automating 
                  daily and repeated tasks using AI.
                </p>
                <p>
                  I build simple and smart automation systems that make business work easier, 
                  faster, and more organized. You can hire me to automate full workflows or 
                  small business processes.
                </p>
                <p className="text-foreground font-medium">
                  With real experience in AI automation, I help your business work smarter 
                  and scale with confidence.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Automation Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
