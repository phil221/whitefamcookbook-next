import RecipesList from "@/components/RecipesList";
import BaseLink from "@/components/shared/BaseLink";
import { getAuthors } from "@lib/authors";
import { filterRecipes } from "@lib/recipes";
import AuthorFilters from "./(filters)/AuthorFilters";
import { getCategories } from "@lib/categories";
import CategoryFilters from "./(filters)/CategoryFilters";
import { SITE_TITLE } from "@/constants";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentTitle = (await parent).title?.absolute || SITE_TITLE;

  return {
    title: `Recipes | ${parentTitle}`,
  };
}

type Props = {
  searchParams?: {
    author?: string | string[];
    category?: string;
  };
};

export default async function Recipes({ searchParams }: Props) {
  const { author, category } = searchParams ?? {};
  const recipes = await filterRecipes(author, category);
  const authors = await getAuthors();
  const categories = await getCategories();

  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold mt-5">Recipes</h1>
      <div className="flex gap-5">
        <section className="border-[0.25px] border-gray-950 rounded-md max-h-[60vh] overflow-scroll w-3/12 p-5">
          <AuthorFilters authors={authors} />
          <div className="w-100 my-4 h-px bg-gray-900" />
          <CategoryFilters categories={categories} />
        </section>
        <section className="border-[0.25px] border-gray-950 rounded-md max-h-[60vh] overflow-scroll w-6/12 p-5">
          <RecipesList recipes={recipes} />
        </section>
      </div>
      <BaseLink href={"/"} text="Back to Home" />
    </main>
  );
}
