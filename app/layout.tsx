import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "StapleRun",
  description:
    "Stop rebuilding the same grocery list every week. StapleRun remembers what you buy and builds your shopping lists instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">

        {/* GLOBAL HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}