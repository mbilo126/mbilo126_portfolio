const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "JAX", "SQL"]
    },
    {
      title: "ML & AI",
      skills: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "LLMs", "RAG"]
    },
    {
      title: "Data & Cloud",
      skills: ["AWS SageMaker", "GCP Vertex AI", "Kubernetes", "Apache Spark", "Airflow", "MLflow"]
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "Docker", "CI/CD", "A/B Testing", "Feature Engineering", "Model Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Skills</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Technical <span className="gradient-text">Expertise</span>
            </h3>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-display font-semibold text-foreground border-l-2 border-primary pl-4">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
