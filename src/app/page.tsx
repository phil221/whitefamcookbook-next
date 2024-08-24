import { SITE_TITLE } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | ${SITE_TITLE}`,
};

export default async function Home() {
  return (
    <main className="flex flex-col gap-3 h-full w-full items-center justify-center">
      <p className="text-6xl">Coming Soon...</p>
    </main>
  );
}
