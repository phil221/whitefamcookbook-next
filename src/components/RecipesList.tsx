import Link from "next/link";
import React from "react";
import { getRecipes, Recipe } from "../../lib/recipes";
import { composePathFromString } from "@/utils/path";

export default async function RecipesList({
  recipes,
}: {
  recipes: Awaited<ReturnType<typeof getRecipes>>;
}) {
  return (
    <ul className="pl-2">
      {recipes?.map((r) => {
        const recipePath = composePathFromString(r.name || "");
        return (
          <li key={r.id}>
            <Link href={`/recipes/${r.id}/${recipePath}`}>{r.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
