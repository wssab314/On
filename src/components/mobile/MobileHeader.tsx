import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MobileHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  leading?: ReactNode;
  trailing?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function MobileHeader({
  title,
  subtitle,
  alignment = "left",
  leading,
  trailing,
  children,
  className,
}: MobileHeaderProps) {
  return (
    <header
      className={cn(
        "mb-4 flex flex-col gap-4 text-slate-900",
        alignment === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          {leading}
          {subtitle ? <span>{subtitle}</span> : null}
        </div>
        {trailing}
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        {children}
      </div>
    </header>
  );
}
