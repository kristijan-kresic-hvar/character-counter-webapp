// Components
import { TextArea } from '../../components/textarea';
import { ReadingTime } from './components/readingTime';
import { Checkbox } from '../../components/checkbox';
import { Limit } from './components/limit';

// State
import { useCharacterCounterState } from './component.state.ts';
// Styles
import styles from './styles.module.css';
import { useTextAnalysis } from './hooks/useTextAnalysis.ts';

const CharacterCounterComponent = () => {
  // state
  const {
    text,
    handleTextChange,
    limit,
    isLimitActive,
    handleLimitChange,
    handleToggleLimit,
    error,
    isExcludeSpacesActive,
    handleToggleExcludeSpaces,
  } = useCharacterCounterState();
  // hooks
  const { wordCount, totalCharacters, sentenceCount, readingTime } =
    useTextAnalysis({
      text,
      ignoreSpaces: isExcludeSpacesActive,
      limit,
    });

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
          <Limit
            limit={limit}
            onLimitChange={handleLimitChange}
            isLimitActive={isLimitActive}
            onToggleLimit={handleToggleLimit}
          />
        </div>
        <ReadingTime time={readingTime} />
      </div>
      <div className={styles.stats}>
        <p>word count:{wordCount}</p>
        <p>total characters:{totalCharacters}</p>
        <p>sentence count:{sentenceCount}</p>
      </div>
    </section>
  );
};

export default CharacterCounterComponent;
