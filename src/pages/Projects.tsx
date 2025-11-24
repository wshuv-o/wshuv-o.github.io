import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Project } from "@/lib/portfolioData";
import { ExternalLink, Github, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setProjects(data.projects || []);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-6 text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">
                Professional Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-world applications and solutions built for clients and organizations, 
                showcasing production-ready code and industry best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover-scale glow-card border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {project.image && (
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className="text-xs text-muted-foreground font-medium">{project.period}</span>
                    </div>
                    <CardTitle className="text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {project.details && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.details}
                      </p>
                    )}

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
                  </CardContent>

                  {(project.link || project.github) && (
                    <CardFooter className="flex gap-3">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="default" className="w-full">
                            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full">
                            GitHub <Github className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
