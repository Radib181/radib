import { 
  Database, 
  Cloud, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Workflow,
  Bot,
  Zap,
  Mic,
  MapPin,
  Search,
  Brain,
  Mail,
  Phone,
  Image
} from "lucide-react";

const technologies = [
  { name: "n8n", icon: Workflow, category: "Automation" },
  { name: "Make", icon: Zap, category: "Automation" },
  { name: "Vapi", icon: Phone, category: "Voice AI" },
  { name: "ElevenLabs", icon: Mic, category: "Voice AI" },
  { name: "OpenAI", icon: Bot, category: "AI" },
  { name: "Claude AI", icon: Cpu, category: "AI" },
  { name: "Google Maps", icon: MapPin, category: "Maps" },
  { name: "Apify", icon: Search, category: "Scraping" },
  { name: "Fal.ai", icon: Image, category: "AI" },
];

const technologiesRow2 = [
  { name: "Supabase", icon: Database, category: "Database" },
  { name: "Airtable", icon: Database, category: "Database" },
  { name: "WhatsApp API", icon: MessageSquare, category: "Messaging" },
  { name: "Messenger API", icon: MessageSquare, category: "Messaging" },
  { name: "Google Cloud", icon: Cloud, category: "Cloud" },
  { name: "Zapier", icon: Zap, category: "Automation" },
  { name: "Tavily", icon: Globe, category: "Search" },
  { name: "Gmail API", icon: Mail, category: "Email" },
  { name: "Perplexity", icon: Brain, category: "AI Search" },
];

const TechCard = ({ tech, index }: { tech: typeof technologies[0]; index: number }) => (
  <div className="flex-shrink-0 mx-3 sm:mx-5">
    <div 
      className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] hover:-translate-y-3 text-center w-[160px] sm:w-[200px] overflow-hidden"
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
      
      {/* Inner glow */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-background/95 to-background/80" />
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/60 animate-float" style={{ animationDelay: `${index * 200}ms` }} />
      <div className="absolute bottom-6 left-4 w-1.5 h-1.5 rounded-full bg-accent/60 animate-float" style={{ animationDelay: `${index * 300}ms`, animationDuration: '4s' }} />
      
      {/* Icon container with glow */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border-2 border-primary/50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all duration-500">
        <tech.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        
        {/* Rotating ring */}
        <div className="absolute inset-[-4px] rounded-2xl border-2 border-dashed border-primary/30 group-hover:border-primary/60 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Name with glow */}
      <p className="relative font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
        {tech.name}
      </p>

      {/* Category badge */}
      <div className="relative mt-3 inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40">
        <p className="text-xs sm:text-sm text-primary font-semibold">
          {tech.category}
        </p>
      </div>
    </div>
  </div>
);

const TechStackSection = () => {
  const duplicatedTech1 = [...technologies, ...technologies, ...technologies];
  const duplicatedTech2 = [...technologiesRow2, ...technologiesRow2, ...technologiesRow2];

  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      {/* Enhanced Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Large animated orbs */}
      <div className="absolute top-1/4 left-1/6 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-1/4 right-1/6 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-float" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 sm:mb-24">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Technology Stack
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              Powered By{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-accent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                Modern Tech
              </span>
            </h2>
            <p className="text-muted-foreground text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
              Expert-level proficiency with industry-leading tools and platforms
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Marquees */}
      <div className="space-y-8 sm:space-y-10">
        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:pause-animation">
            {duplicatedTech1.map((tech, index) => (
              <TechCard key={`row1-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-reverse hover:pause-animation">
            {duplicatedTech2.map((tech, index) => (
              <TechCard key={`row2-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mt-20 sm:mt-24">
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
            <p className="text-foreground text-lg sm:text-xl font-medium">
              <span className="text-primary font-bold text-2xl sm:text-3xl">50+</span>
              <span className="ml-2">more tools and APIs customized to your business needs</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
