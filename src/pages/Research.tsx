import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Research, OtherExperience } from "@/lib/portfolioData";
import { BookOpen, Award } from "lucide-react";

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
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Research Publications */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">Research Publications</h1>
                <p className="text-xl text-muted-foreground">
                  Published papers and ongoing research
                </p>
              </div>

              <div className="space-y-6">
                {research.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-display font-semibold text-foreground leading-relaxed">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.journal} • {item.year}
                        </p>
                        <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium ${
                          item.status === 'Published' 
                            ? 'bg-primary/10 text-primary border border-primary/20' 
                            : 'bg-accent/10 text-accent border border-accent/20'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Experiences */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Other Experiences</h2>
                <p className="text-xl text-muted-foreground">
                  Additional professional and extracurricular activities
                </p>
              </div>

              <div className="space-y-6">
                {otherExp.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-2xl font-display font-semibold text-foreground">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-primary font-medium">{exp.organization}</p>
                          <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
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
