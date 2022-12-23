import BadgeButton from 'components/reusables/buttons/badgeButton/badgeButton';
import SecondaryButton from 'components/reusables/buttons/secondaryButton/secondaryButton';
import getClassName from 'functions/getClassName';
// import SmallButton from 'components/reusables/buttons/smallButton/smallButton';
import { Link } from 'react-router-dom';
import getDateFormat from 'functions/getFormattedDate';
import ellipsify from 'functions/ellipsify';
import styles from './noteCard.module.css';
import Collab1 from '../../../../../../assets/images/collab-1.jpeg';
import Collab2 from '../../../../../../assets/images/collab-2.jpeg';
import Collab3 from '../../../../../../assets/images/collab-3.jpeg';

const Image = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <>
      <div className={styles.imageContainer + getClassName(className)}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

const NoteCard = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus esse labore non rem corporis officiis optio! Facere veritatis rerum accusantium, ut, sed explicabo earum labore vero fugit dicta cum adipisci?';
  const time = '09:00 AM';
  const date = new Date();

  return (
    <>
      <Link className={styles.card} to="./awesomeNote" title="awesomeNote">
        <div className={styles.layer1}>
          <h5>NO TITLE</h5>
          <div className={styles.badgesContainer}>
            <BadgeButton color="#778491" title="Default badge" />
          </div>
        </div>
        <div className={styles.layer2}>{ellipsify(text, 200)}</div>
        <div className={styles.layer3}>
          <div className={styles.collaborators}>
            <SecondaryButton
              transparent
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              title="Collaborators"
            >
              <Image className={styles.image} src={Collab1} />
              <Image className={styles.image} src={Collab2} />
              <Image className={styles.image} src={Collab3} />
            </SecondaryButton>
          </div>
          <div className={styles.time}>
            {time} • {getDateFormat(date)}
          </div>
        </div>
      </Link>
    </>
  );
};

export default NoteCard;
