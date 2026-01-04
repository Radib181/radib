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
  <div className="flex-shrink-0 mx-2 sm:mx-4">
    <div 
      className="group relative p-6 sm:p-8 rounded-2xl bg-card/50 backdrop-blur-md border border-border/40 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 text-center w-[140px] sm:w-[180px] overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      
      {/* Icon container with pulse */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/60 transition-all duration-500">
        <tech.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-primary transition-colors duration-300" />
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-xl border border-primary/40 animate-ping opacity-0 group-hover:opacity-30" style={{ animationDuration: '2s' }} />
      </div>

      {/* Name */}
      <p className="relative font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
        {tech.name}
      </p>

      {/* Category badge */}
      <div className="relative mt-2 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
        <p className="text-[10px] sm:text-xs text-primary/80 font-medium">
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
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Technology Stack
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Powered By <span className="text-gradient">Modern Tech</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              Expert-level proficiency with industry-leading tools and platforms
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Marquees */}
      <div className="space-y-6 sm:space-y-8">
        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:pause-animation">
            {duplicatedTech1.map((tech, index) => (
              <TechCard key={`row1-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-reverse hover:pause-animation">
            {duplicatedTech2.map((tech, index) => (
              <TechCard key={`row2-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mt-16 sm:mt-20">
          <p className="text-muted-foreground text-base sm:text-lg">
            <span className="text-primary font-semibold">+ 50</span> more tools and APIs customized to your business needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
