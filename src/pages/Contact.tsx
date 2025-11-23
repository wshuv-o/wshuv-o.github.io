import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, PersonalInfo } from "@/lib/portfolioData";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    initializeData();
    const data = getPortfolioData();
    setPersonalInfo(data.personalInfo);
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
                href={`tel:${personalInfo.phone}`}
                className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">{personalInfo.phone}</p>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
