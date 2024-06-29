import Link from "next/link";
import React from "react";
import { getRecipe } from "@lib/recipes";
import { Metadata, ResolvingMetadata } from "next";
import { SITE_TITLE } from "@/constants";
import { composePathFromString } from "@/utils/path";
import getPrettyDate from "@/utils/date";

type Props = {
  params: {
    recipe: string;
    id: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const recipe = await getRecipe(params.id);
  const parentTitle = (await parent).title?.absolute || SITE_TITLE;

  return {
    title: `${parentTitle} | ${recipe?.name ?? "Recipe"}`,
  };
}

export default async function Recipe({ params }: Props) {
  const recipe = await getRecipe(params.id);
  const authorPath = composePathFromString(recipe?.authorName || "");
  const categoryPath = composePathFromString(recipe?.category.name || "");
  const createdTime = recipe?.createdAt?.getTime() || new Date().getTime();
  return (
    <div className="flex flex-col mx-auto content-center gap-4 max-w-screen-lg">
      <div>
        <h1 className="text-xl">{recipe?.name}</h1>
        <p className="text-xs">Added on {getPrettyDate(createdTime)}</p>
      </div>
      <div>
        <p>
          By{" "}
          <Link href={`/authors/${recipe?.author.id}/${authorPath}`}>
            {recipe?.authorName}
          </Link>
        </p>
        <Link href={`/categories/${recipe?.category.id}/${categoryPath}`}>
          {recipe?.category.name}
        </Link>
      </div>
      <p>{JSON.stringify(recipe)}</p>
      <p>...</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
