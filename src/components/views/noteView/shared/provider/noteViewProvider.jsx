/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import useDataContext from 'hooks/context/useDataContext';
import React, { createContext } from 'react';
import { useParams } from 'react-router';
import useFetchNote from '../hooks/useFetchNote';

const NoteViewContext = createContext({});

const NoteViewProvider = ({ children }) => {
  const { noteId } = useParams();
  const { socket } = useDataContext();

  const currentNote = useFetchNote(socket, noteId);

  console.log(noteId);
  console.log(currentNote);

  return (
    <>
      <NoteViewContext.Provider value={{ currentNote }}>
        {children}
      </NoteViewContext.Provider>
    </>
  );
};

export { NoteViewContext };
export default NoteViewProvider;
