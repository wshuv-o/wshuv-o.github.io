import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, FileText, Briefcase, Newspaper, FlaskConical, Wrench, Users, Globe, Sparkles, Milestone } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useEffect, useState, type ReactNode } from "react";
import {
  getPortfolioData,
  initializeData,
  PersonalInfo,
  Experience,
  Project,
  AcademicProject,
  Research,
  OtherExperience,
  Skill,
  WebProfile,
  NewsItem,
  MiscItem,
  TimelineItem,
} from "@/lib/portfolioData";

const SELF_NAME = "Md Wahiduzzaman Suva";

// Co-authors with personal pages; patterns cover the spelling variants
// used across different papers.
const AUTHOR_LINKS: { pattern: RegExp; url: string }[] = [
  { pattern: /Md\.? Imtiaj Alam Sajin/, url: "https://imtiaj-sajin.github.io/" },
  { pattern: /Esm[- ]E\.? Moula Chowdhury Abha/, url: "https://esme.framer.ai" },
  { pattern: /Md Tauhidul Islam/, url: "https://github.com/IamTauhid" },
];

// Bold the site owner's name and hyperlink known co-authors inside an
// author string.
const renderAuthors = (authors: string) => {
  const nodes: ReactNode[] = [];
  let rest = authors;
  let key = 0;
  while (rest.length > 0) {
    let best: { index: number; length: number; render: (t: string) => ReactNode } | null = null;
    const selfIdx = rest.indexOf(SELF_NAME);
    if (selfIdx !== -1) {
      best = {
        index: selfIdx,
        length: SELF_NAME.length,
        render: (t) => <span className="font-semibold text-foreground">{t}</span>,
      };
    }
    for (const { pattern, url } of AUTHOR_LINKS) {
      const m = rest.match(pattern);
      if (m && m.index !== undefined && (best === null || m.index < best.index)) {
        best = {
          index: m.index,
          length: m[0].length,
          render: (t) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary transition-colors"
            >
              {t}
            </a>
          ),
        };
      }
    }
    if (!best) {
      nodes.push(rest);
      break;
    }
    if (best.index > 0) nodes.push(rest.slice(0, best.index));
    nodes.push(<span key={key++}>{best.render(rest.slice(best.index, best.index + best.length))}</span>);
    rest = rest.slice(best.index + best.length);
  }
  return nodes;
};

// Thumbnail to show in a hover popover for known link types.
const previewFor = (url: string): string | null => {
  const yt = url.match(/youtube\.com\/watch\?v=([\w-]+)/);
  if (yt) return `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;
  const gh = url.match(/^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)\/?$/);
  if (gh && gh[2] !== "prodigyagi") return `https://opengraph.githubassets.com/1/${gh[1]}/${gh[2]}`;
  return null;
};

