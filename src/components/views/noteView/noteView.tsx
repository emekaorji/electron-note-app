import NoteViewProvider from './shared/provider/noteViewProvider';
import Main from './main/main';
import styles from './noteView.module.css';
import Aside from './aside/aside';

const NoteViewContent = () => {
  return (
    <div className={styles.noteView}>
      <Main />
      <Aside />
    </div>
  );
};

const NoteView = () => {
  return (
    <>
      <NoteViewProvider>
        <NoteViewContent />
      </NoteViewProvider>
    </>
  );
};

export default NoteView;
