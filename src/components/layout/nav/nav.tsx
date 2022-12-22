import IconButton from 'components/reusables/buttons/iconButton/iconButton';
import PrimaryButton from 'components/reusables/buttons/primaryButton/primaryButton';
import CalendarPenIcon from 'components/reusables/icons/calendarPen';
import NoteIcon from 'components/reusables/icons/note';
import getClassName from 'functions/getClassName';
import { useState } from 'react';
import styles from './nav.module.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <div className={styles.nav + getClassName(isOpen, styles.isOpen)}>
        <button className={styles.hamburger} type="button" onClick={toggleNav}>
          <div className={`${styles.bar} ${styles.bar1}`} />
          <div className={`${styles.bar} ${styles.bar2}`} />
          <div className={`${styles.bar} ${styles.bar3}`} />
        </button>
        <div className={styles.navbuttons}>
          <PrimaryButton icon={<CalendarPenIcon />}>Calendar</PrimaryButton>
          <PrimaryButton icon={<NoteIcon />}>Notes</PrimaryButton>
        </div>
        <IconButton
          className={styles.profileButton}
          icon={<img src="https://picsum.photos/id/59/100" alt="EO" />}
        />
      </div>
    </>
  );
};

export default Nav;
