import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "White Family Cookbook",
  description:
    "Incomparable recipes from the illustrious and expansive White family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} p-20`}>{children}</body>
    </html>
  );
}
