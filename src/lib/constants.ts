export const LIMIT_ERROR = (limit: number | string) => {
  return `Limit reached! Your text exceeds ${limit} characters.`;
};
