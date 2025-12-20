import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Calendar, Send, MapPin, Clock, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const benefits = [
    "Free initial consultation",
    "Custom automation strategy",
    "Quick response time",
    "100% satisfaction guarantee"
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in-up">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100">
              Let's <span className="text-gradient">Automate</span> Your Business
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Ready to save time and scale faster? Let's discuss how AI automation can transform your operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you have a specific automation project in mind or just want to explore the possibilities, 
                  I'd love to hear from you. Every great automation starts with a conversation.
                </p>

                {/* Benefits list */}
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 animate-fade-in-up animation-delay-100">
                <a
                  href="mailto:radibeshan@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-glow hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email me at</p>
                    <p className="font-medium group-hover:text-primary transition-colors">radibeshan@gmail.com</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-glow hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Book a free call</p>
                    <p className="font-medium group-hover:text-primary transition-colors">Schedule on Calendly</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response time</p>
                    <p className="font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in-up animation-delay-200">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border h-12 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-border h-12 focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                    Tell me about your automation needs
                  </label>
                  <Textarea
                    placeholder="Describe your project, challenges, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-secondary border-border resize-none focus:border-primary transition-all duration-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
