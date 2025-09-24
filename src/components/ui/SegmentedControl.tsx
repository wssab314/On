import { cn } from "@/lib/cn";

interface SegmentedControlProps {
  options: string[];
  activeIndex: number;
}

export function SegmentedControl({ options, activeIndex }: SegmentedControlProps) {
  return (
    <div
      className="grid gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 text-xs font-medium text-slate-500"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((option, index) => (
        <div
          key={option}
          className={cn(
            "rounded-full px-3 py-1 text-center transition-colors",
            index === activeIndex ? "bg-white text-slate-900 shadow" : "",
          )}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
