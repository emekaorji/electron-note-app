import SecondaryButton from 'components/reusables/buttons/secondaryButton/secondaryButton';
import SmallButton from 'components/reusables/buttons/smallButton/smallButton';
import CommentIcon from 'components/reusables/icons/comment';
import Image from 'components/reusables/images/image';
import useNoteViewContext from 'components/views/noteView/shared/hooks/useNoteViewContext';
import getClassName from 'functions/getClassName';
import { useState } from 'react';
import DataProps from 'types/data';
import styles from './controls.module.css';

const Controls = ({
  collaborators,
}: {
  collaborators: DataProps['collaborators'] | undefined;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // @ts-ignore
  const { toggleComments } = useNoteViewContext();

  return (
    <>
      <div className={styles.controls} onMouseLeave={() => setIsHovered(false)}>
        <SmallButton
          icon={<CommentIcon />}
          className={styles.comments}
          title="Comments"
          onClick={toggleComments}
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
          {collaborators?.map((collaborator) => (
            <Image
              key={collaborator?.id}
              className={styles.image}
              src={collaborator?.image}
            />
          ))}
        </SecondaryButton>
      </div>
    </>
  );
};

export default Controls;
