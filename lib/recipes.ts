import { Prisma } from ".prisma/client";
import prisma from "./prisma";
import { capitalize } from "@/utils/capitalize";

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

export async function filterRecipes(author?: string, category?: string) {
  console.log({ author, category });
  if (!author && !category) return getRecipes();

  const authorFilter = {
    authorName: {
      equals: capitalize(author!)
    },
  };
  const categoryFilter = {
    categoryName: {
      equals: capitalize(category!)
    },
  };
  const filters = (() => {
    if (author && category) {
      return {
        AND: [authorFilter, categoryFilter],
      };
    }

    if (author) return authorFilter;
    if (category) return categoryFilter;
  })();

  try {
    console.log("FILTERS:", filters);
    const recipes = await prisma.recipe.findMany({ where: filters });
    console.log("RECIPES FROM FILTER:", recipes);
    return recipes;
  } catch (error) {
    console.error("error in filterRecipes:", error);
  }
}

export type Recipe = Awaited<ReturnType<typeof getRecipe>>;
