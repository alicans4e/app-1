import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World - Next.js 14",
  description: "A simple Hello World app built with Next.js 14",
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
