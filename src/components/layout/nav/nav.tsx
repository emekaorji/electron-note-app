import SmallButton from 'components/reusables/buttons/smallButton/smallButton';
import CalendarPenIcon from 'components/reusables/icons/calendarPen';
import NoteIcon from 'components/reusables/icons/note';
import PrimaryLink from 'components/reusables/links/primaryLink/primaryLink';
import getClassName from 'functions/getClassName';
import { useState } from 'react';
import styles from './nav.module.css';
import profileImage from '../../../../assets/images/profile.jpeg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  // const closeNav = () => setIsOpen(false);

  const toggleThemeMode = () => {
    document.body.classList.toggle('light');
  };

  return (
    <>
      <div className={styles.nav + getClassName(isOpen, styles.isOpen)}>
        <SmallButton
          className={styles.hamburger}
          onClick={toggleNav}
          icon={
            <>
              <div className={`${styles.bar} ${styles.bar1}`} />
              <div className={`${styles.bar} ${styles.bar2}`} />
              <div className={`${styles.bar} ${styles.bar3}`} />
            </>
          }
        />
        <div className={styles.navbuttons}>
          <PrimaryLink
            href="/calendar"
            icon={<CalendarPenIcon />}
            iconClassName={styles.buttonIcons}
            preserveIcon
          >
            Calendar
          </PrimaryLink>
          <PrimaryLink
            href="/notes"
            icon={<NoteIcon />}
            iconClassName={styles.buttonIcons}
            preserveIcon
          >
            Notes
          </PrimaryLink>
        </div>
        <SmallButton
          className={styles.profileButton}
          onClick={toggleThemeMode}
          icon={<img src={profileImage} alt="EO" />}
        />
      </div>
    </>
  );
};

export default Nav;
