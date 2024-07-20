import prisma from "./prisma";

export async function getAuthor(authorName: string) {
  try {
    const author = await prisma.author.findUnique({
      where: { name: authorName },
      include: {
        recipes: true,
      },
    });
    return author;
  } catch (error) {
    console.error("getAuthor error:", error);
  }
}

export async function getAllAuthors() {
  try {
    const authors = await prisma.author.findMany();
    return authors;
  } catch (error) {
    console.error("getAllAuthors error:", error);
  }
}

export type Author = Awaited<ReturnType<typeof getAuthor>>;
