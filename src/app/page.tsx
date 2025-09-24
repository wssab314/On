import Link from "next/link";
import { FlowCard } from "@/components/FlowCard";
import { categories, flows } from "@/data/flows";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-8">
      <header className="grid gap-10 rounded-4xl border border-slate-200 bg-white/80 p-10 shadow-sm backdrop-blur sm:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-slate-500">
            On mobile experience kit
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Rebuild the On Running iOS journey with reusable, responsive components.
          </h1>
          <p className="text-lg text-slate-600">
            Explore {flows.length} reconstructed flows across onboarding, shopping, account, and support moments. Each screen uses mock data so you can focus on layout, motion, and storytelling.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
              Interactive stepper preview
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" aria-hidden />
              Tailwind-first mobile styling
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Project timeline</p>
            <h2 className="text-3xl font-semibold">From PNGs to pages</h2>
            <p className="text-sm text-white/80">
              Each module is mapped directly from the provided PNG references. Use this kit to validate flows, gather feedback, or extend with live data.
            </p>
          </div>
          <Link
            href="#flows"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Jump to flows →
          </Link>
        </div>
      </header>

      <section id="flows" className="mt-16 space-y-16">
        {categories.map((category) => {
          const categoryFlows = flows.filter((flow) => flow.category === category.id);
          if (categoryFlows.length === 0) {
            return null;
          }

          return (
            <div key={category.id} className="space-y-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{category.label}</p>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {categoryFlows.length} flow{categoryFlows.length === 1 ? "" : "s"}
                  </h2>
                </div>
                <p className="max-w-xl text-sm text-slate-500">
                  {category.id === "Discovery"
                    ? "Onboarding, home, and discovery paths keep the momentum high."
                    : category.id === "Shop"
                    ? "Filter, compare, and deep dive into products with intent."
                    : category.id === "Bag"
                    ? "Checkout experiences with mock payments, gift cards, and progress."
                    : category.id === "Account"
                    ? "Account management, preferences, and sensitive actions."
                    : category.id === "Support"
                    ? "Assist customers with chat, FAQs, and store visits."
                    : "Keep track of everything post-purchase."}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {categoryFlows.map((flow) => (
                  <FlowCard key={flow.slug} flow={flow} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
