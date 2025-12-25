import { useState, Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Lazy load the 3D component for performance
const Contact3DLazy = lazy(() => import('./Contact3D'));

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

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly at radibeshan@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Side - Form */}
            <div className="order-2 lg:order-1">
              {/* Bold Heading */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 animate-fade-in-up">
                Contact<span className="text-primary">.</span>
              </h2>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up animation-delay-100">
                {/* Name Field */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-foreground tracking-wide">
                    Your Name
                  </label>
                  <Input
                    placeholder="What's your good name?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/80 border-0 h-14 text-base placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/50 transition-all duration-300 rounded-lg"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-foreground tracking-wide">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="What's your web address?"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/80 border-0 h-14 text-base placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/50 transition-all duration-300 rounded-lg"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-foreground tracking-wide">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="What you want to say?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary/80 border-0 text-base placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/50 transition-all duration-300 rounded-lg resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full sm:w-auto px-10 group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-border/30 animate-fade-in-up animation-delay-200">
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <a 
                    href="mailto:radibeshan@gmail.com" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    radibeshan@gmail.com
                  </a>
                  <span className="text-border">•</span>
                  <a 
                    href="tel:+8801842437899" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    01842437899
                  </a>
                  <span className="text-border">•</span>
                  <span>Response within 24h</span>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Animation */}
            <div className="order-1 lg:order-2 h-[400px] lg:h-[600px] relative">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                </div>
              }>
                <Contact3DLazy />
              </Suspense>
              
              {/* Glow effect behind sphere */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
