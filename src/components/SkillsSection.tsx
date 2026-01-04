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
  Zap,
  TrendingUp
} from "lucide-react";

const skills = [
  {
    icon: Bot,
    title: "AI Automation Strategy",
    description: "Designing intelligent systems that make decisions and take action automatically",
    details: ["Process Analysis", "ROI Optimization", "Custom Solutions"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Workflow,
    title: "n8n Workflows",
    description: "Building complex, reliable automation pipelines with n8n and similar tools",
    details: ["500+ Nodes", "Error Handling", "Scheduled Tasks"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    description: "Build intelligent voice assistants that handle calls, answer queries, and automate customer support 24/7",
    details: ["Inbound/Outbound Calls", "Natural Conversations", "Multi-language Support"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Automated lead capture systems that find, qualify, and nurture prospects while you focus on closing deals",
    details: ["Email Scraping", "Social Outreach", "Lead Scoring"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: MessageSquare,
    title: "AI Agents",
    description: "Chat, voice, and email agents that handle conversations intelligently",
    details: ["GPT Integration", "Context Aware", "Auto-Response"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Webhook,
    title: "API & Webhook Integrations",
    description: "Connecting any software through APIs for seamless data flow",
    details: ["REST APIs", "Real-time Sync", "Custom Webhooks"],
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: Table2,
    title: "Google Workspace Automation",
    description: "Sheets, Gmail, Drive, and Calendar automation for productivity",
    details: ["Auto Reports", "Email Sequences", "Doc Generation"],
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Messenger Bots",
    description: "Conversational automation for customer engagement and sales",
    details: ["24/7 Support", "Lead Capture", "Order Updates"],
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: BarChart3,
    title: "Data Processing & Reporting",
    description: "Automated data collection, transformation, and insights generation",
    details: ["Dashboard", "Analytics", "Auto Reports"],
    color: "from-violet-500/20 to-purple-500/20"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-100">
              Skills & <span className="text-gradient">Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive automation capabilities to transform any business process into an efficient, self-running system
            </p>
          </div>

          {/* Skills Grid - Bento Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-default overflow-hidden ${
                  index === 2 || index === 3 ? 'lg:col-span-1 sm:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/20">
                    <skill.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-2xl bg-primary/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Detail Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.details.map((detail, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary/80 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-primary/40 rounded-tr-xl transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-primary/40 rounded-bl-xl transition-all duration-500" />
                
                {/* Glow line at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Projects Completed", icon: TrendingUp },
              { value: "100+", label: "Workflows Built", icon: Workflow },
              { value: "24/7", label: "Systems Running", icon: Zap },
              { value: "95%", label: "Client Satisfaction", icon: Target },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 text-center hover:border-primary/30 hover:bg-card/60 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
