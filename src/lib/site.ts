
export const site = {
  name: "Saiful Islam",
  role: "Climate & Nature Risk Analysis",
  location: "India",
  email: "alpsaiful17@gmail.com",
  year: "2026",
  origin: "IIFM Bhopal",
  currently: "Internal Auditor · BFIL",
  lead:
    "I connect climate and nature research with the business questions behind emissions, risk, costs, and investment decisions.",
  aside:
    "Climate and nature research, operational risk, decarbonization, sustainable finance, and financial analysis.",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export type Category =
  | "Climate"
  | "Risk & Controls"
  | "Research & Finance"
  | "Finance & Ventures";

export const categories: Array<"All" | Category> = [
  "All",
  "Climate",
  "Risk & Controls",
  "Research & Finance",
  "Finance & Ventures",
];

export type Project = {
  slug: string;
  title: string;
  deck: string;
  category: Category;
  year: string;
  client: string;
  summary: string;
  image: string;
  alt: string;
  href?: string;
  cta?: string;
};

export const projects: Project[] = [
  {
    slug: "bfil",
    title: "BFIL",
    deck: "Branch audit, controls & operational risk",
    category: "Risk & Controls",
    year: "2026",
    client: "Bharat Financial Inclusion Limited",
    summary:
      "Conducting risk-based branch audits across lending and operational processes, reviewing documentation, transactions, controls, compliance, and corrective actions.",
    image: "/images/bfil.jpg",
    alt: "BFIL project visual",
  },
  {
  slug: "iit-madras",
  title: "IIT Madras",
  deck: "Nature-related risk & biodiversity finance",
  category: "Research & Finance",
  year: "2025–26",
  client: "School of Sustainability",
  summary:
    "Researched nature-positive business models, ecosystem-service dependencies, nature-related business risks, policy developments, and biodiversity-finance mechanisms. Mapped public, private, and blended-finance pathways for Indian enterprises.",
  image: "/images/iitm.jpg",
  alt: "Nature-positive business research visual",
  href: "/files/White%20paper.pdf",
  cta: "Read research paper",
},
  {
  slug: "phfi",
  title: "PHFI",
  deck: "Healthcare GHG inventory & decarbonization",
  category: "Climate",
  year: "2025",
  client: "Public Health Foundation of India",
  summary:
    "Developed a GHG inventory for a 2,000-bed healthcare facility and assessed decarbonization options, including solar and waste interventions. Supported a roadmap targeting 20–25% emissions reduction, with financial feasibility and payback analysis.",
  image: "/images/PHFI.avif",
  alt: "Healthcare decarbonization project visual",
  href: "/files/Dashboard_FY2024.html",
  cta: "View dashboard",
},
  {
    slug: "edc",
    title: "EDC",
    deck: "Entrepreneurship operations & budgeting",
    category: "Finance & Ventures",
    year: "2024–2026",
    client: "Entrepreneurship Development Cell · IIFM Bhopal",
    summary:
      "Worked across budgeting, financial coordination, startup programming, fundraising, and event operations for entrepreneurship initiatives at IIFM Bhopal.",
    image: "/images/edc.jpg",
    alt: "Entrepreneurship Development Cell rocket graphic",
  },
  {
    slug: "climate-desk",
    title: "Climate Desk",
    deck: "Climate-tech research & financial analysis",
    category: "Finance & Ventures",
    year: "2026",
    client: "Independent",
    summary:
      "An independent research practice exploring climate-tech and agri-tech through sector research, business-model analysis, and investment questions. The linked workbook is a separate three-statement and DCF modelling exercise included as supporting analytical work.",
    image: "/images/climate.jpg",
    alt: "Climate Desk research visual",
    href: "/files/financial-model.xlsx",
    cta: "Download supporting model",
  },
];

export const about = {
  kicker: "Field notes",
  lead:
    "I work across climate and nature research, operational risk, and financial analysis, focusing on how environmental and business issues translate into decisions.",
  body: [
    "My background combines sustainability management, business analysis, and execution. My experience spans healthcare decarbonization, nature-related business risk, internal audit, and sustainable finance.",
    "At PHFI, I developed a GHG inventory for a 2,000-bed healthcare facility and assessed decarbonization interventions through feasibility and payback analysis. At IIT Madras, I researched nature-positive business models, ecosystem-service dependencies, nature-related business risks, policy developments, and biodiversity-finance mechanisms. At Bharat Financial Inclusion, I work on branch-level audit, controls, compliance, and corrective-action follow-up.",
    "I also co-founded and operated a restaurant, handling budgeting, procurement, and workflows. The experience strengthened my understanding of how costs, revenue, and execution shape business performance.",
  ],
  previously: [
    {
      role: "Internal Auditor",
      place: "Bharat Financial Inclusion",
      year: "2026–Now",
    },
    {
      role: "Research Intern · School of Sustainability",
      place: "IIT Madras",
      year: "2025–26",
    },
    {
      role: "Decarbonization Intern",
      place: "PHFI",
      year: "2025",
    },
  ],
};

export const skillGroups = [
  {
    title: "Climate & Nature",
    items: [
      {
        name: "GHG Inventory Development",
        note: "PHFI: Inventory development for a 2,000-bed healthcare facility",
      },
      {
        name: "Decarbonization Analysis",
        note: "PHFI: Intervention assessment, feasibility, and payback analysis",
      },
      {
        name: "Nature-Related Risk",
        note: "IIT Madras: Ecosystem-service dependencies and business risk",
      },
      {
        name: "Sustainability Research",
        note: "PHFI and IIT Madras: Evidence synthesis, policy, and business models",
      },
    ],
  },
  {
    title: "Risk & Finance",
    items: [
      {
        name: "Internal Audit",
        note: "BFIL: Documentation, transaction, control, and compliance reviews",
      },
      {
        name: "Financial Modelling",
        note: "Supporting three-statement model and DCF valuation workbook",
      },
      {
        name: "Sustainable Finance",
        note: "IIT Madras: Public, private, and blended biodiversity-finance mechanisms",
      },
      {
        name: "Business & Investment Research",
        note: "Climate Desk: Sector research, business models, and investment questions",
      },
    ],
  },
  {
    title: "Business & Execution",
    items: [
      {
        name: "Business Operations",
        note: "Restaurant operations: Budgeting, procurement, and workflows",
      },
      {
        name: "Financial Planning",
        note: "Budgeting and financial coordination across business and entrepreneurship work",
      },
      {
        name: "Stakeholder Coordination",
        note: "Working across research, operational, and institutional settings",
      },
      {
        name: "Entrepreneurial Experience",
        note: "Co-founded and operated a restaurant",
      },
    ],
  },
] as const;

export const skillRibbon = skillGroups.flatMap((group) =>
  group.items.map((item) => item.name),
);

export const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saiful-sustainability",
  },
] as const;
