export const composePathFromString = (str: string) => {
  return str.toLowerCase().split(" ").join("-");
};

export const composeNameFromPath = (path: string) => {
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
