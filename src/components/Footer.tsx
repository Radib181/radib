import { Linkedin, Facebook, Mail, ArrowUpRight, Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/radib-bhuyian-428290386/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61583476357004",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Radib181",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/radibbhuyian/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:radibeshan@gmail.com",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <p className="text-2xl font-bold text-gradient mb-3">Radib Bhuyian</p>
              <p className="text-muted-foreground mb-6">
                AI Automation Expert helping businesses scale with intelligent workflow automation.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:radibeshan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    radibeshan@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+8801842437899"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    01842437899
                  </a>
                </li>
                <li className="text-muted-foreground">
                  Available for freelance & contract work
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Radib Bhuyian. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with 💙 for automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
