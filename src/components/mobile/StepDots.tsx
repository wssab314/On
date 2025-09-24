interface StepDotsProps {
  activeIndex: number;
  total: number;
}

export function StepDots({ activeIndex, total }: StepDotsProps) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={
            "h-1.5 w-6 rounded-full " +
            (index === activeIndex ? "bg-slate-900" : "bg-slate-300")
          }
        />
      ))}
    </div>
  );
}
