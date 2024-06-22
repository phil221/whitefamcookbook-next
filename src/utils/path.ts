export const composePathFromString = (str: string) => {
  return str.toLowerCase().split(" ").join("-");
};

export const composeAuthorNameFromPath = (authorPath: string) => {
  console.log({ authorPath });
  try {
    return authorPath
      .split("-")
      .map((str) => str[0].toUpperCase() + str.substring(1))
      .join(" ");
  } catch (err) {
    console.error(err);
  }
};
