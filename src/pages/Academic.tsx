import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, AcademicProject } from "@/lib/portfolioData";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Academic = () => {
  const [projects, setProjects] = useState<AcademicProject[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setProjects(data.academicProjects || []);
  }, []);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-6 text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">
                Academic Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive collection of university coursework and research projects spanning multiple domains 
                including AI, blockchain, IoT, and web development.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-badge ${
                    selectedCategory === category ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover-scale glow-card border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {project.image && (
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-lg bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium border border-border">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="flex items-start gap-2">
                      <Code2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-xl">{project.title}</span>
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
                            className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground border border-border text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>

                  {project.link && (
                    <CardFooter>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Academic;
