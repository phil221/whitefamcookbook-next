import prisma from "./prisma";

export async function getRecipes() {
    try {
        const recipes = await prisma.recipe.findMany()
        return recipes;
    } catch (error) {
        console.error("getRecipes error:", error);
        return [];
    }
}

export type Recipe = Awaited<ReturnType<typeof getRecipes>>[0];