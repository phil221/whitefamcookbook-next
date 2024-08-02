import prisma from "./prisma";

export async function getAuthor(authorName: string) {
  try {
    return await prisma.author.findUnique({
      where: { name: authorName },
      include: {
        recipes: true,
      },
    });
  } catch (error) {
    console.error("getAuthor error:", error);
  }
}

export async function getAuthors() {
  try {
    return await prisma.author.findMany();
  } catch (error) {
    console.error("getAuthor error:", error);
    return []
  }
}

export type Author = Awaited<ReturnType<typeof getAuthor>>;
