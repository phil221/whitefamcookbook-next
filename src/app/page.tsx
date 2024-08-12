import { SITE_TITLE } from "@/constants";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentTitle = (await parent).title?.absolute || SITE_TITLE;

  return {
    title: `Home | ${parentTitle}`,
  };
}

export default async function Home() {
  return (
    <main className="flex flex-col gap-3 h-full w-full items-center justify-center">
      <p className="text-6xl">Coming Soon...</p>
    </main>
  );
}
