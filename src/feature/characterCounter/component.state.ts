import { ChangeEvent, useState, useMemo, useCallback } from 'react';
// Utils
import { isExceedingLimit } from './utils/isExceedingLimit.ts';
import { onlyNumbers } from '../../lib/utils.ts';
// Constants
import { LIMIT_ERROR } from '../../lib/constants.ts';

export const useCharacterCounterState = () => {
  // state
  const [text, setText] = useState<string>('');
  const [limit, setLimit] = useState<string>('');
  const [isExcludeSpacesActive, setIsExcludeSpacesActive] =
    useState<boolean>(false);
  const [isLimitActive, setIsLimitActive] = useState<boolean>(false);

  const getError = useMemo(() => {
    if (isLimitActive && limit && text) {
      const limitNum = Number(limit);
      if (!isNaN(limitNum)) {
        if (isExceedingLimit(limitNum, text, isExcludeSpacesActive)) {
          return LIMIT_ERROR(limit);
        }
      }
    }
    return '';
  }, [isExcludeSpacesActive, isLimitActive, limit, text]);

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.target.value;
      setText(text);
    },
    [],
  );

  const handleLimitChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const limit = e.target.value;
    const newLimit = onlyNumbers(limit);

    if (!newLimit || newLimit === 0) {
      setLimit('');
      return;
    }

    setLimit(newLimit.toString());
  }, []);

  const handleToggleExcludeSpaces = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      setIsExcludeSpacesActive(isChecked);
    },
    [],
  );

  const handleToggleLimit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (!isChecked) {
      setLimit('');
    }

    setIsLimitActive(isChecked);
  }, []);

  return {
    text,
    handleTextChange,
    limit,
    isLimitActive,
    handleLimitChange,
    handleToggleLimit,
    error: getError,
    isExcludeSpacesActive,
    handleToggleExcludeSpaces,
  };
};
