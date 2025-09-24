"use client";

import { ReactNode } from "react";
import { StoreProvider } from "@/context/store";

export function StoreProviders({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
