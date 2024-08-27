import RecipesList from "@/components/RecipesList";
import BaseLink from "@/components/shared/BaseLink";
import { getAuthors } from "@lib/authors";
import { filterRecipes } from "@lib/recipes";
import AuthorFilters from "./(filters)/AuthorFilters";
import { getCategories } from "@lib/categories";
import CategoryFilters from "./(filters)/CategoryFilters";
import { SITE_TITLE } from "@/constants";
import { Metadata } from "next";
import ClearFilterButton from "./components/ClearFilterButton";
import SearchInput from "./components/SearchInput";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Recipes | ${SITE_TITLE}`,
};

type Props = {
  searchParams?: {
    author?: string | string[];
    category?: string;
    q?: string;
  };
};

export default async function Recipes({ searchParams }: Props) {
  const { author, category, q } = searchParams ?? {};
  const recipes = await (q
    ? filterRecipes(author, category, q)
    : filterRecipes(author, category));
  const authors = await getAuthors();
  const categories = await getCategories();

  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold mt-5">Recipes</h1>
      <ClearFilterButton />
      <div className="flex gap-5">
        <section className="border-[0.25px] border-gray-950 rounded-md max-h-[60vh] overflow-scroll w-3/12 p-5">
          <AuthorFilters authors={authors} />
          <div className="w-100 my-4 h-px bg-gray-900" />
          <CategoryFilters categories={categories} />
        </section>
        <section className="border-[0.25px] border-gray-950 flex flex-col gap-2 rounded-md max-h-[60vh] overflow-scroll w-6/12 p-5">
          <SearchInput />
          <Suspense key={recipes.length} fallback={<p>Loading...</p>}>
            <RecipesList recipes={recipes} />
          </Suspense>
        </section>
      </div>
      <BaseLink href={"/"} text="Back to Home" />
    </main>
  );
}
