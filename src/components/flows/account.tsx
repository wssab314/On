import { MobileFrame } from "@/components/mobile/MobileFrame";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { Button } from "@/components/ui/Button";
import { FlowDefinition } from "@/types/flows";
import { TextField } from "@/components/ui/TextField";
import { Toggle } from "@/components/ui/Toggle";
import { SegmentedControl } from "@/components/ui/SegmentedControl";

const LoginScreen = () => (
  <MobileFrame
    footer={
      <div className="space-y-3">
        <Button className="w-full">Log in</Button>
        <Button variant="secondary" className="w-full">
          Continue with Apple
        </Button>
      </div>
    }
  >
    <MobileHeader title="Welcome back" subtitle="On ID">
      <p className="mt-2 text-sm text-slate-500">Log in with your On ID to sync bag, favourites, and runs.</p>
    </MobileHeader>
    <div className="space-y-4">
      <TextField label="Email" placeholder="alex@example.com" type="email" />
      <TextField label="Password" placeholder="••••••••" type="password" />
      <div className="flex items-center justify-between text-xs text-slate-500">
        <label className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-slate-300">
            ✓
          </span>
          Keep me signed in
        </label>
        <a className="font-semibold text-slate-900" href="#reset">
          Forgot?
        </a>
      </div>
    </div>
  </MobileFrame>
);

const LogoutScreen = () => (
  <MobileFrame
    footer={
      <div className="grid grid-cols-2 gap-3">
        <Button variant="secondary">Cancel</Button>
        <Button>Log out</Button>
      </div>
    }
  >
    <MobileHeader title="Ready to log out?" subtitle="On ID" alignment="center">
      <p className="mt-2 text-sm text-slate-500">You can always log back in to sync your progress.</p>
    </MobileHeader>
    <div className="rounded-3xl bg-slate-100 p-5 text-center text-sm text-slate-600">
      <p>Keep downloaded workouts and offline data on this device.</p>
    </div>
  </MobileFrame>
);

const ResetPassword = () => (
  <MobileFrame
    footer={<Button className="w-full">Send reset link</Button>}
  >
    <MobileHeader title="Reset password" subtitle="On ID">
      <p className="mt-2 text-sm text-slate-500">We will send a reset link to your registered email.</p>
    </MobileHeader>
    <TextField label="Email" placeholder="alex@example.com" type="email" />
  </MobileFrame>
);

const ProfileOverview = () => (
  <MobileFrame
    footer={<Button className="w-full">Edit profile</Button>}
  >
    <MobileHeader title="Alex Fischer" subtitle="Profile" alignment="center">
      <p className="mt-2 text-sm text-slate-500">On+ member since 2018 • Zurich</p>
    </MobileHeader>
    <div className="space-y-4">
      <div className="rounded-3xl bg-slate-100 p-5 text-center">
        <p className="text-5xl font-semibold text-slate-900">AF</p>
        <p className="mt-2 text-sm text-slate-500">Runner • Marathon PB 2:49</p>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Contact</p>
        <p className="mt-2 text-sm text-slate-500">alex@example.com</p>
        <p className="text-sm text-slate-500">+41 79 555 44 33</p>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Membership</p>
        <p className="mt-2 text-sm text-slate-500">Run club member • Weekly insights every Monday</p>
      </div>
    </div>
  </MobileFrame>
);

const EditProfile = () => (
  <MobileFrame
    footer={<Button className="w-full">Save changes</Button>}
  >
    <MobileHeader title="Edit profile" subtitle="Account">
      <p className="mt-2 text-sm text-slate-500">Keep your information up to date.</p>
    </MobileHeader>
    <div className="space-y-4">
      <TextField label="First name" placeholder="Alex" />
      <TextField label="Last name" placeholder="Fischer" />
      <TextField label="Email" placeholder="alex@example.com" />
      <SegmentedControl options={["He/Him", "She/Her", "They"]} activeIndex={0} />
    </div>
  </MobileFrame>
);

const Subscriptions = () => (
  <MobileFrame>
    <MobileHeader title="Subscriptions" subtitle="Notifications">
      <p className="mt-2 text-sm text-slate-500">Tune the content that reaches your inbox and push notifications.</p>
    </MobileHeader>
    <div className="space-y-3">
      <Toggle label="Product drops" description="Early access to collaborations" active />
      <Toggle label="Training plans" description="Weekly workouts from On coaches" active />
      <Toggle label="Community" description="Store events and run clubs" />
    </div>
  </MobileFrame>
);

