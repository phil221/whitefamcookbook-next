/**
 * Composes a path string from a given string by converting it to lowercase, splitting it into an array of words,
 * and joining the words with hyphens. If the resulting array has more than one word, hyphens are used to join the words.
 * Otherwise, the first word is returned as is.
 *
 * @param {string} str - The input string to compose the path from.
 * @return {string} The composed path string.
 */
export const composePathFromString = (str: string) => {
  if (str.split(" ").length > 1) {
    return encodeURIComponent(str
      .split(" ")
      .map(s => s.replace(/[^a-zA-Z0-9& ]/g, "").toLowerCase()).join("-"));
  }

  return encodeURIComponent(str.toLowerCase())
};

/**
 * Composes a name from a given path string by splitting it into an array of words,
 * capitalizing the first letter of each word, and joining them with spaces.
 *
 * @param {string} path - The input path string.
 * @return {string} The composed name string.
 */
export const composeNameFromPath = (path: string) => {
  if (path.includes("matriarch")) return "The 'Matriarch'"
  try {
    return path
      .split("-")
      .map((str) => str[0].toUpperCase() + str.substring(1))
      .join(" ");
  } catch (err) {
    console.error(err);
    return "";
  }
};
