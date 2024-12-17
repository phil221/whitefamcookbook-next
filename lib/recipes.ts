import { capitalize } from "@/utils/capitalize";
import { Prisma } from "@prisma/client";
import prisma from "./prisma";

export async function getRecipes() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        author: true,
        category: true,
      },
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

export async function filterRecipes(
  authors?: string | string[],
  categories?: string | string[],
  q?: string
) {
  if (!authors && !categories && !q) return await getRecipes();

  const qFilter = composeFilter(q, "q");
  const categoriesFilter = composeFilter(categories, "categories");
  const authorsFilter = composeFilter(authors, "authors");
  const hasAuthorsFilter = authors && authors.length > 0;
  const hasCategoriesFilter = categories && categories.length > 0;
  const hasQFilter = q && q.length > 0;

  let filters = {};

  switch (true) {
    case hasAuthorsFilter && hasCategoriesFilter && hasQFilter:
      filters = {
        AND: [authorsFilter, categoriesFilter, qFilter],
      };
      break;
    case hasAuthorsFilter && hasCategoriesFilter && !hasQFilter:
      filters = {
        AND: [authorsFilter, categoriesFilter],
      };
      break;
    case hasAuthorsFilter && !hasCategoriesFilter && hasQFilter:
      filters = {
        AND: [authorsFilter, qFilter],
      };
      break;
    case !hasAuthorsFilter && hasCategoriesFilter && hasQFilter:
      filters = {
        AND: [categoriesFilter, qFilter],
      };
      break;
    case hasAuthorsFilter:
      filters = authorsFilter;
      break;
    case hasCategoriesFilter:
      filters = categoriesFilter;
      break;
    case hasQFilter:
      filters = qFilter;
      break;
  }

  try {
    return await prisma.recipe.findMany({
      where: filters,
      include: { author: true, category: true },
    });
  } catch (error) {
    console.error("error in filterRecipes:", error);
    return [];
  }
}

export type Recipe = Awaited<ReturnType<typeof getRecipe>>;

function composeFilter(
  filter: string | string[] | undefined,
  type: "authors" | "categories" | "q"
) {
  if (!filter) return {};
  if (type === "q")
    return { name: { contains: filter as string, mode: "insensitive" } };
  const filterName = type === "authors" ? "authorName" : "categoryName";
  return typeof filter === "string"
    ? { [filterName]: { equals: capitalize(filter) } }
    : {
        OR: [
          ...filter.map((f) => ({
            [filterName]: { equals: capitalize(f) },
          })),
        ],
      };
}
