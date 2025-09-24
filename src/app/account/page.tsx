"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/store/ProductCard";
import { useStore } from "@/context/store";
import { products } from "@/data/store";

export default function AccountPage() {
  const { favorites, addresses, setDefaultAddress, orders } = useStore();
  const [newsletter, setNewsletter] = useState(true);
  const [sms, setSms] = useState(false);
  const favoriteProducts = useMemo(
    () => products.filter((product) => favorites.includes(product.slug)),
    [favorites]
  );

  return (
    <div className="space-y-8 pb-6">
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Account</p>
          <h1 className="text-2xl font-semibold text-slate-900">Alex Fischer</h1>
          <p className="text-sm text-slate-500">alex@on.com · Member since 2021</p>
          <div className="inline-flex gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-200 px-3 py-1">On Run Club</span>
            <span className="rounded-full bg-slate-200 px-3 py-1">Loyalty tier: Cloud</span>
          </div>
        </div>
        <Button variant="secondary" size="sm">
          Edit profile
        </Button>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Orders</p>
            <h2 className="text-lg font-semibold text-slate-900">Purchase history</h2>
          </div>
          <Link href="/bag" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            View bag
          </Link>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          {orders.map((order) => (
            <article key={order.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span className="font-semibold text-slate-900">Order {order.id}</span>
                <span>{order.placedAt}</span>
              </div>
              <div className="mt-3 space-y-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>Status: {order.status}</span>
                <span>Shipping: {order.shippingSpeed}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {order.items.map((item) => (
                  <li key={`${order.id}-${item.productSlug}-${item.size}`} className="flex items-center justify-between">
                    <span>
                      {item.quantity}× {products.find((product) => product.slug === item.productSlug)?.name ?? item.productSlug}
                    </span>
                    <span>CHF {(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between text-sm font-semibold text-slate-900">
                <span>Total</span>
                <span>CHF {order.total.toFixed(2)}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Favourites</p>
            <h2 className="text-lg font-semibold text-slate-900">Saved gear</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            Explore
          </Link>
        </div>
        {favoriteProducts.length === 0 ? (
          <p className="text-sm text-slate-500">No favourites yet. Tap the save button on any product to keep it here.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Addresses</p>
          <h2 className="text-lg font-semibold text-slate-900">Where you receive gear</h2>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          {addresses.map((address) => (
            <article key={address.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{address.label}</p>
                  <p className="text-xs text-slate-400">{address.recipient}</p>
                  <p className="text-sm text-slate-600">
                    {address.line1}
                    {address.line2 ? `, ${address.line2}` : ""}, {address.postalCode} {address.city}, {address.country}
                  </p>
                  <p className="text-xs text-slate-400">{address.phone}</p>
                </div>
                {address.isDefault ? (
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Default</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setDefaultAddress(address.id)}
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900"
                  >
                    Set default
                  </button>
                )}
              </div>
            </article>
          ))}
          <Link href="/checkout" className="block">
            <Button variant="secondary" className="w-full">
              Add address
            </Button>
          </Link>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Preferences</p>
          <h2 className="text-lg font-semibold text-slate-900">Stay in the loop</h2>
        </div>
        <div className="space-y-3 text-sm text-slate-600">
          <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div>
              <p className="font-semibold text-slate-900">Email updates</p>
              <p className="text-xs text-slate-500">Drops, events and personalised training plans.</p>
            </div>
            <input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <div>
              <p className="font-semibold text-slate-900">SMS alerts</p>
              <p className="text-xs text-slate-500">Early access to member events near you.</p>
            </div>
            <input type="checkbox" checked={sms} onChange={(event) => setSms(event.target.checked)} />
          </label>
          <div className="rounded-2xl bg-slate-100 p-4 text-xs text-slate-500">
            Update your preferences anytime. Opting out may impact personalised recommendations in the feed.
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm text-sm text-slate-600">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Security</h2>
        <div className="flex flex-col gap-2">
          <Button variant="secondary">Reset password</Button>
          <Button variant="ghost" className="text-slate-500 hover:text-slate-900">
            Download personal data
          </Button>
          <Button variant="ghost" className="text-rose-500 hover:text-rose-600">
            Delete account
          </Button>
        </div>
      </section>
    </div>
  );
}
