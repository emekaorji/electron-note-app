import { SetStateAction, useEffect, useState } from 'react';
import DataProps from 'types/data';
import { Socket } from 'socket.io-client';

const useFetchNote = (socket: Socket, noteId: string) => {
  const [currentNote, setCurrentNote] = useState<DataProps | null>(null);

  // Fetch Single note from the server
  useEffect(() => {
    if (socket == null) return;

    socket.emit('get-note', noteId);

    socket.once('load-note', (note: SetStateAction<DataProps | null>) => {
      setCurrentNote(note);
    });
  }, [socket, noteId]);

  return currentNote;
};

export default useFetchNote;
