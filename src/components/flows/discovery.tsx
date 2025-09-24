import { MobileFrame } from "@/components/mobile/MobileFrame";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { MobileList, MobileListItem } from "@/components/mobile/MobileList";
import { MobileTabBar } from "@/components/mobile/MobileTabBar";
import { FlowDefinition } from "@/types/flows";
import { ProgressBar } from "@/components/ui/ProgressBar";

const heroGradient = "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white";

const OnboardingWelcome = () => (
  <MobileFrame backgroundClassName={heroGradient} footer={<Button className="w-full">Start exploring</Button>}>
    <div className="flex h-full flex-col justify-between text-white">
      <div className="flex flex-col gap-6">
        <MobileHeader
          title="Run on clouds"
          subtitle="Onboarding"
          alignment="left"
          trailing={<Chip className="bg-white/20 text-white">Step 1 of 3</Chip>}
        >
          <p className="mt-2 text-sm text-slate-200">
            Tailored guidance for your next pair of performance shoes.
          </p>
        </MobileHeader>
        <div className="space-y-4 rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm font-semibold">Tell us how you run</p>
          <SegmentedControl options={["Road", "Trail", "Mixed"]} activeIndex={0} />
          <div className="rounded-2xl bg-white/10 p-4 text-xs leading-relaxed text-slate-100">
            <p>We will suggest cushioning, support, and upcoming drops that match your routine.</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <ProgressBar value={33} />
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-slate-300">Swipe to continue</p>
      </div>
    </div>
  </MobileFrame>
);

const OnboardingPreferences = () => (
  <MobileFrame
    footer={
      <div className="flex gap-2">
        <Button variant="secondary" className="flex-1">
          Skip
        </Button>
        <Button className="flex-1">Next</Button>
      </div>
    }
  >
    <MobileHeader title="Personalise your feed" subtitle="Preferences" trailing={<Chip>Step 2 of 3</Chip>}>
      <p className="mt-2 text-sm text-slate-500">
        Choose the stories that get you moving first.
      </p>
    </MobileHeader>
    <MobileList>
      <MobileListItem
        title="Race preparation"
        subtitle="Daily workouts & nutrition"
        active
        description="Highlight structured programmes and upcoming events in your area."
      />
      <MobileListItem
        title="Community"
        subtitle="Local runs & clubs"
        description="Stay in the loop with events hosted by On stores and partners."
      />
      <MobileListItem
        title="Gear drops"
        subtitle="Limited releases"
        description="Never miss a collaboration or early access to pro-kit."
      />
    </MobileList>
  </MobileFrame>
);

const OnboardingFinish = () => (
  <MobileFrame
    footer={
      <div className="flex flex-col gap-3">
        <Button className="w-full">Enter the app</Button>
        <Button variant="ghost" className="w-full text-slate-500">
          Remind me later
        </Button>
      </div>
    }
  >
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-600 text-3xl font-semibold text-white">
        on
      </div>
      <h2 className="mt-8 text-2xl font-semibold text-slate-900">You are all set</h2>
      <p className="mt-3 text-sm text-slate-500">
        Your home feed now highlights new drops, local runs, and personalised coaching.
      </p>
    </div>
  </MobileFrame>
);

const HomeFeed = () => (
  <MobileFrame
    footer={<MobileTabBar items={[{ label: "Home", active: true }, { label: "Shop" }, { label: "Bag" }, { label: "Profile" }]} />}
  >
    <MobileHeader title="Good morning, Alex" subtitle="9 May, Zurich" trailing={<Chip className="bg-slate-100 text-slate-500">10ºC</Chip>}>
      <p className="mt-2 text-sm text-slate-500">Today feels like a speed session. Your Cloudsurfer is ready.</p>
    </MobileHeader>
    <div className="space-y-5">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/70">
          <span>Featured drop</span>
          <span>02:12:45</span>
        </div>
        <p className="mt-4 text-2xl font-semibold">Cloudboom Echo 4</p>
        <p className="mt-2 text-sm text-white/80">Engineered for race day speed with Helion HF foam.</p>
        <Button className="mt-5 w-full bg-white text-slate-900 hover:bg-slate-100">See details</Button>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Training</p>
        <h3 className="mt-2 text-lg font-semibold">Interval workout ready</h3>
        <p className="text-sm text-slate-500">5 x 800m at 10k pace, rest 2&apos;. Track your splits with On Run Club.</p>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-100 p-3 text-xs font-medium text-slate-600">
          <span>Start session</span>
          <span className="rounded-full bg-white px-3 py-1 text-slate-900">Launch</span>
        </div>
      </div>
    </div>
  </MobileFrame>
);

