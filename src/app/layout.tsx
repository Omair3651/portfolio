import type { Metadata } from "next";
import { inter, instrumentSerif, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuralOps — AI Agents & Automation for US Businesses",
  description:
    "We build AI agents, workflow automations, and websites for small and medium businesses. Live dental clinic AI receptionist available to demo right now.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NeuralOps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
