import { 
  Database, 
  Cloud, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Workflow,
  Bot,
  Zap
} from "lucide-react";

const technologies = [
  { name: "n8n", icon: Workflow, category: "Automation" },
  { name: "Make", icon: Zap, category: "Automation" },
  { name: "OpenAI", icon: Bot, category: "AI" },
  { name: "Claude AI", icon: Cpu, category: "AI" },
  { name: "Supabase", icon: Database, category: "Database" },
  { name: "Airtable", icon: Database, category: "Database" },
  { name: "WhatsApp API", icon: MessageSquare, category: "Messaging" },
  { name: "Messenger API", icon: MessageSquare, category: "Messaging" },
  { name: "Google Cloud", icon: Cloud, category: "Cloud" },
  { name: "Zapier", icon: Zap, category: "Automation" },
  { name: "Tavily", icon: Globe, category: "Search" },
  { name: "Gmail API", icon: MessageSquare, category: "Email" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Technology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Powered By <span className="text-gradient">Modern Tech</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Using the best tools to build reliable, scalable automation systems
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 text-center cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Name */}
                <p className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </p>

                {/* Category badge */}
                <span className="absolute top-2 right-2 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.category}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <p className="text-center text-muted-foreground mt-12">
            + many more tools and APIs to fit your specific needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
