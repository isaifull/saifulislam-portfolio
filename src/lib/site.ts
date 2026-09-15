export const site = {
  name: "Saiful Islam",
  role: "Sustainability strategist",
  location: "Varanasi",
  email: "alpsaiful17@gmail.com",
  year: "2026",
  origin: "IIFM Bhopal",
  currently: "Now at BFIL",
  lead: "I turn what the field actually does into carbon inventories, audit trails, and investment theses for climate-tech and agri-tech.",
  aside: "Assurance at Bharat Financial Inclusion. Theses, memos, and models on the side.",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export type Category = "Audit" | "Research" | "Venture";

export const categories: Array<"All" | Category> = [
  "All",
  "Audit",
  "Research",
  "Venture",
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
    deck: "Last-mile credit controls",
    category: "Audit",
    year: "2026",
    client: "Bharat Financial Inclusion Limited",
    summary:
      "Internal audit on a microfinance book: testing controls, tracing risk, and reading the last mile of Indian credit.",
    image: "/images/bfil.jpg",
    alt: "Women in an Adivasi village, Umaria district, Madhya Pradesh",
    cta: "Write",
  },
  {
    slug: "iit-madras",
    title: "IIT Madras",
    deck: "Nature-positive business research",
    category: "Research",
    year: "2024",
    client: "School of Sustainability",
    summary:
      "A research internship at the School of Sustainability on nature-positive business: field questions, policy questions, then a structure that can hold both.",
    image: "/images/iitm.jpg",
    alt: "The stone IIT Madras gate on the Chennai campus",
    href: "https://digitalc-suite.blogspot.com/",
    cta: "Read",
  },
  {
    slug: "phfi",
    title: "PHFI",
    deck: "Health, habitat, emissions",
    category: "Research",
    year: "2024",
    client: "Public Health Foundation of India",
    summary:
      "A sustainability internship where public health, environment, and greenhouse-gas inventories sit on the same desk.",
    image: "/images/phfi.jpg",
    alt: "NASA aerial of agricultural fires over North India, a public-health and GHG view",
    cta: "Write",
  },
  {
    slug: "edc",
    title: "EDC",
    deck: "Campus venture finance",
    category: "Venture",
    year: "2023",
    client: "Entrepreneurship Development Cell",
    summary:
      "Head of Finance: budgets, fundraising discipline, and the operating rhythm of a campus venture cell.",
    image: "/images/edc.jpg",
    alt: "Entrance road to IIFM Bhopal, students on a campus morning",
    cta: "Write",
  },
  {
    slug: "climate-desk",
    title: "Climate Desk",
    deck: "Theses, memos, models",
    category: "Venture",
    year: "2026",
    client: "Independent",
    summary:
      "Sector theses, investment memos, and financial models for climate-tech and agri-tech, built beside the day job.",
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
  lead: "Measure the land and the ledger. Then decide.",
  body: [
    "I trained in sustainability management at IIFM Bhopal. I now work as an Internal Auditor at Bharat Financial Inclusion Limited, a subsidiary of IndusInd Bank, testing controls at the last mile of Indian credit.",
    "I also write DigitalPlaybook and build toward climate-tech and agri-tech investing. Sector theses, investment memos, financial models. The method does not change with the object. Stay close to the field.",
  ],
  previously: [
    { role: "Research Intern, School of Sustainability", place: "IIT Madras", year: "2024" },
    { role: "Sustainability Intern", place: "PHFI", year: "2024" },
    { role: "Head of Finance", place: "EDC", year: "2023" },
  ],
};

export const skillGroups = [
  {
    title: "Assurance",
    items: [
      { name: "Internal Auditor", note: "Controls testing on a microfinance book" },
      { name: "Carbon Accounting", note: "Inventories that can survive review" },
      { name: "Life Cycle Assessment", note: "Impacts from field to finish" },
      { name: "Materiality", note: "What actually moves the decision" },
    ],
  },
  {
    title: "Analysis",
    items: [
      { name: "Financial Modelling", note: "Unit economics for climate and agri" },
      { name: "Data Analysis", note: "Ledgers and field notes, made readable" },
      { name: "Sector Theses", note: "Where the next bets sit" },
      { name: "Investment Memos", note: "The case, written to be argued" },
    ],
  },
  {
    title: "Expression",
    items: [
      { name: "Research Writing", note: "Policy and practice, in that order" },
      { name: "Field Notes", note: "DigitalPlaybook, in public" },
      { name: "Generative AI", note: "Drafting with a human last pass" },
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
