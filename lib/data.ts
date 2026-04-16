export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  site: string;
  github: string;
  linkedin: string;
  hashnode: string;
  portrait: string;
  headshot: string;
};

export const profile: Profile = {
  name: "Aryan Mishra",
  title: "Senior Software Engineer",
  tagline:
    "I design and ship distributed systems, L1 blockchains, and full-stack platforms that scale to millions.",
  location: "Bengaluru, Karnataka · India",
  email: "aryan29mishra@gmail.com",
  phone: "+91 80094 66695",
  site: "https://aryancodes.in",
  github: "https://github.com/aryanmishra29",
  linkedin: "https://linkedin.com/in/aryanmishra29",
  hashnode: "https://aryanmishra.hashnode.dev",
  portrait: "/aryan-portrait.jpg",
  headshot: "/aryan-headshot.png",
};

export const summary =
  "Senior Software Engineer with 3 years in full-stack development, leading teams of 5+ engineers. Proven track record scaling applications to 1M+ users and developing distributed computing solutions. Expertise across Next.js, Node.js, TypeScript, Supabase, and AWS cloud architecture.";

export const rotatingRoles = [
  "Senior Software Engineer",
  "Blockchain Builder",
  "Cloud Architect",
  "Distributed Systems Engineer",
  "Full-Stack Craftsman",
];

export const stats: { label: string; value: string }[] = [
  { value: "3+", label: "Years shipping production systems" },
  { value: "1M+", label: "Users served across products" },
  { value: "5+", label: "Engineers led end-to-end" },
  { value: "L1", label: "Blockchain designed in Rust" },
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  dates: string;
  location?: string;
  stack: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Substrate AI",
    dates: "Feb 2026 — Present",
    stack: [
      "TypeScript",
      "Deno (Serverless)",
      "Node.js",
      "Vue.js",
      "Supabase",
      "GPU Cloud",
      "AWS",
      "CI/CD",
    ],
    highlights: [
      "Built a comprehensive platform for the underlying GPU and cloud infrastructure, designed in Vue.js and powered by Supabase Edge Functions.",
      "Designed and implemented a secure payment and credits management service for the cloud platform, powered by Stripe.",
      "Developed and managed Pub/Sub services, serverless functions, and crons with proper security controls in place.",
      "Built AI workflows for business dashboards and cross-product data aggregation.",
      "Designed and shipped REST and GraphQL APIs in TypeScript.",
      "Ran the company cloud on Supabase and AWS — EC2, Lambda, CDN, WAF, ELB, VPC, S3, Route 53.",
    ],
  },
  {
    role: "SDE 2",
    company: "GPU.net",
    dates: "Dec 2024 — Jan 2026",
    stack: [
      "Rust",
      "Substrate",
      "Layer-1 Blockchain",
      "Solidity",
      "Smart Contracts",
      "TypeScript",
      "Node.js",
      "AWS",
      "Kubernetes",
    ],
    highlights: [
      "Built a trading exchange with a FIFO orderbook in Node.js at <5 ms latency, using Redis Queue and SSE for real-time interaction.",
      "Led a team of 5+ engineers designing and developing a Layer-1 blockchain in Rust, plus smart contracts in Rust and Solidity.",
      "Led end-to-end product development on the application layer of the chain — TypeScript backend, WebSockets, stateful services, and smart contracts.",
      "Developed and managed Pub/Sub services, event listeners, and blockchain bridges with strict security parameters.",
      "Served 1M+ users and 100K MAUs on one product via globally accelerated cloud distribution and Kubernetes auto-scaling.",
      "Built a centralized authentication service with IDP and session-based auth, protected by a WAF.",
      "Designed and shipped REST and GraphQL APIs in TypeScript.",
    ],
  },
  {
    role: "SDE",
    company: "GPU.net",
    dates: "Oct 2023 — Nov 2024",
    stack: [
      "JavaScript",
      "Node.js",
      "Solidity",
      "REST",
      "GraphQL",
      "AWS",
      "CI/CD",
      "Blockchain",
    ],
    highlights: [
      "Designed and developed REST and GraphQL APIs in Node.js.",
      "Created, tested, and deployed smart contracts across multiple blockchains.",
      "Managed a Layer-1 POS+POW blockchain and implemented its consensus logic.",
      "Ran the company cloud on AWS — EC2, Lambda, S3, Route 53, Amplify.",
      "Built CI/CD pipelines with GitHub Actions and Docker.",
    ],
  },
  {
    role: "Java Developer Consultant (Part-time)",
    company: "Infinisync Consulting Services",
    dates: "Apr 2024 — Dec 2024",
    stack: [
      "Java",
      "Spring Boot",
      "REST",
      "Microservices",
      "PostgreSQL",
      "Kafka",
      "LLM",
      "ML",
    ],
    highlights: [
      "Built microservices for a backend system used by a US dental healthcare provider.",
      "Used Java + Spring Boot with industry-standard practices for a robust, maintainable platform.",
      "Integrated LLM workflows with LangChain4J and implemented similarity search via an ML model.",
      "Handled image and video upload processing and piping into a DL model.",
      "Implemented Kafka listeners for asynchronous pipelines and background services.",
      "Designed crons and schedulers for heavy computations over large datasets.",
      "Built an API gateway and authorization layer for client-side APIs.",
    ],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Blockchain & Web3",
    items: [
      "Rust",
      "Substrate",
      "Solidity",
      "Smart Contracts",
      "Layer-1 Development",
      "Consensus Mechanisms",
      "DeFi",
    ],
  },
  {
    label: "Backend Development",
    items: [
      "TypeScript",
      "Node.js",
      "Java",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "AWS EC2",
      "AWS Lambda",
      "AWS S3",
      "CloudFront CDN",
      "VPC",
      "ELB",
      "WAF",
      "CloudWatch",
      "Route 53",
      "Amplify",
      "Kubernetes",
      "Docker",
      "CI/CD",
    ],
  },
  {
    label: "Databases & Systems",
    items: [
      "PostgreSQL",
      "Event-driven Architecture",
      "Pub/Sub",
      "Message Queues",
      "Kafka",
      "Redis",
    ],
  },
  {
    label: "Security & Auth",
    items: [
      "WAF Protection",
      "IDP Integration",
      "Session Management",
      "Blockchain Security",
    ],
  },
];

export type Post = {
  title: string;
  kicker: string;
  url: string;
};

export const posts: Post[] = [
  {
    title: "Exploring the Decorator Pattern",
    kicker: "Design Patterns Demystified",
    url: "https://aryanmishra.hashnode.dev/design-patterns-demystified-exploring-the-decorator-pattern",
  },
  {
    title: "Exploring the Observer Pattern",
    kicker: "Design Patterns Demystified",
    url: "https://aryanmishra.hashnode.dev/design-patterns-demystified-exploring-the-observer-pattern",
  },
  {
    title: "Exploring the Strategy Pattern",
    kicker: "Design Patterns Demystified",
    url: "https://aryanmishra.hashnode.dev/design-patterns-demystified-exploring-the-strategy-pattern",
  },
];

export type NavLink = {
  id: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Writing" },
  { id: "resume", label: "Résumé" },
];
