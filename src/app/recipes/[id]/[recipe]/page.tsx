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
  const ingredients = recipe?.ingredients!;
  const fmtItems = ingredients.split("\n").map((item, i) => {
    return item.trim();
  });

  const readyItems = fmtItems.reduce((prev, _, i, fmtItems) => {
    const pair = [fmtItems[i * 2], fmtItems[i * 2 + 1]];
    prev.push(pair);
    return prev;
  }, [] as string[][]);
  console.log({ readyItems });
  return (
    <div className="flex flex-col mx-auto content-center gap-2 max-w-screen-lg">
      <div className="flex flex-col content-center text-center gap-1 flex-wrap">
        <h1 className="text-xl">{recipe?.name}</h1>
        <Link
          className="font-medium"
          href={`/authors/${recipe?.author.id}/${authorPath}`}
        >
          {recipe?.authorName}
        </Link>
        {/* <p className="text-xs">Added on {getPrettyDate(createdTime)}</p> */}
      </div>
      <div className="section flex justify-between flex-wrap">
        <p>Makes {recipe?.servingsNumber} servings</p>
        <p>Prep Time: {recipe?.prepTime} minutes</p>
      </div>
      <hr className="border-black" />
      <div className="section ingredients">
        <ul>
          {recipe?.ingredients.split("\n").map((ingredient, i) => (
            <>
              <li key={ingredient} className="w-fit">
                {ingredient}
              </li>{" "}
            </>
          ))}
        </ul>
      </div>
      <div>
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
