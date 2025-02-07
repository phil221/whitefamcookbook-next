"use client";

import { getPairs } from "@/utils/getPairs";
import { composePathFromString } from "@/utils/path";
import type { Recipe } from "@lib/recipes";
import Link from "next/link";
import { Margin, usePDF } from "react-to-pdf";
import PDFDownloadButton from "./PDFDownloadButton";
import BaseLink from "./shared/BaseLink";

const RecipeContent = ({ recipe }: { recipe: Recipe }) => {
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
  const formattedIngredients = ingredients
    .split("\n")
    .map((item) => item.trim());
  const formattedInstructions = instructions
    .split("\n")
    .map((item) => item.trim());

  const { targetRef, toPDF } = usePDF({
    filename: `${name}.pdf`,
    page: { margin: Margin.MEDIUM },
  });
  const readyIngredients = getPairs(formattedIngredients);

  return (
    <div ref={targetRef}>
      <div className="flex flex-col content-center text-center gap-1 flex-wrap">
        <div className="flex gap-2">
          <h1 className="text-xl">{name}</h1>
          <PDFDownloadButton toPDF={toPDF} />
        </div>
        <Link
          className="font-medium underline"
          href={`/authors/${author.id}/${authorPath}`}
        >
          {authorName}
        </Link>
      </div>
      <div className="section flex justify-between flex-wrap">
        <p>Makes {servingsNumber} servings</p>
        <p>Prep Time: {prepTime} minutes</p>
      </div>
      <hr className="border-black my-2" />
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
            <li key={i} className="w-100">
              {instruction}
            </li>
          ))}
        </ul>
      </div>
      {comment && comment.length > 0 && (
        <div className="section comments italic mb-2">
          <p>{comment}</p>
        </div>
      )}
      <div className="section category">
        <Link
          className="font-medium underline"
          href={`/categories/${category.id}/${categoryPath}`}
        >
          <p>{category.name}</p>
        </Link>
      </div>
      <hr className="border-black my-2" />
      <div className="section nutrition-facts">
        <p>{nutritionFacts}</p>
      </div>
      <BaseLink href="/" text="Back to recipes" />
    </div>
  );
};

export default RecipeContent;
