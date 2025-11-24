import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Education } from "@/lib/portfolioData";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-6 text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">
                Education
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Academic journey and educational achievements that have shaped my expertise 
                in computer science and software engineering.
              </p>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={edu.id}
                  className="overflow-hidden hover-scale glow-card border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-xl bg-background border-2 border-primary/20">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-3">
                          {edu.degree}
                        </CardTitle>
                        <div className="space-y-2">
                          <p className="text-xl text-primary font-semibold flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            {edu.institution}
                          </p>
                          <p className="text-base text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {edu.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EducationPage;
