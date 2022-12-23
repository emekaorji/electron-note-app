import PenIcon from 'components/reusables/icons/pen';
import PrimaryLink from 'components/reusables/links/primaryLink/primaryLink';
import { useMemo } from 'react';
import styles from './emptyView.module.css';

const EmptyView = () => {
  const randomId = useMemo(() => Math.random() * 10000000000, []);

  return (
    <>
      <div className={styles.empty}>
        <h2>You currently do not have any notes</h2>
        <PrimaryLink
          href={`/notes/${randomId}`}
          icon={<PenIcon />}
          iconSize="1em"
        >
          Write
        </PrimaryLink>
      </div>
    </>
  );
};

export default EmptyView;
