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
  return (
    <ul className="pl-2 space-y-3">
      {recipes.map((r) => {
        const recipePath = composePathFromString(r.name || "");
        const authorPath = composePathFromString(r.author.name || "");
        return (
          <li className="flex flex-col" key={r.id}>
            <Link className="text-lg" href={`/recipes/${r.id}/${recipePath}`}>{r.name}</Link>
            <Link className="text-sm" href={`/authors/${r.author.id}/${authorPath}`}>{r.authorName}</Link>
          </li>
        );
      })}
    </ul>
  );
}
