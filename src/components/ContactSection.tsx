import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get in Touch</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-10">
            Interested in collaboration, speaking opportunities, or just want to chat about AI? 
            I'd love to hear from you.
          </p>

          {/* Main CTA */}
          <Button variant="hero" size="xl" className="mb-12" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              View My LinkedIn Profile
            </a>
          </Button>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <div className="container px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI & Machine Learning Specialist. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
