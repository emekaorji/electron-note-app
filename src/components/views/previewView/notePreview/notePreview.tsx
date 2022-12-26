import NoteCard from './noteCard/noteCard';
import styles from './notePreview.module.css';
import NotePreviewNav from './notePreviewNav/notePreviewNav';
import notes from '../../../../data/notes.json';

const NotePreview = () => {
  return (
    <>
      <div className={styles.previewContainer}>
        <NotePreviewNav />
        <div className={styles.cardsContainer}>
          {notes.map((note) => (
            <NoteCard key={note?.id} data={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NotePreview;
