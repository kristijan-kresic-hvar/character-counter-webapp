export const calculateWordStats = (
  text: string,
  ignoreSpaces: boolean = false,
) => {
  const totalCharacters = ignoreSpaces
    ? text.replace(/\s/g, '').length
    : text.length;

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const sentenceCount = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0).length;

  return {
    totalCharacters,
    wordCount,
    sentenceCount,
  };
};
