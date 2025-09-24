import { accountFlows } from "@/components/flows/account";
import { bagFlows } from "@/components/flows/bag";
import { discoveryFlows } from "@/components/flows/discovery";
import { engagementFlows } from "@/components/flows/engagement";
import { FlowDefinition } from "@/types/flows";

export const flows: FlowDefinition[] = [
  ...discoveryFlows,
  ...bagFlows,
  ...accountFlows,
  ...engagementFlows,
];

export const categories = [
  { id: "Discovery", label: "Discovery & browse" },
  { id: "Shop", label: "Shop" },
  { id: "Bag", label: "Bag & checkout" },
  { id: "Account", label: "Account" },
  { id: "Support", label: "Support" },
  { id: "Post-purchase", label: "Post purchase" },
];
