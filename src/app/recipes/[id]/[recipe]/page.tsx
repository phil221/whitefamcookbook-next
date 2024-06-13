import Link from "next/link";
import React from "react";
import { getRecipe } from "../../../../../lib/recipes";

type Props = {
  params: {
    recipe: string;
    id: string;
  };
};

export default async function Recipe({ params }: Props) {
  const recipe  = await getRecipe(parseFloat(params.id));

  return (
    <div>
      <p>Recipe: {params.recipe}</p>
      <p>{JSON.stringify(recipe)}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
