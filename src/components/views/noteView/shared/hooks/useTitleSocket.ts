/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import DataProps from 'types/data';

const useTitleSocket = (socket: Socket, currentNote: DataProps) => {
  const [title, setTitle] = useState<string>('');

  // Update title with note title
  useEffect(() => {
    if (!currentNote) return;
    setTitle(currentNote?.title);
  }, [currentNote]);

  const saveAndBroadcastTitle = () => {
    socket.emit('update-title', title);
  };

  // Receive Changes
  useEffect(() => {
    if (!currentNote) return;

    const handler = (newTitle: string) => {
      setTitle(newTitle);
    };

    socket.on('receive-title', handler);

    return () => {
      socket.off('receive-title', handler);
    };
  }, [currentNote, socket]);

  return { title, setTitle, saveAndBroadcastTitle };
};

export default useTitleSocket;
