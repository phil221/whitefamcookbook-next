import Link from "next/link";
import React from "react";
import { composePathFromString } from "@/utils/path";
import { Prisma } from "@prisma/client";

export default async function RecipesList({
  recipes,
}: {
  recipes: Prisma.RecipeGetPayload<{
    include: {
      author: true;
      category: true;
    };
  }>[];
}) {
  const recipesList = recipes.map((r) => {
    const recipePath = composePathFromString(r.name || "");

    return (
      <Link
        className="text-lg"
        href={`/recipes/${r.id}/${recipePath}`}
        key={r.id}
      >
        <li className="flex items-center justify-between cursor-pointer hover:bg-beige-200 p-2 rounded">
          <p className="text-md">{r.name}</p>
          <p className="text-sm">{r.authorName}</p>
        </li>
      </Link>
    );
  });

  return (
    <ul className="pl-2 space-y-3">
      {recipes.length > 0 ? recipesList : <p>No recipes found.</p>}
    </ul>
  );
}
