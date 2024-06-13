import Link from "next/link";
import React from "react";
import { getRecipes } from "../../lib/recipes";

export default async function RecipesList() {
  const recipes = await getRecipes();
  
  return (
    <ul className="pl-2">
      {
        recipes.map(r => {
          const recipePath = r.name?.split(" ").join("-").toLowerCase();
          return (
          <li key={r.recipeid}>
            <Link href={`/recipes/${r.recipeid}/${recipePath}`}>{r.name}</Link>
          </li>
        )
      })
      }
    </ul>
  );
}
