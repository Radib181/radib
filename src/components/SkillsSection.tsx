import { 
  Bot, 
  Workflow, 
  MessageSquare, 
  Webhook, 
  Table2, 
  Users, 
  MessageCircle, 
  BarChart3,
  Mic,
  Target,
  GraduationCap
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
    icon: Mic,
    title: "Voice AI Agents",
    description: "Intelligent voice assistants that handle calls and automate customer support 24/7"
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Automated lead capture systems that find, qualify, and nurture prospects"
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
  },
  {
    icon: GraduationCap,
    title: "Student Info Automation",
    description: "Instant student data retrieval with AI Agent, Vector Search & Supabase integration"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-secondary/30">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive automation capabilities to transform any business process
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group relative p-5 sm:p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {skill.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
