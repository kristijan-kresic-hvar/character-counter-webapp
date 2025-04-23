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
