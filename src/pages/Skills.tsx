import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Skill } from "@/lib/portfolioData";

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setSkills(data.skills);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">Skills</h1>
              <p className="text-xl text-muted-foreground">
                Technologies and expertise I work with
              </p>
            </div>

            <div className="grid gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.id} 
                  className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h2 className="text-2xl font-display font-semibold mb-6 text-primary">
                    {skill.category}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
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

export default Skills;
