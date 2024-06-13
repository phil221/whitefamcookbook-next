import prisma from "./prisma";

export async function getRecipes() {
    try {
        const recipes = await prisma.recipes.findMany()
        return recipes;
    } catch (error) {
        console.error("getRecipes error:", error);
        return [];
    }
}

export async function getRecipe(recipeid: number) {
    try {
        const recipe = await prisma.recipes.findUnique({
            where: { recipeid }
        })
        return recipe;
    } catch (error) {
        console.error("getRecipe error:", error);
        return [];
    }
}

export type Recipe = Awaited<ReturnType<typeof getRecipes>>[0];