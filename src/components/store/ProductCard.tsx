"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/store";
import { useStore } from "@/context/store";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface ProductCardProps {
  product: Product;
  showActions?: boolean;
}

export function ProductCard({ product, showActions = true }: ProductCardProps) {
  const { addToBag, toggleFavorite, favorites } = useStore();
  const [justAdded, setJustAdded] = useState(false);
  const isFavorite = favorites.includes(product.slug);
  const defaultSize = product.sizes[0];
  const defaultColor = product.colors[0];

  const handleAdd = () => {
    addToBag(product, { size: defaultSize, color: defaultColor.name });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
      <Link href={`/product/${product.slug}`} className="group block">
        <div className={cn("flex h-40 items-center justify-center rounded-2xl", product.hero.background)}>
          <div className={cn("h-20 w-20 rounded-full", product.hero.accent)} aria-hidden />
        </div>
        <div className="mt-4 space-y-1 text-sm">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.category}</div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">{product.name}</h3>
          <p className="text-slate-500">{product.tagline}</p>
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-900">CHF {product.price.toFixed(2)}</p>
          <div className="mt-2 flex gap-1">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="h-4 w-4 rounded-full border border-white shadow"
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>
        {showActions ? (
          <div className="flex flex-col items-end gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(product.slug)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold transition",
                isFavorite
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              )}
            >
              {isFavorite ? "Saved" : "Save"}
            </button>
            <Button size="sm" onClick={handleAdd} className="min-w-[120px]">
              {justAdded ? "Added" : "Quick add"}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
