import { Prisma } from "@prisma/client";
import prisma from "./prisma";

export async function getRecipes() {
  try {
    const recipes = await prisma.recipe.findMany();
    return recipes;
  } catch (error) {
    console.error("getRecipes error:", error);
  }
}

export async function getRecipe(recipeId: string) {
  const id = parseFloat(recipeId);
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id },
      include: {
        author: true,
        category: true,
      },
    });

    return recipe;
  } catch (error) {
    console.error("getRecipe error:", error);
  }
}

export async function createRecipe(data: Prisma.RecipeCreateInput) {
  try {
    const recipe = await prisma.recipe.create({ data });
    return recipe;
  } catch (error) {
    console.error("createRecipe error:", error);
  }
}

export type Recipe = Awaited<ReturnType<typeof getRecipe>>;
