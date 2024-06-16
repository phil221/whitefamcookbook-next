import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const authorExample = await prisma.author.create({
    data: {
      name: "Cathy White",
    },
  });
  const recipeExample = await prisma.recipe.create({
    data: {
      name: "Pasta Guglielmo",
      authorName: "Cathy White",
      servingsNumber: "10",
      prepTime: 8,
      ingredients: "1 tsp vanilla extract",
      instructions: "1. Cook pasta",
      nutritionFacts: "Per serving:",
      category: "Entrees",
    },
  });
  console.log({ authorExample, recipeExample });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