const ShopFeed = () => (
  <MobileFrame
    footer={<MobileTabBar items={[{ label: "Home" }, { label: "Shop", active: true }, { label: "Bag" }, { label: "Profile" }]} />}
  >
    <MobileHeader title="Men&apos;s road running" subtitle="Shop">
      <div className="mt-3 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
        <span>Search models, colours...</span>
      </div>
    </MobileHeader>
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        {["Cloudmonster 2", "Cloudflow 4", "Cloudgo", "Cloudsurfer Trail"].map((name, index) => (
          <div key={name} className="rounded-3xl border border-slate-200 bg-white p-3">
            <div className="h-28 rounded-2xl bg-slate-100" />
            <p className="mt-3 text-sm font-semibold text-slate-900">{name}</p>
            <p className="text-xs text-slate-500">CHF {index % 2 === 0 ? "189.95" : "159.95"}</p>
            <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            </div>
          </div>
        ))}
      </div>
      <Button className="w-full" variant="secondary">
        Filter & sort
      </Button>
    </div>
  </MobileFrame>
);

const SearchScreen = () => (
  <MobileFrame>
    <MobileHeader title="Search On" subtitle="Explore">
      <div className="mt-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-500">
        <span>Running shoes, hiking, apparel...</span>
      </div>
    </MobileHeader>
    <div className="space-y-5">
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Trending</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-600">
          <Chip>Cloudrunner waterproof</Chip>
          <Chip>District sneaker</Chip>
          <Chip>Race kit</Chip>
          <Chip>Gift cards</Chip>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Recent searches</p>
        <ul className="mt-3 space-y-3 text-sm text-slate-500">
          <li className="flex items-center justify-between">
            <span>Cloudboom Echo</span>
            <span className="text-xs text-slate-400">02:12</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Lightweight jackets</span>
            <span className="text-xs text-slate-400">Yesterday</span>
          </li>
          <li className="flex items-center justify-between">
            <span>On store Zurich</span>
            <span className="text-xs text-slate-400">Last week</span>
          </li>
        </ul>
      </div>
    </div>
  </MobileFrame>
);

const FilteringProducts = () => (
  <MobileFrame
    footer={
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">126 results</span>
        <Button className="min-w-[140px]">Apply filters</Button>
      </div>
    }
  >
    <MobileHeader title="Filters" subtitle="Running">
      <p className="mt-2 text-sm text-slate-500">Fine tune cushioning, width, and delivery speed.</p>
    </MobileHeader>
    <MobileList>
      <MobileListItem title="Sort by" subtitle="Most popular" />
      <MobileListItem
        title="Cushioning"
        subtitle="Responsive"
        description="From race day firm to ultra-soft."
        trailing={<SegmentedControl options={["Soft", "Balanced", "Responsive"]} activeIndex={2} />}
      />
      <MobileListItem
        title="Width"
        subtitle="Standard"
        trailing={<SegmentedControl options={["Standard", "Wide"]} activeIndex={0} />}
      />
      <MobileListItem title="Delivery" subtitle="2-day express" />
    </MobileList>
  </MobileFrame>
);

