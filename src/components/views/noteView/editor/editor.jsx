/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import 'quill/dist/quill.bubble.css';
import useDataContext from 'hooks/context/useDataContext';
import styles from './editor.module.css';
import useNoteViewContext from '../shared/hooks/useNoteViewContext';
import useEditorSocket from '../shared/hooks/useEditorSocket';

const Editor = () => {
  const { socket } = useDataContext();
  const { currentNote } = useNoteViewContext();

  const { editorWrapperRef } = useEditorSocket(socket, currentNote);

  return (
    <>
      <div
        id="editorWrapper"
        className={styles.editorWrapper}
        ref={editorWrapperRef}
      >
        Editor
      </div>
    </>
  );
};

export default Editor;
