import newsletterAgent from "@/assets/projects/newsletter-agent.png";
import messengerAgent from "@/assets/projects/messenger-agent.jpg";
import emailScraper from "@/assets/projects/email-scraper.jpg";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  problem: string;
  solution: string;
  tools: string[];
  automationFlow: string;
  impact: string;
  features?: string[];
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "ai-newsletter-agent",
    title: "AI Newsletter Agent (Topic-Based News)",
    shortDescription: "Smart AI agent that finds, summarizes, and creates newsletter content automatically",
    thumbnail: newsletterAgent,
    badge: "Featured",
    problem: "Newsletter creators spend hours researching topics, finding relevant news, and writing content. This manual process is time-consuming and often results in inconsistent publishing schedules.",
    solution: "Built a smart Newsletter AI Agent using n8n + Tavily that automates the entire content creation process. Simply select a topic, and the agent finds the latest real-time news, summarizes it with AI, and delivers ready-to-post newsletter content.",
    tools: ["n8n", "Tavily API", "OpenAI GPT-4", "Google Sheets", "HTTP Requests", "AI Agents"],
    automationFlow: "Topic Selection → Tavily Real-Time Search → News Aggregation → AI Summarization → Content Formatting → Newsletter Generation → Ready for Publishing",
    impact: "Content creation time reduced from 4+ hours to 15 minutes. Covers topics including Tech, AI, Business, Marketing, Startup, and World News. Perfect for newsletter creators, content pages, and automation enthusiasts.",
    features: [
      "Real-time news discovery",
      "AI-powered summarization",
      "Multiple topic support",
      "Ready-to-post content output",
      "Structured output parsing"
    ]
  },
  {
    id: "messenger-ai-chatbot",
    title: "Messenger AI Chatbot Agent – Fully Automated",
    shortDescription: "24/7 AI sales agent that handles customers, orders, and voice conversations automatically",
    thumbnail: messengerAgent,
    badge: "Enterprise",
    problem: "E-commerce businesses lose sales because they can't respond to customer messages instantly. Manual customer support is expensive, inconsistent, and doesn't scale. Order management is chaotic without proper tracking.",
    solution: "Built a comprehensive Messenger AI Chatbot Agent that handles everything automatically—no staff needed, no manual replies. AI manages customer conversations, processes orders, understands product images, and maintains a complete analytics dashboard.",
    tools: ["n8n", "Meta Messenger API", "OpenAI GPT-4", "Supabase", "Airtable", "Voice AI", "Image Recognition"],
    automationFlow: "Customer Message → Intent Detection → Voice/Text Processing → Image Understanding → Product Search (Airtable) → Order Confirmation → Data Storage (Supabase) → Dashboard Analytics → Auto Response",
    impact: "24/7 automatic customer support with zero missed messages. Full order management system with daily/weekly reports. Sales increased significantly for e-commerce clients. 100% AI-powered solution.",
    features: [
      "Instant auto-reply to all messages",
      "Voice conversation support",
      "Image understanding & order confirmation",
      "Complete order management system",
      "Smart analytics dashboard",
      "Live product search from Airtable",
      "Data storage in Supabase"
    ]
  },
  {
    id: "google-maps-email-scraper",
    title: "Google Maps Email Scraper (FREE Workflow)",
    shortDescription: "Extract unlimited business emails from Google Maps with zero cost",
    thumbnail: emailScraper,
    badge: "Free Tool",
    problem: "Lead generation tools are expensive and often have rate limits. Businesses need business emails for outreach but paid scrapers cost hundreds of dollars monthly with restrictions.",
    solution: "Created a fully automated n8n workflow that extracts business data from Google Maps, removes duplicates, cleans the final list, and runs completely automatically—100% FREE with no paid APIs or extensions required.",
    tools: ["n8n", "HTTP Requests", "JavaScript", "Google Maps Data", "Airtable", "Webhooks"],
    automationFlow: "Trigger Workflow → HTTP Request to Google Maps → JavaScript Data Processing → Smart Filtering → Duplicate Removal → Auto-Loop for Large Datasets → Clean Email List → Export to CRM/Sheet/Database",
    impact: "Unlimited business email extraction with zero cost. No rate limits. Self-hosted n8n means zero restrictions. Fully customizable for any industry or location. Used by digital marketers, agencies, and freelancers worldwide.",
    features: [
      "100% free - no paid APIs",
      "Unlimited searches",
      "Smart duplicate removal",
      "Auto-loop for large datasets",
      "Export to any destination",
      "Self-hosted with zero restrictions"
    ]
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Automation",
    shortDescription: "24/7 intelligent customer service that never sleeps",
    thumbnail: "/projects/customer-support.jpg",
    problem: "A growing e-commerce company was overwhelmed with customer inquiries, leading to slow response times, frustrated customers, and an overworked support team working overtime.",
    solution: "Built an AI-powered customer support system that handles 80% of common inquiries automatically, intelligently routes complex issues to human agents, and provides instant responses across email, chat, and social media.",
    tools: ["n8n", "OpenAI GPT-4", "Zendesk API", "Telegram Bot", "Google Sheets"],
    automationFlow: "Customer message → AI Classification → Intent Recognition → Knowledge Base Search → Personalized Response Generation → Auto-reply or Human Escalation → Ticket Logging",
    impact: "Reduced response time from 4 hours to under 2 minutes. Cut support costs by 60%. Customer satisfaction increased by 35%."
  },
  {
    id: "gmail-sheets-crm",
    title: "Gmail → Sheets → CRM Pipeline",
    shortDescription: "Automatic lead capture from email to CRM",
    thumbnail: "/projects/email-crm.jpg",
    problem: "Sales team was manually copying lead information from emails to spreadsheets, then to CRM. This took 2+ hours daily and led to missed leads and data entry errors.",
    solution: "Created a seamless automation that extracts lead data from incoming emails using AI, validates and enriches the data, updates Google Sheets for tracking, and creates CRM records with proper tagging and assignment.",
    tools: ["n8n", "Gmail API", "Google Sheets", "HubSpot CRM", "OpenAI"],
    automationFlow: "New Email → AI Data Extraction → Data Validation → Google Sheets Update → CRM Record Creation → Team Notification → Follow-up Scheduling",
    impact: "Saved 10+ hours per week. Zero missed leads. 100% data accuracy. Sales team can focus on selling, not data entry."
  }
];
