"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/store/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/store";

const categories = [
  { id: "all", label: "All" },
  { id: "road", label: "Road" },
  { id: "trail", label: "Trail" },
  { id: "training", label: "Training" },
  { id: "apparel", label: "Apparel" },
];

const genders = [
  { id: "all", label: "All" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "unisex", label: "Unisex" },
];

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [gender, setGender] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesGender = gender === "all" || product.gender === gender;
      const matchesQuery =
        query.length === 0 ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.tagline.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesGender && matchesQuery;
    });
  }, [category, gender, query]);

  return (
    <div className="space-y-8 pb-6">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Shop</p>
        <h1 className="text-2xl font-semibold text-slate-900">Choose your run</h1>
        <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-500 shadow-sm">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search shoes, apparel, accessories"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                category === item.id
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">For</h2>
        <div className="flex flex-wrap gap-2">
          {genders.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setGender(item.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                gender === item.id
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
          <Button variant="secondary" size="sm">
            Filter & sort
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
