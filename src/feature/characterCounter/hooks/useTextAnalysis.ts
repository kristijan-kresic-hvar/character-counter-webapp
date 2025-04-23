import { useMemo } from 'react';
import { calculateReadingTime } from '../utils/calculateReadingTime.ts';
import { calculateWordStats } from '../utils/calculateWordStats.ts';

interface Props {
  text: string;
  ignoreSpaces?: boolean;
  limit?: string;
}

export const useTextAnalysis = ({ text, ignoreSpaces, limit }: Props) => {
  const limitedText = useMemo(() => {
    if (!limit) return text;

    const effectiveLength = ignoreSpaces
      ? text.replace(/\s/g, '').length
      : text.length;

    return effectiveLength > Number(limit)
      ? text.slice(0, Number(limit))
      : text;
  }, [text, ignoreSpaces, limit]);

  const wordStats = useMemo(() => {
    return calculateWordStats(limitedText, ignoreSpaces);
  }, [limitedText, ignoreSpaces]);

  const readingTime = useMemo(() => {
    return calculateReadingTime(limitedText);
  }, [limitedText]);

  return {
    ...wordStats,
    readingTime,
  };
};
