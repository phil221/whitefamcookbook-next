import Link from "next/link";
import React from "react";
import { getRecipes } from "../../lib/recipes";

export default async function RecipesList() {
  const recipes = await getRecipes();
  
  return (
    <ul className="pl-2">
      <li>
        <Link href="/recipes/cheese">Cheese</Link>
      </li>
      <li>
        <Link href="/recipes/food">Food</Link>
      </li>
      <li>
        <Link href="/recipes/bread">Bread</Link>
      </li>
      <li>
        <Link href="/recipes/onions">Onions</Link>
      </li>
    </ul>
  );
}
