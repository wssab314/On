"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/store";
import { useStore } from "@/context/store";
import { Button } from "@/components/ui/Button";

const CATEGORY_LABELS: Record<Product["category"], string> = {
  road: "公路",
  trail: "越野",
  training: "训练",
  apparel: "服饰",
};

export function ProductDetail({ product }: { product: Product }) {
  const { addToBag, toggleFavorite, favorites } = useStore();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [status, setStatus] = useState<string | null>(null);
  const isFavorite = favorites.includes(product.slug);
  const categoryLabel = CATEGORY_LABELS[product.category] ?? product.category;

  const handleAdd = () => {
    if (!selectedColor || !selectedSize) {
      setStatus("请选择颜色与尺码");
      return;
    }
    addToBag(product, { size: selectedSize, color: selectedColor });
    setStatus("已加入购物袋");
    setTimeout(() => setStatus(null), 2000);
  };

  return (
    <div className="space-y-8 pb-6">
      <section className={`rounded-4xl p-6 text-white shadow-xl ${product.hero.background}`}>
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/80">
            {categoryLabel}
          </span>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
            <p className="mt-2 text-sm text-white/80">{product.tagline}</p>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">价格</p>
              <p className="text-2xl font-semibold">CHF {product.price.toFixed(2)}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleFavorite(product.slug)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                isFavorite ? "border-white bg-white text-slate-900" : "border-white/50 text-white hover:border-white"
              }`}
            >
              {isFavorite ? "已收藏" : "稍后收藏"}
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">颜色</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                  selectedColor === color.name
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                <span className="h-6 w-6 rounded-full border border-white shadow" style={{ backgroundColor: color.value }} />
                <div className="text-left">
                  <p className="font-semibold">{color.name}</p>
                  <p className="text-xs text-slate-400">{color.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">尺码</h2>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`rounded-2xl border px-3 py-2 text-sm font-medium transition ${
                  selectedSize === size
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">需要帮助？查看尺码指南或预约线上试穿。</p>
        </div>

        <div className="space-y-3">
          <Button className="w-full" onClick={handleAdd}>
            加入购物袋
          </Button>
          <Link href="/bag" className="block">
            <Button variant="secondary" className="w-full">
              查看购物袋
            </Button>
          </Link>
          {status ? <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500">{status}</p> : null}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">亮点速览</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-900" aria-hidden />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">技术参数</h2>
          <dl className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-600">
            {product.tech.map((spec) => (
              <div key={spec} className="rounded-2xl bg-slate-100 p-3">
                {spec}
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">详细信息</h2>
          <dl className="mt-3 grid gap-3 text-sm text-slate-600">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
                <dt className="font-semibold text-slate-900">{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">配送与退货</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• 瑞士及列支敦士登地区享受免费特快配送。</li>
          <li>• Try-On 计划：30 天试穿无忧，退货免费。</li>
          <li>• 与认证伙伴合作，实现碳中和配送。</li>
        </ul>
      </section>
    </div>
  );
}
