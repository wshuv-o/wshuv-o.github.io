import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Education } from "@/lib/portfolioData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const OtherActivities = () => {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setEducation(data.education);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Education Section */}
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
                <Card 
                  key={edu.id} 
                  className="glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-2xl font-display">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg text-primary font-medium">
                          {edu.institution}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Tutorials & Activities</h2>
              <p className="text-xl text-muted-foreground">
                Teaching, workshops, and community contributions
              </p>
            </div>

            <div className="space-y-8">
              <Card className="glow-card hover-scale">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-2xl font-display">Tutorial Content</CardTitle>
                      <CardDescription className="text-base">
                        Coming soon - tutorials and educational content will be added here
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    This section will showcase tutorials, workshops, and other educational activities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OtherActivities;
