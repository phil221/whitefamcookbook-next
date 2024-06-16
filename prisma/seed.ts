import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const authorExample = await prisma.author.create({
    data: {
      name: "Molly Smillie",
    },
  });
  const recipeExample = await prisma.recipe.create({
    data: {
      name: "Shrimp Scampi",
      authorName: "Molly Smillie",
      servingsNumber: "8",
      prepTime: 20,
      ingredients: "20 lbs fettucine",
      instructions: "1. Buy the fettucine",
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
