export const composePathFromString = (str: string) => {
  const strArray = str.toLowerCase().split(" ");
  return strArray.length > 1 ? strArray.join("-") : strArray[0];
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
