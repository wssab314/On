import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  className?: string;
  backgroundClassName?: string;
  footer?: ReactNode;
  statusBarContent?: ReactNode;
}

function DefaultStatusBar() {
  return (
    <div className="flex items-center justify-between text-[10px] font-semibold text-slate-700 px-5 py-1">
      <span>9:41</span>
      <div className="flex items-center gap-1 text-slate-500">
        <span className="h-2.5 w-4 rounded-full bg-slate-400" aria-hidden />
        <span className="h-2.5 w-5 rounded-full bg-slate-400" aria-hidden />
        <span className="h-2.5 w-6 rounded-full bg-slate-400" aria-hidden />
      </div>
    </div>
  );
}

export function MobileFrame({
  children,
  className,
  backgroundClassName = "bg-gradient-to-b from-slate-100 via-white to-slate-100",
  footer,
  statusBarContent,
}: MobileFrameProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-10 top-3 z-20 mx-auto h-1.5 rounded-full bg-slate-900/80" />
      <div
        className={cn(
          "w-[320px] h-[640px] rounded-[42px] border border-slate-200 bg-white shadow-xl overflow-hidden flex flex-col",
          backgroundClassName,
          className,
        )}
      >
        <div className="bg-black/90" aria-hidden>
          <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-white/70" />
        </div>
        <div className="flex-1 overflow-hidden">
          {statusBarContent ? statusBarContent : <DefaultStatusBar />}
          <div className="flex h-[calc(100%-60px)] flex-col overflow-hidden">
            <div className="flex-1 overflow-auto px-5 pb-6 pt-3">
              {children}
            </div>
            {footer ? <div className="border-t border-slate-200 bg-white/80 px-5 py-4">{footer}</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
