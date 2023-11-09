import { useContext } from 'react';
import { NoteViewContext } from '../provider/noteViewProvider';

const useNoteViewContext = () => useContext(NoteViewContext);

export default useNoteViewContext;
