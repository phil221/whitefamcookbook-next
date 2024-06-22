import { getAuthor } from "@lib/authors";
import { composeAuthorNameFromPath, composePathFromString } from "@/utils/path";
import React from "react";
import Link from "next/link";

type Props = {
  params: {
    authorName: string;
  };
};

export default async function Author({ params }: Props) {
  const authorName = composeAuthorNameFromPath(params.authorName);
  const author = await getAuthor(authorName || "");

  return (
    <div className="p-14">
      <h1 className="text-xl">{author?.name}</h1>
      <ul>
        {author?.recipes.map((recipe) => {
          const recipePath = composePathFromString(recipe.name);
          return (
            <li key={recipe.id}>
              <Link href={`/recipes/${recipe.id}/${recipePath}`}>
                {recipe.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
