"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/store/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/store";

const categories = [
  { id: "all", label: "全部" },
  { id: "road", label: "公路" },
  { id: "trail", label: "越野" },
  { id: "training", label: "训练" },
  { id: "apparel", label: "服饰" },
];

const genders = [
  { id: "all", label: "全部" },
  { id: "men", label: "男款" },
  { id: "women", label: "女款" },
  { id: "unisex", label: "通用" },
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
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">商城</p>
        <h1 className="text-2xl font-semibold text-slate-900">挑选你的跑步装备</h1>
        <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-500 shadow-sm">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索鞋款、服装、配件"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">类别</h2>
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
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">适用人群</h2>
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
          <span>{filtered.length} 件商品</span>
          <Button variant="secondary" size="sm">
            筛选与排序
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
