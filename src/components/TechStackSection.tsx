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

const TechStackSection = () => {
  // Duplicate for seamless infinite scroll
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Powered By <span className="text-gradient">Modern Tech</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Expert-level proficiency with industry-leading tools and platforms
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee hover:pause-animation">
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-2 sm:mx-3"
            >
              <div className="group relative p-4 sm:p-5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 text-center w-[120px] sm:w-[140px]">
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>

                {/* Name */}
                <p className="relative font-medium text-xs sm:text-sm group-hover:text-primary transition-colors duration-300 truncate">
                  {tech.name}
                </p>

                {/* Category */}
                <p className="relative text-[10px] sm:text-xs text-muted-foreground mt-1 truncate">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            + 50 more tools and APIs customized to your business needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
