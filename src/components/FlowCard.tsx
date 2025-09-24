import Link from "next/link";
import { FlowDefinition } from "@/types/flows";
import { cn } from "@/lib/cn";

interface FlowCardProps {
  flow: FlowDefinition;
}

const categoryColors: Record<string, string> = {
  Discovery: "from-sky-500/10 to-sky-500/5",
  Shop: "from-emerald-500/10 to-emerald-500/5",
  Bag: "from-orange-500/10 to-orange-500/5",
  Account: "from-indigo-500/10 to-indigo-500/5",
  Support: "from-rose-500/10 to-rose-500/5",
  "Post-purchase": "from-amber-500/10 to-amber-500/5",
};

export function FlowCard({ flow }: FlowCardProps) {
  return (
    <Link
      href={`/flows/${flow.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", categoryColors[flow.category])} aria-hidden />
      <div className="relative flex h-full flex-col gap-4 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{flow.heroTag}</p>
        <h3 className="text-xl font-semibold text-slate-900">{flow.name}</h3>
        <p className="text-sm text-slate-600">{flow.summary}</p>
        <span className="mt-auto inline-flex items-center text-sm font-semibold text-slate-900">
          Explore flow
          <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
