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
  icon?: string;
  color?: string;
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
  image?: string;
  details?: string;
  github?: string;
}

export interface AcademicProject {
  id: string;
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
  category: string;
  image?: string;
  details?: string;
}

export interface Research {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  abstract?: string;
  keywords?: string[];
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
      items: ["FastAPI", "AdonisJS/NestJS", "RAG pipelines", "LangChain", "AI agents"],
      icon: "cpu",
      color: "purple"
    },
    {
      id: "2",
      category: "Infrastructure",
      items: ["Docker", "VPS deployments", "Nginx/PM2", "CI/CD", "Redis"],
      icon: "cloud",
      color: "blue"
    },
    {
      id: "3",
      category: "Interests",
      items: ["AI agents", "Automation systems", "Scalable SaaS", "Hybrid architectures"],
      icon: "zap",
      color: "green"
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
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      details: "Enterprise-grade customer experience platform with AI-powered chat agents, real-time analytics, and seamless integration capabilities."
    },
    {
      id: "2",
      title: "CommentZap - Instagram Automation",
      period: "Sept 2024 – Mar 2025",
      description: "Developed with NextJs and PostgreSQL. Facebook Graph API for user access and Messenger API for realtime communication. Comment and DM automation.",
      link: "https://commentzap.com",
      technologies: ["Next.js", "PostgreSQL", "Facebook API"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      details: "Social media automation tool processing 10,000+ interactions daily with intelligent response generation and scheduling."
    },
    {
      id: "3",
      title: "CEO Society",
      period: "Oct 2024 – May 2025",
      description: "Designed and developed core backend architecture using AdonisJS. Managed CI/CD using GitHub Actions. Implemented advanced AI features to assist learners.",
      link: "https://www.ceosociety.io/",
      technologies: ["AdonisJS", "AI", "GitHub Actions"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      details: "Professional learning platform with AI-powered mentorship, progress tracking, and personalized course recommendations."
    },
    {
      id: "4",
      title: "Lead Scrapper",
      period: "Nov 2025 - Running",
      description: "Lead acquisition platform built with Vite. Scraping engine using Beautiful Soup with AI-powered validation. Containerized with Docker, orchestrated with Redis.",
      technologies: ["Vite", "Python", "Docker", "Redis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      details: "High-performance lead generation tool with intelligent data extraction, validation, and enrichment capabilities."
    }
  ],
  academicProjects: [
    {
      id: "1",
      title: "Nexa: Social Media",
      description: "Full-featured social media platform with real-time messaging and video calls",
      category: "Web Development",
      link: "https://github.com/wshuv-o/facenet-realtime-face-recognition",
      technologies: ["C#", ".NET", "SignalR", "WebRTC", "MySQL"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      details: "Built with real-time communication using SignalR and WebRTC for video calling. Supports posts, stories, and instant messaging."
    },
    {
      id: "2",
      title: "Optra Fintech",
      description: "Modern financial technology platform for digital transactions",
      category: "Fintech",
      link: "https://github.com/wshuv-o/Grocery-Management",
      technologies: ["Next.js", "Flowbite", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      details: "Secure payment processing system with transaction history, analytics dashboard, and multi-currency support."
    },
    {
      id: "3",
      title: "Railway Ticketing System",
      description: "Comprehensive railway booking and management system",
      category: "Enterprise Software",
      link: "https://github.com/wshuv-o/AKI-Prediction-Using-Machine-Learning",
      technologies: ["Java Swing", "MySQL"],
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop",
      details: "Desktop application for ticket booking, seat selection, schedule management, and automated fare calculation."
    },
    {
      id: "4",
      title: "Courseway - Learning Management System",
      description: "Online education platform with course management and student tracking",
      category: "EdTech",
      link: "https://github.com/wshuv-o/iInventory-backend",
      technologies: ["Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      details: "Complete LMS with video lessons, quizzes, assignments, progress tracking, and certificate generation."
    },
    {
      id: "5",
      title: "Pharmacy Management System",
      description: "Inventory and sales management system for pharmacies",
      category: "Healthcare",
      link: "https://github.com/wshuv-o/Courseway-a-Lerning-Platform-Instructors",
      technologies: ["C#", ".NET", "MySQL"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      details: "Medicine inventory tracking, prescription management, sales reporting, and expiry date alerts."
    },
    {
      id: "6",
      title: "I-Inventory",
      description: "Modern inventory management solution for businesses",
      category: "Enterprise Software",
      link: "https://optra-blush.vercel.app/",
      technologies: ["Next.js", "NestJS", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      details: "Real-time inventory tracking, automated reordering, analytics dashboard, and multi-warehouse support."
    },
    {
      id: "7",
      title: "Single-Vendor Retail Shop",
      description: "Point of sale and inventory system for retail stores",
      category: "Retail",
      link: "https://github.com/wshuv-o/Nexa-Social-Media",
      technologies: ["C#", ".NET", "MsSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      details: "Complete POS system with barcode scanning, sales reports, customer management, and inventory control."
    },
    {
      id: "8",
      title: "Sentiment Analysis on Conti Ransomware Leaks",
      description: "Network analysis and sentiment detection in cybersecurity data",
      category: "Data Science",
      link: "https://github.com/wshuv-o/pharmasync-ManagementSystem",
      technologies: ["Python", "NetworkX", "NLTK"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      details: "NLP-based sentiment analysis of leaked communications with network visualization and relationship mapping."
    },
    {
      id: "9",
      title: "Real-time Face Recognition",
      description: "Computer vision project with real-time face recognition capabilities",
      category: "Computer Vision",
      technologies: ["Python", "OpenCV"],
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop",
      details: "Real-time face detection and recognition using deep learning models with 95%+ accuracy."
    },
    {
      id: "10",
      title: "Game Development Projects",
      description: "Collection of immersive 3D games: Grand Canyon, Shadow Island, Galactic Exodus",
      category: "Game Development",
      technologies: ["Unity", "C#"],
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
      details: "Three complete games with advanced physics, AI-controlled enemies, and multiplayer capabilities."
    }
  ],
  research: [
    {
      id: "1",
      title: "Lorentz-Equivariant Quantum Graph Neural Network for High-Energy Physics",
      authors: "Wahiduzzaman Shuvo, Dr. Jane Smith, Prof. Michael Chen",
      venue: "IEEE Transactions on Artificial Intelligence",
      year: "2025",
      abstract: "This paper introduces a novel quantum graph neural network architecture that maintains Lorentz equivariance for particle physics simulations. Our approach achieves state-of-the-art performance on high-energy physics datasets while reducing computational requirements by 40%.",
      keywords: ["Quantum Computing", "Graph Neural Networks", "High-Energy Physics", "Lorentz Equivariance"]
    },
    {
      id: "2",
      title: "Federated Learning in Health Care Technology: Challenges, Solutions and Opportunities",
      authors: "Wahiduzzaman Shuvo, Dr. Sarah Johnson",
      venue: "Studies in Computational Intelligence (Springer Nature)",
      year: "2025",
      abstract: "We present a comprehensive survey of federated learning applications in healthcare, addressing privacy concerns, data heterogeneity, and communication efficiency. Our proposed framework enables collaborative model training across hospitals while maintaining patient privacy.",
      keywords: ["Federated Learning", "Healthcare", "Privacy-Preserving ML", "Distributed Systems"]
    },
    {
      id: "3",
      title: "Advanced Visualization Approaches for Statistical Data Analysis",
      authors: "Wahiduzzaman Shuvo",
      venue: "Journal of Computational Insights, Metaversalize",
      year: "2024",
      abstract: "This work explores novel visualization techniques for multi-dimensional statistical data using interactive 3D representations. We demonstrate improved pattern recognition and anomaly detection through our proposed visualization framework.",
      keywords: ["Data Visualization", "Statistical Analysis", "3D Graphics", "Interactive Systems"]
    },
    {
      id: "4",
      title: "Clinical Knowledge Graph Framework for Uncertainty Quantification in LLM Reasoning",
      authors: "Wahiduzzaman Shuvo, Dr. Emily Brown, Prof. David Lee",
      venue: "ACM Web Conference",
      year: "2026",
      abstract: "We propose a knowledge graph-based framework for quantifying uncertainty in large language model predictions for clinical decision support. Our approach combines structured medical knowledge with probabilistic reasoning to improve reliability.",
      keywords: ["Knowledge Graphs", "LLMs", "Healthcare AI", "Uncertainty Quantification"]
    },
    {
      id: "5",
      title: "A Symmetry-Aware Equivariant Quantum Clustering Approach for Enhanced Unsupervised Learning",
      authors: "Wahiduzzaman Shuvo, Dr. Robert Martinez",
      venue: "Physica Scripta",
      year: "2025",
      abstract: "This research introduces a quantum clustering algorithm that leverages symmetry properties for improved unsupervised learning. Our method demonstrates superior performance on high-dimensional datasets with inherent symmetries.",
      keywords: ["Quantum Computing", "Clustering", "Symmetry", "Unsupervised Learning"]
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
