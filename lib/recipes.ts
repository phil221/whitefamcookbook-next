import prisma from "./prisma";

export async function getRecipes() {
    try {
        const recipes = await prisma.recipe.findMany()
        return recipes;
    } catch (error) {
        console.error("getRecipes error:", error);
    }
}

export async function getRecipe(recipeid: string) {
    const idNumber = parseFloat(recipeid);
    try {
        const recipe = await prisma.recipe.findUnique({
            where: { recipeid: idNumber }
        })
        return recipe;
    } catch (error) {
        console.error("getRecipe error:", error);
    }
}

export type Recipe = Awaited<ReturnType<typeof getRecipe>>;