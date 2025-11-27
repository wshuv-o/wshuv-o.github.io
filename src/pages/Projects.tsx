import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Project, AcademicProject } from "@/lib/portfolioData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [academicProjects, setAcademicProjects] = useState<AcademicProject[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setProjects(data.projects);
    setAcademicProjects(data.academicProjects);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">Professional Projects</h1>
              <p className="text-xl text-muted-foreground">
                Real-world solutions and production applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {project.image && (
                    <div className="card-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-display">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                    <CardDescription className="text-base mt-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.details && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.details}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies && project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-md bg-muted text-foreground text-xs font-medium border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  {(project.link || project.github) && (
                    <CardFooter className="gap-3">
                      {project.link && (
                        <Button variant="default" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Projects Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Academic Projects</h2>
              <p className="text-xl text-muted-foreground">
                Research and academic work
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {academicProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {project.image && (
                    <div className="card-image">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="space-y-3">
                      <Badge variant="outline" className="w-fit category-badge">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-2xl font-display">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base mt-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.details && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.details}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies && project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-md bg-muted text-foreground text-xs font-medium border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  {project.link && (
                    <CardFooter>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
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
