import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { products, stories, events } from "@/data/store";
import { ProductCard } from "@/components/store/ProductCard";

export default function HomePage() {
  const trending = products.slice(0, 3);

  return (
    <div className="space-y-10 pb-6">
      <section className="rounded-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-white/30 px-4 py-1 text-xs tracking-[0.4em] uppercase text-white/70">
            On Run Club
          </span>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Run on clouds</h1>
            <p className="text-sm text-white/80">
              Discover the latest drops, curate your race kit, and book in-store experiences — all optimised for the On mobile storefront.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button className="w-full">Shop collection</Button>
            </Link>
            <Link href="/support" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full text-slate-900">
                Talk to an expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Featured</p>
            <h2 className="text-xl font-semibold text-slate-900">Trending for race season</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            View all
          </Link>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {trending.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Community</p>
          <h2 className="text-xl font-semibold text-slate-900">Upcoming experiences</h2>
        </header>
        <div className="space-y-3">
          {events.map((event) => (
            <article key={event.id} className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 text-sm text-slate-500">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{event.location}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{event.title}</h3>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{event.date}</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{event.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                Reserve a spot →
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Stories</p>
            <h2 className="text-xl font-semibold text-slate-900">Inspiration from the lab</h2>
          </div>
          <Link href="/account" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            Member hub
          </Link>
        </header>
        <div className="space-y-3">
          {stories.map((story) => (
            <article key={story.id} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>{story.badge}</span>
                <span>Read time • 3 min</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{story.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{story.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                Open story →
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-sm">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Membership</p>
            <h2 className="text-xl font-semibold text-slate-900">Unlock On Run Club perks</h2>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Priority access to limited drops and collaborations.</li>
            <li>• Personalised training plans from world-class athletes.</li>
            <li>• Invitations to run labs, store events and race weekends.</li>
          </ul>
          <Link href="/account" className="w-full">
            <Button variant="secondary" className="w-full">
              Manage membership
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
