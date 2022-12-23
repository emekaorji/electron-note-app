import NoteCard from './noteCard/noteCard';
import styles from './notePreview.module.css';
import NotePreviewNav from './notePreviewNav/notePreviewNav';

const NotePreview = () => {
  return (
    <>
      <div className={styles.previewContainer}>
        <NotePreviewNav />
        <div className={styles.cardsContainer}>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </>
  );
};

export default NotePreview;