// Render [text](url) spans in plain description strings as anchors,
// with an image preview on hover where one is derivable.
const linkify = (text: string) => {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const preview = previewFor(m[2]);
    parts.push(
      <a
        key={key++}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group/pv text-primary underline underline-offset-2"
      >
        {m[1]}
        {preview && (
          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover/pv:block z-50 w-64 rounded-lg border border-border bg-card p-1 shadow-xl">
            <img src={preview} alt="" loading="lazy" className="rounded-md w-full" />
          </span>
        )}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};

const SectionHeading = ({ icon: Icon, children }: { icon: any; children: ReactNode }) => (
  <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-display font-bold text-gradient mb-6">
    <Icon className="h-6 w-6 text-primary shrink-0" />
    {children}
  </h2>
);

const Home = () => {
  const [data, setData] = useState<any>(null);
  const [showAllAcademic, setShowAllAcademic] = useState(false);
  const [showAllPapers, setShowAllPapers] = useState(false);

  useEffect(() => {
    initializeData();
    setData(getPortfolioData());
  }, []);

  // Scroll to hash target once data has rendered
  useEffect(() => {
    if (data && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  if (!data) return null;

  const personalInfo: PersonalInfo = data.personalInfo;
  const experiences: Experience[] = data.experiences || [];
  const projects: Project[] = data.projects || [];
  const academicProjects: AcademicProject[] = data.academicProjects || [];
  const research: Research[] = data.research || [];
  const otherExperiences: OtherExperience[] = data.otherExperiences || [];
  const skills: Skill[] = data.skills || [];
  const webProfiles: WebProfile[] = data.webProfiles || [];
  const news: NewsItem[] = data.news || [];
  const misc: MiscItem[] = data.misc || [];
  const timeline: TimelineItem[] = data.timeline || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-12 pb-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* ===== About / Hero ===== */}
          <section id="about" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <img
                src="/100506316.jpg"
                alt={personalInfo.name}
                className="w-36 h-36 rounded-2xl object-cover border border-border shadow-lg shrink-0"
              />
              <div className="space-y-3 min-w-0">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient">
                  {personalInfo.name}
                </h1>
                <p className="text-lg text-muted-foreground font-medium">
                  Backend &amp; AI engineer
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I build agent harnesses, RAG pipelines, and document extraction systems for
                  SaaS, fintech, and US real estate clients. On the side, I do research on
                  brain-computer interfaces and quantum machine learning.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Dhaka, Bangladesh (GMT+6)</span>
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 underline underline-offset-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" /> {personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 underline underline-offset-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" /> {personalInfo.phone}
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {webProfiles.map((p) => (
                    <a
                      key={p.id}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </section>

          {/* ===== News ===== */}
          {news.length > 0 && (
            <section id="news" className="scroll-mt-24">
              <SectionHeading icon={Newspaper}>News</SectionHeading>
              <ul className="space-y-3">
                {news.map((n) => (
                  <li key={n.id} className="flex gap-4 text-sm leading-relaxed">
                    <span className="font-semibold text-primary whitespace-nowrap w-20 shrink-0">{n.date}</span>
                    <span className="text-muted-foreground">
                      {n.text}{" "}
                      {n.link && (
                        <a href={n.link} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 inline-flex items-center gap-0.5">
                          link<ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {n.image && (
                        <img
                          src={n.image}
                          alt=""
                          loading="lazy"
                          className="block mt-2 rounded-lg border border-border w-40"
                        />
                      )}
                      {n.linkedinEmbed && (
                        <iframe
                          src={n.linkedinEmbed}
                          height="380"
                          frameBorder="0"
                          allowFullScreen
                          title={`LinkedIn post: ${n.text}`}
                          loading="lazy"
                          className="block mt-2 rounded-lg border border-border w-full max-w-sm"
                        />
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ===== Journey ===== */}
          {timeline.length > 0 && (
            <section id="journey" className="scroll-mt-24">
              <SectionHeading icon={Milestone}>Journey</SectionHeading>
              <div className="border-l-2 border-border pl-6 space-y-8">
                {timeline.map((t) => (
                  <div key={t.id} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background" />
                    <div className="flex gap-4 items-start">
                      {t.image && (
                        <img
                          src={t.image}
                          alt=""
                          loading="lazy"
                          className="w-10 h-10 rounded-md border border-border object-contain bg-white p-0.5 shrink-0"
                        />
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-muted-foreground">{t.period}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{linkify(t.text)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ===== Experience ===== */}
          <section id="experience" className="scroll-mt-24">
            <SectionHeading icon={Briefcase}>Experience</SectionHeading>
            <div className="space-y-6 border-l-2 border-border pl-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background" />
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display font-semibold text-lg text-foreground">{exp.position}</h3>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium underline underline-offset-2"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="text-primary font-medium">{exp.company}</span>
                    )}
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{linkify(exp.description)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Products & Projects ===== */}
          <section id="projects" className="scroll-mt-24">
            <SectionHeading icon={Wrench}>Projects</SectionHeading>
            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="rounded-xl bg-card border border-border glow-card overflow-hidden flex flex-col">
                  {project.image && (
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-40 object-cover object-top border-b border-border"
                      loading="lazy"
                    />
                  )}
                  <div className="p-5 space-y-2 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-semibold text-foreground leading-snug">{project.title}</h3>
                    <div className="flex gap-2 shrink-0">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${project.title} website`}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${project.title} source`}>
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{project.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-muted text-xs text-foreground border border-border">{tech}</span>
                      ))}
                    </div>
                  )}
                  {project.linkedinEmbed && (
                    <iframe
                      src={project.linkedinEmbed}
                      height="669"
                      width="504"
                      frameBorder="0"
                      allowFullScreen
                      title={`LinkedIn post: ${project.title}`}
                      loading="lazy"
                      className="mt-3 rounded-lg border border-border w-full max-w-full"
                    />
                  )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Publications ===== */}
          <section id="publications" className="scroll-mt-24">
            <SectionHeading icon={FileText}>Publications</SectionHeading>
            <div className="space-y-4">
              {research.filter((p) => !p.secondary || showAllPapers).map((paper) => (
                <div key={paper.id} className="border-l-2 border-border pl-4">
                  <div className="leading-snug">
                    {paper.link ? (
                      <a href={paper.link} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-2 hover:text-primary transition-colors">
                        {paper.title}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{paper.title}</span>
                    )}{" "}
                    <span className="text-primary font-medium whitespace-nowrap">
                      {paper.venueShort || paper.venue} {paper.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{renderAuthors(paper.authors)}</p>
                </div>
              ))}
            </div>
            {research.some((p) => p.secondary) && (
              <button
                onClick={() => setShowAllPapers(!showAllPapers)}
                className="mt-4 block text-sm text-primary underline underline-offset-2"
              >
                {showAllPapers
                  ? "Show fewer papers"
                  : `Show ${research.filter((p) => p.secondary).length} more technical papers`}
              </button>
            )}
            <p className="mt-4 text-sm text-muted-foreground">
              Also on{" "}
              <a
                href="https://scholar.google.com/citations?user=uwTI2-sAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                Google Scholar
              </a>
            </p>
          </section>

          {/* ===== Research & Academic Projects ===== */}
          <section id="academic" className="scroll-mt-24">
            <SectionHeading icon={FlaskConical}>Academic Projects</SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {academicProjects.filter((p) => !p.secondary || showAllAcademic).map((project) => (
                <div key={project.id} className="p-4 rounded-xl bg-card border border-border glow-card space-y-1.5">
                  {project.images && project.images.length > 0 && (
                    <div className={`grid ${project.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-1.5 mb-2`}>
                      {project.images.map((img, i) => (
                        <img key={i} src={img} alt="" loading="lazy" className="rounded-md border border-border w-full h-24 object-cover" />
                      ))}
                    </div>
                  )}
                  <span className="text-[11px] uppercase tracking-wide font-semibold text-primary">{project.category}</span>
                  <div className="flex items-start justify-between gap-2">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-foreground underline underline-offset-2 hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </a>
                    ) : (
                      <span className="font-medium text-sm text-foreground leading-snug">{project.title}</span>
                    )}
                    {project.link && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                  {project.linkedinEmbed && (
                    <iframe
                      src={project.linkedinEmbed}
                      height="400"
                      frameBorder="0"
                      allowFullScreen
                      title={`LinkedIn post: ${project.title}`}
                      loading="lazy"
                      className="mt-2 rounded-lg border border-border w-full"
                    />
                  )}
                  {project.youtubeEmbed && (
                    <iframe
                      src={project.youtubeEmbed}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Gameplay video: ${project.title}`}
                      loading="lazy"
                      className="mt-2 rounded-lg border border-border w-full aspect-video"
                    />
                  )}
                </div>
              ))}
            </div>
            {academicProjects.some((p) => p.secondary) && (
              <button
                onClick={() => setShowAllAcademic(!showAllAcademic)}
                className="mt-4 text-sm text-primary underline underline-offset-2"
              >
                {showAllAcademic
                  ? "Show fewer projects"
                  : `Show ${academicProjects.filter((p) => p.secondary).length} more projects`}
              </button>
            )}
          </section>

          {/* ===== Skills ===== */}
          <section id="skills" className="scroll-mt-24">
            <SectionHeading icon={Wrench}>Skills</SectionHeading>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm font-semibold text-foreground w-44 shrink-0">{skill.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card border border-border text-xs text-muted-foreground">
                        <img src={item.icon} alt="" className="h-4 w-4 object-contain" loading="lazy" />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Activities & Service ===== */}
          <section id="activities" className="scroll-mt-24">
            <SectionHeading icon={Users}>Activities</SectionHeading>
            <div className="space-y-4">
              {otherExperiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-medium text-foreground">{exp.position}</span>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium underline underline-offset-2">
                        {exp.organization}
                      </a>
                    ) : (
                      <span className="text-primary text-sm font-medium">{exp.organization}</span>
                    )}
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{exp.description}</p>
                  {exp.image && (
                    <figure className="mt-3">
                      <img
                        src={exp.image}
                        alt=""
                        loading="lazy"
                        className="rounded-lg border border-border w-full max-w-md"
                      />
                      {exp.imageCaption && (
                        <figcaption className="text-xs text-muted-foreground mt-1.5 max-w-md">
                          {linkify(exp.imageCaption)}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {exp.images && exp.images.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-2xl">
                      {exp.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt=""
                          loading="lazy"
                          className="rounded-lg border border-border w-full h-28 object-cover"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ===== Misc ===== */}
          {misc.length > 0 && (
            <section id="misc" className="scroll-mt-24">
              <SectionHeading icon={Sparkles}>Misc</SectionHeading>
              <ul className="list-disc pl-5 space-y-2.5">
                {misc.map((item) => (
                  <li key={item.id} className="text-sm text-muted-foreground leading-relaxed">
                    {linkify(item.text)}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ===== Contact / Footer ===== */}
          <section id="contact" className="scroll-mt-24 border-t border-border pt-10">
            <SectionHeading icon={Globe}>Contact</SectionHeading>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-muted-foreground underline underline-offset-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-muted-foreground underline underline-offset-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> {personalInfo.phone}
              </a>
              <a href={`https://github.com${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground underline underline-offset-2 hover:text-primary transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={`https://linkedin.com/in${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground underline underline-offset-2 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-8">
              © {new Date().getFullYear()} {personalInfo.name} · wshuv-o.github.io
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
