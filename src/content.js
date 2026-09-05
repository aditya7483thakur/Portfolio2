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
    { value: "SDE", label: "Real Time Data Services" },
    { value: "500+", label: "DSA problems solved" },
    { value: "10+", label: "Hackathons organized / mentored" },
  ],
};

export const experience = [
  {
    org: "Real Time Data Services",
    role: "Software Engineer",
    dates: "Apr 2026 — Present",
    location: "Gurugram",
    summary:
      "Building production software on enterprise systems. Work spans web architecture and backend services.",
    points: [
      "Contributing to scalable systems used in production — not side projects.",
      "Working across the stack: interfaces, services, and the seams between them.",
    ],
  },
  {
    org: "Real Time Data Services",
    role: "SDE Intern",
    dates: "Aug 2025 — Apr 2026",
    location: "Gurugram",
    summary:
      "Engineering internship on the same team. Converted to a full-time software engineering role.",
    points: [
      "Shipped production work alongside the engineering team.",
      "Moved from intern to Software Engineer after eight months.",
    ],
  },
  {
    org: "Sasefied",
    role: "Full Stack Developer",
    dates: "Jul 2024 — Apr 2025",
    location: "Remote",
    summary:
      "Startup work across a client supply-chain product and an in-house hiring platform.",
    points: [
      "Built features for a client supply-chain management product.",
      "Worked on I Am Ready AI — a mock-interview and hiring platform.",
      "Implemented caching and lazy loading to improve load performance.",
    ],
    stack: ["React", "Node.js"],
  },
  {
    org: "CLUMOSS",
    role: "Full Stack Developer",
    dates: "May 2024 — Jun 2024",
    location: "Remote",
    summary: "Short engagement leading a small React team.",
    points: [
      "Led a React project with a team of four.",
      "Finished key tasks 30% early and used Git / pull requests to keep the codebase clean.",
    ],
    stack: ["React", "Git"],
  },
];

export const projects = [
  {
    featured: true,
    name: "Budgetly",
    kind: "Personal finance platform",
    problem:
      "Tracking income, expenses, and budgets usually means spreadsheets or apps that stop at data entry.",
    interesting:
      "The interesting part is the automation: recurring transactions, budget-threshold alerts, scheduled emails, and receipt intake through a model — not just a CRUD table.",
    details: [
      "Recurring and one-time transactions with flexible intervals.",
      "Budget alerts when usage crosses 90%.",
      "Monthly summary emails with Gemini-generated saving tips.",
      "Receipt scanning via the Gemini API to prefill expenses.",
      "Cron jobs handle recurrence and outbound mail.",
    ],
    stack: [
      "React",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Gemini",
      "Nodemailer",
      "Tailwind",
      "shadcn/ui",
    ],
    image: "/projects-img/budgetly.png",
    imageAlt:
      "Budgetly landing page and transaction table with filters, categories, and recurring markers",
    live: "https://budgetly-sandy.vercel.app/",
    github: "https://github.com/aditya7483thakur/Ai-finance-platform",
  },
  {
    name: "DropBuddy",
    kind: "File management platform",
    problem:
      "People need a place to upload files, nest folders, and recover from mistakes without a desktop client.",
    interesting:
      "Built as a Next.js full-stack app: hierarchical folders, object storage, and trash that deletes from both the database and ImageKit.",
    details: [
      "Nested folder tree with Clerk authentication.",
      "Uploads go through ImageKit; trash empties both DB rows and stored objects.",
      "Drizzle + PostgreSQL for the relational model.",
    ],
    stack: ["Next.js", "PostgreSQL", "Drizzle", "Clerk", "ImageKit", "Tailwind"],
    image: "/projects-img/dropbuddy.png",
    imageAlt:
      "DropBuddy file management landing page with categorized document, image, and video counts",
    live: "https://dropbuddy.vercel.app/",
    github: "https://github.com/aditya7483thakur/dropbuddy",
  },
  {
    name: "ShopSphere",
    kind: "E-commerce",
    problem:
      "A storefront still has to get search, cart, and checkout right — the parts shoppers actually notice.",
    interesting:
      "Search is Algolia, payments are Stripe, and the cart is treated as a first-class flow rather than a list of products.",
    details: [
      "Authenticated shopping with cart management.",
      "Stripe checkout for payments.",
      "Algolia InstantSearch for product discovery.",
    ],
    stack: ["React", "Stripe", "Algolia", "Vite"],
    image: "/projects-img/shopspheree1.png",
    imageAlt: "ShopSphere e-commerce storefront screenshot",
    live: "https://shopspheree.vercel.app",
    github: "https://github.com/aditya7483thakur/ShopSphere",
  },
  {
    name: "Baatkro",
    kind: "Realtime chat",
    problem:
      "Messaging apps look simple until presence, persistence, and auth have to live on the same socket.",
    interesting:
      "First deep pass at Socket.IO: JWT sessions, one-to-one rooms, and messages stored so history survives a refresh.",
    details: [
      "JWT authentication and profile-image uploads.",
      "Realtime one-to-one chat over Socket.IO.",
      "Conversation history persisted in MongoDB.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
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
];

export const stack = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Socket.IO", "JWT"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle"],
  },
  {
    label: "AI",
    items: ["Google Gemini", "Groq"],
  },
  {
    label: "Cloud / Auth",
    items: ["Clerk", "ImageKit", "Stripe", "Algolia", "Vercel"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "Java", "C"],
  },
];

