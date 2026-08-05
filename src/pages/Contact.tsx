import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, PersonalInfo, WebProfile } from "@/lib/portfolioData";
import { Mail, Github, Linkedin, Globe, ExternalLink } from "lucide-react";

const Contact = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [webProfiles, setWebProfiles] = useState<WebProfile[]>([]);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setPersonalInfo(data.personalInfo);
    setWebProfiles(data.webProfiles || []);
  }, []);

  if (!personalInfo) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Let's discuss your next project or opportunity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">{personalInfo.email}</p>
                  </div>
                </div>
              </a>

              <a 
                href={`https://github.com${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">GitHub</h3>
                    <p className="text-muted-foreground">{personalInfo.github}</p>
                  </div>
                </div>
              </a>

              <a 
                href={`https://linkedin.com/in${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">LinkedIn</h3>
                    <p className="text-muted-foreground">{personalInfo.linkedin}</p>
                  </div>
                </div>
              </a>
            </div>

            {webProfiles.length > 0 && (
              <div className="space-y-6 pt-8">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">Elsewhere on the Web</h2>
                  <p className="text-lg text-muted-foreground">
                    Publications, research profiles, and communities
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {webProfiles.map((profile) => (
                    <a
                      key={profile.id}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-card border border-border glow-card hover-scale group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <h3 className="font-display font-semibold">{profile.name}</h3>
                        <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {profile.note && (
                        <p className="text-sm text-muted-foreground">{profile.note}</p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
