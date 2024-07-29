import { Prisma } from ".prisma/client";
import prisma from "./prisma";
import { capitalize } from "@/utils/capitalize";

export async function getRecipes() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        author: true,
        category: true,
      }
    });
    return recipes;
  } catch (error) {
    console.error("getRecipes error:", error);
    return [];
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

export async function filterRecipes(author?: string, category?: string) {
  if (!author && !category) return await getRecipes();

  const authorFilter = author ? { authorName: { equals: capitalize(author) } } : {};
  const categoryFilter = category ? { categoryName: { equals: capitalize(category) } } : {};

  const filters = (() => {
    if (author && category) {
      return {
        AND: [authorFilter, categoryFilter],
      };
    }

    return author ? authorFilter : categoryFilter;
  })();

  try {
    return await prisma.recipe.findMany({ where: filters, include: { author: true, category: true } });
  } catch (error) {
    console.error("error in filterRecipes:", error);
    return [];
  }
}

export type Recipe = Awaited<ReturnType<typeof getRecipe>>;
