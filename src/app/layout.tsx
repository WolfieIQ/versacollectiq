import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VersaCollectIQ HUD",
  description: "High-performance collections dashboard powered by WolfIQ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
