import Link from "next/link";
import { notFound } from "next/navigation";
import { FlowSimulator } from "@/components/FlowSimulator";
import { flows } from "@/data/flows";

export function generateStaticParams() {
  return flows.map((flow) => ({ slug: flow.slug }));
}

export default function FlowDetail({ params }: { params: { slug: string } }) {
  const flow = flows.find((item) => item.slug === params.slug);

  if (!flow) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200">←</span>
        Back to all flows
      </Link>

      <section className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <FlowSimulator flow={flow} />
        <aside className="space-y-8 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Flow structure</p>
            <h2 className="text-xl font-semibold text-slate-900">{flow.screens.length} screens</h2>
            <p className="text-sm text-slate-500">
              Every screen is recreated with mock data so the steps are interactive. Use the notes below to understand the intent of each stage.
            </p>
          </div>
          <ol className="space-y-5 text-sm text-slate-600">
            {flow.screens.map((screen, index) => (
              <li key={screen.id} className="flex gap-4">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-slate-900">{screen.title}</p>
                  <p className="text-sm text-slate-500">{screen.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="rounded-3xl bg-slate-100 p-5 text-xs uppercase tracking-[0.3em] text-slate-500">
            Mock data only — connect to your APIs or prototypes as needed.
          </div>
        </aside>
      </section>

      <section className="mt-16 space-y-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Screen gallery</p>
            <h2 className="text-2xl font-semibold text-slate-900">Direct preview</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Each card renders the actual React component for the step so you can compare states or capture quick screenshots.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          {flow.screens.map((screen) => (
            <div key={screen.id} className="space-y-4">
              <div className="text-sm font-semibold text-slate-900">{screen.title}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{screen.description}</div>
              <div className="rounded-4xl border border-slate-200 bg-white/80 p-6 shadow-inner">
                <screen.Component />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
