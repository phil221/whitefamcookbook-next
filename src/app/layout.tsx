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
      <body className={`${cormorant.className} h-screen grid grid-rows-[auto_1fr_auto]`}>
        <SiteHeader />
        <div className="max-w-7xl mx-auto p-6 lg:px-8 w-full">
          {children}
        </div>
        <footer className="h-20 bg-beige-200 border-t-[0.25px] border-gray-950 border-double">
          <div className="max-w-7xl mx-auto h-full p-6 lg:px-8">
            <p className="text-center text-gray-800">
              &copy; 2022 The White Family Cookbook
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
