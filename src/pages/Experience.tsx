import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, Experience, Skill, OtherExperience } from "@/lib/portfolioData";
import { Briefcase, Code, Database, Cloud, Cpu, Globe, Zap } from "lucide-react";

const iconMap: Record<string, any> = {
  code: Code,
  database: Database,
  cloud: Cloud,
  cpu: Cpu,
  globe: Globe,
  zap: Zap,
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  green: "bg-green-500/10 text-green-500 border-green-500/20",
  purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  red: "bg-red-500/10 text-red-500 border-red-500/20",
  cyan: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [otherExp, setOtherExp] = useState<OtherExperience[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setExperiences(data.experiences);
    setSkills(data.skills);
    setOtherExp(data.otherExperiences);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Skills Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">Skills</h1>
              <p className="text-xl text-muted-foreground">
                Technologies and expertise I work with
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = iconMap[skill.icon || "code"];
                const colorClass = colorMap[skill.color || "blue"];
                
                return (
                  <div 
                    key={skill.id} 
                    className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl border ${colorClass}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-display font-semibold text-foreground">
                        {skill.category}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skill.items.map((item, i) => (
                        <div key={i} className="relative group">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="h-8 w-8 object-contain transition-transform group-hover:scale-110"
                          />
                          {/* tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                                          opacity-0 group-hover:opacity-100 
                                          pointer-events-none transition 
                                          bg-black text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Professional Experience</h2>
              <p className="text-xl text-muted-foreground">
                Work history and accomplishments
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-foreground">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
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
        </section>

        {/* Other Professional Experience Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">Other Professional Experience</h2>
              <p className="text-xl text-muted-foreground">
                Additional roles and contributions
              </p>
            </div>

            <div className="space-y-8">
              {otherExp.map((exp, index) => (
                <div
                  key={exp.id}
                  className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-foreground">
                          {exp.position}
                        </h3>
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-accent font-medium hover:underline"
                          >
                            {exp.organization}
                          </a>
                        ) : (
                          <p className="text-lg text-accent font-medium">{exp.organization}</p>
                        )}
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
        </section>
      </main>
    </div>
  );
};

export default ExperiencePage;
