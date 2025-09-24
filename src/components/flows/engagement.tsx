import { MobileFrame } from "@/components/mobile/MobileFrame";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { Button } from "@/components/ui/Button";
import { FlowDefinition } from "@/types/flows";
import { MobileList, MobileListItem } from "@/components/mobile/MobileList";
import { Chip } from "@/components/ui/Chip";

const AddToFavorites = () => (
  <MobileFrame
    footer={
      <div className="grid grid-cols-2 gap-3">
        <Button variant="secondary">Keep browsing</Button>
        <Button>View favourites</Button>
      </div>
    }
  >
    <MobileHeader title="Saved to favourites" subtitle="Cloudboom Echo" alignment="center">
      <p className="mt-2 text-sm text-slate-500">We will keep you posted when your size is back in stock.</p>
    </MobileHeader>
    <div className="space-y-4">
      <div className="rounded-3xl bg-white p-4 text-sm text-slate-500 shadow-sm">
        <p>EU 42 • Glacier/Black</p>
        <p className="text-xs text-slate-400">Notify me • Compare with Cloudsurfer Trail</p>
      </div>
      <div className="rounded-3xl bg-slate-100 p-4 text-sm text-slate-600">
        <p>Add a note for future you</p>
        <div className="mt-2 rounded-2xl bg-white/70 p-3 text-xs text-slate-400">&ldquo;Perfect for Zurich marathon if stock arrives by July&rdquo;</div>
      </div>
    </div>
  </MobileFrame>
);

const FAQScreen = () => (
  <MobileFrame>
    <MobileHeader title="Need help?" subtitle="FAQ">
      <p className="mt-2 text-sm text-slate-500">Browse the most common questions from the On community.</p>
    </MobileHeader>
    <MobileList>
      <MobileListItem
        title="Where is my order?"
        subtitle="Track shipping & delivery"
        description="Find the latest status of your package."
        trailing={<span className="text-sm font-semibold text-slate-900">Track</span>}
      />
      <MobileListItem
        title="How do returns work?"
        subtitle="Free within 30 days"
        description="Generate a prepaid label and schedule pick-up."
      />
      <MobileListItem
        title="Size & fit guide"
        subtitle="Compare models"
        description="Understand how cushioning differs between Cloudmonster and Cloudrunner."
      />
    </MobileList>
  </MobileFrame>
);

const ChatAssistant = () => (
  <MobileFrame
    footer={
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
        <span>Ask another question...</span>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Send</span>
      </div>
    }
  >
    <MobileHeader title="On assistant" subtitle="Live chat">
      <p className="mt-2 text-sm text-slate-500">Available 24/7 for size, shipping, or training advice.</p>
    </MobileHeader>
    <div className="space-y-3 text-sm">
      <div className="rounded-3xl bg-slate-100 p-3 text-slate-600">
        <p>Hi Alex, welcome back! What can I help you with?</p>
      </div>
      <div className="ml-auto w-4/5 rounded-3xl bg-slate-900 p-3 text-white">
        <p>I need to find a waterproof shoe for winter tempo runs.</p>
      </div>
      <div className="rounded-3xl bg-slate-100 p-3 text-slate-600">
        <p>Check out the Cloudrunner Waterproof and Cloudsurfer Trail Waterproof.</p>
        <Button variant="secondary" className="mt-3 w-full">
          View suggestions
        </Button>
      </div>
    </div>
  </MobileFrame>
);

const StoreLocator = () => (
  <MobileFrame
    footer={<Button className="w-full">Book a fitting</Button>}
  >
    <MobileHeader title="On stores" subtitle="Zurich">
      <p className="mt-2 text-sm text-slate-500">Discover experience stores near you for fittings and community runs.</p>
    </MobileHeader>
    <div className="space-y-4">
      <div className="h-40 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900" />
      <MobileList>
        <MobileListItem
          title="On Zurich Löwenstrasse"
          subtitle="0.4 km • Open until 19:00"
          description="Try Cloudboom Echo 4 and book gait analysis."
          trailing={<Chip>Events</Chip>}
        />
        <MobileListItem
          title="On Lab"
          subtitle="Kanzlei, 1.2 km"
          description="Community track sessions every Thursday"
        />
      </MobileList>
    </div>
  </MobileFrame>
);

const OrderHistory = () => (
  <MobileFrame
    footer={<Button className="w-full">View invoices</Button>}
  >
    <MobileHeader title="Order history" subtitle="Past 6 months">
      <p className="mt-2 text-sm text-slate-500">Track purchases and request returns from here.</p>
    </MobileHeader>
    <MobileList>
      <MobileListItem
        title="#ON-842913"
        subtitle="Delivered 3 May 2024"
        trailing={<Chip>Completed</Chip>}
        description="Cloudboom Echo 4 • Performance tee"
      />
      <MobileListItem
        title="#ON-838202"
        subtitle="Delivered 12 Feb 2024"
        trailing={<Chip className="bg-amber-100 text-amber-700">In return</Chip>}
        description="Cloudgo • Track pants"
      />
      <MobileListItem
        title="#ON-833991"
        subtitle="Delivered 21 Nov 2023"
        trailing={<Chip className="bg-slate-900 text-white">Completed</Chip>}
        description="Cloudrunner Waterproof"
      />
    </MobileList>
  </MobileFrame>
);

export const engagementFlows: FlowDefinition[] = [
  {
    slug: "adding-to-favorites",
    name: "Adding to favorites",
    category: "Discovery",
    summary: "Confirmation card showing the product saved to favourites and notification controls.",
    heroTag: "Favourites",
    heroDescription: "Save products for later.",
    screens: [
      { id: "favorite", title: "Favourited", description: "Saved card", Component: AddToFavorites },
    ],
  },
  {
    slug: "faq",
    name: "FAQ",
    category: "Support",
    summary: "Frequently asked questions grouped by shipping, returns, and fit.",
    heroTag: "Support",
    heroDescription: "Help centre",
    screens: [
      { id: "faq", title: "FAQ", description: "Help list", Component: FAQScreen },
    ],
  },
  {
    slug: "chat-with-a-virtual-assistant",
    name: "Chat with a virtual assistant",
    category: "Support",
    summary: "Conversational assistant providing curated recommendations.",
    heroTag: "Support",
    heroDescription: "Live chat",
    screens: [
      { id: "chat", title: "Chat", description: "Conversation", Component: ChatAssistant },
    ],
  },
  {
    slug: "on-stores",
    name: "On stores",
    category: "Support",
    summary: "Store locator with map preview and event callouts.",
    heroTag: "Community",
    heroDescription: "Visit a store",
    screens: [
      { id: "stores", title: "Stores", description: "Store list", Component: StoreLocator },
    ],
  },
  {
    slug: "order-history",
    name: "Order history",
    category: "Post-purchase",
    summary: "Timeline of previous orders with status chips for tracking.",
    heroTag: "History",
    heroDescription: "Past purchases",
    screens: [
      { id: "orders", title: "Orders", description: "Order list", Component: OrderHistory },
    ],
  },
];
