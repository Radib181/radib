import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow Inc",
    content: "Radib transformed our entire customer support system. Response times went from hours to seconds. The AI chatbot he built handles 80% of our inquiries automatically.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLab",
    content: "The newsletter automation system Radib built saves us 20+ hours every week. It's like having a full-time content team working 24/7.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, ScaleUp Co",
    content: "We were skeptical about AI automation, but Radib delivered beyond expectations. Our lead processing is now 100% automated and error-free.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "E-commerce Owner",
    content: "The Messenger bot handles all our orders automatically. Sales increased by 40% since customers get instant responses at any hour.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in-up">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Real results from real businesses that trusted me with their automation
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
