import { ComponentType } from "react";

export interface FlowScreen {
  id: string;
  title: string;
  description: string;
  Component: ComponentType;
}

export interface FlowDefinition {
  slug: string;
  name: string;
  category: "Discovery" | "Shop" | "Bag" | "Account" | "Support" | "Post-purchase";
  summary: string;
  heroTag: string;
  heroDescription: string;
  mood?: string;
  ComponentPreview?: ComponentType;
  screens: FlowScreen[];
}
