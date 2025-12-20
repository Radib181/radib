import { 
  Bot, 
  Workflow, 
  MessageSquare, 
  Webhook, 
  Table2, 
  Users, 
  MessageCircle, 
  BarChart3 
} from "lucide-react";

const skills = [
  {
    icon: Bot,
    title: "AI Automation Strategy",
    description: "Designing intelligent systems that make decisions and take action automatically"
  },
  {
    icon: Workflow,
    title: "n8n Workflows",
    description: "Building complex, reliable automation pipelines with n8n and similar tools"
  },
  {
    icon: MessageSquare,
    title: "AI Agents",
    description: "Chat, voice, and email agents that handle conversations intelligently"
  },
  {
    icon: Webhook,
    title: "API & Webhook Integrations",
    description: "Connecting any software through APIs for seamless data flow"
  },
  {
    icon: Table2,
    title: "Google Workspace Automation",
    description: "Sheets, Gmail, Drive, and Calendar automation for productivity"
  },
  {
    icon: Users,
    title: "CRM & Lead Automation",
    description: "Automated lead capture, nurturing, and sales pipeline management"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Messenger Bots",
    description: "Conversational automation for customer engagement and sales"
  },
  {
    icon: BarChart3,
    title: "Data Processing & Reporting",
    description: "Automated data collection, transformation, and insights generation"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in-up">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive automation capabilities to transform any business process
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group relative p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 cursor-default overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with pulse effect */}
                <div className="relative w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <skill.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                </div>
                
                <h3 className="relative font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/30 rounded-tr-lg transition-all duration-500" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/30 rounded-bl-lg transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
