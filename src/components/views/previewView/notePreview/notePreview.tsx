/* eslint-disable no-underscore-dangle */
import useDataContext from 'hooks/context/useDataContext';
import DataProps from 'types/data';
import NoteCard from './noteCard/noteCard';
import styles from './notePreview.module.css';
import NotePreviewNav from './notePreviewNav/notePreviewNav';

const NotePreview = () => {
  // @ts-ignore
  const { allNotes } = useDataContext();

  return (
    <>
      <div className={styles.previewContainer}>
        <NotePreviewNav />
        <div className={styles.cardsContainer}>
          {allNotes.map((note: DataProps) => (
            <NoteCard key={note?._id} data={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NotePreview;
