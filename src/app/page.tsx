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
  const authors = await prisma.author.findMany();
  const categories = await prisma.category.findMany();
  let recipes;
  if (!searchParams?.author && !searchParams?.category) {
    recipes = (await getRecipes()) ?? [];
  }
  if (searchParams?.author) {
    recipes = (await filterRecipes(searchParams.author)) ?? [];
  }
  if (searchParams?.category) {
    recipes = (await filterRecipes(searchParams.category)) ?? [];
  }

  return (
    <main className="flex min-h-screen flex-col gap-3">
      <h1 className="text-3xl">Recipes</h1>
      <section>
        <RecipesList recipes={recipes} />
      </section>
    </main>
  );
}
