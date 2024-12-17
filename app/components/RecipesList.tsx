import { composePathFromString } from "@/utils/path";
import { Prisma } from "@prisma/client";
import Link from "next/link";

export default async function RecipesList({
  recipes,
}: {
  recipes: Prisma.RecipeGetPayload<{
    include: {
      author: true;
      category: true;
    };
  }>[];
}) {
  const recipesList = recipes.map((r) => {
    const recipePath = composePathFromString(r.name || "");

    return (
      <Link
        className="text-lg"
        href={`/recipes/${r.id}/${recipePath}`}
        key={r.id}
      >
        <li className="flex items-center justify-between cursor-pointer p-2 transition-all ease-in-out duration-100 hover:text-[#2E4B32] hover:font-semibold border-[#2E4B32] hover:border-l-2 hover:text-[1.05em]">
          <p className="text-md">{r.name}</p>
          <p className="text-sm">{r.authorName}</p>
        </li>
      </Link>
    );
  });

  return (
    <ul className="space-y-3">
      {recipes.length > 0 ? recipesList : <p>No recipes found.</p>}
    </ul>
  );
}
