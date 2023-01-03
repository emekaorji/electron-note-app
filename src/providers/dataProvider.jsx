/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import useAuthContext from 'hooks/context/useAuthContext';
import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const { socket } = useAuthContext();
  const [allNotes, setAllNotes] = useState([]);

  // console.log(allNotes);

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
      <DataContext.Provider value={{ socket, allNotes }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export { DataContext };
export default DataProvider;
