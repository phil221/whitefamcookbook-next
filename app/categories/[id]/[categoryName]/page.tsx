import Link from "next/link";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { SITE_TITLE } from "@/constants";
import { composeNameFromPath } from "@/utils/path";
import { getCategory } from "@lib/categories";

type Props = {
  params: Promise<{
    categoryName: string;
    id: string;
  }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const category = composeNameFromPath(params.categoryName);
  const parentTitle = (await parent).title?.absolute || SITE_TITLE;

  return {
    title: `${category ?? "Category"} | ${parentTitle}`,
  };
}

export default async function Category(props: Props) {
  const params = await props.params;
  const name = composeNameFromPath(params.categoryName);
  const category = await getCategory(name);

  return (
    <div>
      <h1 className="text-xl">{category?.name}</h1>
      <p>{JSON.stringify(category)}</p>
      <p>...</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
