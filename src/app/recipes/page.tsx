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
        <main className="flex min-h-screen flex-col gap-3">
            <section className="max-h-40">
                <RecipesList recipes={recipes} />
            </section>
            <Link href={"/"}>Back to Home</Link>
        </main>
    );
}
