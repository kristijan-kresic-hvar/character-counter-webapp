// Components
import { TextArea } from '../../components/textarea';
import { ReadingTime } from './components/readingTime';
import { Checkbox } from '../../components/checkbox';
import { Limit } from './components/limit';
// State
import { useCharacterCounterState } from './component.state.ts';
// Styles
import styles from './styles.module.css';

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
    handleToggleExcludeSpaces,
  } = useCharacterCounterState();

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
        <ReadingTime text={text} />
      </div>
    </section>
  );
};

export default CharacterCounterComponent;
