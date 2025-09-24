import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MobileListItemProps {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  leading?: ReactNode;
  active?: boolean;
  description?: string;
  action?: ReactNode;
}

export function MobileListItem({
  title,
  subtitle,
  trailing,
  leading,
  active,
  description,
  action,
}: MobileListItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/90 p-4",
        active ? "border-slate-900 shadow-inner" : "",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 items-start gap-3">
          {leading ? (
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
              {leading}
            </div>
          ) : null}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-slate-900">{title}</span>
            {subtitle ? <span className="text-xs text-slate-500">{subtitle}</span> : null}
          </div>
        </div>
        {trailing}
      </div>
      {description ? <p className="text-xs text-slate-500">{description}</p> : null}
      {action}
    </div>
  );
}

interface MobileListProps {
  children: ReactNode;
  className?: string;
}

export function MobileList({ children, className }: MobileListProps) {
  return <div className={cn("flex flex-col gap-3", className)}>{children}</div>;
}
