import Link from "next/link";
import React from "react";
import { getRecipe } from "../../../../../lib/recipes";
import { Metadata, ResolvingMetadata } from "next";
import { SITE_TITLE } from "@/constants";

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
  console.log(parentTitle)
 
  return {
    title: `${parentTitle} | ${recipe?.name ?? 'Recipe'}`,
  }
}

export default async function Recipe({ params }: Props) {
  const recipe  = await getRecipe(params.id);

  return (
    <div>
      <p>Recipe: {params.recipe}</p>
      <p>{JSON.stringify(recipe)}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
