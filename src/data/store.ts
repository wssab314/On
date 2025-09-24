export type ProductColor = {
  name: string;
  value: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "road" | "trail" | "training" | "apparel";
  gender: "men" | "women" | "unisex";
  price: number;
  hero: {
    background: string;
    accent: string;
  };
  description: string;
  benefits: string[];
  tech: string[];
  colors: ProductColor[];
  sizes: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "cloudboom-echo-4",
    name: "Cloudboom Echo 4",
    tagline: "Race-day speed with Helion™ HF foam",
    category: "road",
    gender: "men",
    price: 219.95,
    hero: {
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      accent: "bg-emerald-400",
    },
    description:
      "A featherlight racing shoe tuned with a full-length Speedboard® and a responsive Helion™ HF superfoam midsole for explosive toe-offs.",
    benefits: [
      "Dual-layer mesh upper keeps things breathable on tempo efforts.",
      "New rocker geometry smooths transitions and conserves energy.",
      "Matte heel counters lock the foot without pressure points.",
    ],
    tech: [
      "Stack height: 35 mm / 27 mm",
      "Drop: 8 mm",
      "Weight: 215 g",
      "Recycled content: 72%",
    ],
    colors: [
      { name: "Glacier / Black", value: "#d8e4f7", description: "Signature On racing palette" },
      { name: "Flare / Quartz", value: "#fbb6b6", description: "Limited edition marathon drop" },
      { name: "Ivory / Flame", value: "#f7e0c3", description: "Contrast outsole for extra pop" },
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    specs: [
      { label: "Support", value: "Neutral" },
      { label: "Cushion", value: "Responsive" },
      { label: "Distance", value: "5K - Marathon" },
    ],
  },
  {
    slug: "cloudsurfer-trail",
    name: "Cloudsurfer Trail",
    tagline: "All-conditions comfort on technical terrain",
    category: "trail",
    gender: "unisex",
    price: 199.95,
    hero: {
      background: "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800",
      accent: "bg-sky-400",
    },
    description:
      "CloudTec Phase® cushioning, a Missiongrip™ outsole and a durable ripstop upper combine for a confident ride when the trail turns unpredictable.",
    benefits: [
      "CloudTec Phase® pods collapse in sequence for smoother downhill flow.",
      "Missiongrip™ rubber with re-engineered lug pattern adds bite.",
      "Perforated tongue and forefoot for fast drainage on wet adventures.",
    ],
    tech: [
      "Stack height: 32 mm / 26 mm",
      "Drop: 6 mm",
      "Weight: 275 g",
      "Water resistance: DWR coated",
    ],
    colors: [
      { name: "Cobalt / Moss", value: "#284c63", description: "Everyday trail essential" },
      { name: "Sienna / Flame", value: "#e0743c", description: "High visibility for dusk runs" },
    ],
    sizes: ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    specs: [
      { label: "Support", value: "Neutral" },
      { label: "Grip", value: "Missiongrip™" },
      { label: "Best for", value: "Trail ultras" },
    ],
  },
  {
    slug: "cloudmonster-2",
    name: "Cloudmonster 2",
    tagline: "Maximum cushioning for everyday miles",
    category: "road",
    gender: "unisex",
    price: 189.95,
    hero: {
      background: "bg-gradient-to-br from-slate-700 via-slate-900 to-black",
      accent: "bg-amber-400",
    },
    description:
      "Monster CloudTec® pods loaded with Helion™ superfoam deliver stacked cushioning without losing the snappy transition On shoes are known for.",
    benefits: [
      "Mega CloudTec® pods with reworked Speedboard® for natural motion.",
      "Sockliner updated with dual-density foam for plush step-in comfort.",
      "35% recycled content across upper and midsole components.",
    ],
    tech: [
      "Stack height: 34 mm / 28 mm",
      "Drop: 6 mm",
      "Weight: 295 g",
      "Ride: Plush + energetic",
    ],
    colors: [
      { name: "Eclipse / Black", value: "#111827", description: "Classic On aesthetic" },
      { name: "Frost / Glacier", value: "#dbe7f5", description: "Fresh seasonal drop" },
      { name: "Citron / Meadow", value: "#d3e97a", description: "Exclusive members only" },
    ],
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    specs: [
      { label: "Support", value: "Neutral" },
      { label: "Feel", value: "Max cushion" },
      { label: "Mileage", value: "Daily trainer" },
    ],
  },
  {
    slug: "performance-tee",
    name: "Performance-T",
    tagline: "Ultralight race-day layer",
    category: "apparel",
    gender: "unisex",
    price: 79.95,
    hero: {
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      accent: "bg-white/70",
    },
    description:
      "A technical tee engineered with bonded seams, strategic ventilation and sweat-wicking fabrics to keep you focused on the finish line.",
    benefits: [
      "Featherlight Japanese knit fabric dries in seconds.",
      "Bonded seams eliminate chafing during long efforts.",
      "Reflective hits keep you visible for pre-dawn efforts.",
    ],
    tech: [
      "Fit: Slim",
      "Fabric: 100% recycled polyester",
      "Care: Cold wash, hang dry",
      "Weight: 62 g",
    ],
    colors: [
      { name: "Night / Lunar", value: "#0f172a", description: "Team On edition" },
      { name: "Shore / Pebble", value: "#e5e7eb", description: "Training essential" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: [
      { label: "Use", value: "Race day" },
      { label: "Feel", value: "Second-skin" },
      { label: "Technology", value: "Quick dry" },
    ],
  },
  {
    slug: "weather-jacket",
    name: "Weather Jacket",
    tagline: "Featherlight protection for unpredictable forecasts",
    category: "training",
    gender: "unisex",
    price: 259.95,
    hero: {
      background: "bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900",
      accent: "bg-blue-400",
    },
    description:
      "Made with high-tech Japanese fabrics, this jacket delivers breathable weather protection while packing down into its own pocket.",
    benefits: [
      "Minimal seam construction reduces weight and bulk.",
      "360° ventilation keeps air flowing during uptempo sessions.",
      "Water-resistant zip with storm flap shields out wind.",
    ],
    tech: [
      "Fabric: Polyamide / Elastane",
      "Water resistance: DWR treated",
      "Storage: Packs into chest pocket",
      "Weight: 180 g",
    ],
    colors: [
      { name: "Navy / Black", value: "#111827", description: "Core" },
      { name: "Mist / Glacier", value: "#d1d5db", description: "Seasonal" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: [
      { label: "Use", value: "Commute & warm-ups" },
      { label: "Protection", value: "Wind & rain" },
      { label: "Packable", value: "Self-stowing" },
    ],
  },
];

export type Story = {
  id: string;
  title: string;
  excerpt: string;
  badge: string;
};

export const stories: Story[] = [
  {
    id: "on-run-club",
    title: "Intervals with On Run Club",
    excerpt: "Coach-led speedwork sessions every Wednesday in Zurich, London and Berlin.",
    badge: "Community",
  },
  {
    id: "athlete-lab",
    title: "Inside the Athlete Lab",
    excerpt: "Go behind the scenes with triathlete Gustav Iden as he tests the Cloudboom prototype.",
    badge: "Story",
  },
  {
    id: "climate-program",
    title: "Climate program 2025",
    excerpt: "See how we are investing in circular textiles and reducing shipping emissions.",
    badge: "Impact",
  },
];

export type EventHighlight = {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
};

export const events: EventHighlight[] = [
  {
    id: "moonlight-5k",
    title: "Moonlight 5K",
    location: "Zurich flagship store",
    date: "12 May, 20:00",
    description: "Join the On crew for a twilight shakeout around Lake Zurich. Shoes to test provided on-site.",
  },
  {
    id: "summit-series",
    title: "Summit Series",
    location: "Interlaken",
    date: "25 May, 08:30",
    description: "Guided trail run with our athlete team and tips on gear layering for alpine missions.",
  },
];

export type FAQ = {
  question: string;
  answer: string;
  category: "orders" | "returns" | "membership" | "stores";
};

export const faqs: FAQ[] = [
  {
    question: "How fast is express shipping?",
    answer: "Orders placed before 17:00 ship the same day and arrive in 1-2 business days across Switzerland.",
    category: "orders",
  },
  {
    question: "Can I return items after running in them?",
    answer: "Yes. Try-On period gives you 30 days to test shoes outdoors. Initiate returns for free inside the On app or at any store.",
    category: "returns",
  },
  {
    question: "What perks come with On Run Club membership?",
    answer: "Exclusive gear drops, training plans from pro athletes, priority race bibs, and first access to On events.",
    category: "membership",
  },
  {
    question: "Where can I get fitted in person?",
    answer: "Visit On flagship stores in Zurich, London, Tokyo or find your closest retail partner in the store locator.",
    category: "stores",
  },
];
