import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Research, OtherExperience } from "@/lib/portfolioData";
import { FileText, Calendar, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ResearchPage = () => {
  const [research, setResearch] = useState<Research[]>([]);
  const [otherExp, setOtherExp] = useState<OtherExperience[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setResearch(data.research || []);
    setOtherExp(data.otherExperiences || []);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Research Publications */}
            <div className="space-y-12">
              <div className="space-y-6 text-center">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">
                  Research Publications
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Academic research contributions spanning quantum computing, federated learning, 
                  and AI applications in healthcare published in prestigious conferences and journals.
                </p>
              </div>

              <div className="space-y-8">
                {research.map((paper, index) => (
                  <Card
                    key={paper.id}
                    className="hover-scale glow-card border-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <CardTitle className="text-2xl leading-tight">
                            {paper.title}
                          </CardTitle>
                          <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base">
                            <span className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {paper.authors}
                            </span>
                            <span className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {paper.year}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Published in:</h4>
                        <p className="text-foreground font-medium text-lg">{paper.venue}</p>
                      </div>

                      {paper.abstract && (
                        <>
                          <Separator />
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Abstract:</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {paper.abstract}
                            </p>
                          </div>
                        </>
                      )}

                      {paper.keywords && paper.keywords.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-3">Keywords:</h4>
                          <div className="flex flex-wrap gap-2">
                            {paper.keywords.map((keyword, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground border border-border text-sm font-medium"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Experiences */}
            <div className="space-y-12">
              <div className="space-y-6 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  Other Professional Experience
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Additional roles and contributions including interpretation, robotics research, 
                  and arts organization spanning technical and creative domains.
                </p>
              </div>

              <div className="space-y-6">
                {otherExp.map((exp, index) => (
                  <Card
                    key={exp.id}
                    className="hover-scale glow-card border-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <CardTitle className="text-2xl">
                            {exp.position}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            <span className="text-primary font-semibold">{exp.organization}</span>
                            <span className="mx-2">•</span>
                            <span>{exp.period}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResearchPage;
