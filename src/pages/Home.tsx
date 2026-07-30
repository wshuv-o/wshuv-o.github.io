import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPortfolioData, initializeData, PersonalInfo } from "@/lib/portfolioData";

const Home = () => {
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
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Applied AI Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Backend engineer with four years of production experience across SaaS, fintech,
              and US real estate clients. Building agent runtimes, RAG pipelines, and the
              infrastructure they run on.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/projects">
                <Button size="lg" className="gradient-lovable hover:opacity-90 transition-opacity">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="hover-scale">
                  Get in Touch
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="text-sm">{personalInfo.phone}</span>
              </a>
              <a href={`https://github.com${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a href={`https://linkedin.com/in${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "AI & Automation", desc: "Building intelligent systems with LangChain, RAG pipelines, and agentic workflows" },
              { title: "Backend Architecture", desc: "Expertise in FastAPI, Node.js, and scalable microservices" },
              { title: "DevOps & Infrastructure", desc: "Docker, CI/CD, VPS deployments, and cloud optimization" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border glow-card hover-scale">
                <h3 className="text-xl font-display font-semibold mb-3 text-gradient">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient">About Me</h2>
              <p className="text-xl text-muted-foreground">
                Passionate about building intelligent systems and automation
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border glow-card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As an Applied AI Engineer, I build agent harnesses that do real work — tools that read and
                  write live Excel models and verify their own output, campaign operators that run entirely
                  over WhatsApp — along with the extraction engines, RAG pipelines, and backend
                  infrastructure underneath them.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border glow-card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Expertise</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">AI & Automation:</strong> I've built multiple AI-powered platforms, 
                    including customer experience systems with agentic workflows, embedding-based search, and custom LLM flows. 
                    My work has automated hundreds of hours of manual processes.
                  </p>
                  <p>
                    <strong className="text-foreground">Backend Development:</strong> Expert in FastAPI, AdonisJS, and NestJS, 
                    I design robust backend architectures that scale. From real-time WebSocket systems to complex data pipelines, 
                    I build infrastructure that powers modern applications.
                  </p>
                  <p>
                    <strong className="text-foreground">Infrastructure & DevOps:</strong> Proficient in Docker, CI/CD automation, 
                    VPS deployments with Nginx/PM2, and orchestrating services with Redis. I ensure systems are reliable, scalable, 
                    and maintainable.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border glow-card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Interests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about AI agents, automation systems, scalable SaaS infrastructure, and hybrid backend 
                  architectures. I love exploring how emerging technologies can solve real-world problems and continuously 
                  push the boundaries of what's possible with modern software development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
