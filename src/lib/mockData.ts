import {
  Project,
  Product,
  NewsArticle,
  Job,
  Solution,
  TeamMember,
} from "@/types";

export const solutions: Solution[] = [
  {
    id: "1",
    title: "Enterprise Resource Planning",
    description:
      "Streamline your business operations with integrated ERP solutions that enhance productivity and visibility.",
    icon: "DatabaseOutlined",
    link: "/solutions#erp",
  },
  {
    id: "2",
    title: "Customer Relationship Management",
    description:
      "Build stronger customer relationships with intelligent CRM systems that drive growth and satisfaction.",
    icon: "TeamOutlined",
    link: "/solutions#crm",
  },
  {
    id: "3",
    title: "Artificial Intelligence & ML",
    description:
      "Leverage AI and machine learning to unlock insights, automate processes, and make data-driven decisions.",
    icon: "RobotOutlined",
    link: "/solutions#ai",
  },
  {
    id: "4",
    title: "Cloud Infrastructure",
    description:
      "Modernize your IT infrastructure with scalable, secure, and cost-effective cloud solutions.",
    icon: "CloudOutlined",
    link: "/solutions#cloud",
  },
  {
    id: "5",
    title: "Internet of Things",
    description:
      "Connect devices and systems to create intelligent ecosystems that drive operational efficiency.",
    icon: "ApiOutlined",
    link: "/solutions#iot",
  },
  {
    id: "6",
    title: "Cybersecurity Solutions",
    description:
      "Protect your digital assets with comprehensive security solutions and risk management strategies.",
    icon: "SafetyOutlined",
    link: "/solutions#security",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "global-bank-digital-transformation",
    title: "Digital Banking Transformation",
    client: "Global Financial Services",
    industry: "Banking & Finance",
    description:
      "Complete digital transformation of legacy banking systems to modern cloud-based platform.",
    image: "/images/projects/project-1.jpg",
    solution: "Cloud Infrastructure, AI, Cybersecurity",
    result:
      "40% reduction in operational costs, 3x faster transaction processing",
    date: "2024-03-15",
  },
  {
    id: "2",
    slug: "retail-erp-implementation",
    title: "Retail ERP Implementation",
    client: "National Retail Chain",
    industry: "Retail",
    description:
      "Enterprise-wide ERP system implementation across 200+ retail locations.",
    image: "/images/projects/project-2.jpg",
    solution: "ERP, Cloud Infrastructure",
    result:
      "60% improvement in inventory management, real-time analytics across all locations",
    date: "2024-02-20",
  },
  {
    id: "3",
    slug: "healthcare-iot-platform",
    title: "Healthcare IoT Platform",
    client: "Major Healthcare Provider",
    industry: "Healthcare",
    description:
      "IoT-enabled patient monitoring system with AI-powered predictive analytics.",
    image: "/images/projects/project-3.jpg",
    solution: "IoT, AI & ML, Cloud",
    result: "25% reduction in emergency incidents, improved patient outcomes",
    date: "2024-01-10",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "nexaflow-erp",
    title: "NexaFlow ERP",
    description:
      "Comprehensive enterprise resource planning solution for modern businesses.",
    image: "/images/products/product-1.jpg",
    category: "Enterprise Software",
    features: [
      "Financial Management",
      "Supply Chain Optimization",
      "Human Resource Management",
      "Business Intelligence",
      "Real-time Analytics",
    ],
  },
  {
    id: "2",
    slug: "nexaconnect-crm",
    title: "NexaConnect CRM",
    description: "AI-powered customer relationship management platform.",
    image: "/images/products/product-2.jpg",
    category: "CRM",
    features: [
      "360° Customer View",
      "Sales Automation",
      "Marketing Campaigns",
      "Customer Service Portal",
      "Predictive Analytics",
    ],
  },
  {
    id: "3",
    slug: "nexaguard-security",
    title: "NexaGuard Security",
    description:
      "Enterprise-grade cybersecurity platform with AI-driven threat detection.",
    image: "/images/products/product-3.jpg",
    category: "Security",
    features: [
      "Real-time Threat Detection",
      "Advanced Firewall",
      "Data Encryption",
      "Compliance Management",
      "Security Analytics",
    ],
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "nexacore-wins-innovation-award-2024",
    title: "NexaCore Wins Innovation Award 2024",
    excerpt:
      "NexaCore has been recognized as the Most Innovative Technology Company at the Global Tech Awards 2024.",
    content: "Full article content goes here...",
    image: "/images/news/news-1.jpg",
    date: "2024-09-15",
    author: "Sarah Johnson",
    category: "Company News",
  },
  {
    id: "2",
    slug: "ai-powered-solutions-transforming-industries",
    title: "How AI-Powered Solutions Are Transforming Industries",
    excerpt:
      "Exploring the impact of artificial intelligence and machine learning on modern business operations.",
    content: "Full article content goes here...",
    image: "/images/news/news-2.jpg",
    date: "2024-08-22",
    author: "Michael Chen",
    category: "Technology",
  },
  {
    id: "3",
    slug: "nexacore-expands-global-presence",
    title: "NexaCore Expands Global Presence with New Offices",
    excerpt:
      "Opening new offices in Singapore, London, and São Paulo to better serve international clients.",
    content: "Full article content goes here...",
    image: "/images/news/news-3.jpg",
    date: "2024-07-10",
    author: "Emma Williams",
    category: "Company News",
  },
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    description:
      "We're looking for an experienced Full Stack Developer to join our engineering team and build cutting-edge solutions.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Strong problem-solving skills",
      "Excellent communication skills",
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Participate in code reviews and architecture discussions",
      "Mentor junior developers",
    ],
  },
  {
    id: "2",
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "San Francisco / Hybrid",
    type: "Full-time",
    description:
      "Join our AI research team to develop innovative machine learning solutions for enterprise clients.",
    requirements: [
      "Master's or PhD in Computer Science or related field",
      "3+ years of experience in machine learning",
      "Strong background in Python, TensorFlow/PyTorch",
      "Experience with NLP and computer vision",
      "Published research is a plus",
    ],
    responsibilities: [
      "Develop and deploy ML models",
      "Research new AI algorithms and techniques",
      "Collaborate with product teams",
      "Optimize model performance",
      "Present findings to stakeholders",
    ],
  },
  {
    id: "3",
    title: "Product Manager",
    department: "Product",
    location: "London / Hybrid",
    type: "Full-time",
    description:
      "Lead product strategy and execution for our enterprise software solutions.",
    requirements: [
      "5+ years of product management experience",
      "Experience with enterprise software products",
      "Strong analytical and strategic thinking",
      "Excellent stakeholder management skills",
      "Technical background preferred",
    ],
    responsibilities: [
      "Define product vision and roadmap",
      "Gather and prioritize product requirements",
      "Work with engineering and design teams",
      "Analyze market trends and competition",
      "Drive product launches and growth",
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Hắc Ngọc Chung",
    position: "Chief Executive Officer",
    image: "/images/Trung.png",
    bio: "David has over 20 years of experience in technology leadership and has led NexaCore to become a global leader in digital transformation.",
  },
  {
    id: "2",
    name: "Ngô Thị Thùy Trang",
    position: "Chief Technology Officer",
    image: "/images/Trang.jpeg",
    bio: "Jennifer is a renowned technologist with expertise in AI, cloud computing, and enterprise architecture.",
  },
  {
    id: "3",
    name: "Nguyễn Trần Thái Duy",
    position: "Chief Operating Officer",
    image: "/images/Duy.jpg",
    bio: "Robert brings extensive operational excellence and has scaled NexaCore's global operations across 5 continents.",
  },
  {
    id: "4",
    name: "Nguyễn Đặng Bình Minh",
    position: "Chief Financial Officer",
    image: "/images/Minh.jpg",
    bio: "Sophia is a strategic financial leader with a track record of driving profitable growth and successful IPOs.",
  },
  {
    id: "5",
    name: "Trần Đăng Khoa",
    position: "Chief Marketing Officer",
    image: "/images/Khoa.png",
    bio: "Michael is a visionary marketer who has built global brands and driven digital marketing transformation across industries.",
  },
];
