import { Brain, Cpu, Database, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Expertise in neural network architectures, transformers, and cutting-edge AI models"
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
      icon: TrendingUp,
      title: "Business Impact",
      description: "Translating AI capabilities into measurable business outcomes"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 neural-pattern opacity-50" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Me</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Passionate About <span className="gradient-text">AI Innovation</span>
            </h3>
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 8 years of experience in artificial intelligence and machine learning, 
                I've dedicated my career to pushing the boundaries of what's possible with intelligent systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans from academic research at leading institutions to deploying 
                production ML systems serving millions of users. I specialize in natural language 
                processing, computer vision, and building end-to-end ML infrastructure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on large language models, responsible AI, and helping organizations 
                leverage AI to solve complex real-world challenges.
              </p>
            </div>

            {/* Right: Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="gradient-border rounded-xl p-6 hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
