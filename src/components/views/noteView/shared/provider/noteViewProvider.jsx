/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import useDataContext from 'hooks/context/useDataContext';
import React, { createContext, useState } from 'react';
import { useParams } from 'react-router';
import useFetchNote from '../hooks/useFetchNote';

const NoteViewContext = createContext({});

// type ActivePanel = 'comments' | 'collaborators' | '';

const NoteViewProvider = ({ children }) => {
  const { noteId } = useParams();
  const { socket } = useDataContext();
  const [currentNote, setCurrentNote, noteComments, setNoteComments] =
    useFetchNote(socket, noteId);

  const [activePanel, setActivePanel] = useState('');

  const toggleComments = () => {
    if (activePanel === 'comments') {
      setActivePanel('');
    } else {
      setActivePanel('comments');
    }
  };

  const toggleCollaborators = () => {
    if (activePanel === 'collaborators') {
      setActivePanel('');
    } else {
      setActivePanel('collaborators');
    }
  };

  console.log(noteComments);

  return (
    <>
      <NoteViewContext.Provider
        value={{
          currentNote,
          setCurrentNote,
          noteComments,
          setNoteComments,
          activePanel,
          toggleComments,
          toggleCollaborators,
        }}
      >
        {children}
      </NoteViewContext.Provider>
    </>
  );
};

export { NoteViewContext };
export default NoteViewProvider;
