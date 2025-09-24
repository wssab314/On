import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TabItem {
  label: string;
  icon?: ReactNode;
  active?: boolean;
}

interface MobileTabBarProps {
  items: TabItem[];
  className?: string;
}

export function MobileTabBar({ items, className }: MobileTabBarProps) {
  return (
    <nav
      className={cn(
        "grid grid-cols-4 gap-2 rounded-full border border-slate-200 bg-white/80 p-2 text-[11px] font-medium text-slate-500",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col items-center gap-1 rounded-full px-2 py-1 transition-colors",
            item.active ? "bg-slate-900 text-white" : "text-slate-500",
          )}
        >
          <div className="h-4 w-4 rounded-full bg-slate-400/70" aria-hidden>
            {item.icon}
          </div>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
