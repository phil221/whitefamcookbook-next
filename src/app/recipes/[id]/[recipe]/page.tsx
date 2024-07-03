import Link from "next/link";
import React from "react";
import { getRecipe } from "@lib/recipes";
import { Metadata, ResolvingMetadata } from "next";
import { SITE_TITLE } from "@/constants";
import { composePathFromString } from "@/utils/path";

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
  const {
    authorName = "",
    category = { name: "", id: 0 },
    ingredients = "",
    instructions = "",
    name = "",
    comment = "",
    nutritionFacts = "",
    servingsNumber = 0,
    author = { id: 0 },
    prepTime = 0,
  } = recipe || {};
  const authorPath = composePathFromString(authorName);
  const categoryPath = composePathFromString(category.name);
  const formattedIngredients = ingredients.split("\n").map(item => item.trim());
  const formattedInstructions = instructions.split("\n").map(item => item.trim());

  const getPairs = (items: string[]) => {
    return items.reduce((prev, current, i) => {
      if(i % 2 === 0) {
        prev.push([current]);
        return prev;
      } else {
        prev[prev.length - 1].push(current);
        return prev;
      }
    }, [] as string[][]);
  };

  const readyIngredients = getPairs(formattedIngredients);
  
  return (
    <div className="flex flex-col mx-auto content-center gap-2 max-w-screen-lg">
      <div className="flex flex-col content-center text-center gap-1 flex-wrap">
        <h1 className="text-xl">{name}</h1>
        <Link
          className="font-medium"
          href={`/authors/${author.id}/${authorPath}`}
        >
          {authorName}
        </Link>
      </div>
      <div className="section flex justify-between flex-wrap">
        <p>Makes {servingsNumber} servings</p>
        <p>Prep Time: {prepTime} minutes</p>
      </div>
      <hr className="border-black" />
      <div className="section ingredients">
        <ul>
          {readyIngredients.map((ingredientPair, i) => (
            <li key={i} className="w-100">
              <div className="flex justify-between">
                <p>{ingredientPair[0]}</p>
                <p>{ingredientPair[1]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="section instructions my-3">
        <ul>
          {formattedInstructions.map((instruction, i) => (
            <>
              <li key={i} className="w-100">
                {instruction}
              </li>
            </>
          ))}
        </ul>
      </div>
      {
        comment && comment.length > 0 && (
          <div className="section comments italic mb-2">
            <p>{comment}</p>
          </div>
        )
      }
      <div className="section category">
        <Link href={`/categories/${category.id}/${categoryPath}`}>
          <p className="font-medium">{category.name}</p>
        </Link>
      </div>
      <hr className="border-black" />
      <div className="section nutrition-facts">
        <p>{nutritionFacts}</p>
      </div>
      <Link href="/">Back to all recipes</Link>
    </div>
  );
}
