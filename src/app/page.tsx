import AddRecipeForm from "@/components/AddRecipeForm";
import RecipesList from "@/components/RecipesList";
import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const authors = await prisma.author.findMany();

  return (
    <main className="flex min-h-screen flex-col gap-3">
      <h1 className="text-3xl">Recipes</h1>
      <section>
        <RecipesList />
        <AddRecipeForm authors={authors} />
      </section>
    </main>
  );
}
