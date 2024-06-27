import Link from "next/link";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { SITE_TITLE } from "@/constants";
import { composeNameFromPath } from "@/utils/path";
import { getCategory } from "@lib/categories";

type Props = {
  params: {
    categoryName: string;
    id: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
    const category = composeNameFromPath(params.categoryName);
  const parentTitle = (await parent).title?.absolute || SITE_TITLE;

  return {
    title: `${parentTitle} | ${category ?? "category"}`,
  };
}

export default async function Category({ params }: Props) {
  const name = composeNameFromPath(params.categoryName);
  const category = await getCategory(name);

  return (
    <div className="p-14">
      <h1 className="text-xl">{category?.name}</h1>
      <p>{JSON.stringify(category)}</p>
      <p>...</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
