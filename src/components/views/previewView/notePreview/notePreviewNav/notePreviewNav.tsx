import SearchIcon from 'components/reusables/icons/search';
import PrimaryInput from 'components/reusables/inputs/primaryInput/primaryInput';
import styles from './notePreviewNav.module.css';

const NotePreviewNav = (): JSX.Element => {
  return (
    <>
      <div className={styles.nav}>
        <PrimaryInput icon={<SearchIcon />} />
      </div>
    </>
  );
};

export default NotePreviewNav;
