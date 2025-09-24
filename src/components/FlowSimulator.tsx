"use client";

import { useMemo, useState } from "react";
import { FlowDefinition } from "@/types/flows";
import { Button } from "@/components/ui/Button";
import { StepDots } from "@/components/mobile/StepDots";

interface FlowSimulatorProps {
  flow: FlowDefinition;
}

export function FlowSimulator({ flow }: FlowSimulatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveScreen = useMemo(
    () => flow.screens[activeIndex]?.Component,
    [flow.screens, activeIndex],
  );

  const goPrevious = () => setActiveIndex((index) => Math.max(0, index - 1));
  const goNext = () => setActiveIndex((index) => Math.min(flow.screens.length - 1, index + 1));

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <StepDots activeIndex={activeIndex} total={flow.screens.length} />
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{flow.heroTag}</p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">{flow.name}</h1>
          <p className="mt-3 max-w-sm text-sm text-slate-500">{flow.summary}</p>
        </div>
      </div>
      <div className="relative">
        {ActiveScreen ? <ActiveScreen /> : null}
      </div>
      <div className="flex w-full max-w-sm justify-between gap-4">
        <Button
          variant="secondary"
          className="flex-1"
          disabled={activeIndex === 0}
          onClick={goPrevious}
        >
          Previous
        </Button>
        <Button className="flex-1" onClick={goNext} disabled={activeIndex === flow.screens.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
