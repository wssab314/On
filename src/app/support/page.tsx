"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/store";

type Message = {
  id: string;
  sender: "user" | "on";
  text: string;
  timestamp: string;
};

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "on",
    text: "嗨，亚历克斯！我是 Cloud，你的虚拟跑步顾问，需要什么帮助吗？",
    timestamp: "09:12",
  },
  {
    id: "2",
    sender: "user",
    text: "Cloud，我想确认一下云爆竞速鞋的尺码。",
    timestamp: "09:13",
  },
  {
    id: "3",
    sender: "on",
    text: "当然，这款尺码正常。如果比赛时会穿厚袜子，建议加半码。需要预约试穿吗？",
    timestamp: "09:13",
  },
];

const quickReplies = ["查询订单", "预约试穿", "退换货政策", "礼品卡帮助"];

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const appendMessage = (text: string) => {
    const now = new Date();
    const time = now.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
    setMessages((current) => [
      ...current,
      { id: Math.random().toString(36).slice(2, 8), sender: "user", text, timestamp: time },
      {
        id: Math.random().toString(36).slice(2, 8),
        sender: "on",
        text: "收到！我已经转给专业顾问，稍后就会回复你。",
        timestamp: time,
      },
    ]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    appendMessage(input.trim());
    setInput("");
  };

  return (
    <div className="space-y-8 pb-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">客服</p>
        <h1 className="text-2xl font-semibold text-slate-900">我们能为你做什么？</h1>
        <p className="text-sm text-slate-500">与 Cloud 即时对话、浏览常见问题，或预约 On 专家咨询。</p>
      </header>

      <section className="space-y-4 rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">在线客服</p>
            <h2 className="text-lg font-semibold text-slate-900">Cloud 虚拟顾问</h2>
          </div>
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">在线</span>
        </div>
        <div className="space-y-3 text-sm">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-3xl px-4 py-3 shadow-sm ${
                  message.sender === "user"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                <p>{message.text}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] opacity-60">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              type="button"
              onClick={() => appendMessage(reply)}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 font-semibold hover:border-slate-300"
            >
              {reply}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none"
            placeholder="输入消息"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button type="submit" size="sm">
            发送
          </Button>
        </form>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">专属顾问</p>
            <h2 className="text-lg font-semibold text-slate-900">想与真人沟通？</h2>
          </div>
          <Link href="tel:+41445551234" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            致电我们
          </Link>
        </div>
        <div className="grid gap-3 text-sm text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">预约门店试穿</p>
            <p className="text-xs text-slate-500">苏黎世、伦敦、东京等全球门店均可。</p>
            <Link href="/shop" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900">
              预约时段 →
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">邮件联系跑步顾问</p>
            <p className="text-xs text-slate-500">12 小时内即可收到回复。</p>
            <Link href="mailto:cloud@on.com" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900">
              发送邮件 →
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">常见问题</p>
          <h2 className="text-lg font-semibold text-slate-900">大家都在问</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                <span>{faq.question}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400 group-open:hidden">展开</span>
                <span className="hidden text-xs uppercase tracking-[0.3em] text-slate-400 group-open:inline">收起</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
