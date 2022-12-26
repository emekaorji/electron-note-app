import SecondaryInput from 'components/reusables/inputs/secondaryInput/secondaryInput';
import { useEffect, useState } from 'react';
import styles from './title.module.css';

const Title = ({
  title: name = '',
}: {
  title: string | undefined;
}): JSX.Element => {
  const [title, setTitle] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const [size, setSize] = useState(2.5);

  const saveTitle = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    setIsEditing(false);
  };

  const editTitle = async () => {
    await setIsEditing(true);
    document.getElementById('title')?.focus();
  };

  useEffect(() => {
    const len = title?.length;
    if (!len) return;
    if (len > 40) {
      setSize(1.7);
      return;
    }
    if (len > 36) {
      setSize(1.8);
      return;
    }
    if (len > 32) {
      setSize(1.9);
      return;
    }
    if (len > 28) {
      setSize(2);
      return;
    }
    if (len > 24) {
      setSize(2.1);
      return;
    }
    if (len > 20) {
      setSize(2.2);
      return;
    }
    setSize(2.5);
  }, [title?.length]);

  return (
    <>
      <form
        onSubmit={saveTitle}
        className={styles.form}
        style={{ '--size': `${size}em` } as React.CSSProperties}
      >
        {isEditing ? (
          <SecondaryInput
            value={title}
            onChange={(e) => setTitle(e?.target.value)}
            onBlur={saveTitle}
            id="title"
            className={styles.input}
            transparent
            placeholder="No title"
          />
        ) : (
          <h1 onClick={editTitle} aria-hidden="true" className={styles.h1}>
            {title || <span className={styles.placeholder}>No title</span>}
          </h1>
        )}
      </form>
    </>
  );
};

export default Title;
