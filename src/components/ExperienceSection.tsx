import { memo } from "react";
import { Building2, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    type: "work",
    title: "Data Scientist",
    company: "STORViX",
    period: "2025 - 2026",
    description: "Built production NLP models, improved model accuracy by 40%, deployed ML pipelines."
  },
  {
    type: "education",
    title: "AI and Machine Learning higher vet",
    company: "ITS Angelo Rizzoli",
    period: "2024 - 2026",
    description: "Specialized in machine learning and artificial intelligence. Published 1 research paper."
  },
  {
    type: "education",
    title: "Automation Engineering bachelor",
    company: "Politecnico di Milano",
    period: "2020 - 2023",
    description: "Studied algorythm basics and advanced mathematics, C programming and software engineering."
  }
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const { ref, isVisible, hasBeenVisible } = useScrollAnimation({ threshold: 0.15 });
  const getAnimationClass = () => {
    if (isVisible) return 'scroll-visible-smooth';
    if (hasBeenVisible) return 'scroll-fade-out';
    return 'scroll-hidden';
  };

  return (
    <div
      ref={ref}
      className={`relative flex gap-3 sm:gap-6 ${getAnimationClass()}`}
    >
      <div className="relative z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shrink-0">
        {exp.type === "education" ? (
          <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
        ) : (
          <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
        )}
      </div>
      <div className="flex-1 min-w-0 premium-hover gradient-border rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition-transform duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
          <h4 className="font-display font-semibold text-base sm:text-lg text-foreground">{exp.title}</h4>
          <span className="text-xs sm:text-sm text-primary font-medium">{exp.period}</span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground font-medium mb-1 sm:mb-2">{exp.company}</p>
        <p className="text-xs sm:text-sm text-muted-foreground">{exp.description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = memo(() => {
  const { ref: titleRef, isVisible: titleVisible, hasBeenVisible: titleHasBeenVisible } = useScrollAnimation({ threshold: 0.2 });

  const getTitleClass = () => {
    if (titleVisible) return 'scroll-visible-smooth';
    if (titleHasBeenVisible) return 'scroll-fade-out';
    return 'scroll-hidden';
  };

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 neural-pattern opacity-50" />
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={titleRef} className={`text-center mb-12 sm:mb-16 ${getTitleClass()}`}>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Experience</h2>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Professional <span className="gradient-text">Journey</span>
            </h3>
          </div>
          <div className="relative">
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
