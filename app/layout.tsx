import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "AI Triage | Stop Drowning in Support Tickets",
  description: "AI Triage routes incoming support tickets across channels, cuts response times, and saves your team 10+ hours each week."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
