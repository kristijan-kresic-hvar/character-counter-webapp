import { ChangeEvent, useState } from 'react';
// Utils
import { isExceedingLimit } from './utils.ts';
import { onlyNumbers } from '../../lib/utils.ts';
// Constants
import { LIMIT_ERROR } from '../../lib/constants.ts';

export const useCharacterCounterState = () => {
  // state
  const [text, setText] = useState<string>('');
  const [limit, setLimit] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isExcludeSpacesActive, setIsExcludeSpacesActive] =
    useState<boolean>(false);
  const [isLimitActive, setIsLimitActive] = useState<boolean>(false);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    // check for limit only if isLimitActive is true and limit is defined and valid
    if (isLimitActive && limit !== '' && !isNaN(Number(limit))) {
      if (isExceedingLimit(Number(limit), text, isExcludeSpacesActive)) {
        setError(LIMIT_ERROR(limit));
      } else if (error.length > 0) {
        setError('');
      }
    }

    setText(text);
  };

  const handleLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const limit = e.target.value;
    const newLimit = onlyNumbers(limit);

    if (!newLimit || newLimit === 0) {
      setLimit('');
      setError('');
      return;
    }

    if (
      !isExceedingLimit(newLimit, text, isExcludeSpacesActive) &&
      error.length > 0
    ) {
      setError('');
    } else if (
      isExceedingLimit(newLimit, text, isExcludeSpacesActive) &&
      error.length === 0
    ) {
      setError(LIMIT_ERROR(newLimit));
    }

    setLimit(newLimit.toString());
  };

  const handleToggleExcludeSpaces = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (isLimitActive && limit !== '' && !isNaN(Number(limit))) {
      if (isExceedingLimit(Number(limit), text, isChecked)) {
        setError(LIMIT_ERROR(limit));
      } else if (error.length > 0) {
        setError('');
      }
    }

    setIsExcludeSpacesActive(isChecked);
  };

  const handleToggleLimit = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (!isChecked) {
      setLimit('');
      setError('');
    }

    setIsLimitActive(isChecked);
  };

  return {
    text,
    handleTextChange,
    limit,
    handleLimitChange,
    handleToggleLimit,
    error,
    isExcludeSpacesActive,
    handleToggleExcludeSpaces,
    isLimitActive,
  };
};
