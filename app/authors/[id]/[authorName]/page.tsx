import { getAuthor } from "@lib/authors";
import { composeNameFromPath, composePathFromString } from "@/utils/path";
import React from "react";
import Link from "next/link";
import { SITE_TITLE } from "@/constants";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const author = composeNameFromPath(params.authorName);
  const parentTitle = (await parent).title?.absolute || SITE_TITLE;

  return {
    title: `${author ?? "Author"} | ${parentTitle}`,
  };
}

type Props = {
  params: Promise<{
    authorName: string;
  }>;
};

export default async function Author(props: Props) {
  const params = await props.params;
  const authorName = composeNameFromPath(params.authorName);
  const author = await getAuthor(authorName || "");

  return (
    <div>
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
