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
  const charsPerMinute = wordsPerMinute * 5; // Approximate chars per minute (average word length ~5)

  const trimmedText = text.trim();
  const words = trimmedText.split(/\s+/);

  if (words.length === 1 && words[0].length > 10) {
    // If it's a single "word" that's longer than 10 chars, use character-based calculation
    return Math.max(1, Math.ceil(trimmedText.length / charsPerMinute));
  }

  // Otherwise use standard word-based calculation
  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
};
