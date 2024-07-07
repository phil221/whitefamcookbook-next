"use client";

const AddRecipeForm = ({
  handleAddRecipe,
}: {
  handleAddRecipe: (data: FormData) => Promise<void>;
}) => {
  return (
    <div>
      <form action={handleAddRecipe}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="authorName" placeholder="author" />
        <input type="text" name="servingsNumber" placeholder="servings" />
        <input type="number" name="prepTime" placeholder="prep time" />
        <input type="textarea" name="ingredients" placeholder="ingredients" />
        <input type="textarea" name="instructions" placeholder="instructions" />
        <input type="textarea" name="comment" placeholder="comment" />
        <input
          type="textarea"
          name="nutritionFacts"
          placeholder="nutrition facts"
        />
        <input type="text" name="categoryName" placeholder="category" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
