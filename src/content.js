export const site = {
  name: "Aditya Kumar",
  shortName: "Aditya",
  title: "Aditya Kumar — Software Engineer",
  url: "https://dev-with-adi.vercel.app/",
  email: "adityakumarji74@gmail.com",
  github: "https://github.com/aditya7483thakur",
  linkedin: "https://www.linkedin.com/in/aditya7483/",
  resume:
    "https://drive.google.com/uc?export=download&id=1HWl7_dvO7MuOzngbU95O62QPzDbbffpK",
  description:
    "Software engineer at Real Time Data Services. Builds full-stack products — AI-backed finance tools, file systems, and realtime applications.",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "stack", label: "Stack" },
  { id: "community", label: "Community" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const sectionIds = nav.map((item) => item.id);

export const hero = {
  role: "Software Engineer",
  headline: "I build software with real systems underneath.",
  lede: "Full-stack products — finance tools, file infrastructure, and realtime applications — from the data model to the interface.",
  primaryCta: { label: "View selected work", href: "#work" },
  secondaryCta: { label: "Resume", href: site.resume, external: true },
  proofs: [
    { value: "1+ yr", label: "Engineering experience" },
    { value: "300+", label: "DSA problems" },
    { value: "15+", label: "Hackathons organized and mentored" },
  ],
};

export const experience = [
  {
    current: true,
    org: "Real Time Data Services",
    role: "Software Development Engineer I",
    dates: "Apr 2026 — Present",
    start: "2026-04",
    location: "Gurugram",
    summary:
      "Building and evolving production infrastructure for a Kubernetes-as-a-Service platform.",
    stack: ["Kubernetes", "Helm", "Argo CD", "Keycloak"],
    points: [
      "Built automated cluster provisioning and deletion workflows for the Kubernetes-as-a-Service (KaaS) offering using Kubernetes APIs, Helm, and Argo CD.",
      "Implemented IAM-to-Keycloak synchronization and Kubernetes RBAC, enabling secure OIDC-based authentication and authorization for Hosted Kubernetes clusters.",
      "Developed automated Kubernetes version upgrade workflows for control planes and worker node groups using Helm and Argo CD with asynchronous rollout monitoring.",
    ],
  },
  {
    org: "Real Time Data Services",
    role: "Software Development Engineer Intern",
    dates: "Aug 2025 — Mar 2026",
    start: "2025-08",
    end: "2026-03",
    location: "Gurugram",
    summary:
      "Modernized the frontend architecture of a production Kubernetes management platform.",
    stack: ["Next.js", "Redux Toolkit", "React Query"],
    points: [
      "Migrated the Dedicated Kubernetes management module from a legacy Next.js application to a new App Router-based codebase, ensuring feature parity while adapting to the new architecture.",
      "Replaced Context API and imperative data fetching with Redux Toolkit and React Query, improving state management and scalability.",
      "Refactored frontend components using custom hooks, service abstractions, and port-adapter (hexagonal) architecture principles, improving maintainability, modularity, and code reuse.",
    ],
  },
  {
    org: "Sasefied",
    role: "Full Stack Developer Intern",
    dates: "Jul 2024 — Apr 2025",
    start: "2024-07",
    end: "2025-04",
    location: "Remote",
    summary:
      "Raised form accuracy, load performance, and upload reliability on the product frontend.",
    stack: ["React Hook Form", "Zod", "TanStack Query"],
    points: [
      "Built complex forms with 50+ inputs using React Hook Form and Zod, boosting data accuracy by 30%.",
      "Reduced Largest Contentful Paint (LCP) from 3.6s to 1s using lazy loading.",
      "Optimized file uploads using controlled batching and limited concurrency, reducing failures by 25%.",
      "Enhanced data fetching with TanStack Query, cutting redundant API calls by 15% and enhancing load performance.",
    ],
    impact: [
      { value: "50+", label: "Form inputs" },
      { value: "30%", label: "Data accuracy" },
      { value: "3.6s → 1s", label: "LCP" },
      { value: "25%", label: "Fewer failures" },
      { value: "15%", label: "Fewer API calls" },
    ],
  },
  {
    light: true,
    org: "CLUMOSS",
    role: "Full Stack Developer",
    dates: "May 2024 — Jun 2024",
    start: "2024-05",
    end: "2024-06",
    location: "Remote",
    summary: "Short engagement leading a small React team.",
    stack: ["React", "Git"],
    points: [
      "Led a React project with a team of four.",
      "Finished key tasks 30% early and used Git / pull requests to keep the codebase clean.",
    ],
  },
];

export const projects = [
  {
    featured: true,
    name: "Budgetly",
    kind: "Personal finance",
    problem:
      "Tracking income, expenses, and budgets usually means spreadsheets or apps that stop at data entry.",
    interesting:
      "The work is the automation layer — recurrence, threshold alerts, scheduled mail, and model-backed receipt intake — not another CRUD table.",
    details: [
      "Recurring transactions and budget alerts at 90% usage.",
      "Gemini receipt scanning plus monthly summary emails with saving tips.",
      "Cron jobs drive recurrence and outbound mail.",
    ],
    stack: ["React", "Express", "PostgreSQL", "Prisma", "Gemini", "Clerk"],
    image: "/projects-img/budgetly.png",
    imageAlt:
      "Budgetly landing page and transaction table with filters, categories, and recurring markers",
    live: "https://budgetly-sandy.vercel.app/",
    github: "https://github.com/aditya7483thakur/Ai-finance-platform",
  },
  {
    name: "DropBuddy",
    kind: "File management",
    problem:
      "People need nested folders, uploads, and a trash that actually deletes — without a desktop client.",
    interesting:
      "A Next.js full-stack file tree: Clerk auth, ImageKit objects, and trash that removes both the row and the stored file.",
    details: [
      "Hierarchical folders with Clerk authentication.",
      "Uploads via ImageKit; emptying trash deletes DB rows and objects.",
      "Relational model on PostgreSQL with Drizzle.",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle", "Clerk", "ImageKit"],
    image: "/projects-img/dropbuddy.png",
    imageAlt:
      "DropBuddy file management landing page with categorized document, image, and video counts",
    live: "https://dropbuddy.vercel.app/",
    github: "https://github.com/aditya7483thakur/dropbuddy",
  },
  {
    name: "Baatkro",
    kind: "Realtime chat",
    problem:
      "Messaging looks simple until auth, rooms, and history have to live on the same socket.",
    interesting:
      "JWT sessions, one-to-one Socket.IO rooms, and messages stored so a refresh does not wipe the conversation.",
    details: [
      "JWT authentication and profile-image uploads.",
      "Realtime one-to-one chat over Socket.IO.",
      "Conversation history persisted in MongoDB.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
    image: "/projects-img/baatkro.png",
    imageAlt: "Baatkro chat application interface",
    live: "https://baatkro.vercel.app/",
    github: "https://github.com/aditya7483thakur/baatkro",
  },
  {
    name: "Segmentor",
    kind: "NPM component library",
    problem:
      "Rebuilding the same animated UI pieces in every React project wastes time and creates inconsistency.",
    interesting:
      "Published as a package with docs and a live playground — treating UI as a product, not a folder of leftovers.",
    details: [
      "Lightweight animated React components.",
      "Documentation site with live examples.",
      "Distributed as an NPM package.",
    ],
    stack: ["React", "NPM"],
    image: "/projects-img/segmentor.png",
    imageAlt: "Segmentor component library documentation site",
    live: "https://segmentor.vercel.app",
    github: "https://github.com/aditya7483thakur/segmentor",
  },
  {
    name: "ShopSphere",
    kind: "E-commerce",
    problem:
      "A storefront still has to get search, cart, and checkout right — the parts shoppers actually notice.",
    interesting:
      "Algolia for discovery, Stripe for payment, and the cart treated as a first-class flow.",
    details: [
      "Authenticated shopping with cart management.",
      "Stripe checkout for payments.",
      "Algolia InstantSearch for product discovery.",
    ],
    stack: ["React", "Stripe", "Algolia", "Vite"],
    image: "/projects-img/shopspheree1.png",
    imageAlt: "ShopSphere e-commerce storefront with product cards and search",
    live: "https://shopspheree.vercel.app",
    github: "https://github.com/aditya7483thakur/ShopSphere",
  },
];

export const stack = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "shadcn/ui", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express.js"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Kubernetes"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    label: "Concepts",
    items: ["API Design", "System Design", "DSA"],
  },
];

export const community = {
  heading: "I run the rooms",
  stats: [
    {
      value: "15+",
      label: "Hackathons organized and mentored",
      lead: true,
    },
  ],
  body: "A lot of my favorite tech experiences have happened away from my editor — organizing hackathons, mentoring teams, judging projects, handing out trophies, and building things with people. I’ve spent a good amount of time on the other side of the table, helping others turn ideas into working projects and making events happen behind the scenes. These are a few moments from that journey.",
  photos: [
    {
      featured: true,
      src: "/community/code-kshetra.jpg",
      alt: "Organizing team at Code Kshetra 2.0, an MLH hackathon at JIMS Rohini",
      caption: "Code Kshetra 2.0",
      note: "Organizing team · JIMS Rohini · MLH 2025",
    },
    {
      shape: "portrait",
      src: "/community/geek-room.jpg",
      alt: "Geek Room members gathered around the T-37 mascot",
      caption: "Geek Room",
      note: "Development team",
    },
    {
      shape: "portrait",
      src: "/community/code-veda.jpg",
      alt: "Code Veda 2.0 tokens of appreciation, including one for Aditya",
      caption: "Code Veda 2.0",
      note: "Judge",
    },
    {
      shape: "landscape",
      src: "/community/working-session.jpg",
      alt: "Mentoring a team around a conference table with project screens on the wall",
      caption: "Mentoring",
      note: "Working with the team",
    },
    {
      shape: "landscape",
      src: "/community/event-stage.jpg",
      alt: "On-stage recognition at a community innovation event",
      caption: "On stage",
      note: "Event close",
    },
  ],
};

export const about = {
  paragraphs: [
    "I like building things that have a job: a budget that emails you, a folder tree that actually deletes, a chat that still has history after refresh. The interface matters. The system under it matters more.",
    "Right now I am going deeper on system design, backend architecture, and product thinking — how software behaves after the demo.",
    "Outside engineering I edit video. Same instinct, different medium: cut the noise, keep the line that does the work.",
  ],
  facts: [
    { label: "Based", value: "India" },
    { label: "College", value: "B.Tech CSE, MSIT · 2022–2026" },
    { label: "Practice", value: "300+ DSA problems" },
    { label: "Also", value: "Video editing" },
  ],
  currently: [
    { label: "Building", value: "Production backend / infrastructure systems" },
    { label: "Learning", value: "System design · backend architecture" },
    { label: "Outside code", value: "Video editing" },
  ],
};

export const contact = {
  line: "Have something worth building?",
  close: "Let's build.",
};
