export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  link?: string;
  technologies?: string[];
}

const DEFAULT_DATA = {
  personalInfo: {
    name: "Wahiduzzaman Shuvo",
    email: "wahedshuvo36@gmail.com",
    phone: "(+880) 1773259873",
    github: "/wshuv-o",
    linkedin: "/wshuvo"
  },
  skills: [
    {
      id: "1",
      category: "Backend & AI",
      items: ["FastAPI", "AdonisJS/NestJS", "RAG pipelines", "LangChain", "AI agents"]
    },
    {
      id: "2",
      category: "Infrastructure",
      items: ["Docker", "VPS deployments", "Nginx/PM2", "CI/CD", "Redis"]
    },
    {
      id: "3",
      category: "Interests",
      items: ["AI agents", "Automation systems", "Scalable SaaS", "Hybrid architectures"]
    }
  ],
  experiences: [
    {
      id: "1",
      company: "Odin - Townhouse Partners",
      position: "Lead Data Engineer",
      period: "Feb 2025 - Present",
      description: "Built and maintained automated data pipelines to ingest, clean, and standardize multi-format financial data from top Wall Street banks. Led a team of 4 analysts/dev, cut monthly reporting cycles from 12+ days to <4 hours. Currently leading development of an internal AI workflow automation platform."
    },
    {
      id: "2",
      company: "Byteverse Ltd",
      position: "Software Developer I",
      period: "Jun 2023 - Present",
      description: "Designed and delivered backend applications using Node.js, Next.js, and FastAPI. Built AI features and agent-style automation tools. Deployed and maintained services using Docker, AWS S3, and CI/CD pipelines."
    }
  ],
  projects: [
    {
      id: "1",
      title: "Chatsby – Customer Experience",
      period: "Apr 2025 - Running",
      description: "Built a full-stack customer experience platform using Next.js, Node.js, FastAPI, PostgreSQL, and Redis. Implemented CI/CD via GitHub Actions. Developed agentic layer with custom LLM flows, RAG pipelines, and embeddings.",
      link: "https://chatsby.co",
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"]
    },
    {
      id: "2",
      title: "CommentZap - Instagram Automation",
      period: "Sept 2024 – Mar 2025",
      description: "Developed with NextJs and PostgreSQL. Facebook Graph API for user access and Messenger API for realtime communication. Comment and DM automation.",
      link: "https://commentzap.com",
      technologies: ["Next.js", "PostgreSQL", "Facebook API"]
    },
    {
      id: "3",
      title: "CEO Society",
      period: "Oct 2024 – May 2025",
      description: "Designed and developed core backend architecture using AdonisJS. Managed CI/CD using GitHub Actions. Implemented advanced AI features to assist learners.",
      link: "https://www.ceosociety.io/",
      technologies: ["AdonisJS", "AI", "GitHub Actions"]
    },
    {
      id: "4",
      title: "Lead Scrapper",
      period: "Nov 2025 - Running",
      description: "Lead acquisition platform built with Vite. Scraping engine using Beautiful Soup with AI-powered validation. Containerized with Docker, orchestrated with Redis.",
      technologies: ["Vite", "Python", "Docker", "Redis"]
    }
  ]
};

export const getPortfolioData = () => {
  const stored = localStorage.getItem('portfolioData');
  return stored ? JSON.parse(stored) : DEFAULT_DATA;
};

export const setPortfolioData = (data: any) => {
  localStorage.setItem('portfolioData', JSON.stringify(data));
};

export const initializeData = () => {
  if (!localStorage.getItem('portfolioData')) {
    setPortfolioData(DEFAULT_DATA);
  }
};
