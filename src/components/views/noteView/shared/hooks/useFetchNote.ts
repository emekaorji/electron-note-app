/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import DataProps, { CommentsProps, NoteProps } from 'types/data';
import { Socket } from 'socket.io-client';

const useFetchNote = (socket: Socket, noteId: string) => {
  const [currentNote, setCurrentNote] = useState<DataProps | null>(null);
  const [noteComments, setNoteComments] = useState<CommentsProps | null>(null);

  // Fetch Single note from the server
  useEffect(() => {
    if (socket == null) return;

    socket.emit('get-note', noteId);

    socket.once('load-note', (note: NoteProps) => {
      setCurrentNote(note);
      setNoteComments({ _id: note._id, comments: note.comments });
    });
  }, [socket, noteId]);

  return [currentNote, setCurrentNote, noteComments, setNoteComments];
};

export default useFetchNote;
