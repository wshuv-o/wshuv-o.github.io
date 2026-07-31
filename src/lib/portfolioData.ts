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
  items: {name: string; icon: string;}[]; 
  icon?: string;
  color?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  link?: string;
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
  linkedinEmbed?: string;
}

export interface AcademicProject {
  id: string;
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
  category: string;
  image?: string;
  images?: string[];
  details?: string;
  linkedinEmbed?: string;
  youtubeEmbed?: string;
  // Coursework-tier entries collapsed behind a "show more" toggle so the
  // first impression is the strongest work.
  secondary?: boolean;
}

export interface Research {
  id: string;
  title: string;
  authors: string;
  venue: string;
  venueShort?: string;
  year: string;
  link?: string;
  links?: { label: string; url: string }[];
  abstract?: string;
  keywords?: string[];
  linkedinEmbed?: string;
  // Preprints / under-review / proposals collapsed behind a
  // "show more technical papers" toggle.
  secondary?: boolean;
}

export interface OtherExperience {
  id: string;
  organization: string;
  position: string;
  period: string;
  description: string;
  link?: string;
  image?: string;
  imageCaption?: string;
  images?: string[];
}

export interface WebProfile {
  id: string;
  name: string;
  url: string;
  note?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  youtubeEmbed: string;
}

// Storytelling bullets with inline [text](url) links, Karpathy-style.
export interface MiscItem {
  id: string;
  text: string;
}

// Journey timeline: newest first, year label + logo + story paragraph
// with inline [text](url) links.
export interface TimelineItem {
  id: string;
  period: string;
  text: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  text: string;
  link?: string;
  image?: string;
  linkedinEmbed?: string;
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
    name: "Wahiduzzaman Suva",
    email: "wahedshuvo36@gmail.com",
    phone: "(+880) 1773259873",
    github: "/wshuv-o",
    linkedin: "/wahid-shuvo"
  },
