import { useParams } from 'react-router-dom';
import colors from 'data/colors';
import DataProps from 'types/data';
import SecondaryButton from 'components/reusables/buttons/secondaryButton/secondaryButton';
import Image from 'components/reusables/images/image';
import SmallButton from 'components/reusables/buttons/smallButton/smallButton';
import CommentIcon from 'components/reusables/icons/comment';
import LargeBadgeButton from 'components/reusables/buttons/largeBadgeButton/largeBadgeButton';
import { useState } from 'react';
import getClassName from 'functions/getClassName';
import styles from './noteView.module.css';
import data from '../../../data/notes.json';
import Title from './title/title';

const NoteView = () => {
  const { noteId } = useParams();
  const currentNote: DataProps | undefined = data.find(
    (note) => note.id === noteId
  );

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.noteView}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.labels}>
            {currentNote?.labels.map((label) => (
              <LargeBadgeButton
                key={label.name}
                color={colors[label.color]}
                title={label.name}
              />
            ))}
          </div>
          <Title title={currentNote?.title} />
        </div>
        <div
          className={styles.controls}
          onMouseLeave={() => setIsHovered(false)}
        >
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
            onMouseOver={() => setIsHovered(true)}
            className={
              styles.collaborators + getClassName(isHovered, styles.hovered)
            }
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
