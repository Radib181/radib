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
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive automation capabilities to transform any business process
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
