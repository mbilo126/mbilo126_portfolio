import { memo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  { title: "Languages & Frameworks", skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "JAX", "SQL"] },
  { title: "ML & AI", skills: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "LLMs", "RAG"] },
  { title: "Data & Cloud", skills: ["AWS SageMaker", "GCP Vertex AI", "Kubernetes", "Apache Spark", "Airflow", "MLflow"] },
  { title: "Tools & Practices", skills: ["Git", "Docker", "CI/CD", "A/B Testing", "Feature Engineering", "Model Optimization"] },
];

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const { ref, isVisible, hasBeenVisible } = useScrollAnimation({ threshold: 0.15 });
  const getAnimationClass = () => {
    if (isVisible) return 'scroll-visible-smooth';
    if (hasBeenVisible) return 'scroll-fade-out';
    return 'scroll-hidden';
  };

  return (
    <div
      ref={ref}
      className={`space-y-3 sm:space-y-4 ${getAnimationClass()}`}
    >
      <h4 className="font-display font-semibold text-sm sm:text-base text-foreground border-l-2 border-primary pl-3 sm:pl-4">
        {category.title}
      </h4>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = memo(() => {
  const { ref: titleRef, isVisible: titleVisible, hasBeenVisible: titleHasBeenVisible } = useScrollAnimation({ threshold: 0.2 });

  const getTitleClass = () => {
    if (titleVisible) return 'scroll-visible-smooth';
    if (titleHasBeenVisible) return 'scroll-fade-out';
    return 'scroll-hidden';
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className={`text-center mb-12 sm:mb-16 ${getTitleClass()}`}>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Skills</h2>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Technical <span className="gradient-text">Expertise</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
SkillsSection.displayName = "SkillsSection";
export default SkillsSection;
