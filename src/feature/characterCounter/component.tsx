import { ChangeEvent, FC, useState } from 'react';
// Components
import { TextArea } from '../../components/textarea';
import { ReadingTime } from './components/readingTime';
import { Checkbox } from '../../components/checkbox';
import { TextInput } from '../../components/textInput';
// Utils
import { onlyNumbers } from '../../lib/utils.ts';
import { isExceedingLimit } from './utils.ts';
// Constants
import { LIMIT_ERROR } from '../../lib/constants.ts';
// Styles
import styles from './styles.module.css';

const CharacterCounterComponent: FC = () => {
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

  return (
    <section>
      <h1 className={styles.heading}>Analyze your text in real-time.</h1>
      <TextArea value={text} onChange={handleTextChange} error={error} />
      <div className={styles.options}>
        <div className={styles.leftOptions}>
          <Checkbox
            label={'Exclude Spaces'}
            onChange={handleToggleExcludeSpaces}
          />
          <div className={styles.limitOptions}>
            <Checkbox
              label={'Set Character Limit'}
              onChange={handleToggleLimit}
            />
            {isLimitActive && (
              <div className={styles.limitInputWrapper}>
                <TextInput
                  value={limit}
                  placeholder={'Limit'}
                  onChange={handleLimitChange}
                />
              </div>
            )}
          </div>
        </div>
        <ReadingTime text={text} />
      </div>
    </section>
  );
};

export default CharacterCounterComponent;
