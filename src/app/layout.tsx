import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

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
    <html lang="en" className="bg-beige-200 text-primary">
      <body className={`${cormorant.className}`}>
        <SiteHeader />
        <div className="p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
