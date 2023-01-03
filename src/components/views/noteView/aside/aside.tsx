import getClassName from 'functions/getClassName';
import useNoteViewContext from '../shared/hooks/useNoteViewContext';
import styles from './aside.module.css';
import Collaborators from './collaborators/collaborators';
import Comments from './comments/comments';

type AsideTypes = {
  activePanel: 'comments' | 'collaborators' | '';
};

const Aside = () => {
  // @ts-ignore
  const { activePanel }: AsideTypes = useNoteViewContext();

  return (
    <>
      <div className={styles.aside + getClassName(activePanel, styles.active)}>
        {activePanel === 'comments' && <Comments />}
        {activePanel === 'collaborators' && <Collaborators />}
      </div>
    </>
  );
};

export default Aside;
