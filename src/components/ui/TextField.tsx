import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export function TextField({ label, hint, className, ...props }: TextFieldProps) {
  return (
    <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
      <span>{label}</span>
      <input
        className={cn(
          "h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none",
          className,
        )}
        {...props}
      />
      {hint ? <span className="text-[10px] text-slate-400">{hint}</span> : null}
    </label>
  );
}