const ChangeRegion = () => (
  <MobileFrame
    footer={<Button className="w-full">Switch region</Button>}
  >
    <MobileHeader title="Country or region" subtitle="Settings">
      <p className="mt-2 text-sm text-slate-500">Prices and delivery options adapt to your selected region.</p>
    </MobileHeader>
    <div className="space-y-4">
      <SegmentedControl options={["Europe", "Americas", "Asia"]} activeIndex={0} />
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Current</p>
        <p className="mt-2 text-sm text-slate-500">Switzerland (CHF)</p>
      </div>
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Suggested</p>
        <p className="mt-2 text-sm text-slate-500">Germany (EUR)</p>
      </div>
    </div>
  </MobileFrame>
);

const DeleteAccount = () => (
  <MobileFrame
    footer={
      <div className="grid grid-cols-2 gap-3">
        <Button variant="secondary">Keep account</Button>
        <Button variant="destructive">Delete account</Button>
      </div>
    }
  >
    <MobileHeader title="Delete On account" subtitle="Settings" alignment="center">
      <p className="mt-2 text-sm text-slate-500">We will remove your personal data within 30 days unless you sign in again.</p>
    </MobileHeader>
    <div className="space-y-3 text-sm text-slate-500">
      <p>• Access to purchases and run history will be removed.</p>
      <p>• Orders in transit will still arrive.</p>
      <p>• You can restore the account by logging in before deletion completes.</p>
    </div>
  </MobileFrame>
);

export const accountFlows: FlowDefinition[] = [
  {
    slug: "logging-in",
    name: "Logging in",
    category: "Account",
    summary: "Email and password sign in with social fallback for On ID.",
    heroTag: "Account",
    heroDescription: "Sign in to On.",
    screens: [
      { id: "login", title: "Login", description: "Sign-in form", Component: LoginScreen },
    ],
  },
  {
    slug: "logging-out",
    name: "Logging out",
    category: "Account",
    summary: "Confirmation modal reminding users that offline workouts remain.",
    heroTag: "Account",
    heroDescription: "Sign out confirmation.",
    screens: [
      { id: "logout", title: "Logout", description: "Confirm", Component: LogoutScreen },
    ],
  },
  {
    slug: "reset-password",
    name: "Reset password",
    category: "Account",
    summary: "Request a password reset link for On ID accounts.",
    heroTag: "Account",
    heroDescription: "Password recovery",
    screens: [
      { id: "reset", title: "Reset", description: "Request email", Component: ResetPassword },
    ],
  },
  {
    slug: "profile",
    name: "Profile",
    category: "Account",
    summary: "Profile overview featuring contact details and membership status.",
    heroTag: "Account",
    heroDescription: "Account overview.",
    screens: [
      { id: "profile", title: "Profile", description: "Overview", Component: ProfileOverview },
    ],
  },
  {
    slug: "editing-profile",
    name: "Editing profile",
    category: "Account",
    summary: "Update personal details with quick toggles for pronouns.",
    heroTag: "Account",
    heroDescription: "Edit details",
    screens: [
      { id: "edit", title: "Edit", description: "Edit form", Component: EditProfile },
    ],
  },
  {
    slug: "subscriptions",
    name: "Subscriptions",
    category: "Account",
    summary: "Notification preferences across drops, training, and community events.",
    heroTag: "Account",
    heroDescription: "Communication control.",
    screens: [
      { id: "subscriptions", title: "Preferences", description: "Toggle list", Component: Subscriptions },
    ],
  },
  {
    slug: "change-country-or-region",
    name: "Change country or region",
    category: "Account",
    summary: "Switch the market to update currency, pricing, and delivery options.",
    heroTag: "Account",
    heroDescription: "Regional settings.",
    screens: [
      { id: "region", title: "Region", description: "Select region", Component: ChangeRegion },
    ],
  },
  {
    slug: "deleting-an-account",
    name: "Deleting an account",
    category: "Account",
    summary: "Final confirmation screen before removing an On ID.",
    heroTag: "Account",
    heroDescription: "Account deletion",
    screens: [
      { id: "delete", title: "Delete", description: "Confirm deletion", Component: DeleteAccount },
    ],
  },
];
