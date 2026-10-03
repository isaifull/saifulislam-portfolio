export const site = {
  name: "Saiful Islam",
  role: "Climate · Sustainability · Risk · Finance",
  location: "India",
  email: "alpsaiful17@gmail.com",
  year: "2026",
  origin: "IIFM Bhopal",
  currently: "Internal Auditor · BFIL",
  lead:
    "I research how climate and sustainability problems become business, risk, and investment decisions.",
  aside:
    "Climate research, risk analysis, decarbonization, sustainable finance, and business operations.",
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
    deck: "Internal audit, controls & responsible finance",
    category: "Risk & Controls",
    year: "2026",
    client: "Bharat Financial Inclusion Limited",
    summary:
      "Conducting risk-based branch audits across lending and operational processes, reviewing documentation, transactions, controls, compliance, and corrective actions.",
    image: "/images/bfil.jpg",
    alt: "BFIL project visual", 
    cta: "Write",
  },
  {
    slug: "iit-madras",
    title: "IIT Madras",
    deck: "Nature-positive business & biodiversity finance",
    category: "Research & Finance",
    year: "2025–26",
    client: "School of Sustainability",
    summary:
      "Researched nature-positive business models, ecosystem-service dependencies, nature-related business risks, policy developments, and biodiversity-finance mechanisms; mapped public, private, and blended-finance pathways for Indian enterprises.",
    image: "/images/iitm.jpg",
    alt: "Nature-positive business research visual",
    href: "https://digitalc-suite.blogspot.com/",
    cta: "Read",
  },
  {
    slug: "phfi",
    title: "PHFI",
    deck: "Healthcare decarbonization",
    category: "Climate",
    year: "2025",
    client: "Public Health Foundation of India",
    summary:
      "Developed a GHG inventory for a 2,000-bed healthcare facility and supported a decarbonization roadmap targeting 20–25% emissions reduction through solar and waste interventions, with financial feasibility and payback analysis.",
    image: "/images/phfi.mp4",
    alt: "Healthcare decarbonization project video",
    cta: "Write",
  },
  {
    slug: "edc",
    title: "EDC",
    deck: "Venture finance & entrepreneurship operations",
    category: "Finance & Ventures",
    year: "2024-2026",
    client: "Entrepreneurship Development Cell · IIFM Bhopal",
    summary:
      "Managed budgeting and financial coordination for entrepreneurship initiatives, with hands-on experience across startup programming, fundraising, and event operations.",
    image: "/images/edc.jpg",
    alt: "Entrepreneurship Development Cell rocket graphic",
    cta: "Write",
  },
    {
  slug: "climate-desk",
  title: "Climate Desk",
  deck: "Climate-tech research & investment thinking",
  category: "Finance & Ventures",
  year: "2026",
  client: "Independent",
  summary:
    "An independent research practice exploring climate-tech and agri-tech businesses through sector research, business-model analysis, investment questions, and financial thinking.",
  image: "/images/climate.jpg",
  alt: "Mangrove and coastal field scene for Climate Desk research",
  href: "/files/financial-model.xlsx",
  cta: "View model",
}, 
];

export const about = {
  portrait: "/images/iifm.jpg",
  portraitAlt:
    "Indian Institute of Forest Management campus in Bhopal",
  caption: "IIFM Bhopal",
  kicker: "Field notes",
  lead:
    "I work across sustainability, risk, finance, and the practical work of turning ideas into decisions.",
  body: [
    "My background combines sustainability management, business analysis, and execution. I have worked across internal audit, climate and nature research, decarbonization, and sustainable finance.",
    "At PHFI, I developed a GHG inventory for a 2,000-bed healthcare facility and evaluated decarbonization interventions. At IIT Madras, I researched nature-positive business models, nature-related business risk, policy developments, and biodiversity-finance mechanisms. At Bharat Financial Inclusion, I work on branch-level audit, controls, risk, and corrective action.",
    "I also co-founded and operated a restaurant, leading budgeting, procurement, and day-to-day operations. That experience taught me to look at problems from both sides: the analysis and the economics of getting something done.",
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
        name: "GHG Accounting",
        note: "GHG inventory development and emissions analysis",
      },
      {
        name: "Decarbonization",
        note: "Roadmaps, interventions, feasibility, and payback analysis",
      },
      {
        name: "Nature-Related Risk",
        note: "Nature dependencies, business risk, and ecosystem analysis",
      },
      {
        name: "Sustainability Research",
        note: "Policy, business models, and evidence synthesis",
      },
    ],
  },
  {
    title: "Risk & Finance",
    items: [
      {
        name: "Internal Audit",
        note: "Controls testing, exceptions, documentation, and follow-up",
      },
      {
        name: "Financial Analysis",
        note: "Costs, savings, feasibility, and decision support",
      },
      {
        name: "Sustainable Finance",
        note: "Biodiversity, public, private, and blended finance",
      },
      {
        name: "ESG & Materiality",
        note: "ESG data, materiality, reporting, and risk assessment",
      },
    ],
  },
  {
    title: "Business & Execution",
    items: [
      {
        name: "Business Operations",
        note: "Budgeting, procurement, workflows, and process improvement",
      },
      {
        name: "Problem Solving",
        note: "Turning research and evidence into practical decisions",
      },
      {
        name: "Stakeholder Coordination",
        note: "Working across operational and institutional teams",
      },
      {
        name: "Entrepreneurial Experience",
        note: "Co-founded and operated a business",
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
  {
    label: "DigitalPlaybook",
    href: "https://digitalc-suite.blogspot.com/",
  },
] as const;

export const photoCredits = [
  {
    label: "Adivasi village, Umaria",
    href: "https://commons.wikimedia.org/wiki/File:Women_in_adivasi_village,_Umaria_district,_India.jpg",
    credit: "Wikimedia Commons, CC BY-SA",
  },
  {
    label: "IIT Madras gate",
    href: "https://commons.wikimedia.org/wiki/File:IIT_Madras_campus_main_gate_3.jpg",
    credit: "Tester051005, CC BY-SA 4.0",
  },
  {
    label: "North India agricultural fires",
    href: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_North_India,_Agriculture_Fires,_October_2010.jpg",
    credit: "NASA GSFC, public domain",
  },
  {
    label: "IIFM Bhopal campus",
    href: "https://commons.wikimedia.org/wiki/File:IIFM,_Bhopal_entrance_gate_2.jpg",
    credit: "Wikimedia Commons, CC BY-SA",
  },
  {
    label: "IIFM Bhopal",
    href: "https://commons.wikimedia.org/wiki/File:IIFM,_Bhopal_entrance_gate.jpg",
    credit: "Wikimedia Commons, CC BY-SA",
  },
  {
    label: "India vegetation, 2008",
    href: "https://commons.wikimedia.org/wiki/File:India_vegetation,_natural_and_cultivated,_favorable_weather_boosts_Indian_agriculture,_April_2008.jpg",
    credit: "NASA, public domain",
  },
] as const;  