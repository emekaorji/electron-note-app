/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const [error, setError] = useState(false);
  const [activeNote, setActiveNote] = useState(undefined);
  const [allNotes, setAllNotes] = useState([]);

  const handleErrors = useCallback((err) => {
    if (err.message === 'xhr poll error') {
      setError(true);
    }
  }, []);

  console.log(allNotes);

  // Connect to server
  useEffect(() => {
    const s = io('http://localhost:3001');
    s.on('connect_error', (err) => handleErrors(err));
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [activeNote, handleErrors]);

  // Fetch all notes from the server
  useEffect(() => {
    if (socket == null) return;

    socket.once('notes-loaded', (notes) => {
      setAllNotes(notes);
    });

    socket.emit('get-notes');
  }, [socket]);

  return (
    <>
      <DataContext.Provider value={{ setActiveNote, socket, error, allNotes }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export { DataContext };
export default DataProvider;
