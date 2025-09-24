import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProviders } from "@/components/StoreProviders";
import { TabNavigation } from "@/components/store/TabNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "On mobile storefront",
  description:
    "Interactive recreation of the On Running mobile commerce experience with browsing, bag, checkout and account flows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-100 text-slate-900 antialiased`}>
        <StoreProviders>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.12),_transparent_60%)] pb-28">
            <main className="mx-auto w-full max-w-md px-5 pb-10 pt-8 sm:px-6">
              {children}
            </main>
            <TabNavigation />
          </div>
        </StoreProviders>
      </body>
    </html>
  );
}
