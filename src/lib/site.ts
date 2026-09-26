export const site = {
  name: "Saiful Islam",
  role: "· Climate · Sustainability · Risk · Finance",
  location: "India", 
  email: "alpsaiful17@gmail.com",
  year: "2026",
  origin: "IIFM Bhopal",
  currently: "Now at BFIL",
  lead: "I research how climate and sustainability problems become business, risk, and investment decisions.", 
  aside: "Climate research, risk analysis, decarbonization, sustainable finance, and business operations.",
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
    deck: "Risk, controls & responsible finance",
    category: "Risk & Controls",
    year: "2026",
    client: "Bharat Financial Inclusion Limited",
    summary:
  "Conducting branch-level audits across lending and operational processes, reviewing documentation, transactions, controls, and corrective actions to identify risk and control gaps.",
    image: "/images/bfil.jpg",
    alt: "Women in an Adivasi village, Umaria district, Madhya Pradesh",
    cta: "Write",
  },
  {
    slug: "iit-madras",
    title: "IIT Madras",
    deck: "Nature-positive business research",
    category: "Research & Finance",  
    year: "2025-2026",
    client: "School of Sustainability",
    summary: 
  "Researching nature-positive business models, ecosystem-service dependencies, nature-related business risks, policy developments, and emerging biodiversity-finance mechanisms.",
    image: "/images/iitm.jpg",
    alt: "The stone IIT Madras gate on the Chennai campus",
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
    "Developed a greenhouse-gas inventory and decarbonization roadmap for a 2,000-bed healthcare facility, assessing solar, waste, and other interventions with financial feasibility and payback analysis.",
  image: "/images/phfi.jpg",
  alt: "NASA aerial of agricultural fires over North India, a public-health and GHG view",
  cta: "Write",
},
   { 
    slug: "edc",
    title: "EDC",
    deck: "Venture finance & operations",
    category: "Finance & Ventures",
    year: "2023",
    client: "Entrepreneurship Development Cell",
    summary:
      "Managed budgeting, fundraising, financial coordination, and operating processes within a student entrepreneurship ecosystem.",
    image: "/images/edc.jpg",
    alt: "Entrance road to IIFM Bhopal, students on a campus morning",
    cta: "Write", 
  },
  {
  slug: "climate-desk",
  title: "Climate Desk",
  deck: "Climate-tech research & investment",
  category: "Finance & Ventures",
  year: "2026",
  client: "Independent",
  summary:
    "Building sector research, investment theses, and financial models to understand climate-tech and agri-tech businesses, risks, and opportunities.",
  image: "/images/climate.jpg",
  alt: "NASA satellite view of vegetation and cultivated land across India, April 2008",
  cta: "Write",
},
];

export const about = {
  portrait: "/images/iifm.jpg",

  portraitAlt: "Entrance gate of the Indian Institute of Forest Management, Bhopal",

  caption: "IIFM Bhopal",

  kicker: "Field notes",

  lead: "I work across sustainability, risk, finance, and the practical work of turning ideas into decisions.",

  body: [
    "My background sits at the intersection of sustainability management, business analysis, and execution. I have worked across internal audit, climate and nature research, decarbonization, and sustainable finance.",

    "At PHFI, I developed a GHG inventory and assessed decarbonization interventions for a 2,000-bed healthcare facility. At IIT Madras, I researched nature-positive business models, nature-related business risk, and biodiversity-finance mechanisms. At Bharat Financial Inclusion, I work on branch-level audit, controls, risk, and corrective action.",

    "I have also operated a business myself—co-founding and managing a restaurant, handling budgeting and procurement, improving revenue, and redesigning operating workflows. That experience shapes how I approach startups and new businesses: understand the problem, test the economics, work with evidence, and turn analysis into action.",
  ],

  previously: [
    { role: "Internal Auditor", place: "Bharat Financial Inclusion", year: "Now" },
    { role: "Research Intern, School of Sustainability", place: "IIT Madras", year: "2025–26" },
    { role: "Decarbonization Intern", place: "PHFI", year: "2025" },
  ],
}; 

export const skillGroups = [
  {
    title: "Climate & Nature",
    items: [
      {
        name: "GHG Accounting",
        note: "Inventory development, activity data, and emissions analysis",
      },
      {
        name: "Decarbonization",
        note: "Roadmaps, interventions, financial feasibility, and payback analysis",
      },
      {
        name: "Nature & Climate Risk",
        note: "Nature-related business risk, ecosystem dependencies, and climate analysis",
      },
      {
        name: "Sustainability Research",
        note: "Policy analysis, business-model research, and evidence synthesis",
      },
    ],
  },
  {
    title: "Risk & Finance",
    items: [
      {
        name: "Internal Audit",
        note: "Controls testing, exceptions, documentation, and corrective action",
      },
      {
        name: "Financial Analysis",
        note: "Costs, savings, payback, and decision support",
      },
      {
        name: "Sustainable Finance",
        note: "Biodiversity, blended, and responsible-finance research",
      },
      {
        name: "ESG & Materiality",
        note: "ESG data, reporting support, materiality, and risk assessment",
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
        note: "Working across operational, research, and institutional teams",
      },
      {
        name: "Entrepreneurial Experience",
        note: "Co-founded and operated a business with responsibility for revenue and operations",
      },
    ],
  },
] as const; 

export const skillRibbon = skillGroups.flatMap((group) =>
  group.items.map((item) => item.name),
);

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saiful-sustainability" },
  { label: "DigitalPlaybook", href: "https://digitalc-suite.blogspot.com/" },
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
