import BadgeButton from 'components/reusables/buttons/badgeButton/badgeButton';
// import SecondaryButton from 'components/reusables/buttons/secondaryButton/secondaryButton';
import { Link } from 'react-router-dom';
import getFormattedDate from 'functions/getFormattedDate';
import ellipsify from 'functions/ellipsify';
import getFormattedTime from 'functions/getFormattedTime';
import colors from 'data/colors';
import DataProps from 'types/data';
// import Image from 'components/reusables/images/image';
import Quill from 'quill';
import { useMemo } from 'react';
import styles from './noteCard.module.css';

type NoteCardProps = {
  data: DataProps;
};

const NoteCard = ({
  data: { _id, title, content, labels, updatedAt },
}: NoteCardProps) => {
  const textContent = useMemo(() => {
    const editor = document.createElement('div');
    const q = new Quill(editor);
    q.setContents(content);

    return q.getText(0, 400);
  }, [content]);

  return (
    <>
      <Link className={styles.card} to={_id} title={title}>
        <div className={styles.layer1}>
          <h5>{title}</h5>
          <div className={styles.badgesContainer}>
            {labels.map((label) => (
              <BadgeButton
                key={label.name}
                color={colors[label.color]}
                title={label.name}
              />
            ))}
          </div>
        </div>
        <div className={styles.layer2}>{ellipsify(textContent, 200)}</div>
        <div className={styles.layer3}>
          {/* <div className={styles.collaborators}>
            <SecondaryButton
              transparent
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              title="Collaborators"
            >
              {collaborators.map((collaborator) => (
                <Image
                  key={collaborator?.id}
                  className={styles.image}
                  src={collaborator?.image}
                />
              ))}
            </SecondaryButton>
          </div> */}
          <div className={styles.time}>
            {getFormattedTime(updatedAt, 'h:mm P')} •{' '}
            {getFormattedDate(updatedAt, 'Mmm Dth, YYYY')}
          </div>
        </div>
      </Link>
    </>
  );
};

export default NoteCard;
