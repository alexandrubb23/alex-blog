export const buildSearchParams = (query?: Record<string, any>) => {
  if (!query) return "";

  const params = new URLSearchParams();
  for (const key in query) {
    if (query[key] !== undefined && query[key] !== null) {
      params.set(key, String(query[key]));
    }
  }

  const queryString = params.toString();
  return queryString ? `?${queryString}` : "";
};
