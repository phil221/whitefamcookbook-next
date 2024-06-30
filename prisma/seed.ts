import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // const categoryExample = await prisma.category.create({
  //   data: {
  //     name: "Entrees",
  //   },
  // });

  // const authorExample = await prisma.author.create({
  //   data: {
  //     name: "Molly Smillie",
  //   },
  // });
  // const recipeExample = await prisma.recipe.create({
  //   data: {
  //     name: "Shrimp Scampi",
  //     authorName: "Molly Smillie",
  //     servingsNumber: "8",
  //     prepTime: 20,
  //     ingredients: "20 lbs fettucine",
  //     instructions: "1. Buy the fettucine",
  //     nutritionFacts: "Per serving:",
  //     categoryName: "Entrees",
  //   },
  // });

  // const authorExample2 = await prisma.author.create({
  //   data: {
  //     name: "Cathy White",
  //   },
  // });

  // const authorExample2 = await prisma.recipe.delete({
  //   where: {
  //     id: 6,
  //   },
  // });

  const recipeExample2 = await prisma.recipe.create({
    data: {
      name: "Father Steckler's Lamb Stew",
      authorName: "Liz Dillon",
      servingsNumber: "6",
      prepTime: 20,
      ingredients: `2 1/2 pounds Lamb stew meat, or cut up leg
        olive oil, as needed
        curry powder
        cayenne pepper
        rosemary
        dill
        1 medium onion
  1 bell pepper
  garlic
  1 can cream of mushroom soup
  3/4 cup red wine
  1 package mushroom
  8 ounces sour cream, or 16 oz, if desired`,
      instructions: `1. Brown lamb in olive oil sprinkled with curry powder, cayenne pepper, rosemary and dill.
  2. Combine in a stew pot with onion, bell pepper, garlic (shallots or chives are good too), mushroom soup, and red wine. Simmer 2 1/2 hours.
  3. Add package of mushrooms, sliced, towards the end.
  4. Before serving, add an 8 or 16 oz container (depending on your taste) of sour cream`,
      comment:
        "This is a great stew, but Fr. Steckler didn't give me measurements.",
      nutritionFacts: `Per serving (excluding unknown items): 526.9 Calories; 41.0g Fat (73.3% calories from fat); 26.7g Protein; 6.9g
  Carbohydrate; 122mg Cholesterol; 297mg Sodium. Exchanges: 3 1/2 Lean Meat; 1/2 Vegetable; 6 1/2 Fat`,
      categoryName: "Entrees",
    },
  });
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
