"use server";

import prisma from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export default async function handleAddRecipe(
  prevState: unknown,
  data: FormData
) {
  const name = data.get("name");
  const authorName = data.get("authorName");
  const servingsNumber = data.get("servingsNumber");
  const prepTime = Number(data.get("prepTime"));
  const ingredients = data.get("ingredients");
  const instructions = data.get("instructions");
  const comment = data.get("comment");
  const nutritionFacts = data.get("nutritionFacts");
  const categoryName = data.get("categoryName");

  const recipeData = {
    name,
    authorName,
    servingsNumber,
    prepTime,
    ingredients,
    instructions,
    comment,
    nutritionFacts,
    categoryName,
  } as any;

  try {
    await prisma.recipe.create({ data: recipeData });
    revalidatePath("/");
  } catch (error) {
    console.error("error in handleAddRecipe fn:", error);
  }
}
