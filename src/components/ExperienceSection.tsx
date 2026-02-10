import { Building2, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
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

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 neural-pattern opacity-50" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Experience</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Professional <span className="gradient-text">Journey</span>
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shrink-0">
                    {exp.type === "education" ? (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    ) : (
                      <Building2 className="w-6 h-6 text-primary" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 gradient-border rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-display font-semibold text-lg text-foreground">{exp.title}</h4>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
