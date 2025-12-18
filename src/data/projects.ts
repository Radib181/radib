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
}

export const projects: Project[] = [
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
  },
  {
    id: "ai-sales-chatbot",
    title: "AI Sales Chatbot for Messenger",
    shortDescription: "Converting followers into customers automatically",
    thumbnail: "/projects/sales-chatbot.jpg",
    problem: "A fitness coaching business was losing potential clients due to slow response times on Facebook Messenger. The owner couldn't respond to DMs while training clients.",
    solution: "Developed an AI sales chatbot that qualifies leads, answers FAQs, showcases packages, handles objections, and books discovery calls—all automatically while maintaining a personal, conversational tone.",
    tools: ["n8n", "Meta Messenger API", "OpenAI", "Calendly", "Stripe"],
    automationFlow: "Messenger DM → Intent Detection → Personalized Conversation → Lead Qualification → Package Recommendation → Objection Handling → Calendly Booking → Payment Processing",
    impact: "3x increase in booked consultations. 50% reduction in time spent on DMs. $15,000+ additional monthly revenue."
  },
  {
    id: "order-processing",
    title: "Order Processing & Notification System",
    shortDescription: "From order to delivery, fully automated",
    thumbnail: "/projects/order-processing.jpg",
    problem: "An online store manually processed orders, updated inventory, sent confirmation emails, and notified warehouse staff. This led to delays, errors, and unhappy customers.",
    solution: "Built an end-to-end order processing automation that handles everything from payment confirmation to delivery updates, including inventory management, multi-channel notifications, and exception handling.",
    tools: ["n8n", "Shopify API", "Twilio", "Google Sheets", "Slack", "SendGrid"],
    automationFlow: "Order Placed → Payment Verified → Inventory Updated → Warehouse Notified → Customer Email → SMS Updates → Delivery Tracking → Review Request",
    impact: "Order processing time reduced from 30 minutes to instant. Zero inventory errors. Customer satisfaction up 40%."
  },
  {
    id: "ai-newsletter",
    title: "AI Newsletter & Content System",
    shortDescription: "Weekly content creation on autopilot",
    thumbnail: "/projects/newsletter.jpg",
    problem: "A marketing agency struggled to produce consistent newsletters for multiple clients. Writers were overwhelmed, deadlines were missed, and quality varied wildly.",
    solution: "Created an AI-powered content system that researches trending topics, generates draft content, personalizes for each client's audience, schedules publication, and tracks performance metrics automatically.",
    tools: ["n8n", "OpenAI GPT-4", "Perplexity API", "Mailchimp", "Airtable", "Buffer"],
    automationFlow: "Topic Research → Content Brief → AI Draft Generation → Brand Voice Adjustment → Human Review Queue → Approval Workflow → Scheduled Publishing → Analytics Collection",
    impact: "Content production increased 5x. Consistent weekly publishing for all clients. 25% improvement in open rates."
  }
];
