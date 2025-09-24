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
    text: "Hi Alex! I am Cloud, your virtual run advisor. How can I help today?",
    timestamp: "09:12",
  },
  {
    id: "2",
    sender: "user",
    text: "Hey Cloud, I need help picking a size for the Cloudboom Echo.",
    timestamp: "09:13",
  },
  {
    id: "3",
    sender: "on",
    text: "Absolutely. The Echo runs true to size. If you race with thicker socks, go half a size up. Want to book a fitting?",
    timestamp: "09:13",
  },
];

const quickReplies = ["Track my order", "Book a fitting", "Returns policy", "Gift card help"];

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const appendMessage = (text: string) => {
    const now = new Date();
    const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    setMessages((current) => [
      ...current,
      { id: Math.random().toString(36).slice(2, 8), sender: "user", text, timestamp: time },
      {
        id: Math.random().toString(36).slice(2, 8),
        sender: "on",
        text: "Thanks! I have shared this with our specialists. Expect a reply within minutes.",
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
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Support</p>
        <h1 className="text-2xl font-semibold text-slate-900">How can we help?</h1>
        <p className="text-sm text-slate-500">Chat with Cloud, browse FAQs, or book time with an On expert.</p>
      </header>

      <section className="space-y-4 rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Live chat</p>
            <h2 className="text-lg font-semibold text-slate-900">Cloud virtual assistant</h2>
          </div>
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">Online</span>
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
            placeholder="Send a message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button type="submit" size="sm">
            Send
          </Button>
        </form>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Concierge</p>
            <h2 className="text-lg font-semibold text-slate-900">Prefer human support?</h2>
          </div>
          <Link href="tel:+41445551234" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            Call us
          </Link>
        </div>
        <div className="grid gap-3 text-sm text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Book an in-store fitting</p>
            <p className="text-xs text-slate-500">Zurich, London, Tokyo and more.</p>
            <Link href="/shop" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900">
              Reserve slot →
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Email the run specialists</p>
            <p className="text-xs text-slate-500">Expect a reply within 12 hours.</p>
            <Link href="mailto:cloud@on.com" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900">
              Send email →
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">FAQ</p>
          <h2 className="text-lg font-semibold text-slate-900">Most asked</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                <span>{faq.question}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400 group-open:hidden">Open</span>
                <span className="hidden text-xs uppercase tracking-[0.3em] text-slate-400 group-open:inline">Close</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
