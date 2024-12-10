import { SITE_TITLE } from "@/constants";
import { getRecipe } from "@lib/recipes";
import { Metadata, ResolvingMetadata } from "next";
import RecipeContent from "../../../components/RecipeContent";

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const recipe = await getRecipe(params.id);
  const parentTitle = (await parent).title?.absolute || SITE_TITLE;

  return {
    title: `${recipe?.name ?? "Recipe"} | ${parentTitle}`,
  };
}

type Props = {
  params: Promise<{
    recipe: string;
    id: string;
  }>;
};

export default async function Recipe(props: Props) {
  const params = await props.params;
  const recipe = await getRecipe(params.id);
  return (
    <div className="flex flex-col mx-auto content-center gap-2 max-w-screen-md py-5">
      <RecipeContent recipe={recipe} />
    </div>
  );
}
