import { Brain, Cpu, Database, Layers } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Deep knowledge of neural network architectures, transformers, and cutting-edge AI models"
    },
    {
      icon: Cpu,
      title: "MLOps",
      description: "Building scalable ML pipelines and production-ready AI systems"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Processing and analyzing massive datasets for actionable insights"
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      description: "Building end-to-end web applications"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 neural-pattern opacity-50" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Me</h2>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Passionate About <span className="gradient-text">AI Innovation</span>
            </h3>
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Bio */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                AI and Machine Learning with a strong focus on designing and deploying predictive models
                and intelligent systems to tackle complex problems and deliver practical, scalable solutions.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My background spans both research-oriented and production environments, where I've contributed to
                building end-to-end ML pipelines and integrating models into real-world systems.
                I work primarily with Python, leveraging modern deep learning frameworks, and I have a strong interest in NLP, advanced ML models, and applied AI.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Currently, I'm particularly interested in large-scale and next-generation AI models, responsible AI, and real-world AI applications,
                with the goal of helping organizations turn AI potential into measurable impact.
              </p>
            </div>

            {/* Right: Highlight cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="gradient-border rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
