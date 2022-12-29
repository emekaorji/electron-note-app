import styles from './noteView.module.css';
import Editor from './editor/editor';
import Header from './header/header';
import Footer from './footer/footer';
import NoteViewProvider from './shared/provider/noteViewProvider';

const NoteViewContent = () => {
  return (
    <div className={styles.noteView}>
      <Header />
      <Editor />
      <Footer />
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
