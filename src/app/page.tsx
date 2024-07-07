import AddRecipeForm from "@/components/AddRecipeForm";
import RecipesList from "@/components/RecipesList";
import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export default async function Home() {
  async function handleAddRecipe(data: FormData) {
    "use server";
    const name = data.get("name");
    const authorName = data.get("authorName");
    const servingsNumber = data.get("servingsNumber");
    const prepTime = Number(data.get("prepTime"));
    const ingredients = data.get("ingredients");
    const instructions = data.get("instructions");
    const comment = data.get("comment");
    const nutritionFacts = data.get("nutritionFacts");
    const categoryName = data.get("categoryName");

    const res = await prisma.recipe.create({
      data: {
        name,
        authorName,
        servingsNumber,
        prepTime,
        ingredients,
        instructions,
        comment,
        nutritionFacts,
        categoryName,
      },
    });

    revalidatePath("/");
  }

  return (
    <main className="flex min-h-screen flex-col gap-3">
      <h1 className="text-3xl">Recipes</h1>
      <section>
        <RecipesList />
        <AddRecipeForm handleAddRecipe={handleAddRecipe} />
      </section>
    </main>
  );
}