const FilterMenu = () => (
  <MobileFrame
    footer={
      <div className="flex items-center justify-between">
        <Button variant="ghost">Reset</Button>
        <Button className="min-w-[120px]">Show results</Button>
      </div>
    }
  >
    <MobileHeader title="Quick filters" subtitle="Shop">
      <p className="mt-2 text-sm text-slate-500">Toggle themes to refresh the grid instantly.</p>
    </MobileHeader>
    <div className="grid grid-cols-2 gap-3">
      {["Race day", "Tempo", "Everyday", "Trail", "Waterproof", "Lifestyle"].map((item, index) => (
        <div
          key={item}
          className={`flex h-32 flex-col justify-between rounded-3xl border p-4 text-sm font-semibold ${
            index === 0 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          <span>{item}</span>
          <span className="text-xs text-slate-400">{index === 0 ? "Active" : "Tap to activate"}</span>
        </div>
      ))}
    </div>
  </MobileFrame>
);

const GridToggle = () => (
  <MobileFrame>
    <MobileHeader title="Running shoes" subtitle="Grid view">
      <p className="mt-2 text-sm text-slate-500">Switch layout without losing filters or scroll position.</p>
    </MobileHeader>
    <SegmentedControl options={["List", "2-column", "Full"]} activeIndex={1} />
    <div className="mt-5 grid grid-cols-2 gap-3">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="rounded-3xl border border-slate-200 bg-white p-3">
          <div className="h-24 rounded-2xl bg-slate-100" />
          <p className="mt-3 text-sm font-semibold text-slate-900">Cloudswift Edge</p>
          <p className="text-xs text-slate-500">CHF 179.95</p>
        </div>
      ))}
    </div>
  </MobileFrame>
);

const ProductDetail = () => (
  <MobileFrame
    footer={
      <div className="flex items-center gap-3">
        <div className="flex flex-1 items-center justify-between rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
          <span>CHF 219.95</span>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Add</span>
        </div>
        <Button size="sm">Try AR</Button>
      </div>
    }
  >
    <MobileHeader title="Cloudboom Echo 4" subtitle="Race day">
      <p className="mt-2 text-sm text-slate-500">Propulsive carbon and Helion HF foam to carry you beyond personal bests.</p>
    </MobileHeader>
    <div className="space-y-5">
      <div className="h-48 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700" />
      <SegmentedControl options={["Men", "Women"]} activeIndex={0} />
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Select size</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"].map((size, index) => (
            <div
              key={size}
              className={`rounded-2xl border px-3 py-2 text-center text-sm font-medium ${
                index === 2 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 text-slate-600"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Reviews</p>
        <p className="mt-2 text-lg font-semibold text-slate-900">4.8 • 1,245 ratings</p>
        <p className="text-sm text-slate-500">&ldquo;Explosive on race day. Smooth enough for tempo days.&rdquo;</p>
      </div>
    </div>
  </MobileFrame>
);

export const discoveryFlows: FlowDefinition[] = [
  {
    slug: "onboarding",
    name: "Onboarding",
    category: "Discovery",
    summary: "Three-step onboarding to tailor stories, drops, and workouts to a new runner.",
    heroTag: "Getting started",
    heroDescription: "Personalised setup for the On experience.",
    screens: [
      { id: "welcome", title: "Welcome", description: "Intro card", Component: OnboardingWelcome },
      { id: "preferences", title: "Preferences", description: "Choose interest", Component: OnboardingPreferences },
      { id: "finish", title: "Complete", description: "Confirmation", Component: OnboardingFinish },
    ],
  },
  {
    slug: "home",
    name: "Home",
    category: "Discovery",
    summary: "A personalised landing screen featuring featured drops, workouts, and community updates.",
    heroTag: "Daily pulse",
    heroDescription: "Morning highlights across training and gear.",
    screens: [
      { id: "feed", title: "Feed", description: "Home feed", Component: HomeFeed },
    ],
  },
  {
    slug: "shop",
    name: "Shop",
    category: "Shop",
    summary: "Curated product grid with quick filters, price tags, and colour swatches.",
    heroTag: "Product discovery",
    heroDescription: "Browse core running catalogue.",
    screens: [
      { id: "grid", title: "Grid", description: "Browse view", Component: ShopFeed },
    ],
  },
  {
    slug: "searching-on",
    name: "Searching On",
    category: "Discovery",
    summary: "Search interface mixing trending queries and recent history for fast retrieval.",
    heroTag: "Find anything",
    heroDescription: "Search and quick suggestions.",
    screens: [
      { id: "search", title: "Search", description: "Query input", Component: SearchScreen },
    ],
  },
  {
    slug: "filtering-products",
    name: "Filtering products",
    category: "Shop",
    summary: "Side panel filters to refine cushioning, fit, and shipping preferences.",
    heroTag: "Refine",
    heroDescription: "Detailed filtering tools.",
    screens: [
      { id: "filter", title: "Filter panel", description: "Filter details", Component: FilteringProducts },
    ],
  },
  {
    slug: "filtering-products-menu",
    name: "Filtering products (menu)",
    category: "Shop",
    summary: "Quick menu toggles to instantly update the product grid.",
    heroTag: "Quick actions",
    heroDescription: "Toggle curated product themes.",
    screens: [
      { id: "menu", title: "Menu", description: "Quick filters", Component: FilterMenu },
    ],
  },
  {
    slug: "switching-to-grid-view",
    name: "Switching to grid view",
    category: "Shop",
    summary: "Showcases list and grid toggle with responsive product cards.",
    heroTag: "Layout control",
    heroDescription: "Switch between list and grid.",
    screens: [
      { id: "toggle", title: "Toggle", description: "Grid view", Component: GridToggle },
    ],
  },
  {
    slug: "product-detail",
    name: "Product detail",
    category: "Shop",
    summary: "Product hero with imagery, size selection, and review snippet for context.",
    heroTag: "Product detail",
    heroDescription: "Immersive product page.",
    screens: [
      { id: "detail", title: "Detail", description: "Product info", Component: ProductDetail },
    ],
  },
];
