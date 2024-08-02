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
    <html lang="en" className="bg-beige-100 text-primary">
      <body className={`${cormorant.className} h-screen`}>
        <SiteHeader />
        <div className="max-w-7xl mx-auto h-[calc(100vh_-_82px)] p-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
