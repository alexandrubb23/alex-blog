export const isNotLastElement = <T>(array: T[], currentIndex: number) => {
  if (array.length === 0) return undefined;
  return array.length - 1 !== currentIndex;
};
