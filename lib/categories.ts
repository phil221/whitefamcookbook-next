import prisma from "./prisma";

export async function getCategory(categoryName: string) {
    
  try {
    const category = await prisma.category.findUnique({
      where: { name: categoryName },
      include: {
        recipes: true,
        authors: true
      },
    });
    return category;
  } catch (error) {
    console.error("getcategory error:", error);
  }
}

export type category = Awaited<ReturnType<typeof getCategory>>;
