export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  metrics?: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'netsol-it-solutions',
    role: 'Android & Systems Engineering Intern',
    company: 'Netsol IT Solutions',
    period: '2024',
    type: 'Internship / Systems',
    description: 'Engineered in-process embedded networking services and local telemetry sync directly inside Android application runtimes.',
    highlights: [
      'Implemented in-process NanoHTTPD embedded servers enabling low-latency peer-to-peer data synchronization without public cloud relays.',
      'Constructed persistent background services with Android IPC and socket management, sustaining 99.8% server uptime during testing.',
      'Optimized local network data exchange over WiFi and mDNS for edge hardware and IoT devices.'
    ],
    skills: ['Android SDK', 'NanoHTTPD', 'Java', 'Networking & Sockets', 'Embedded Systems', 'RESTful Endpoints']
  },
  {
    id: 'freelance-commercial-deployments',
    role: 'Freelance Software Developer',
    company: 'Commercial Deployments (Best Furniture & Jeet Furniture, Bardoli)',
    period: '2023 — Present',
    type: 'Freelance & Production Web',
    description: 'Architected and launched high-performance web platforms and digital showrooms for bespoke furniture manufacturers in Bardoli, Gujarat.',
    highlights: [
      'Developed and deployed bestfurniture.store with optimized catalog caching, product inquiry funnels, and sub-second load times.',
      'Engineered jeetfurniture.com with responsive bespoke furniture galleries and local SEO optimization for the Bardoli region.',
      'Configured automated CI/CD deployment pipelines on Cloudflare with automated SSL/TLS provisioning and Lighthouse performance optimization.'
    ],
    skills: ['Commercial Web', 'Cloudflare Pages', 'Next.js / React', 'CI/CD Pipelines', 'Local SEO & Schema', 'Performance Tuning'],
    link: 'https://bestfurniture.store'
  },
  {
    id: 'diploma-it',
    role: 'Diploma in Information Technology',
    company: 'Academic Record (9.15 CGPA)',
    period: '2024',
    type: 'Education',
    description: 'Comprehensive curriculum in operating systems, computer networks, database management, and software engineering.',
    highlights: [
      'Graduated with distinction achieving a 9.15 CGPA.',
      'Focused on systems engineering, Linux server administration, and full-stack application development.'
    ],
    skills: ['Computer Science', 'Linux & Systems', 'Networking (TCP/IP)', 'Data Structures', 'Python & C/C++']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'frameread',
    title: 'FrameRead',
    tagline: 'Offline AI Video Analysis & Visual Synthesis Pipeline',
    category: 'Video Intelligence',
    description: 'An AI-powered video analysis pipeline that extracts audio transcriptions via Whisper and visual frame descriptions via Qwen2-VL, synthesizing multi-page written analyses and answering evidence-backed questions—100% locally and offline without cloud dependencies.',
    metrics: 'Fully offline local inference with scene-change frame sampling and zero cloud API dependency.',
    tags: ['Python', 'Qwen2-VL', 'Whisper', 'Computer Vision', 'PyTorch', 'Local LLM'],
    githubUrl: 'https://github.com/pr1hm/FrameRead',
    featured: true
  },
  {
    id: 'openseal',
    title: 'OpenSeal',
    tagline: 'Open-Source Digital Document Signing Platform',
    category: 'Document Signing',
    description: 'Fast, open-source alternative to DocuSign built on FastAPI and Vanilla JS. Upload PDF documents, place dynamic signature coordinate boxes, generate instant shareable signing links, and sign on desktop/mobile canvas.',
    metrics: 'Sub-second signature placement with native mobile/desktop canvas rendering and zero third-party dependencies.',
    tags: ['Python', 'FastAPI', 'Vanilla JavaScript', 'PDF Coordinates', 'Canvas API', 'Self-Hosted'],
    githubUrl: 'https://github.com/pr1hm/openseal',
    liveUrl: 'https://openseal.prthm.xyz',
    featured: true
  },
  {
    id: 'conlatus-ai',
    title: 'Conlatus AI',
    tagline: 'Autonomous AI Technical Screening & Proctoring Platform',
    category: 'AI Proctoring',
    description: 'A full-stack, autonomous technical screening and AI-proctored interview platform for high-scale recruitment and academic examination. Features adaptive dialogue, Safe Exam Browser (SEB) lockdown, and real-time computer vision proctoring (gaze tracking, multi-person detection).',
    metrics: 'Real-time multi-modal proctoring with SEB gate lockdown and adaptive technical question synthesis.',
    tags: ['TypeScript', 'Node.js', 'Computer Vision', 'Safe Exam Browser', 'WebSockets', 'AI Dialogue'],
    githubUrl: 'https://github.com/conlatus/conlatus',
    featured: true
  },
  {
    id: 'bestfurniture-store',
    title: 'Best Furniture & Jeet Furniture',
    tagline: 'Commercial Web Deployments for Bardoli Furniture Showrooms',
    category: 'Commercial Web',
    description: 'Production web platforms and digital catalogs built for custom furniture manufacturers and interior showrooms in Bardoli, Gujarat (bestfurniture.store & jeetfurniture.com), featuring fast catalog browsing and inquiry generation.',
    metrics: 'Over 3K+ monthly client impressions with automated CI/CD and sub-second page delivery.',
    tags: ['Cloudflare Pages', 'E-Commerce', 'Local SEO', 'CI/CD Pipelines', 'Performance'],
    githubUrl: 'https://github.com/pr1hm',
    liveUrl: 'https://bestfurniture.store',
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Systems & Linux',
    iconName: 'Terminal',
    skills: [
      'Linux Kernel & SysAdmin',
      'Bash & Zsh Automation',
      'NanoHTTPD & In-Process Webservers',
      'TCP/IP & Socket Networking',
      'Systemd Services & Cron',
      'Performance Tuning & Memory Profiling'
    ]
  },
  {
    title: 'Cloud & Deployment',
    iconName: 'Cloud',
    skills: [
      'Kubernetes & Helm',
      'Docker & Containerd',
      'CI/CD (GitHub Actions)',
      'Cloudflare Pages / Workers',
      'FastAPI & Uvicorn Production',
      'Nginx & Reverse Proxies',
      'Terraform Basics'
    ]
  },
  {
    title: 'Backend Engineering',
    iconName: 'Server',
    skills: [
      'Python (FastAPI, Flask)',
      'Node.js & TypeScript',
      'PostgreSQL & SQLite',
      'Redis Caching',
      'RESTful Architecture',
      'Zero-Trust Auth & Session Gates'
    ]
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'Cpu',
    skills: [
      'Qwen2-VL & Vision-Language Models',
      'Whisper Audio Transcription',
      'Local HuggingFace Inference',
      'Computer Vision Proctoring',
      'Retrieval-Augmented Generation (RAG)',
      'Autonomous Dialogue Engines'
    ]
  }
];
