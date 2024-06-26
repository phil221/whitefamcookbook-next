import RecipesList from "@/components/RecipesList";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3">
      <h1 className="text-3xl">Recipes</h1>
      <section>
        <RecipesList />
      </section>
    </main>
  );
}
