interface ToggleProps {
  label: string;
  description?: string;
  active?: boolean;
}

export function Toggle({ label, description, active }: ToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900">{label}</span>
        {description ? <span className="text-xs text-slate-500">{description}</span> : null}
      </div>
      <span
        className={`flex h-6 w-11 items-center rounded-full p-1 transition ${
          active ? "bg-slate-900" : "bg-slate-200"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-white transition ${
            active ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
    </div>
  );
}
