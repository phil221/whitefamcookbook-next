import RecipesList from "@/components/RecipesList";
import { filterRecipes } from "@lib/recipes";
import Link from "next/link";

type Props = {
    searchParams?: {
        author?: string;
        category?: string;
    };
};

export default async function Recipes({ searchParams }: Props) {
    const { author, category } = searchParams ?? {};
    const recipes = await filterRecipes(author, category);

    return (
        <main className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold mt-8">Recipes</h1>
            <section className="border-[0.25px] border-gray-950 rounded-md max-h-56 overflow-scroll w-6/12 p-5">
                <RecipesList recipes={recipes} />
            </section>
            <Link href={"/"}>Back to Home</Link>
        </main>
    );
}
