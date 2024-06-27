import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const categoryExample = await prisma.category.create({
    data: {
      name: "Entrees",
    },
  })

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
      categoryName: "Entrees",
    },
  });


  const authorExample2 = await prisma.author.create({
    data: {
      name: "Cathy White",
    },
  });
  
  const recipeExample2 = await prisma.recipe.create({
    data: {
      name: "Pasta Guglielmo",
      authorName: "Cathy White",
      servingsNumber: "2",
      prepTime: 10,
      ingredients: "1 tsp vanilla extract",
      instructions: "1. Read a book",
      nutritionFacts: "Per serving:",
      categoryName: "Entrees",
    },
  });
  console.log({ authorExample, recipeExample, authorExample2, recipeExample2 });
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
