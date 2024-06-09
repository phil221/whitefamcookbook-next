import RecipesList from "@/components/RecipesList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-20 gap-3">
      <h1 className="text-3xl">Recipes</h1>
      <section>
        <RecipesList />
      </section>
    </main>
  );
}
