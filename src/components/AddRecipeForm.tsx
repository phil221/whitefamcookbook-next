"use client";

import handleAddRecipe from "@/app/actions/recipes";
import { Author } from "@prisma/client/edge";
import { Category } from "@prisma/client/edge";
import { useActionState } from "react";

const AddRecipeForm = ({
  authors,
  categories,
}: {
  authors: Author[];
  categories: Category[];
}) => {
  const [state, action, pending] = useActionState(handleAddRecipe, null);
  return (
    <div>
      <form action={action}>
        <div className="flex flex-col gap-2 max-w-screen-sm">
          <input
            className="border-solid border border-black p-1 rounded"
            type="text"
            name="name"
            placeholder="name"
          />
          <select
            className="border-solid border border-black p-1 rounded"
            name="authorName"
          >
            {["--- select an author ---", ...authors.map((a) => a.name)].map(
              (text, i) => (
                <option key={text} value={i === 0 ? "" : text}>
                  {text}
                </option>
              )
            )}
          </select>
          <input
            className="border-solid border border-black p-1 rounded"
            type="text"
            name="servingsNumber"
            placeholder="servings"
          />
          <input
            className="border-solid border border-black p-1 rounded"
            type="number"
            name="prepTime"
            placeholder="prep time"
          />
          <textarea
            className="border-solid border border-black p-1 rounded"
            name="ingredients"
            placeholder="ingredients"
            rows={5}
          />
          <textarea
            className="border-solid border border-black p-1 rounded"
            name="instructions"
            placeholder="instructions"
            rows={5}
          />
          <textarea
            className="border-solid border border-black p-1 rounded"
            name="comment"
            placeholder="comment"
            rows={5}
          />
          <input
            type="textarea"
            name="nutritionFacts"
            placeholder="nutrition facts"
            className="border-solid border border-black p-1 rounded"
          />
          <select
            className="border-solid border border-black p-1 rounded"
            name="categoryName"
          >
            {[
              "--- select a category ---",
              ...categories.map((a) => a.name),
            ].map((text, i) => (
              <option key={text} value={i === 0 ? "" : text}>
                {text}
              </option>
            ))}
          </select>
          <button
            className="border-solid border border-black py-1 px-3 rounded w-fit"
            type="submit"
            disabled={pending}
          >
            {pending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
