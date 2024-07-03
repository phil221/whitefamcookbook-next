"use client";

import PDFDownloadButton from "./PDFDownloadButton";
import { composePathFromString } from "@/utils/path";
import type { Recipe } from "@lib/recipes";
import Link from "next/link";
import { usePDF } from "react-to-pdf";

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
      const formattedIngredients = ingredients.split("\n").map(item => item.trim());
      const formattedInstructions = instructions.split("\n").map(item => item.trim());

      const { targetRef, toPDF } = usePDF({ filename: `${name}.pdf` });

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
        <div ref={targetRef}>
          <div className="flex flex-col content-center text-center gap-1 flex-wrap">
      <div className="flex gap-2">
        <h1 className="text-xl">{name}</h1>
        <PDFDownloadButton toPDF={toPDF} />
      </div>
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
            <li key={i} className="w-100">
            {instruction}
            </li>
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

export default RecipeContent;