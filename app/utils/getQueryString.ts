const getQueryString = (
  searchParams: URLSearchParams,
  name: string,
  value: string
) => {
  const params = new URLSearchParams(searchParams.toString());

  if (params.has(name, value)) {
    params.delete(name, value);
    return params.toString();
  }

  if (params.getAll(name).length > 0) {
    params.append(name, value);
  } else {
    params.set(name, value);
  }

  return params.toString();
};

export default getQueryString;
