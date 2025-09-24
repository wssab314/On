import { MobileFrame } from "@/components/mobile/MobileFrame";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { Button } from "@/components/ui/Button";
import { FlowDefinition } from "@/types/flows";
import { MobileList, MobileListItem } from "@/components/mobile/MobileList";
import { Chip } from "@/components/ui/Chip";
import { TextField } from "@/components/ui/TextField";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Toggle } from "@/components/ui/Toggle";
import { ProgressBar } from "@/components/ui/ProgressBar";

const AddToBagSize = () => (
  <MobileFrame>
    <MobileHeader title="Select size" subtitle="Cloudboom Echo" trailing={<Chip>Step 1</Chip>}>
      <p className="mt-2 text-sm text-slate-500">Choose the size that fits best for your race day.</p>
    </MobileHeader>
    <div className="space-y-5">
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Size guide</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"].map((size, index) => (
            <div
              key={size}
              className={`rounded-2xl border px-3 py-2 text-center text-sm font-medium ${
                index === 2 ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 text-slate-600"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <Button className="w-full">Add to bag</Button>
    </div>
  </MobileFrame>
);

const AddToBagConfirmation = () => (
  <MobileFrame>
    <MobileHeader title="Added to bag" subtitle="Success" alignment="center">
      <p className="mt-2 text-sm text-slate-500">Cloudboom Echo 4 • EU 42 • Glacier/Black</p>
    </MobileHeader>
    <div className="space-y-4">
      <div className="rounded-3xl bg-slate-100 p-6 text-center">
        <p className="text-4xl font-semibold text-slate-900">✓</p>
        <p className="mt-3 text-sm text-slate-500">Your race-ready shoe is waiting in the bag.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="secondary">Continue shopping</Button>
        <Button>Go to bag</Button>
      </div>
    </div>
  </MobileFrame>
);

const BagOverview = () => (
  <MobileFrame
    footer={
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Total</p>
          <p className="text-lg font-semibold text-slate-900">CHF 349.90</p>
        </div>
        <Button className="min-w-[160px]">Checkout</Button>
      </div>
    }
  >
    <MobileHeader title="Your bag" subtitle="2 items">
      <p className="mt-2 text-sm text-slate-500">Free express shipping. Carbon neutral delivery.</p>
    </MobileHeader>
    <MobileList>
      <MobileListItem
        title="Cloudboom Echo 4"
        subtitle="Men • EU 42"
        trailing={<Chip>CHF 219.95</Chip>}
        description="Glacier/Black"
      />
      <MobileListItem
        title="Performance tee"
        subtitle="Size M"
        trailing={<Chip>CHF 129.95</Chip>}
        description="Night blue"
      />
      <MobileListItem
        title="Add gift card"
        subtitle="Apply a digital code"
        trailing={<span className="text-sm font-semibold text-slate-900">Add</span>}
      />
    </MobileList>
  </MobileFrame>
);

const GiftCard = () => (
  <MobileFrame
    footer={
      <div className="flex gap-2">
        <Button variant="secondary" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Apply</Button>
      </div>
    }
  >
    <MobileHeader title="Apply gift card" subtitle="Checkout">
      <p className="mt-2 text-sm text-slate-500">Redeem On gift cards instantly.</p>
    </MobileHeader>
    <div className="space-y-5">
      <TextField label="Gift card code" placeholder="XXXX-XXXX-XXXX" />
      <TextField label="PIN" placeholder="1234" />
      <div className="rounded-3xl bg-slate-100 p-4 text-xs leading-relaxed text-slate-500">
        <p>Gift cards never expire and can be combined with promotions when conditions allow.</p>
      </div>
    </div>
  </MobileFrame>
);

const CheckoutDelivery = () => (
  <MobileFrame
    footer={
      <div className="flex items-center justify-between">
        <Button variant="ghost">Back</Button>
        <Button className="min-w-[140px]">Continue</Button>
      </div>
    }
  >
    <MobileHeader title="Delivery" subtitle="Checkout" trailing={<Chip>Step 1 of 3</Chip>}>
      <p className="mt-2 text-sm text-slate-500">Choose the address and speed that works for this order.</p>
    </MobileHeader>
    <MobileList>
      <MobileListItem
        title="Alex Fischer"
        subtitle="Badenerstrasse 55, Zurich"
        active
        description="Primary address"
        action={<Button variant="secondary" className="w-full">Edit</Button>}
      />
      <MobileListItem
        title="Pick up in store"
        subtitle="On Zurich Löwenstrasse"
        description="Ready in 2 hours"
        trailing={<Chip>Free</Chip>}
      />
      <MobileListItem title="Add new" subtitle="Ship to another address" trailing={<span className="text-sm text-slate-900">+</span>} />
    </MobileList>
  </MobileFrame>
);

const CheckoutPayment = () => (
  <MobileFrame
    footer={
      <div className="flex items-center justify-between">
        <Button variant="ghost">Back</Button>
        <Button className="min-w-[140px]">Review order</Button>
      </div>
    }
  >
    <MobileHeader title="Payment" subtitle="Checkout" trailing={<Chip>Step 2 of 3</Chip>}>
      <p className="mt-2 text-sm text-slate-500">Secure payment powered by Stripe.</p>
    </MobileHeader>
    <div className="space-y-5">
      <MobileList>
        <MobileListItem title="Visa •••• 4218" subtitle="Expires 04/28" active trailing={<Chip>Default</Chip>} />
        <MobileListItem title="Apple Pay" subtitle="Use Face ID" />
        <MobileListItem title="Add new card" subtitle="Visa, Mastercard, Amex" />
      </MobileList>
      <TextField label="Cardholder name" placeholder="Alex Fischer" />
      <div className="grid grid-cols-2 gap-3">
        <TextField label="Expiry" placeholder="04/28" />
        <TextField label="CVC" placeholder="123" />
      </div>
    </div>
  </MobileFrame>
);

const CheckoutReview = () => (
  <MobileFrame
    footer={<Button className="w-full">Place order</Button>}
  >
    <MobileHeader title="Review & pay" subtitle="Checkout" trailing={<Chip>Step 3 of 3</Chip>}>
      <p className="mt-2 text-sm text-slate-500">You are moments away from a new PR.</p>
    </MobileHeader>
    <div className="space-y-4">
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Cloudboom Echo 4</span>
          <span>CHF 219.95</span>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Performance tee</span>
          <span>CHF 129.95</span>
        </div>
        <div className="mt-3 border-t border-slate-200 pt-3 text-sm font-semibold text-slate-900">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>CHF 349.90</span>
          </div>
          <div className="flex items-center justify-between text-slate-500">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Delivery</p>
        <p className="mt-2 text-sm text-slate-500">Express to Zurich • Arrives Fri 10 May</p>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Payment</p>
        <p className="mt-2 text-sm text-slate-500">Visa •••• 4218</p>
      </div>
    </div>
  </MobileFrame>
);

const AddressList = () => (
  <MobileFrame
    footer={<Button className="w-full">Add new address</Button>}
  >
    <MobileHeader title="Your addresses" subtitle="Account">
      <p className="mt-2 text-sm text-slate-500">Save multiple shipping locations for faster checkout.</p>
    </MobileHeader>
    <MobileList>
      <MobileListItem
        title="Home"
        subtitle="Badenerstrasse 55, 8004 Zurich"
        active
        trailing={<Chip>Default</Chip>}
        description="Buzz 21"
      />
      <MobileListItem
        title="Office"
        subtitle="Freilagerstrasse 40, Zurich"
        description="Receives deliveries Mon-Fri"
      />
      <MobileListItem title="Parents" subtitle="Seefeldstrasse 21, Zurich" />
    </MobileList>
  </MobileFrame>
);

const AddressForm = () => (
  <MobileFrame
    footer={<Button className="w-full">Save address</Button>}
  >
    <MobileHeader title="Add new address" subtitle="Account">
      <p className="mt-2 text-sm text-slate-500">Use a real location or a friendly alias.</p>
    </MobileHeader>
    <div className="space-y-4">
      <TextField label="Full name" placeholder="Alex Fischer" />
      <TextField label="Street" placeholder="Badenerstrasse 55" />
      <TextField label="Apartment, suite" placeholder="Buzz 21" />
      <div className="grid grid-cols-2 gap-3">
        <TextField label="Postal code" placeholder="8004" />
        <TextField label="City" placeholder="Zurich" />
      </div>
      <SegmentedControl options={["Home", "Work", "Other"]} activeIndex={0} />
    </div>
  </MobileFrame>
);

const AddressConfirmation = () => (
  <MobileFrame>
    <MobileHeader title="Address saved" subtitle="Account" alignment="center">
      <p className="mt-2 text-sm text-slate-500">Home • Badenerstrasse 55, 8004 Zurich</p>
    </MobileHeader>
    <div className="space-y-4">
      <div className="rounded-3xl bg-slate-100 p-6 text-center">
        <p className="text-4xl font-semibold text-slate-900">✓</p>
        <p className="mt-3 text-sm text-slate-500">We will use this address for the next delivery.</p>
      </div>
      <Button className="w-full">Return to checkout</Button>
    </div>
  </MobileFrame>
);

const CheckoutProgress = () => (
  <MobileFrame
    footer={<ProgressBar value={66} />}
  >
    <MobileHeader title="Checkout" subtitle="Progress">
      <p className="mt-2 text-sm text-slate-500">Track your steps to place the order.</p>
    </MobileHeader>
    <div className="space-y-3">
      <Toggle label="Delivery" description="Express shipping" active />
      <Toggle label="Payment" description="Visa •••• 4218" active />
      <Toggle label="Review" description="Confirm items" />
    </div>
  </MobileFrame>
);

export const bagFlows: FlowDefinition[] = [
  {
    slug: "adding-to-bag",
    name: "Adding to bag",
    category: "Bag",
    summary: "Select a size and confirm the product has landed in the shopping bag.",
    heroTag: "Bag",
    heroDescription: "Size selection and confirmation.",
    screens: [
      { id: "size", title: "Choose size", description: "Size grid", Component: AddToBagSize },
      { id: "confirm", title: "Confirmation", description: "Added notice", Component: AddToBagConfirmation },
    ],
  },
  {
    slug: "bag",
    name: "Bag",
    category: "Bag",
    summary: "Overview of selected items with pricing and checkout CTA.",
    heroTag: "Bag",
    heroDescription: "Review items before checkout.",
    screens: [
      { id: "overview", title: "Overview", description: "Bag list", Component: BagOverview },
    ],
  },
  {
    slug: "apply-gift-card",
    name: "Apply gift card",
    category: "Bag",
    summary: "Apply a digital gift card code and pin during checkout.",
    heroTag: "Checkout",
    heroDescription: "Redeem gift cards.",
    screens: [
      { id: "gift-card", title: "Gift card", description: "Code entry", Component: GiftCard },
    ],
  },
  {
    slug: "ordering-a-product",
    name: "Ordering a product",
    category: "Bag",
    summary: "Guided checkout across delivery, payment, and review steps.",
    heroTag: "Checkout",
    heroDescription: "Three-step checkout.",
    screens: [
      { id: "delivery", title: "Delivery", description: "Select delivery", Component: CheckoutDelivery },
      { id: "payment", title: "Payment", description: "Add payment", Component: CheckoutPayment },
      { id: "review", title: "Review", description: "Confirm order", Component: CheckoutReview },
    ],
  },
  {
    slug: "adding-a-new-address",
    name: "Adding a new address",
    category: "Account",
    summary: "Manage saved addresses and add a new location for faster checkout.",
    heroTag: "Account",
    heroDescription: "Address book management.",
    screens: [
      { id: "list", title: "List", description: "Saved addresses", Component: AddressList },
      { id: "form", title: "Form", description: "New address", Component: AddressForm },
      { id: "confirm", title: "Confirmation", description: "Success", Component: AddressConfirmation },
    ],
  },
  {
    slug: "checkout-progress",
    name: "Checkout progress",
    category: "Bag",
    summary: "Status tracker summarising delivery, payment, and review steps.",
    heroTag: "Checkout",
    heroDescription: "Step completion",
    screens: [
      { id: "progress", title: "Progress", description: "Status toggles", Component: CheckoutProgress },
    ],
  },
];
