import prisma from "./prisma";

export async function getCategory(categoryName: string) {
  try {
    const category = await prisma.category.findUnique({
      where: { name: decodeURIComponent(categoryName) },
      include: {
        recipes: true,
        authors: true,
      },
    });
    return category;
  } catch (error) {
    console.error("getCategory error:", error);
  }
}

export async function getCategories() {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    console.error("getCategories error:", error);
    return [];
  }
}

export type Category = Awaited<ReturnType<typeof getCategory>>;
