import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}