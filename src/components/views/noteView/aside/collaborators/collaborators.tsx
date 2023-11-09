import SmallButton from 'components/reusables/buttons/smallButton/smallButton';
import XMarkIcon from 'components/reusables/icons/xMark';
import useNoteViewContext from '../../shared/hooks/useNoteViewContext';
import styles from './collaborators.module.css';

const Collaborators = () => {
  // @ts-ignore
  const { toggleCollaborators } = useNoteViewContext();

  return (
    <>
      <div className={styles.collaborators}>
        <div className={styles.header}>
          <h2>Collaborators</h2>
          <SmallButton icon={<XMarkIcon />} onClick={toggleCollaborators} />
        </div>
      </div>
    </>
  );
};

export default Collaborators;
