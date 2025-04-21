import { ChangeEvent, useEffect, useRef } from 'react';
// Components
import { TextInput } from '../../../../components/textInput';
import { Checkbox } from '../../../../components/checkbox';
// Styles
import styles from './styles.module.css';

interface Props {
  limit: string;
  isLimitActive: boolean;
  onToggleLimit: (e: ChangeEvent<HTMLInputElement>) => void;
  onLimitChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LimitComponent = ({
  limit,
  isLimitActive,
  onToggleLimit,
  onLimitChange,
}: Props) => {
  // refs
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLimitActive && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isLimitActive]);

  return (
    <div className={styles.limitOptions}>
      <Checkbox label={'Set Character Limit'} onChange={onToggleLimit} />
      {isLimitActive && (
        <div className={styles.limitInputWrapper}>
          <TextInput
            ref={textInputRef}
            value={limit}
            placeholder={'Limit'}
            onChange={onLimitChange}
          />
        </div>
      )}
    </div>
  );
};

export default LimitComponent;
