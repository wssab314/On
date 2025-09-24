import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { products, stories, events } from "@/data/store";
import { ProductCard } from "@/components/store/ProductCard";

export default function HomePage() {
  const trending = products.slice(0, 3);

  return (
    <div className="space-y-10 pb-6">
      <section className="rounded-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-white/30 px-4 py-1 text-xs tracking-[0.4em] uppercase text-white/70">
            On 跑步俱乐部
          </span>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">踏云而跑</h1>
            <p className="text-sm text-white/80">
              探索最新发售、定制你的比赛装备，并预约门店体验——所有流程都为 On 移动端商城优化。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button className="w-full">选购全系列</Button>
            </Link>
            <Link href="/support" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full text-slate-900">
                联系跑步顾问
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">精选推荐</p>
            <h2 className="text-xl font-semibold text-slate-900">比赛季热销单品</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            查看全部
          </Link>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {trending.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">社群活动</p>
          <h2 className="text-xl font-semibold text-slate-900">即将到来的体验</h2>
        </header>
        <div className="space-y-3">
          {events.map((event) => (
            <article key={event.id} className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 text-sm text-slate-500">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{event.location}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{event.title}</h3>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{event.date}</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{event.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                预约席位 →
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">故事精选</p>
            <h2 className="text-xl font-semibold text-slate-900">灵感源自实验室</h2>
          </div>
          <Link href="/account" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            会员中心
          </Link>
        </header>
        <div className="space-y-3">
          {stories.map((story) => (
            <article key={story.id} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>{story.badge}</span>
                <span>阅读时间 • 3 分钟</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{story.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{story.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                阅读更多 →
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-sm">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">会员权益</p>
            <h2 className="text-xl font-semibold text-slate-900">解锁 On 跑步俱乐部礼遇</h2>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• 限量新品与联名优先购。</li>
            <li>• 世界级运动员定制训练计划。</li>
            <li>• 跑步实验室、门店活动与赛事周末邀约。</li>
          </ul>
          <Link href="/account" className="w-full">
            <Button variant="secondary" className="w-full">
              管理会员
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
