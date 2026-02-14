import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ChevronDown } from "lucide-react";

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-pattern">
      {/* Animated background elements — GPU-composited */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-56 md:w-80 h-56 md:h-80 bg-accent/10 rounded-full blur-3xl will-change-transform" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 sm:mb-8 mt-20 md:mt-0 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Michele Bilotta</span>
            <br />
            <span className="gradient-text">AI & ML Specialist</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transforming complex data into intelligent solutions. Specializing in deep learning,
            NLP, and scalable ML systems that drive real business impact.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://www.linkedin.com/in/mbilotta/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 md:mt-16 mb-16 md:mb-0 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '2', label: 'Years Experience' },
              { value: '20+', label: 'Programming Projects' },
              { value: '1', label: 'Publication' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 text-primary shadow-sm" />
        </a>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
