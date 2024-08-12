import { Prisma } from ".prisma/client";
import prisma from "./prisma";
import { capitalize } from "@/utils/capitalize";

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

  console.log({ authors, categories, q });
  const qFilter = composeFilter(q, "q");
  const categoriesFilter = composeFilter(categories, "categories");
  const authorsFilter = composeFilter(authors, "authors");

  const filters = (() => {
    if (q) return qFilter;

    if (authors && categories) {
      return {
        AND: [authorsFilter, categoriesFilter],
      };
    }

    if (authors) return authorsFilter;
    if (categories) return categoriesFilter;
  })();

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
  if (type === "q") return { name: { contains: filter as string } };
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
