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

export interface AcademicProject {
  id: string;
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
}

export interface Research {
  id: string;
  title: string;
  journal: string;
  year: string;
  status: string;
  link?: string;
}

export interface OtherExperience {
  id: string;
  organization: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
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
  ],
  academicProjects: [
    {
      id: "1",
      title: "Nexa: Social Media",
      description: "Developed using C# and .NET Framework, SignalR, WebRTC, MySQL",
      link: "https://github.com/wshuv-o/facenet-realtime-face-recognition",
      technologies: ["C#", ".NET", "SignalR", "WebRTC", "MySQL"]
    },
    {
      id: "2",
      title: "Optra Fintech",
      description: "NextJS, Flowbite, PostgreSQL",
      link: "https://github.com/wshuv-o/Grocery-Management",
      technologies: ["Next.js", "Flowbite", "PostgreSQL"]
    },
    {
      id: "3",
      title: "Railway Ticketing System",
      description: "Developed in Java Swing and MySQL",
      link: "https://github.com/wshuv-o/AKI-Prediction-Using-Machine-Learning",
      technologies: ["Java Swing", "MySQL"]
    },
    {
      id: "4",
      title: "Courseway - Learning Management System",
      description: "Learning management system built with Laravel and MySQL",
      link: "https://github.com/wshuv-o/iInventory-backend",
      technologies: ["Laravel", "MySQL"]
    },
    {
      id: "5",
      title: "Pharmacy Management System",
      description: "C# and .NET, MySQL",
      link: "https://github.com/wshuv-o/Courseway-a-Lerning-Platform-Instructors",
      technologies: ["C#", ".NET", "MySQL"]
    },
    {
      id: "6",
      title: "I-Inventory",
      description: "NextJs, NestJs, PostgreSQL",
      link: "https://optra-blush.vercel.app/",
      technologies: ["Next.js", "NestJS", "PostgreSQL"]
    },
    {
      id: "7",
      title: "Single-Vendor Retail Shop",
      description: "C# and .NET, MsSQL",
      link: "https://github.com/wshuv-o/Nexa-Social-Media",
      technologies: ["C#", ".NET", "MsSQL"]
    },
    {
      id: "8",
      title: "Sentiment Analysis on Conti Ransomware Leaks",
      description: "NetworkX, Vader (NLTK)",
      link: "https://github.com/wshuv-o/pharmasync-ManagementSystem",
      technologies: ["Python", "NetworkX", "NLTK"]
    },
    {
      id: "9",
      title: "Real-time Face Recognition",
      description: "Computer vision project with real-time face recognition capabilities",
      technologies: ["Python", "OpenCV"]
    },
    {
      id: "10",
      title: "Game Development Projects",
      description: "Grand Canyon, Shadow Island, Galactic Exodus",
      technologies: ["Unity", "C#"]
    }
  ],
  research: [
    {
      id: "1",
      title: "Lorentz-Equivariant Quantum Graph Neural Network for High-Energy Physics",
      journal: "IEEE Transactions on Artificial Intelligence",
      year: "2025",
      status: "Published"
    },
    {
      id: "2",
      title: "Federated Learning in Health Care Technology: Challenges, Solutions and Opportunities",
      journal: "Studies in Computational Intelligence (Springer Nature)",
      year: "2025",
      status: "Published"
    },
    {
      id: "3",
      title: "Advanced Visualization Approaches for Statistical Data Analysis",
      journal: "Journal of Computational Insights, Metaversalize",
      year: "2024",
      status: "Published"
    },
    {
      id: "4",
      title: "Clinical Knowledge Graph Framework for Uncertainty Quantification in LLM Reasoning",
      journal: "ACM Web Conference",
      year: "2026",
      status: "Submitted"
    },
    {
      id: "5",
      title: "A Symmetry-Aware Equivariant Quantum Clustering Approach for Enhanced Unsupervised Learning",
      journal: "Physica Scripta",
      year: "2025",
      status: "Submitted"
    }
  ],
  otherExperiences: [
    {
      id: "1",
      organization: "Trest Rossem, Rooppur NPP",
      position: "Interpreter",
      period: "Jun 2021 - Feb 2022",
      description: "Facilitated effective communication with government officials and the HR department. Prepared documentation for work permits, legalization, and visas for foreign employees. Attended multi-party meetings as a Russian-Bangla interpreter."
    },
    {
      id: "2",
      organization: "AIUB Robotics Crew, AIUB",
      position: "Mars Rover Crew",
      period: "Sep 2023 - Present",
      description: "Real-time sensor data integration and processing using Python. Implemented image processing algorithms with OpenCV for onboard analysis. Utilized NumPy, SciPy, and matplotlib for data analysis."
    },
    {
      id: "3",
      organization: "AIUB Arts Club, AIUB",
      position: "Organizer",
      period: "Jan 2023 – Feb 2025",
      description: "Organized 15+ workshops and exhibitions, leading logistics, sponsorship, and promotion teams."
    }
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "American International University Bangladesh",
      period: "Jan 2022 - Present",
      details: "CGPA 3.97 (out of 4.00)"
    },
    {
      id: "2",
      degree: "Russian Language and Literature",
      institution: "Saint Petersburg State University, Russia",
      period: "Aug 2020 - Jan 2022",
      details: "TORFL B1 Certification"
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