skills: [
  {
    id: "1",
    category: "AI & LLM",
    icon: "cpu",
    color: "purple",
    items: [
      {
        name: "LangChain",
        icon: 'https://cdn.simpleicons.org/langchain/1C3C3C'
      },
      {
        name: "OpenAI API",
        icon: 'https://cdn.simpleicons.org/openai/412991'
      },
      {
        name: "Anthropic API",
        icon: 'https://cdn.simpleicons.org/anthropic/191919'
      },
      {
        name: "PyTorch",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
      },
      {
        name: "Qdrant",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qdrant/qdrant-original.svg'
      },
      {
        name: "Python",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
    ]
  },
  {
    id: "2",
    category: "Backend",
    icon: "zap",
    color: "orange",
    items: [
      {
        name: "FastAPI",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
      },
      {
        name: "NestJS",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg'
      },
      {
        name: "AdonisJS",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg'
      },
      {
        name: "Express",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
      },
      {
        name: "Laravel",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
      },
      {
        name: "TypeScript",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
    ]
  },
  {
    id: "3",
    category: "Data & Infrastructure",
    icon: "cloud",
    color: "blue",
    items: [
      {
        name: "Docker",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
        name: "Linux",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
      },
      {
        name: "Nginx",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
      },
      {
        name: "Redis",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
      },
      {
        name: "PostgreSQL",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      {
        name: "GitHub Actions",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg'
      }
    ]
  },
  {
    id: "4",
    category: "Frontend",
    icon: "code",
    color: "green",
    items: [
      {
        name: "React",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: "Next.js",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
      },
      {
        name: "Vite",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
      },
      {
        name: "Tailwind CSS",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      }
    ]
  }
],

  experiences: [
    {
      id: "1",
      company: "Odin",
      position: "Lead AI Engineer",
      period: "Feb 2025 - Present",
      description: "Tools for financial reporting at a US real-estate client: they read and write analyst Excel models and verify their output against the source documents. A per-page document extraction pipeline (pdfplumber, Camelot, Tesseract OCR) covers PDF, Word, and scanned files. Everything runs on client hardware.",
      link: "https://odinbd.com"
    },
    {
      id: "2",
      company: "Byteverse Ltd",
      position: "Software Engineer",
      period: "Jun 2023 - Present · Part-time",
      description: "Work on [Chatsby](https://chatsby.co), the company's customer-support AI product: the agent runtime, retrieval over Qdrant, realtime chat, and the deployment stack (FastAPI, Redis, Nginx, GitHub Actions).",
      link: "https://byteverseit.com"
    },
    {
      id: "3",
      company: "Codelogiest",
      position: "Software Engineer (Contract)",
      period: "2024 - 2025",
      description: "Backend work for client products: a [WhatsApp marketing agent](https://jasmyn.ai), an outbound calling pipeline, comment and DM automation, and a [course platform](https://app.ceosociety.io/) on AdonisJS."
    }
  ],
  projects: [
    {
      id: "1",
      title: "Chatsby",
      period: "Apr 2025 - Running",
      description: "Customer-support AI platform at Byteverse. I work on the agent layer, retrieval over Qdrant, and the realtime and deployment stack.",
      technologies: ["Next.js", "FastAPI", "Qdrant", "PostgreSQL", "Redis", "Docker"],
      linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7369019422184726548?collapsed=1"
    },
    {
      id: "2",
      title: "Outbound Calling Assistant",
      period: "2024 - 2025",
      description: "Calling pipeline with lead scoring, live transfer to a human, voicemail detection with retry, and CRM writeback. Built on the agent backend of a WhatsApp marketing product.",
      link: "https://jasmyn.ai",
      technologies: ["Agent runtime", "Tool calling", "WhatsApp Cloud API", "CRM APIs"],
      image: "/screenshots/jasmyn.jpg"
    },
    {
      id: "3",
      title: "CEO Society",
      period: "Oct 2024 – May 2025",
      description: "Backend for a course platform: courses, cohorts, roles, and an in-product assistant that answers from course material.",
      link: "https://app.ceosociety.io/",
      technologies: ["AdonisJS", "Lucid ORM", "PostgreSQL", "Docker", "GitHub Actions"],
      image: "/screenshots/ceosociety.png"
    },
    {
      id: "5",
      title: "CommentZap",
      period: "Sept 2024 – Mar 2025",
      description: "Comment and DM automation on the Meta Graph and Messenger APIs: webhooks, rule-driven responses, token handling, rate-limit backoff.",
      technologies: ["Next.js", "PostgreSQL", "Meta Graph API", "Messenger API"],
      image: "/screenshots/commentzap.jpg"
    },
    {
      id: "4",
      title: "Lead Scrapper",
      period: "Nov 2025 - Running",
      description: "Lead scraping tool with validation, running on Docker and Redis.",
      technologies: ["Vite", "Python", "Docker", "Redis"]
    },
    {
      id: "6",
      title: "Odin Reporting Tools",
      period: "Feb 2025 - Running",
      description: "Internal tools for financial reporting: they work directly in Excel workbooks — cashflow models, rent roll analysis, and PDF extraction. Runs on client infrastructure.",
      technologies: ["Python", "FastAPI", "LangChain", "pandas", "SQLAlchemy", "PowerShell COM"]
    },
    {
      id: "7",
      title: "Pexl",
      period: "2025",
      description: "Extracts tables and fields from financial documents (appraisals, bank statements, utility bills) with pdfplumber, Camelot, and Tesseract.",
      github: "https://github.com/wshuv-o/pexl",
      technologies: ["TypeScript", "Python", "pdfplumber", "Camelot", "Tesseract OCR"],
      image: "/screenshots/pexl.png"
    }
  ],
  academicProjects: [
    {
      id: "1",
      title: "VC-DATNet: Inner-Speech Decoding",
      description: "Variance-coupled dual-attention transformer for cross-dataset inner-speech decoding from EEG",
      category: "Brain-Computer Interface",
      link: "https://github.com/wshuv-o/VC-DATNet",
      technologies: ["Python", "PyTorch", "EEG", "Transformers"],
      images: ["/images/vc-datnet-architecture.jpg"],
      details: "Pairs a shared multi-scale temporal-spatial front-end with parallel mean and log-variance encoder streams of dual-attention transformer layers. Every number in the manuscript is reproducible from raw OpenNeuro data (ds003626, ds004196, ds006033)."
    },
    {
      id: "2",
      title: "Brain-Controller (Prodigy AI)",
      description: "Brain-computer interface work under the Prodigy AI research group",
      category: "Brain-Computer Interface",
      link: "https://github.com/prodigyagi/Brain-Controller",
      technologies: ["EEG", "Deep Learning", "Python"],
      details: "Research on decoding EEG signals into device control commands, developed under Prodigy AI, a Bangladesh-based AI research group."
    },
    {
      id: "3",
      title: "CB-SAFE: Post-Quantum Secure Aggregation for Federated Learning",
      description: "Code-based (HQC) post-quantum secure-aggregation framework for federated learning",
      category: "Quantum & Security",
      link: "https://github.com/wshuv-o/ISM_Quantum",
      technologies: ["Python", "PyTorch", "HQC / ML-KEM", "Federated Learning"],
      details: "KEM-agnostic cluster-based secure aggregation with Bonawitz-style double masking, Shamir dropout recovery, and robust aggregation rules (trimmed mean, median, Multi-Krum) against poisoning attacks, evaluated on non-IID CIFAR-10 with 30 clients."
    },
    {
      id: "4",
      title: "Clinical Reasoning Graph",
      description: "LLM reasoning modeled as traversals through clinical knowledge graphs with uncertainty quantification",
      category: "AI Research",
      link: "https://github.com/wshuv-o/clinical-reasoning-graph",
      technologies: ["Python", "Knowledge Graphs", "LLMs"],
      details: "Introduces graph-theoretical uncertainty measures enabling interpretable, theoretically grounded decomposition of epistemic and aleatoric uncertainty for clinical tasks like diagnosis and treatment planning."
    },
    {
      id: "5",
      title: "Quantum Clustering for Image Data",
      description: "Hybrid quantum-classical model for image clustering using variational quantum circuits",
      category: "Quantum ML",
      link: "https://github.com/wshuv-o/quantum-clustering",
      technologies: ["Python", "Variational Quantum Circuits", "K-means"],
      details: "Encodes image features onto six qubits, computes a quantum kernel, and applies classical clustering to group image data, exploiting quantum properties to improve clustering accuracy on complex datasets."
    },
    {
      id: "6",
      title: "Quantum ML Experiments",
      description: "Quanvolutional neural network layers and quantum-enhanced NeRF experiments",
      category: "Quantum ML",
      link: "https://github.com/wshuv-o/quanvolution",
      technologies: ["Python", "Quantum Computing", "Deep Learning"],
      details: "Exploratory research repos including quanvolution (quantum convolutional layers) and qnerf (quantum neural radiance fields)."
    },
    {
      id: "7",
      title: "Face Recognition with FaceNet and MTCNN",
      description: "Face recognition using FaceNet embeddings and MTCNN detection",
      category: "Computer Vision",
      link: "https://github.com/wshuv-o/facenet-realtime-face-recognition",
      technologies: ["Python", "TensorFlow", "Keras", "MTCNN", "Scikit-learn"],
      images: ["/images/facenet-detection.jpg", "/images/facenet-embeddings.jpg"],
      details: "Maps face images into a 128-dimensional embedding space where distances correspond to face similarity, with MTCNN for detection."
    },
    {
      id: "8",
      title: "Sentiment Analysis on Conti Ransomware Leaks",
      description: "Sentiment analysis of the leaked Conti ransomware chats to uncover trends and emotional tone",
      category: "Data Science",
      link: "https://github.com/wshuv-o/conti-leaks-sentiment-analysis",
      technologies: ["Python", "Pandas", "NLTK (VADER)", "NetworkX", "Matplotlib", "Seaborn"],
      details: "Cleaned and structured the leaked data with Pandas, classified message sentiment with VADER, explored relationships between actors with NetworkX, and visualized findings with Matplotlib and Seaborn."
    },
    {
      id: "9",
      title: "AKI Prediction Using Machine Learning",
      description: "Machine learning models predicting acute kidney injury from clinical data",
      category: "Healthcare AI",
      link: "https://github.com/wshuv-o/AKI-Prediction-Using-Machine-Learning",
      technologies: ["Python", "scikit-learn", "Pandas"],
      secondary: true,
      details: "Predictive modeling on clinical datasets for early detection of acute kidney injury."
    },
    {
      id: "10",
      title: "Space Rover Application",
      description: "Control and telemetry application for the AIUB Robotics Crew Mars rover",
      category: "Robotics",
      link: "https://github.com/wshuv-o/space-rover-application",
      technologies: ["Python", "OpenCV", "Sensor Integration"],
      images: ["/images/space-rover.png"],
      details: "Real-time sensor data integration and processing with onboard image analysis for rover operations."
    },
    {
      id: "11",
      title: "Nexa: Social Media",
      description: "Full-featured social media platform with real-time messaging and video calls",
      category: "Web Development",
      link: "https://github.com/wshuv-o/Nexa-Social-Media",
      technologies: ["C#", ".NET", "SignalR", "WebRTC", "MySQL"],
      secondary: true,
      details: "Built with real-time communication using SignalR and WebRTC for video calling. Supports posts, stories, friends management, and instant messaging."
    },
    {
      id: "12",
      title: "Optra Fintech",
      description: "Modern financial technology platform for digital transactions",
      category: "Fintech",
      link: "https://optra-blush.vercel.app/",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      images: ["/images/optra.jpg"],
      secondary: true,
      details: "Secure payment processing system with transaction history, analytics dashboard, and multi-currency support. Source: github.com/wshuv-o/optra"
    },
    {
      id: "13",
      title: "I-Inventory",
      description: "Modern inventory management solution for businesses",
      category: "Enterprise Software",
      link: "https://github.com/wshuv-o/iInventory-backend",
      technologies: ["Next.js", "NestJS", "PostgreSQL"],
      secondary: true,
      details: "Real-time inventory tracking, automated reordering, analytics dashboard, and multi-warehouse support."
    },
    {
      id: "14",
      title: "Courseway - Learning Management System",
      description: "Online education platform with course management and student tracking",
      category: "EdTech",
      link: "https://github.com/wshuv-o/Courseway-a-Lerning-Platform-Instructors",
      technologies: ["PHP", "Laravel", "MySQL"],
      secondary: true,
      details: "Complete LMS with video lessons, quizzes, assignments, progress tracking, and certificate generation."
    },
    {
      id: "15",
      title: "PharmaSync - Pharmacy Management System",
      description: "Inventory and sales management system for pharmacies",
      category: "Healthcare",
      link: "https://github.com/wshuv-o/pharmasync-ManagementSystem",
      technologies: ["C#", ".NET", "MySQL"],
      secondary: true,
      details: "Medicine inventory tracking, prescription management, sales reporting, and expiry date alerts."
    },
    {
      id: "16",
      title: "HealthHub Management System",
      description: "Healthcare facility management desktop application",
      category: "Healthcare",
      link: "https://github.com/wshuv-o/HealthHub-ManagementSystem",
      technologies: ["C#", ".NET"],
      secondary: true,
      details: "Patient, appointment, and records management for healthcare facilities."
    },
    {
      id: "17",
      title: "Railway Ticketing System",
      description: "Comprehensive railway booking and management system",
      category: "Enterprise Software",
      technologies: ["Java Swing", "MySQL"],
      secondary: true,
      details: "Desktop application for ticket booking, seat selection, schedule management, and automated fare calculation."
    },
    {
      id: "18",
      title: "Single-Vendor Retail Shop",
      description: "Point of sale and inventory system for retail stores",
      category: "Retail",
      technologies: ["C#", ".NET", "MsSQL"],
      secondary: true,
      details: "Complete POS system with barcode scanning, sales reports, customer management, and inventory control."
    },
    {
      id: "20",
      title: "Koala Tracklog Analysis",
      description: "Analysis of koala movement patterns from GPS tracklog data",
      category: "Data Science",
      link: "https://github.com/wshuv-o/koala-data-analysis",
      technologies: ["Python", "Pandas", "NumPy", "Plotly", "Scikit-learn"],
      images: ["/images/koala-tracklog-1.jpg", "/images/koala-tracklog-2.jpg"],
      secondary: true,
      details: "Preprocessed GPS tracklogs with Pandas and NumPy, visualized with Matplotlib, Seaborn, and Plotly, and applied Scikit-learn models to identify movement trends and behavioral patterns."
    }
  ],
  research: [
    {
      id: "1",
      title: "Lorentz-Equivariant Quantum Graph Neural Network for High-Energy Physics",
      authors: "Md Abrar Jahin, Md. Akmol Masud, Md Wahiduzzaman Suva, M. F. Mridha, Nilanjan Dey",
      venue: "IEEE Transactions on Artificial Intelligence, vol. 6, no. 12, pp. 3195-3206",
      venueShort: "IEEE TAI",
      year: "2025",
      link: "https://doi.org/10.1109/TAI.2025.3554461",
      links: [
        { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/10938398" },
        { label: "arXiv", url: "https://arxiv.org/abs/2411.01641" },
        { label: "Semantic Scholar", url: "https://www.semanticscholar.org/paper/fea886d50bc5b08104b132bcfd469534943b672e" },
        { label: "NASA ADS", url: "https://ui.adsabs.harvard.edu/abs/2024arXiv241101641J/abstract" },
        { label: "Hugging Face", url: "https://huggingface.co/papers/2411.01641" },
        { label: "OpenAlex", url: "https://openalex.org/W4408780434" }
      ],
      abstract: "Proposes Lorentz-EQGNN, a hybrid quantum-classical graph neural network that replaces LorentzNet's Lorentz Group Equivariant Blocks with a dressed quantum circuit, using ~5.5x fewer parameters and only 4 qubits. Achieves 74.00% accuracy and 87.38% AUC on quark-gluon jet tagging and 67.00% / 68.20% on electron-photon discrimination.",
      keywords: ["Quantum Machine Learning", "Graph Neural Networks", "Lorentz Equivariance", "High-Energy Physics"]
    },
    {
      id: "2",
      title: "A Symmetry-Aware Equivariant Quantum Clustering Approach for Enhanced Unsupervised Learning",
      authors: "Md Wahiduzzaman Suva, Md. Imtiaj Alam Sajin, Esm E Moula Chowdhury Abha, Md Tauhidul Islam, M. F. Mridha, Md. Abdul Hamid, Md. Jakir Hossen",
      venue: "Physica Scripta (IOP Publishing), vol. 101, no. 2, art. 026007",
      venueShort: "Physica Scripta",
      year: "2026",
      link: "https://doi.org/10.1088/1402-4896/ae2dd7",
      links: [
        { label: "IOPscience", url: "https://iopscience.iop.org/article/10.1088/1402-4896/ae2dd7" },
        { label: "Semantic Scholar", url: "https://www.semanticscholar.org/paper/278fb13c3ab4bd5b1bbc774e30077542928efcb7" },
        { label: "OpenAlex", url: "https://openalex.org/W4417409583" }
      ],
      abstract: "Introduces a p4m Equivariant Quantum Clustering method integrating equivariant quantum neural networks with quantum kernel methods on an 8-qubit circuit for high-dimensional data with geometric symmetries. Outperforms classical K-Means on the Quark-Gluon dataset (Silhouette 0.512 vs 0.183) and remains stable under simulated depolarizing noise.",
      keywords: ["Equivariant QNN", "Quantum Kernel Methods", "Unsupervised Learning", "NISQ"]
    },
    {
      id: "4",
      title: "Federated Learning in Healthcare Technology: Challenges, Solutions and Opportunities",
      authors: "Esm E Moula Chowdhury Abha, Md. Imtiaj Alam Sajin, Md Wahiduzzaman Suva, Shanjida Akter, Mushfiqur Rahman Abir, Md. Asgor Hossain Reaj, Jahir Ibna Rafiq",
      venue: "Federated Learning in Health Care Technology, Studies in Computational Intelligence vol. 1216, Springer Nature Singapore, ch. 1, pp. 1-17",
      venueShort: "Springer SCI (book chapter)",
      year: "2026",
      link: "https://doi.org/10.1007/978-981-96-8353-6_1",
      links: [
        { label: "SpringerLink", url: "https://link.springer.com/chapter/10.1007/978-981-96-8353-6_1" },
        { label: "ResearchGate", url: "https://www.researchgate.net/publication/388110418_Federated_Learning_in_Health_Care_Technology_Challenges_Solutions_and_Opportunities" }
      ],
      abstract: "Reviews how federated learning enables collaborative model training across distributed healthcare data without centralization, and examines implementation barriers in smart healthcare. Proposes a framework combining privacy-preserving techniques, personalized learning algorithms, efficient communication protocols, and infrastructure support.",
      keywords: ["Federated Learning", "Healthcare", "Privacy-Preserving ML", "Decentralized Learning"]
    },
    {
      id: "5",
      title: "Advanced Visualization Approaches for Statistical Data Analysis",
      authors: "Md Wahiduzzaman Suva, Md. Imtiaj Alam Sajin, Esm E Moula Chowdhury Abha, Mushfiqur Rahman Abir, Asif Zaman",
      venue: "Metaversalize, vol. 1, no. 4, pp. 225-239",
      venueShort: "Metaversalize",
      year: "2024",
      link: "https://doi.org/10.22105/metaverse.v1i1.36",
      links: [
        { label: "Journal page", url: "https://meta.reapress.com/journal/article/view/36" },
        { label: "ResearchGate", url: "https://www.researchgate.net/publication/388116579_Advanced_Visualization_Approaches_for_Statistical_Data_Analysis" }
      ],
      abstract: "Surveys advanced visualization methods for complex, high-dimensional statistical data in the big-data era, demonstrating R-based workflows on the UCI HCV dataset. Covers gaps in categorical data visualization (rmb and CPCP plots) and argues R/ggplot2 lowers the barrier for researchers wary of coding.",
      keywords: ["Data Visualization", "R", "ggplot2", "Statistical Analysis"]
    },
    {
      id: "3",
      title: "VC-DATNet: A Variance-Coupled Dual-Attention Transformer for Cross-Dataset Inner-Speech Decoding",
      authors: "Md Wahiduzzaman Suva, Md Imtiaj Alam Sajin, Esm E. Moula Chowdhury Abha, Susham Moula Choudhury Akash, Md Tauhidul Islam, Abhijit Bhowmik, Dip Nandi, Mashiour Rahman, Debajyoti Karmaker",
      venue: "Under review",
      year: "2026",
      abstract: "Pairs a shared multi-scale temporal-spatial front-end with parallel mean and log-variance encoder streams of dual-attention transformer layers for decoding inner speech from EEG across datasets. Results are reproducible from raw OpenNeuro data (ds003626, ds004196, ds006033).",
      keywords: ["Inner Speech", "Brain-Computer Interface", "EEG", "Transformers"],
      secondary: true
    },
    {
      id: "6",
      title: "An Integrated Deep Learning and Natural Language Processing Framework for Autonomous Vehicle Perception and Voice Control",
      authors: "Md Wahiduzzaman Suva, Md Imtiaj Alam Sajin, Esm E Moula Chowdhury Abha, Mohammed Mustafa, Abir Bakhtiar, Susham Moula Chowdhury Akash",
      venue: "figshare (preprint)",
      venueShort: "figshare preprint",
      year: "2025",
      link: "https://doi.org/10.6084/m9.figshare.30610052",
      links: [
        { label: "OpenAlex", url: "https://openalex.org/W7105670826" }
      ],
      abstract: "Describes a smart interactive vehicle prototype integrating voice recognition, obstacle avoidance, and perception systems, targeting assistive technology, educational robotics, and home-automation applications.",
      keywords: ["Autonomous Vehicles", "Object Detection", "Deep Learning", "NLP", "Voice Control"],
      secondary: true
    },
    {
      id: "7",
      title: "M-∂KG: A Theoretical Framework for Uncertainty Quantification in Large Language Models",
      authors: "Md Tauhidul Islam, Md Wahiduzzaman Suva, Md Tanzim Hosain, Nur Fahad, Md Kishor Morol, Dip Nandi, Mashiour Rahman, et al.",
      venue: "Under review",
      year: "2026",
      abstract: "Theoretical framework for quantifying uncertainty in large language model reasoning via knowledge-graph structure. Companion code models LLM reasoning as traversals through knowledge graphs with graph-theoretical uncertainty measures decomposing epistemic and aleatoric uncertainty.",
      keywords: ["Knowledge Graphs", "LLMs", "Uncertainty Quantification"],
      secondary: true
    },
    {
      id: "8",
      title: "Smart Surveillance: Integrating Drones and CCTV for Automated Crime Detection and Public Safety",
      authors: "Emam Hossain Kazol, Md. Imtiaj Alam Sajin, Esm-E Moula Chowdhury Abha, Md Wahiduzzaman Suva, Md Tauhidul Islam",
      venue: "ResearchGate (research proposal)",
      venueShort: "Research proposal",
      year: "2025",
      link: "https://doi.org/10.13140/RG.2.2.22726.74565",
      abstract: "Proposes combining drone and CCTV feeds for automated crime detection and public-safety monitoring.",
      keywords: ["Surveillance", "Drones", "Computer Vision", "Public Safety"],
      secondary: true
    }
  ],
  otherExperiences: [
    {
      id: "0",
      organization: "Prodigy AI",
      position: "BCI Researcher",
      period: "2024 - Present",
      description: "Research group working on brain-computer interfaces. EEG decoding work: Brain-Controller and VC-DATNet.",
      link: "https://github.com/prodigyagi",
      image: "/images/eeg-defense-2025.jpg",
      imageCaption: "One of our research projects on EEG analysis using a transformer-based model was presented at AIUB in May 2025. [Read more](https://www.linkedin.com/posts/imtiaj-sajin_thesis-defense-2025-at-aiub-thanks-to-my-activity-7329541319448584192-ROZE)"
    },
    {
      id: "1",
      organization: "Trest Rossem, Rooppur NPP",
      position: "Interpreter",
      period: "Jun 2021 - Feb 2022",
      description: "Facilitated effective communication with government officials and the HR department. Prepared documentation for work permits, legalization, and visas for foreign employees. Attended multi-party meetings as a Russian-Bangla interpreter.",
      images: ["/images/rooppur-site.jpg", "/images/rooppur-office.jpg"]
    },
    {
      id: "2",
      organization: "AIUB Robotic Crew (ARC)",
      position: "Science Team, Mars Rover Crew",
      period: "Oct 2023 - Present",
      description: "Designed the rover's science module (2023-24) and work on soil analysis, biochemical testing, and scientific payload development for the University Rover Challenge, alongside sensor data processing in Python and OpenCV.",
      link: "https://arc.aiub.edu/",
      image: "/images/urc-science-box.jpg",
      imageCaption: "Science box module designed as part of University Rover Challenge 2024"
    },
    {
      id: "4",
      organization: "TechnoXian Bangladesh",
      position: "Organizer",
      period: "2024",
      description: "Organized the 2024 national round of TechnoXian Bangladesh, a national robotics competition.",
      image: "/images/technoxian-2024.jpg"
    },
    {
      id: "5",
      organization: "AIUB CS Fest 2024",
      position: "Participant",
      period: "Apr 2024",
      description: "Took part in AIUB CS Fest 2024, a university-wide tech fest with programming, project showcasing, and robotics segments.",
      link: "https://csfest.aiubcc.org/",
      images: ["/images/csfest-1.jpg", "/images/csfest-2.jpg", "/images/csfest-3.jpg"]
    }
  ],
  news: [
    {
      id: "1",
      date: "Jan 2026",
      text: "Paper on equivariant quantum clustering published in Physica Scripta.",
      link: "https://doi.org/10.1088/1402-4896/ae2dd7",
      linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7406933925102755841?collapsed=1"
    },
    {
      id: "2",
      date: "2026",
      text: "VC-DATNet, a dual-attention transformer for cross-dataset inner-speech decoding, is under review."
    },
    {
      id: "3",
      date: "2025",
      text: "Started MSc in Computer Science at AIUB."
    },
    {
      id: "4",
      date: "Nov 2025",
      text: "Book chapter on federated learning in healthcare published (Springer SCI vol. 1216).",
      link: "https://doi.org/10.1007/978-981-96-8353-6_1"
    },
    {
      id: "10",
      date: "Oct 2025",
      text: "Recognized as Rising Star Performer 2025 at ODIN Outsourcing.",
      image: "/images/rising-star-2025.jpg"
    },
    {
      id: "11",
      date: "Sep 2025",
      text: "Chatsby, the customer-support AI product we build at Byteverse, launched.",
      linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7369019422184726548?collapsed=1"
    },
    {
      id: "6",
      date: "Mar 2025",
      text: "Quantum graph neural network paper published in IEEE Transactions on Artificial Intelligence.",
      link: "https://doi.org/10.1109/TAI.2025.3554461",
      linkedinEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:share:7310208819316342784?collapsed=1"
    },
    {
      id: "7",
      date: "Feb 2025",
      text: "Joined Odin."
    },
    {
      id: "5",
      date: "2024",
      text: "Opened Prodigy AI, a non-profit research group working on brain-computer interfaces.",
      link: "https://github.com/prodigyagi"
    },
    {
      id: "8",
      date: "2024",
      text: "First paper published, in Metaversalize.",
      link: "https://doi.org/10.22105/metaverse.v1i1.36"
    },
    {
      id: "9",
      date: "Jun 2023",
      text: "Joined Byteverse."
    }
  ],
  timeline: [
    {
      id: "1",
      period: "2025 - now",
      text: "Joined [Odin](https://odinbd.com), which has supported financial data processing for the US commercial real-estate market since 2013 — loan origination underwriting and acquisition analysis for investment banks, REITs, and private owners. I automate the financial data workflows with Excel VBA, Python, C#, and Power Automate; build desktop tools, browser extensions, and RPA; and extract structured data from PDFs with NLP models (spaCy, BERT, LayoutLM) and rule-based pattern recognition.",
      image: "/images/logos/odin.png"
    },
    {
      id: "2",
      period: "2024",
      text: "Opened [Prodigy AI](https://github.com/prodigyagi) with a group of friends from AIUB — a non-profit research organization exploring neuroscience and AI: brain-computer interfaces, cognitive computing, and neuroimaging analysis. Open-source projects for collaboration, private research for focused studies.",
      image: "/images/logos/prodigyai.png"
    },
    {
      id: "3",
      period: "2023",
      text: "Started [Byteverse](https://byteverseit.com) — an IT solutions company working across AI development, software, cloud, fintech, and data analytics. By early 2025 we had delivered 30+ projects for clients across the US, UK, Australia, and India, growing from two founders to a full team. Proud of [Chatsby](https://chatsby.co), [aipedia.blog](https://aipedia.blog), and [sspark](https://sspark.lovable.app).",
      image: "/images/logos/byteverse.png"
    },
    {
      id: "4",
      period: "2022 - 2025",
      text: "BSc in Computer Science and Engineering at [AIUB](https://www.aiub.edu), finishing with a 3.97 CGPA. Started the MSc there in 2025.",
      image: "/images/logos/aiub.png"
    },
    {
      id: "5",
      period: "2020 - 2022",
      text: "Left for [Saint Petersburg State University](https://english.spbu.ru/) intending a software engineering degree; earned TORFL B1 Russian along the way, then discontinued and came home — putting the Russian to work as a Russian-Bangla interpreter at the Rooppur Nuclear Power Plant.",
      image: "/images/logos/spbu.png"
    }
  ],
  misc: [
    {
      id: "1",
      text: "I recorded a few tutorials during university: a [Java interfaces lecture](https://www.youtube.com/watch?v=LNPxhqx9NoY), and OpenGL/GLUT guides on [texturing shapes](https://www.youtube.com/watch?v=Mvb4EdoprjQ) and [loading images](https://www.youtube.com/watch?v=oKnh7MfETZs). More on [YouTube](https://www.youtube.com/@Py_Geek)."
    },
    {
      id: "2",
      text: "I used to make games: a [first-person adventure in Unity](https://www.youtube.com/watch?v=skQcoC6f3Hs) about finding keys to complete missions, a [canyon mystery game](https://www.linkedin.com/feed/update/urn:li:ugcPost:7291817784240418817/), and [Galactic Exodus: Homeward Bound](https://www.youtube.com/watch?v=D1DXTJp9y8o) — a space game written from scratch in C++ and OpenGL ([source](https://github.com/wshuv-o/opengl-galactic-exodus))."
    },
    {
      id: "3",
      text: "For two years I organized workshops and exhibitions with the AIUB Arts Club — 15+ events, running logistics, sponsorship, and promotion."
    }
  ],
  webProfiles: [
    {
      id: "1",
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=uwTI2-sAAAAJ",
      note: "Publications and citations"
    },
    {
      id: "2",
      name: "ORCID",
      url: "https://orcid.org/0009-0007-6227-7282",
      note: "0009-0007-6227-7282"
    },
    {
      id: "3",
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Md-Suva",
      note: "Papers and preprints"
    },
    {
      id: "4",
      name: "GitHub",
      url: "https://github.com/wshuv-o",
      note: "63+ repositories"
    },
    {
      id: "5",
      name: "Prodigy AI",
      url: "https://github.com/prodigyagi",
      note: "BCI research group"
    },
    {
      id: "6",
      name: "Hugging Face",
      url: "https://huggingface.co/wshuv-o",
      note: "ML profile"
    },
    {
      id: "7",
      name: "LinkedIn",
      url: "https://linkedin.com/in/wahid-shuvo",
      note: "Professional profile"
    },
    {
      id: "8",
      name: "X (Twitter)",
      url: "https://x.com/shuvo_330",
      note: "@shuvo_330"
    },
    {
      id: "9",
      name: "Semantic Scholar",
      url: "https://www.semanticscholar.org/author/2329090860",
      note: "Author profile"
    },
    {
      id: "10",
      name: "OpenAlex",
      url: "https://openalex.org/A5114637616",
      note: "Author record"
    },
    {
      id: "11",
      name: "DBLP",
      url: "https://dblp.org/pid/392/4174.html",
      note: "CS bibliography"
    },
    {
      id: "12",
      name: "arXiv",
      url: "https://arxiv.org/search/?searchtype=author&query=Suva%2C+M+W",
      note: "Preprints"
    },
    {
      id: "13",
      name: "YouTube",
      url: "https://www.youtube.com/@Py_Geek",
      note: "Py Geek — games & OpenGL"
    }
  ],
  education: [
    {
      id: "1",
      degree: "Master of Science in Computer Science",
      institution: "American International University Bangladesh",
      period: "2025 - Present",
      details: "Dhaka, Bangladesh"
    },
    {
      id: "2",
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "American International University Bangladesh",
      period: "2021 - 2025",
      details: "CGPA 3.97 (out of 4.00)"
    },
    {
      id: "3",
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

// Bump whenever DEFAULT_DATA changes so returning visitors get the new content
// instead of the stale copy cached in their localStorage.
const DATA_VERSION = "2026-07-31.10";

export const initializeData = () => {
  if (localStorage.getItem('portfolioDataVersion') !== DATA_VERSION) {
    setPortfolioData(DEFAULT_DATA);
    localStorage.setItem('portfolioDataVersion', DATA_VERSION);
  }
};
