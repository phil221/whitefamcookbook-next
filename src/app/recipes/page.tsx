import React from "react";
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
  const paramsLength = Object.keys(searchParams ?? {}).length;
  const recipes = await filterRecipes(author, category, q);
  const authors = await getAuthors();
  const categories = await getCategories();

  const hasSearchValue = q && q.length > 0;
  const filtersAmount = hasSearchValue ? paramsLength - 1 : paramsLength;

  return (
    <main className="flex flex-col gap-4">
      <div className="flex gap-10">
        <h1 className="text-3xl font-semibold">Recipes</h1>
        {filtersAmount > 0 && (
          <ClearFilterButton filtersAmount={filtersAmount} />
        )}
      </div>
      <div className="flex gap-5">
        <section className="max-h-[60vh] overflow-scroll w-3/12 p-5">
          <AuthorFilters authors={authors} />
          <div className="w-100 my-4 h-px bg-gray-900" />
          <CategoryFilters categories={categories} />
        </section>
        <div className="h-100 w-[1px] bg-gray-900" />
        <section className="flex flex-col gap-2 max-h-[60vh] overflow-scroll w-6/12 p-5">
          <SearchInput />
          <Suspense key={recipes.length} fallback={<p>Loading...</p>}>
            <RecipesList recipes={recipes} />
          </Suspense>
        </section>
        <div className="h-100 w-[1px] bg-gray-900" />
      </div>
      <BaseLink href={"/"} text="Back to Home" />
    </main>
  );
}
