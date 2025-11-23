import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Project } from "@/lib/portfolioData";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setProjects(data.projects);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">Projects</h1>
              <p className="text-xl text-muted-foreground">
                Featured work and recent developments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {project.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="mt-2">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
