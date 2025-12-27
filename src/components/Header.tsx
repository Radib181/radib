import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["about", "skills", "projects", "why-me", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#why-me", label: "Why Me", id: "why-me" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-primary/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Premium Animated Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
              
              {/* Main logo container */}
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {/* Inner pattern */}
                <div className="absolute inset-0.5 rounded-[10px] bg-gradient-to-br from-primary/90 to-accent/90 opacity-80" />
                
                {/* Letter */}
                <span className="relative text-lg font-black text-background drop-shadow-lg">R</span>
                
                {/* Sparkle effect */}
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-accent animate-pulse" />
              </div>
            </div>
            
            {/* Name with premium gradient */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent group-hover:from-primary group-hover:via-accent group-hover:to-foreground transition-all duration-500" style={{ backgroundSize: '200% 200%' }}>
                Radib Bhuyian
              </span>
              <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground uppercase hidden sm:block">
                AI Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation with premium styling */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Hover background */}
                <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                
                {/* Active indicator */}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button with glow */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="default" 
              className="shadow-button hover:shadow-button-hover group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Book a Call
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden relative p-2 text-foreground rounded-lg hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu with premium animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-border/50">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-4 shadow-button" asChild>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book a Call
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
