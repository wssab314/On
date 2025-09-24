"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/store";
import { cn } from "@/lib/cn";

const tabs = [
  { href: "/", label: "首页", icon: "🏃" },
  { href: "/shop", label: "商城", icon: "🛍️" },
  { href: "/bag", label: "购物袋", icon: "🛒" },
  { href: "/account", label: "账户", icon: "👤" },
  { href: "/support", label: "客服", icon: "💬" },
];

export function TabNavigation() {
  const pathname = usePathname();
  const { bagCount } = useStore();

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-4 flex justify-center">
      <div className="pointer-events-auto w-[calc(100%-2rem)] max-w-md rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-xl backdrop-blur">
        <ul className="flex items-center justify-between text-xs font-medium text-slate-500">
          {tabs.map((tab) => {
            const isActive = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
            return (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  className={cn(
                    "relative flex flex-col items-center gap-1 rounded-full px-3 py-2 transition",
                    isActive ? "text-slate-900" : "hover:text-slate-900"
                  )}
                >
                  <span className="text-lg" aria-hidden>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  {tab.href === "/bag" && bagCount > 0 ? (
                    <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-slate-900 px-1 text-[10px] font-semibold text-white">
                      {bagCount}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
