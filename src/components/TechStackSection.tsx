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
  Image,
  Code
} from "lucide-react";

const technologies = [
  { name: "n8n", icon: Workflow, category: "Automation", featured: true },
  { name: "Make", icon: Zap, category: "Automation", featured: true },
  { name: "Vapi", icon: Phone, category: "Voice AI", featured: true },
  { name: "ElevenLabs", icon: Mic, category: "Voice AI", featured: true },
  { name: "OpenAI", icon: Bot, category: "AI", featured: true },
  { name: "Claude AI", icon: Cpu, category: "AI", featured: true },
  { name: "Google Maps", icon: MapPin, category: "Maps", featured: true },
  { name: "Apify", icon: Search, category: "Scraping", featured: true },
  { name: "Fal.ai", icon: Image, category: "AI", featured: true },
  { name: "Supabase", icon: Database, category: "Database", featured: false },
  { name: "Airtable", icon: Database, category: "Database", featured: false },
  { name: "WhatsApp API", icon: MessageSquare, category: "Messaging", featured: false },
  { name: "Messenger API", icon: MessageSquare, category: "Messaging", featured: false },
  { name: "Google Cloud", icon: Cloud, category: "Cloud", featured: false },
  { name: "Zapier", icon: Zap, category: "Automation", featured: false },
  { name: "Tavily", icon: Globe, category: "Search", featured: false },
  { name: "Gmail API", icon: Mail, category: "Email", featured: false },
  { name: "Perplexity", icon: Brain, category: "AI Search", featured: false },
];

const TechStackSection = () => {
  const featuredTech = technologies.filter(t => t.featured);
  const otherTech = technologies.filter(t => !t.featured);

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

          {/* Featured Tech - Larger Cards */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 mb-8">
            {featuredTech.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 text-center"
              >
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
            ))}
          </div>

          {/* Other Tech - Smaller Row */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {otherTech.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-card/40 border border-border/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-300"
              >
                <tech.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/70 group-hover:text-primary transition-colors" />
                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-muted-foreground text-sm sm:text-base">
              + 50 more tools and APIs customized to your business needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
