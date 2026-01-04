import { Bot, Phone, Search, Globe, Image, LucideIcon } from "lucide-react";

// Import real logos
import n8nLogo from "@/assets/tech-logos/n8n.svg";
import makeLogo from "@/assets/tech-logos/make.svg";
import elevenlabsLogo from "@/assets/tech-logos/elevenlabs-custom.png";
import claudeLogo from "@/assets/tech-logos/claude.svg";
import googlemapsLogo from "@/assets/tech-logos/googlemaps.svg";
import supabaseLogo from "@/assets/tech-logos/supabase.svg";
import airtableLogo from "@/assets/tech-logos/airtable.svg";
import whatsappLogo from "@/assets/tech-logos/whatsapp.svg";
import messengerLogo from "@/assets/tech-logos/messenger.svg";
import googlecloudLogo from "@/assets/tech-logos/googlecloud.svg";
import zapierLogo from "@/assets/tech-logos/zapier.svg";
import gmailLogo from "@/assets/tech-logos/gmail.svg";
import perplexityLogo from "@/assets/tech-logos/perplexity.svg";

interface Technology {
  name: string;
  logo?: string;
  icon?: LucideIcon;
  category: string;
  brandColor: string;
}

const technologies: Technology[] = [
  { name: "n8n", logo: n8nLogo, category: "Automation", brandColor: "#EA4B71" },
  { name: "Make", logo: makeLogo, category: "Automation", brandColor: "#6D00CC" },
  { name: "Vapi", icon: Phone, category: "Voice AI", brandColor: "#00D4AA" },
  { name: "ElevenLabs", logo: elevenlabsLogo, category: "Voice AI", brandColor: "#000000" },
  { name: "OpenAI", icon: Bot, category: "AI", brandColor: "#10A37F" },
  { name: "Claude AI", logo: claudeLogo, category: "AI", brandColor: "#D97757" },
  { name: "Google Maps", logo: googlemapsLogo, category: "Maps", brandColor: "#4285F4" },
  { name: "Apify", icon: Search, category: "Scraping", brandColor: "#00AAFF" },
  { name: "Fal.ai", icon: Image, category: "AI", brandColor: "#7C3AED" },
];

const technologiesRow2: Technology[] = [
  { name: "Supabase", logo: supabaseLogo, category: "Database", brandColor: "#3ECF8E" },
  { name: "Airtable", logo: airtableLogo, category: "Database", brandColor: "#18BFFF" },
  { name: "WhatsApp", logo: whatsappLogo, category: "Messaging", brandColor: "#25D366" },
  { name: "Messenger", logo: messengerLogo, category: "Messaging", brandColor: "#0099FF" },
  { name: "Google Cloud", logo: googlecloudLogo, category: "Cloud", brandColor: "#4285F4" },
  { name: "Zapier", logo: zapierLogo, category: "Automation", brandColor: "#FF4A00" },
  { name: "Tavily", icon: Globe, category: "Search", brandColor: "#6366F1" },
  { name: "Gmail", logo: gmailLogo, category: "Email", brandColor: "#EA4335" },
  { name: "Perplexity", logo: perplexityLogo, category: "AI Search", brandColor: "#20808D" },
];

const TechCard = ({ tech, index }: { tech: Technology; index: number }) => {
  const IconComponent = tech.icon;
  
  return (
    <div className="flex-shrink-0 mx-3 sm:mx-4">
      <div className="group relative p-5 sm:p-6 rounded-2xl bg-[#0A0A0B] border border-white/10 hover:border-white/25 transition-all duration-400 hover:-translate-y-2 text-center w-[140px] sm:w-[160px] overflow-hidden">
        {/* Subtle gradient on hover */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-400"
          style={{ background: `radial-gradient(circle at center, ${tech.brandColor}, transparent 70%)` }}
        />
        
        {/* Logo/Icon container */}
        <div 
          className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-105"
          style={{ 
            background: `linear-gradient(135deg, ${tech.brandColor}15, ${tech.brandColor}08)`,
            border: `1px solid ${tech.brandColor}30`
          }}
        >
          {tech.logo ? (
            <img 
              src={tech.logo} 
              alt={tech.name} 
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
            />
          ) : IconComponent ? (
            <IconComponent 
              className="w-7 h-7 sm:w-8 sm:h-8" 
              color={tech.brandColor}
            />
          ) : null}
        </div>

        {/* Name */}
        <p className="relative font-semibold text-sm sm:text-base text-white/90 group-hover:text-white transition-colors duration-300">
          {tech.name}
        </p>

        {/* Category */}
        <p className="relative text-xs text-white/40 mt-1.5 group-hover:text-white/60 transition-colors duration-300">
          {tech.category}
        </p>
      </div>
    </div>
  );
};

const TechStackSection = () => {
  const duplicatedTech1 = [...technologies, ...technologies, ...technologies];
  const duplicatedTech2 = [...technologiesRow2, ...technologiesRow2, ...technologiesRow2];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#030304]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - Clean & Minimal */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-white/40 font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Technology Stack
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
              Powered By{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">
                Modern Tech
              </span>
            </h2>
            <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto">
              Expert-level proficiency with industry-leading tools
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Marquees */}
      <div className="space-y-6 sm:space-y-8">
        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030304] via-[#030304]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030304] via-[#030304]/80 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee hover:pause-animation">
            {duplicatedTech1.map((tech, index) => (
              <TechCard key={`row1-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030304] via-[#030304]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030304] via-[#030304]/80 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-reverse hover:pause-animation">
            {duplicatedTech2.map((tech, index) => (
              <TechCard key={`row2-${tech.name}-${index}`} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mt-14 sm:mt-18">
          <p className="text-white/40 text-sm sm:text-base">
            <span className="text-white/70 font-semibold">50+</span> more tools and APIs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;