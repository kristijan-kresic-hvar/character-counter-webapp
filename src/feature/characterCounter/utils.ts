export const isExceedingLimit = (
  limit: number,
  text: string,
  excludeSpaces: boolean,
): boolean => {
  const textLength = excludeSpaces
    ? text.replace(/\s/g, '').length
    : text.length;
  console.log(textLength);
  return textLength > limit;
};

export const calculateReadingTime = (text: string): number => {
  if (text.trim() === '') {
    return 0;
  }
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};
