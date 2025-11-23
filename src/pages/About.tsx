import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient">About Me</h1>
              <p className="text-xl text-muted-foreground">
                Passionate about building intelligent systems and automation
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-border glow-card">
                <h2 className="text-2xl font-display font-semibold mb-4 text-primary">Background</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As a Lead Data Engineer and Full-Stack Developer, I specialize in creating intelligent automation systems 
                  that transform how businesses operate. My expertise spans from building sophisticated AI agents and RAG 
                  pipelines to architecting scalable backend systems that handle millions of operations.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border glow-card">
                <h2 className="text-2xl font-display font-semibold mb-4 text-primary">Expertise</h2>
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
                <h2 className="text-2xl font-display font-semibold mb-4 text-primary">Interests</h2>
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

export default About;
