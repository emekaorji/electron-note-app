import { useParams } from 'react-router-dom';
import colors from 'data/colors';
import DataProps from 'types/data';
import SecondaryButton from 'components/reusables/buttons/secondaryButton/secondaryButton';
import Image from 'components/reusables/images/image';
import SmallButton from 'components/reusables/buttons/smallButton/smallButton';
import CommentIcon from 'components/reusables/icons/comment';
import LargeBadgeButton from 'components/reusables/buttons/largeBadgeButton/largeBadgeButton';
import SecondaryInput from 'components/reusables/inputs/secondaryInput/secondaryInput';
import React, { useEffect, useState } from 'react';
import styles from './noteView.module.css';
import data from '../../../data/notes.json';

const NoteView = () => {
  const { noteId } = useParams();
  const currentNote: DataProps | undefined = data.find(
    (note) => note.id === noteId
  );

  const [title, setTitle] = useState(currentNote?.title);
  const [isEditing, setIsEditing] = useState(false);
  const [size, setSize] = useState(2.5);

  const saveTitle = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    setIsEditing(false);
  };

  const editTitle = async () => {
    await setIsEditing(true);
    document.getElementById('title')?.focus();
  };

  useEffect(() => {
    const len = title?.length;
    if (!len) return;
    if (len > 40) {
      setSize(1.7);
      return;
    }
    if (len > 36) {
      setSize(1.8);
      return;
    }
    if (len > 32) {
      setSize(1.9);
      return;
    }
    if (len > 28) {
      setSize(2);
      return;
    }
    if (len > 24) {
      setSize(2.1);
      return;
    }
    if (len > 20) {
      setSize(2.2);
      return;
    }
    setSize(2.5);
  }, [title?.length]);

  return (
    <div className={styles.noteView}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.labels}>
            {currentNote?.labels.map((label) => (
              <LargeBadgeButton
                key={label.name}
                color={colors[label.color]}
                title={label.name}
              />
            ))}
          </div>
          <form
            onSubmit={saveTitle}
            style={{ '--size': `${size}em` } as React.CSSProperties}
          >
            {isEditing ? (
              <SecondaryInput
                value={title}
                onChange={(e) => setTitle(e?.target.value)}
                onBlur={saveTitle}
                id="title"
                transparent
              />
            ) : (
              <h1 onClick={editTitle} aria-hidden="true">
                {title || 'No title'}
              </h1>
            )}
          </form>
        </div>
        <div className={styles.controls}>
          <SmallButton
            icon={<CommentIcon />}
            className={styles.comments}
            title="Comments"
          />
          <SecondaryButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            className={styles.collaborators}
            title="Collaborators"
          >
            {currentNote?.collaborators.map((collaborator) => (
              <Image
                key={collaborator?.id}
                className={styles.image}
                src={collaborator?.image}
              />
            ))}
          </SecondaryButton>
        </div>
      </div>
      <div className={styles.body} />
    </div>
  );
};

export default NoteView;
