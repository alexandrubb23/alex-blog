import { calculateReadingTime } from './calculateReadingTime';

const readingTimeCache = new Map<string, string>();

export const formatReadingTime = (text: string, cacheKey?: string) => {
  const key = cacheKey ?? text;
  if (readingTimeCache.has(key)) {
    return readingTimeCache.get(key)!;
  }

  const ms = calculateReadingTime(text);
  const minutes = Math.ceil(ms / (60 * 1000));
  const result = `${minutes} min read`;

  readingTimeCache.set(key, result);
  return result;
};
