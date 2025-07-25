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

export const shrunkText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;

  // Find a good breaking point (prefer word boundaries)
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  // If we find a space and it's not too close to the start, break there
  if (lastSpaceIndex > maxLength * 0.6) {
    return truncated.slice(0, lastSpaceIndex) + "...";
  }

  // Otherwise, just truncate and add ellipsis
  return truncated + "...";
};
