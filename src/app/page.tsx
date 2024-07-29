import RecipesList from "@/components/RecipesList";
import prisma from "../../lib/prisma";
import { filterRecipes, getRecipes } from "@lib/recipes";

type Props = {
  searchParams?: {
    author?: string;
    category?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const { author, category } = searchParams ?? {};
  const recipes = (await filterRecipes(author, category)) ?? [];

  return (
    <main className="flex min-h-screen flex-col gap-3">
      <h1 className="text-3xl">Recipes</h1>
      <section>
        <RecipesList recipes={recipes} />
      </section>
    </main>
  );
}