export const community = {
  intro:
    "Most of my hackathon work is on the other side of the table — running events, mentoring teams, and helping people ship. I have only sat in a few as a participant.",
  stats: [
    {
      value: "10+",
      label: "Hackathons organized / mentored",
      note: "Operations, mentoring, and judging — not participation counts.",
    },
    {
      value: "2",
      label: "Hackathons I built in",
      note: "Clynic and TrashTalks. I do not treat organizing as competing.",
    },
  ],
  leadership: [
    {
      title: "Head of Development, Geek Room",
      dates: "Feb 2025 — Sep 2025",
      body: "Ran the development department: roadmaps for juniors, task assignment, regular syncs, and multiple events and hackathons. Previously Deputy Head (Aug 2024–Feb 2025) and member (from Oct 2023).",
    },
    {
      title: "Mentor & judge",
      dates: "Ongoing",
      body: "Invited to mentor and later judge at Code Veda — reviewing builds, giving feedback, and working with teams under time pressure.",
    },
    {
      title: "IEEE MSIT — Web team",
      dates: "Feb 2024 — Present",
      body: "Built event and chapter websites with the web development team.",
    },
    {
      title: "GirlScript Summer of Code",
      dates: "Apr 2024 — Jun 2024",
      body: "Contributed to 5+ open-source projects: features, fixes, and collaborative review.",
    },
  ],
  built: [
    {
      name: "Clynic",
      context: "Veersa hackathon · team of three",
      body: "React Native healthcare app: nearby doctors via GeoNear, conflict-free booking, appointment reminders, maps, and an Ask-AI ranking flow (Groq).",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/aditya7483thakur/veersa-hackathon",
        },
        {
          label: "APK",
          href: "https://drive.google.com/file/d/1NWNnNw4ISclwcjmV1gOxrbfWcS57GY5X/view?usp=drivesdk",
        },
      ],
    },
    {
      name: "TrashTalks",
      context: "Hackathon · team project",
      body: "React Native + Flask app with Groq/Llama personas. I designed and built the public web presence.",
      links: [
        { label: "GitHub", href: "https://github.com/lordsid003/trashtalks" },
        { label: "Site", href: "https://trashtalks-web.vercel.app/" },
      ],
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
    { label: "School", value: "B.Tech CSE, MSIT · 2022–2026" },
    { label: "Practice", value: "500+ DSA problems" },
    { label: "Also", value: "Video editing" },
  ],
};

export const contact = {
  line: "Have something worth building?",
  close: "Let's build.",
};
