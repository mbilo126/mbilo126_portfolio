import { Brain, Bot, BarChart3, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "NLP Sentiment Analyzer",
      tech: "Python, Transformers, FastAPI",
      description: "End-to-end sentiment analysis pipeline processing 10K+ reviews daily with 94% accuracy using fine-tuned BERT models.",
      icon: Brain,
      pdfUrl: "/pdfs/nlp-sentiment-analyzer.pdf",
    },
    {
      title: "Conversational AI Chatbot",
      tech: "LangChain, RAG, OpenAI, Pinecone",
      description: "Built a retrieval-augmented generation chatbot for enterprise knowledge bases, reducing support tickets by 35%.",
      icon: Bot,
      pdfUrl: "/pdfs/conversational-ai-chatbot.pdf",
    },
    {
      title: "Predictive Maintenance System",
      tech: "PyTorch, Time Series, MLflow",
      description: "Developed LSTM-based anomaly detection for industrial IoT sensors, predicting equipment failures 48 hours in advance.",
      icon: BarChart3,
      pdfUrl: "/pdfs/predictive-maintenance.pdf",
    },
    {
      title: "Computer Vision Quality Control",
      tech: "TensorFlow, OpenCV, Docker",
      description: "Real-time defect detection system for manufacturing lines achieving 99.2% precision at 30 FPS inference speed.",
      icon: Eye,
      pdfUrl: "/pdfs/computer-vision-qc.pdf",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Projects</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="gradient-text">Work</span>
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

            <div className="space-y-12">
              {projects.map((project, index) => {
                const isLeft = index % 2 === 0;
                const Icon = project.icon;

                return (
                  <div key={index} className="relative flex items-center">
                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-card border-2 border-primary/30 items-center justify-center shrink-0 hidden md:flex">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full md:w-[calc(50%-2.5rem)] gradient-border rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300 ${
                        isLeft ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        <Icon className="w-5 h-5 text-primary" />
                        <h4 className="font-display font-semibold text-lg text-foreground">{project.title}</h4>
                      </div>
                      <h4 className="font-display font-semibold text-lg text-foreground hidden md:block mb-2">{project.title}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{project.tech}</p>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(project.pdfUrl, '_blank')}
                      >
                        <FileText className="w-4 h-4" />
                        View Project PDF
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
