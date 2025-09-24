"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/store/ProductCard";
import { useStore } from "@/context/store";
import { products } from "@/data/store";

export default function BagPage() {
  const {
    bagItems,
    bagCount,
    bagSubtotal,
    updateBagQuantity,
    removeFromBag,
    giftCard,
    applyGiftCard,
    removeGiftCard,
  } = useStore();
  const [giftCode, setGiftCode] = useState("");
  const [giftMessage, setGiftMessage] = useState<string | null>(null);

  const recommendations = useMemo(() => {
    const bagSlugs = new Set(bagItems.map((item) => item.product.slug));
    return products.filter((product) => !bagSlugs.has(product.slug)).slice(0, 2);
  }, [bagItems]);

  const total = useMemo(() => Math.max(bagSubtotal - (giftCard?.amount ?? 0), 0), [bagSubtotal, giftCard?.amount]);

  const handleApplyGiftCard = () => {
    const result = applyGiftCard(giftCode);
    setGiftMessage(result.message);
    if (result.success) {
      setGiftCode("");
    }
  };

  return (
    <div className="space-y-8 pb-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">购物袋</p>
        <h1 className="text-2xl font-semibold text-slate-900">你的装备 ({bagCount})</h1>
        <p className="text-sm text-slate-500">全场包邮，享受 30 天试穿保障。</p>
      </header>

      <section className="space-y-4">
        {bagItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white/80 p-8 text-center text-sm text-slate-500">
            购物袋还是空的，去商城挑选比赛装备吧。
            <div className="mt-4 inline-flex">
              <Link href="/shop">
                <Button size="sm">开始选购</Button>
              </Link>
            </div>
          </div>
        ) : (
          bagItems.map((item) => (
            <article key={item.id} className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 text-sm">
                  <h2 className="text-lg font-semibold text-slate-900">{item.product.name}</h2>
                  <p className="text-slate-500">{item.product.tagline}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.color}</p>
                  <p className="text-xs text-slate-400">尺码 {item.size}</p>
                </div>
                <div className="text-right text-sm font-semibold text-slate-900">
                  CHF {(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-1">
                  <button
                    type="button"
                    onClick={() => updateBagQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 rounded-full bg-slate-100 text-lg font-semibold text-slate-600"
                  >
                    -
                  </button>
                  <span className="min-w-[24px] text-center font-semibold text-slate-900">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateBagQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 rounded-full bg-slate-900 text-lg font-semibold text-white"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromBag(item.id)}
                  className="text-sm font-semibold text-slate-500 hover:text-slate-900"
                >
                  移除
                </button>
              </div>
            </article>
          ))
        )}
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">订单摘要</h2>
        <dl className="space-y-2 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <dt>商品小计</dt>
            <dd>CHF {bagSubtotal.toFixed(2)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>配送</dt>
            <dd className="text-emerald-600">免费</dd>
          </div>
          {giftCard ? (
            <div className="flex items-center justify-between text-emerald-600">
              <dt>礼品卡 ({giftCard.code})</dt>
              <dd>- CHF {giftCard.amount.toFixed(2)}</dd>
            </div>
          ) : null}
          <div className="flex items-center justify-between text-base font-semibold text-slate-900">
            <dt>应付金额</dt>
            <dd>CHF {total.toFixed(2)}</dd>
          </div>
        </dl>
        <div className="space-y-3">
          {giftCard ? (
            <button
              type="button"
              onClick={removeGiftCard}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500"
            >
              移除礼品卡
            </button>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                使用礼品卡
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={giftCode}
                  onChange={(event) => setGiftCode(event.target.value)}
                  placeholder="XXXX-XXXX"
                  className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none"
                />
                <Button size="sm" onClick={handleApplyGiftCard}>
                  使用
                </Button>
              </div>
              {giftMessage ? <p className="mt-3 text-xs text-slate-500">{giftMessage}</p> : null}
              <p className="mt-2 text-xs text-slate-400">小贴士：输入 ONRUN25 可减免 CHF 25。</p>
            </div>
          )}
          <Link href="/checkout" className="block">
            <Button className="w-full" disabled={bagItems.length === 0}>
              前往结账
            </Button>
          </Link>
        </div>
      </section>

      {recommendations.length > 0 ? (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">个性推荐</p>
              <h2 className="text-lg font-semibold text-slate-900">与之搭配</h2>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
              查看更多
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {recommendations.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
