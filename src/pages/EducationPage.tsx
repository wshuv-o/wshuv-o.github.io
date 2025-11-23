import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Education } from "@/lib/portfolioData";
import { GraduationCap } from "lucide-react";

const EducationPage = () => {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setEducation(data.education || []);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">Education</h1>
              <p className="text-xl text-muted-foreground">
                Academic background and qualifications
              </p>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h2 className="text-2xl font-display font-semibold text-foreground">
                          {edu.degree}
                        </h2>
                        <p className="text-lg text-primary font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
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

export default EducationPage;
