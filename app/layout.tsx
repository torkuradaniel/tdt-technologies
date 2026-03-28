import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TDT Technologies",
  description:
    "TDT Technologies helps traditional companies turn AI into operating leverage through embedded labs, workflow redesign, and product incubation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
